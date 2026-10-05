import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.post("/api/contact", (req, res) => {
    const { firstName, lastName, email, subject, message } = req.body;
    console.log("Contact form submission:", { firstName, lastName, email, subject, message });
    res.json({ success: true, message: "Message received!" });
  });

  // Vite middleware for development
  let vite: any;
  if (process.env.NODE_ENV !== "production") {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
  }

  app.get('*', async (req, res) => {
    const url = req.originalUrl;
    let template: string;
    
    if (process.env.NODE_ENV !== "production") {
      template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
    } else {
      template = fs.readFileSync(path.resolve(__dirname, 'dist/index.html'), 'utf-8');
    }

    res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
