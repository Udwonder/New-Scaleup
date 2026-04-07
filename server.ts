import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import Stripe from "stripe";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Initialize Stripe with secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

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

  // Stripe checkout session
  app.post("/api/create-checkout-session", async (req, res) => {
    try {
      const { amount, currency } = req.body;
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: currency.toLowerCase(),
              product_data: {
                name: 'Donation to Scaleup Foundation',
              },
              unit_amount: amount * 100, // Stripe expects amount in cents
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${process.env.APP_URL}/donate?success=true`,
        cancel_url: `${process.env.APP_URL}/donate?canceled=true`,
      });
      res.json({ id: session.id });
    } catch (error) {
      console.error("Stripe error:", error);
      res.status(500).json({ error: "Failed to create checkout session" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
