
import React from 'react';
import { motion } from 'framer-motion';
import AICard from './AICard';
import { ExternalLink } from 'lucide-react';

const AISection = () => {
  const aiPerspectives = [
    {
      aiName: "ChatGPT",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png",
      color: "#10A37F",
      summary: "ChatGPT identifies Mohammed Waqas as an Indian supply chain consultant and tech blogger with expertise in multiple fields.",
      details: [
        "Indian professional with a B.Tech in Electrical & Electronics Engineering who founded tech startup XeuTek.inc during university.",
        "Experienced supply chain consultant working with multinational companies across 50+ countries.",
        "Maintains multiple blogs covering technology, cybersecurity, food, and supply chain management."
      ],
      screenshot: "/lovable-uploads/08176041-7c58-42c2-b499-b43c1f2aea09.png",
      externalUrl: "https://chatgpt.com/share/681a5d14-bf40-8006-8100-ebe7eaa72073",
      externalLinkText: "Hear from GPT"
    },
    {
      aiName: "Grok",
      logoUrl: "/lovable-uploads/fd03fef4-80eb-46d3-ad37-a45266ff55a0.png",
      color: "#6001D2",
      summary: "Grok identifies nsmdwaqas as an Indian blogger and electrical engineer with a B.Tech degree pursuing innovative technology projects.",
      details: [
        "Indian blogger and electrical engineer studying at Crescent University who founded XeuTek.inc.",
        "Maintains a personal blog (nsmdwaqas.blogspot.com) active since 2016 with content on technology and engineering projects.",
        "Shares innovative engineering projects like \"Solar School Bell using IoT Automation\" and \"Electricity Generating Footwear\" on platforms."
      ],
      screenshot: "/lovable-uploads/90f5a6c5-0f82-401f-8088-ae2cf5866ae3.png",
      externalUrl: "https://grok.com/share/bGVnYWN5_57a5d364-6e87-43ed-b467-d3d0e0a201cc",
      externalLinkText: "Hear from Grok"
    },
    {
      aiName: "Gemini",
      logoUrl: "/lovable-uploads/960653c7-1af7-400a-96b1-cc4f8ea7b9ee.png",
      color: "#1A73E8",
      summary: "Gemini identifies nsmdwaqas as a professional with dual expertise in supply chain consulting and technology engineering with online presence.",
      details: [
        "Experienced Supply Chain Consultant working with Fortune Global 500 clients across 50+ countries.",
        "Technology enthusiast sharing engineering projects like \"Smart Water Management\" and \"Robotic Hand Bionics\" on platforms like SlideShare.",
        "Active across multiple online communities including Samsung forums, Amazon reviews, and Instructables with interests in technology innovation."
      ],
      screenshot: "/lovable-uploads/b2edaf92-a236-48f8-b42a-041249610a20.png",
      externalUrl: "https://g.co/gemini/share/a8ae7c41f898",
      externalLinkText: "hear from Gemini"
    },
    {
      aiName: "Perplexity",
      logoUrl: "/lovable-uploads/0f1909ea-f5a9-4fff-ad55-9c1e95fe0233.png",
      color: "#aa00ff",
      summary: "Perplexity identifies Mohammed Waqas as an Indian supply chain innovation specialist and consultant with background in electrical engineering.",
      details: [
        "Supply chain innovation specialist with 5+ years experience in solution design, currently working with Accenture Strategy & Consulting.",
        "Holds a B.Tech in Electrical Engineering and maintains active blogging presence covering technology, food, and business logistics.",
        "Educational content creator sharing insights on topics like globalization and rural marketing through platforms like SlideShare and blog."
      ],
      screenshot: "/lovable-uploads/19e64faf-c6e5-4262-b767-133f1a48f03e.png",
      externalUrl: "https://www.perplexity.ai/search/do-you-know-nsmdwaqas-write-a-8i_i6582R6e3MElC10BvtA",
      externalLinkText: "hear from Perplexity"
    }
  ];
  
  return (
    <section id="ai-opinions" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-40"></div>
      
      <div className="max-w-7xl mx-auto z-10 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            AI Perspectives on Waqas
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Different AI systems have analyzed available data about Waqas. 
            Explore what each one has discovered about his professional life,
            education, and online presence.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aiPerspectives.map((ai, index) => (
            <motion.div 
              key={ai.aiName}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <AICard 
                aiName={ai.aiName}
                summary={ai.summary}
                details={ai.details}
                logoUrl={ai.logoUrl}
                color={ai.color}
                screenshot={ai.screenshot}
                externalUrl={ai.externalUrl}
                externalLinkText={ai.externalLinkText}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISection;
