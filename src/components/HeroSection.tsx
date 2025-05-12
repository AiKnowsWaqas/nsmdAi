import React from 'react';
import { motion } from 'framer-motion';
import { Bot, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const animationVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: { repeat: Infinity, duration: 3 }
    }
  };

  return (
    <motion.div 
      className="relative flex flex-col items-center justify-center min-h-screen py-24 pt-32 px-4 overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-gradient-radial opacity-20"></div>
      
      <div className="z-10 flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto">
        <motion.div 
          className="relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Animated Circles */}
          <div className="absolute inset-0 rounded-full">
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                className="absolute inset-0 rounded-full border-2 border-blue-400/40"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  delay: index * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
          
          <div className="relative rounded-full border-2 border-blue-400/60 p-1.5 overflow-hidden shadow-lg shadow-blue-500/20">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full"
              animate={animationVariants.pulse}
            />
            <img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrWB3XrsLROtZv1ezFGW04-YFWGWBFBNOFSK0EAm_pOfgMls3pha8TJxGaHNgJyg-G7G5jXG3fficZkqlpaLS-Fslua7F9xcNCo-mTxSdj6sIDdjz61MGEHd4VCzO4f28UbNwE7nN395CPoqiBDXqaFAYTVzTWv8JHEu2hyZedFGUWvA5MBV1EiNTB81X-/s632/waqas%20graded.jpg" 
              alt="Waqas Profile" 
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover relative z-10"
            />
          </div>
          
          <motion.div 
            className="absolute -bottom-3 -right-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-2 shadow-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Bot size={24} className="text-white" />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="text-center md:text-left max-w-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Meet Waqas
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Through the Eyes of <span className="text-white font-bold">Artificial Intelligence</span>
          </p>
          <p className="text-gray-400 text-lg mb-8">
            Welcome to this AI-powered profile that showcases different AI's perspectives 
            on who Waqas is. Explore what major AI systems have learned about his skills, 
            background, and online presence.
          </p>
          <motion.button 
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 px-8 rounded-full text-white font-medium flex items-center gap-2 mx-auto md:mx-0 shadow-lg shadow-blue-600/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('ai-opinions')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Explore AI Perspectives</span>
            <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;