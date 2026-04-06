import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';
import { BlogCarousel } from '../components/BlogCarousel';
import { Skeleton } from '../components/ui/Skeleton';

const blogPosts = [
  {
    id: 1,
    title: "Why Every Business Needs a Website",
    images: ["https://i.imgur.com/rCvQc3R.jpeg", "https://i.imgur.com/K6OUPZt.jpeg"],
    content: [
      "In today's digital world, a business without a website is essentially invisible. Think of your website as your 24/7 storefront. It builds credibility, expands your reach far beyond your local neighborhood, and serves as a central hub where customers can learn about what you offer. A website is no longer just an option; it is a fundamental requirement for building trust and growing your business.",
      "When people hear about a new company, the first thing they do is search online. If they cannot find a professional website, they often become skeptical. Your website is your digital face, and it is usually the first point of contact for potential customers. It is your chance to showcase your brand personality, tell your story, and establish yourself as an authority in your industry.",
      "Beyond credibility, a website offers unmatched accessibility. Unlike a physical store with set hours, your website is open around the clock. Customers can learn about your products, make purchases, or reach out to you whenever it suits them, regardless of their time zone. This level of accessibility is a significant advantage in our global economy.",
      "A website also allows you to reach a much broader audience. You are no longer limited by your physical location. With smart search engine optimization and digital marketing, you can attract customers from across the country or even around the world, opening up new markets that would otherwise be out of reach.",
      "Finally, your website provides invaluable insights. By using tools like Google Analytics, you can see how visitors interact with your site, what they are interested in, and where you can improve. This data helps you make informed decisions, refine your marketing, and grow your business more effectively.",
      "Furthermore, a website serves as a powerful tool for customer support. By including an FAQ section, live chat, or contact forms, you can provide immediate assistance to your customers, reducing the burden on your support team and improving customer satisfaction. This proactive approach to support can significantly enhance your brand reputation.",
      "In addition, a website allows you to showcase your portfolio or case studies. Whether you are a service-based business or a creative professional, having a dedicated space to display your work is crucial for attracting new clients. It provides tangible evidence of your capabilities and helps build trust with potential customers.",
      "Moreover, a website is a platform for content marketing. By regularly publishing blog posts, articles, or videos, you can establish yourself as a thought leader in your industry, attract more traffic to your site, and build a loyal audience. This content-driven approach can significantly enhance your brand visibility and authority.",
      "Finally, your website is an essential component of your overall digital strategy. It integrates with your social media, email marketing, and other digital channels, creating a cohesive brand experience across all platforms. This integration is crucial for maximizing the impact of your marketing efforts and driving business growth.",
      "In conclusion, a website is not just a digital asset; it is a fundamental requirement for success in today's business landscape. It builds credibility, expands your reach, provides unparalleled accessibility, offers invaluable insights, and serves as a central hub for your digital marketing efforts. Investing in a professional website is an investment in the future of your business.",
      "To truly succeed online, you must prioritize user experience. A website that is slow, difficult to navigate, or not mobile-friendly will drive visitors away. Investing in a responsive, fast, and intuitive design is just as important as having a website in the first place.",
      "Moreover, consider the importance of security. A secure website protects your business and your customers' data, building trust and credibility. Implementing SSL certificates and regular security updates is a fundamental aspect of maintaining a professional online presence.",
      "Additionally, think about the role of personalization. A website that can tailor content and recommendations to individual users can significantly enhance the customer experience and drive conversions. This level of personalization is becoming increasingly important in the digital age.",
      "Finally, remember that a website is never truly finished. It requires ongoing maintenance, updates, and optimization to remain effective and relevant. By continuously monitoring performance and making improvements, you can ensure that your website continues to deliver value and drive business growth over the long term.",
      "In summary, a website is a dynamic and essential tool for any business. It requires careful planning, design, and ongoing effort to be truly effective. However, the rewards in terms of credibility, reach, and growth are well worth the investment.",
      "The digital landscape is constantly evolving, and your website must evolve with it. Staying up-to-date with the latest design trends, technologies, and marketing strategies is crucial for maintaining a competitive edge. By embracing change and continuously improving your website, you can ensure that your website remains relevant and successful in the digital age.",
      "Ultimately, a website is a testament to your commitment to your customers and your business. It is a reflection of your brand values and your dedication to providing value. By investing in a high-quality website, you are demonstrating your professionalism and your readiness to engage with customers in the digital world.",
      "So, if you have not yet invested in a website for your business, now is the time to do so. The benefits are clear, and the potential for growth is immense. Don't let your business be invisible in the digital age; take the step and build your online presence today.",
      "Remember, your website is often the first impression you make on potential customers. Make it a good one. A professional, well-designed website can be the difference between a missed opportunity and a loyal customer. Invest in your online presence, and watch your business thrive.",
      "The journey to digital success begins with a website. It is the foundation upon which your online presence is built, and it is the key to unlocking new opportunities for growth and success. Take the first step today, and build a website that truly reflects the value and potential of your business.",
      "In the digital age, your website is your most valuable asset. It is your storefront, your marketing platform, your customer support center, and your brand ambassador. Treat it with the care and attention it deserves, and it will reward you with growth, success, and long-term viability.",
      "Finally, consider the power of storytelling. Your website is the perfect place to share your brand's story, values, and mission. By connecting with your customers on an emotional level, you can build lasting relationships and foster brand loyalty that goes beyond transactions.",
      "In conclusion, a website is not just a technological necessity; it is a strategic imperative for any business looking to succeed in the digital age. It is a powerful tool that can transform your business, expand your reach, and drive growth in ways that were previously unimaginable.",
      "So, embrace the digital world, invest in your online presence, and build a website that truly represents your business. The future of your business depends on it.",
      "Remember, the digital world is full of opportunities for those who are prepared to seize them. A website is your key to unlocking these opportunities and achieving your business goals. Start your journey today, and build a website that will take your business to new heights.",
      "The digital landscape is vast and full of potential. A website is your gateway to this world, and it is the most important tool you have for reaching your audience, building your brand, and driving business growth. Don't wait; start building your online presence today.",
      "In the end, a website is a reflection of your business's identity and its commitment to its customers. It is a vital part of your brand, and it is essential for success in the digital age. Invest in your website, and invest in your future.",
      "The digital age is here, and it is here to stay. A website is your essential tool for navigating this new reality and achieving success. Don't be left behind; embrace the digital world and build your online presence today.",
      "Your website is your digital home. It is where you welcome your customers, share your story, and build your brand. Make it a welcoming, professional, and effective home, and your customers will keep coming back.",
      "Finally, remember that your website is a reflection of your business's values and its commitment to excellence. By investing in a high-quality website, you are demonstrating your dedication to your customers and your business. This is the key to building trust, fostering loyalty, and achieving long-term success.",
      "The digital world is full of possibilities. A website is your key to unlocking these possibilities and achieving your goals. Take the first step today, and build a website that will take your business to new heights.",
      "In the digital age, your website is your most valuable asset. It is your storefront, your marketing platform, your customer support center, and your brand ambassador. Treat it with the care and attention it deserves, and it will reward you with growth, success, and long-term viability."
    ]
  },
  {
    id: 2,
    title: "The Power of Digital Skills",
    images: ["https://i.imgur.com/9zHh6Qe.jpeg", "https://i.imgur.com/1cKMjN7.jpeg"],
    content: [
      "Digital literacy is no longer just a niche skill; it is the new baseline for participating in the modern economy. From basic communication and research to data analysis and content creation, digital skills empower people to access opportunities, solve problems, and adapt to a rapidly changing job market. Everyone, no matter their career path, needs these skills to stay empowered.",
      "In the modern workplace, digital skills are essential for communication and collaboration. Whether it is using project management tools, joining video calls, or sharing files in the cloud, the ability to navigate digital platforms is crucial for teamwork. These tools allow teams to work seamlessly, no matter where they are located.",
      "Digital skills also significantly boost efficiency. By mastering software and digital tools, you can automate routine tasks, streamline your workflow, and focus on more strategic, creative work. This not only saves time but also leads to higher-quality results.",
      "Adaptability is another key benefit. Technology changes constantly, and the ability to learn new tools quickly is a major competitive advantage. Digital literacy fosters a mindset of lifelong learning, helping you stay ahead of the curve and remain relevant in a fast-paced market.",
      "Finally, digital skills provide unprecedented access to information. The internet is a vast repository of knowledge, and the ability to find, evaluate, and use this information effectively is a superpower. Whether you are learning a new skill, finding a job, or starting a business, digital skills are the key to unlocking these possibilities.",
      "Beyond the professional sphere, digital skills are vital for personal growth and empowerment. They enable you to stay connected with friends and family, manage your personal finances, access healthcare services, and engage with your community. In a world that is increasingly digital, these skills are essential for navigating daily life with confidence and ease.",
      "Consider the impact of digital skills on education. Students who are digitally literate have access to a wealth of online resources, can collaborate with peers globally, and develop critical thinking skills that are essential for success in the 21st century. This is not just about using computers; it is about understanding how to use technology to learn, create, and solve problems.",
      "Furthermore, digital skills are crucial for civic participation. From accessing government services to engaging in online discussions and advocating for causes, digital platforms are increasingly important for democratic engagement. By being digitally literate, you can participate more effectively in society and make your voice heard.",
      "The importance of digital skills also extends to financial inclusion. Digital banking, mobile payments, and online marketplaces have revolutionized how we manage money and conduct business. By mastering these tools, individuals can access financial services, participate in the global economy, and improve their economic well-being.",
      "In conclusion, digital skills are not just a luxury; they are a necessity in the modern world. They are the key to unlocking opportunities, fostering innovation, and building a more inclusive and equitable society. By investing in digital literacy, we can empower individuals, strengthen communities, and drive progress in the digital age.",
      "To truly harness the power of digital skills, we must prioritize education and training. Whether it is through formal schooling, vocational training, or self-directed learning, we must provide individuals with the tools and resources they need to succeed in a digital world. This is a collective responsibility that requires the commitment of governments, businesses, and individuals alike.",
      "Moreover, we must foster a culture of lifelong learning. Technology is constantly evolving, and the skills that are relevant today may be obsolete tomorrow. By encouraging a mindset of continuous learning and adaptation, we can ensure that individuals remain relevant and empowered throughout their lives.",
      "Finally, we must ensure that digital skills are accessible to everyone, regardless of their background or circumstances. This means bridging the digital divide, providing affordable access to technology, and creating inclusive learning environments. Only by ensuring that everyone has the opportunity to develop digital skills can we truly realize the full potential of the digital age.",
      "In summary, digital skills are the foundation of success in the 21st century. They are essential for personal growth, professional development, and civic participation. By investing in digital literacy and fostering a culture of lifelong learning, we can empower individuals to thrive in a rapidly changing world and build a brighter future for all.",
      "The digital age is full of potential, and digital skills are your key to unlocking it. Don't wait; start your journey to digital literacy today. The rewards in terms of personal empowerment, professional success, and civic engagement are immense.",
      "Remember, digital skills are not just about using technology; they are about understanding how to use technology to achieve your goals, solve problems, and make a positive impact. By developing these skills, you are not just learning to use a tool; you are learning to shape your own future.",
      "The journey to digital literacy is a lifelong one. It is a journey of discovery, learning, and growth. Embrace the challenge, stay curious, and never stop learning. The digital world is waiting for you.",
      "In the end, digital skills are the most valuable asset you can possess in the modern world. They are the key to unlocking new opportunities, fostering innovation, and building a more inclusive and equitable society. Invest in your digital skills, and invest in your future.",
      "The digital age is here, and it is here to stay. Digital skills are your essential tool for navigating this new reality and achieving success. Don't be left behind; embrace the digital world and build your digital literacy today.",
      "Your digital skills are your passport to the future. They are what will allow you to navigate the complexities of the modern world, seize new opportunities, and achieve your goals. Make them a priority, and you will be well-equipped for the challenges and opportunities that lie ahead.",
      "Finally, remember that digital skills are a collective effort. By sharing knowledge, supporting each other, and working together, we can build a more digitally literate and empowered society. This is the key to progress, innovation, and success in the digital age.",
      "The digital world is full of possibilities. Digital skills are your key to unlocking these possibilities and achieving your goals. Take the first step today, and build the digital skills that will take you to new heights.",
      "In the digital age, your digital skills are your most valuable asset. They are your toolkit for navigating the modern world, seizing new opportunities, and achieving your personal and professional goals. Treat them with the care and attention it deserves, and they will reward you with growth, success, and long-term viability."
    ]
  },
  {
    id: 3,
    title: "Artificial Intelligence: Staying Relevant",
    images: ["https://i.imgur.com/xfB0xkE.jpeg", "https://i.imgur.com/KDDrOzl.jpeg"],
    content: [
      "Artificial Intelligence is transforming how we work, learn, and create. It is not about being replaced by AI, but about leveraging it to enhance our own capabilities. Understanding AI—how to use it, its potential, and its limitations—is crucial for staying relevant. By embracing AI, you can automate routine tasks, unlock new creative possibilities, and make data-driven decisions faster than ever before.",
      "The key to staying relevant in the AI era is to view AI as an augmentation tool, not a replacement. AI can handle repetitive, data-heavy tasks, freeing up humans to focus on what we do best: creative thinking, complex problem-solving, and building relationships. By working alongside AI, you can achieve far more than you could on your own.",
      "Efficiency is perhaps the most immediate benefit. From drafting emails and generating reports to analyzing large datasets and creating content, AI can significantly speed up your workflow. This allows you to reclaim your time and focus on higher-value activities that require human ingenuity.",
      "AI also opens up new horizons for innovation. By using AI-powered tools, you can explore new ideas, experiment with different approaches, and create things that were previously impossible. AI can be a powerful partner in the creative process, helping you push the boundaries of what you can achieve.",
      "Finally, AI enables data-driven decision-making. By analyzing vast amounts of information in real-time, AI can provide insights and recommendations that help you make smarter, more informed choices. This is a game-changer for businesses and individuals alike, enabling you to navigate complex situations with greater confidence and precision.",
      "Beyond efficiency and innovation, AI is also driving progress in fields as diverse as healthcare, education, and environmental sustainability. From personalized medicine and adaptive learning platforms to climate modeling and resource optimization, AI is being used to solve some of the most pressing challenges of our time. Understanding how AI is being applied in your field can help you anticipate trends and stay ahead of the curve.",
      "However, it is important to be aware of the ethical considerations surrounding AI. From bias and transparency to privacy and security, there are important questions that need to be addressed as we continue to develop and deploy AI technologies. By staying informed and engaged, you can help ensure that AI is developed and used in a responsible and ethical manner.",
      "Furthermore, AI is fundamentally changing the job market. While some roles may be automated, new roles are also being created that require a mix of technical, creative, and interpersonal skills. By proactively developing your skills and staying adaptable, you can position yourself to thrive in this new landscape.",
      "Consider the importance of AI literacy. Just as digital literacy was crucial in the past, AI literacy is becoming essential for navigating the future. This means understanding the basics of how AI works, its capabilities, and its limitations. By becoming AI-literate, you can make more informed decisions about how to use AI in your personal and professional life.",
      "In conclusion, AI is a powerful force that is shaping the future of work, learning, and creativity. By embracing AI, staying informed, and proactively developing your skills, you can harness its power to enhance your own capabilities and achieve your goals. The future belongs to those who are prepared to work alongside AI and leverage its potential to create a better world.",
      "To truly thrive in the AI era, we must foster a culture of curiosity and experimentation. Don't be afraid to try new AI tools, explore different applications, and push the boundaries of what you can achieve. The more you experiment, the more you will learn about the potential and limitations of AI, and the more effective you will become at using it.",
      "Moreover, we must prioritize human-centric design in AI development. AI should be designed to serve human needs, enhance human capabilities, and promote human well-being. By advocating for responsible AI development, we can ensure that AI technologies are used to create a more inclusive, equitable, and prosperous future for all.",
      "Finally, remember that AI is a tool, not a solution in itself. It is the human ingenuity, creativity, and values that we bring to the table that will ultimately determine the impact of AI. By focusing on what makes us human—our ability to connect, empathize, and innovate—we can ensure that AI remains a powerful partner in our journey to build a better future.",
      "In summary, AI is a transformative force that is reshaping our world. It offers unprecedented opportunities for growth, innovation, and progress. By embracing AI, staying informed, and focusing on human-centric values, we can harness its power to create a brighter, more prosperous future for everyone.",
      "The AI era is here, and it is full of potential. Don't wait; start your journey to AI literacy today. The rewards in terms of personal growth, professional success, and the ability to make a positive impact are immense.",
      "Remember, AI is not just about technology; it is about empowerment. By understanding and leveraging AI, you are not just learning to use a new tool; you are learning to shape the future of your own work, learning, and creativity.",
      "The journey to AI literacy is a lifelong one. It is a journey of discovery, learning, and growth. Embrace the challenge, stay curious, and never stop learning. The future of AI is waiting for you.",
      "In the end, AI is the most powerful tool you have for navigating the future. It is the key to unlocking new opportunities, fostering innovation, and building a more inclusive and equitable society. Invest in your AI literacy, and invest in your future.",
      "The AI era is here, and it is here to stay. AI is your essential tool for navigating this new reality and achieving success. Don't be left behind; embrace the digital world and build your AI literacy today.",
      "Your AI literacy is your passport to the future. It is what will allow you to navigate the complexities of the modern world, seize new opportunities, and achieve your goals. Make it a priority, and you will be well-equipped for the challenges and opportunities that lie ahead.",
      "Finally, remember that AI is a collective effort. By sharing knowledge, supporting each other, and working together, we can build a more AI-literate and empowered society. This is the key to progress, innovation, and success in the AI era.",
      "The AI world is full of possibilities. AI literacy is your key to unlocking these possibilities and achieving your goals. Take the first step today, and build the AI literacy that will take you to new heights.",
      "In the AI era, your AI literacy is your most valuable asset. It is your toolkit for navigating the modern world, seizing new opportunities, and achieving your personal and professional goals. Treat it with the care and attention it deserves, and it will reward you with growth, success, and long-term viability."
    ]
  }
];

export function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.some(paragraph => paragraph.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="pt-32 pb-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-brand-blue dark:text-white mb-12 text-center"
        >
          Let's Deep Dive
        </motion.h1>

        <BlogCarousel posts={blogPosts} />

        <div className="relative mb-12">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-green transition-all"
          />
        </div>

        <div className="space-y-24">
          {isLoading ? (
             Array.from({ length: 2 }).map((_, index) => (
                <div key={index} className="space-y-4">
                  <Skeleton className="w-3/4 h-8" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Skeleton className="w-full h-64" />
                    <Skeleton className="w-full h-64" />
                  </div>
                  <Skeleton className="w-full h-4" />
                  <Skeleton className="w-full h-4" />
                  <Skeleton className="w-1/2 h-4" />
                </div>
             ))
          ) : filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <article key={post.id}>
                <h2 className="text-3xl font-bold text-brand-blue dark:text-white mb-4">{post.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {post.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${post.title} - Image ${index + 1}`}
                      className="w-full h-64 object-cover rounded-lg"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  ))}
                </div>
                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed space-y-4">
                  {post.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))
          ) : (
            <p className="text-center text-slate-500 dark:text-slate-400 text-lg">No blog posts found matching your search.</p>
          )}
        </div>
      </div>
    </div>
  );
}