
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Globe, Twitter, Bot } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, url: "https://github.com/nsmdwaqas", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, url: "https://linkedin.com/in/nsmdwaqas", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, url: "https://twitter.com/nsmdwaqas", label: "Twitter" },
    { icon: <Globe className="w-5 h-5" />, url: "https://nsmdwaqas.github.io", label: "Website" },
  ];

  return (
    <footer className="pt-16 pb-8 px-4 border-t border-gray-800 bg-black/70 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Bot className="h-6 w-6 text-blue-400" />
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                AI's View of Waqas
              </h3>
            </div>
            <p className="text-gray-400 max-w-md">
              An interactive exploration of how different AI systems perceive Mohammed Waqas based on public information.
            </p>
          </motion.div>
          
          <motion.div
            className="flex flex-col items-center md:items-end gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-medium text-white">Connect with Waqas</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={link.label}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-full bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p>© {new Date().getFullYear()} © 2025 Waqas (nsmdwaqas). All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
