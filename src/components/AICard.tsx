import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

interface AICardProps {
  aiName: string;
  summary: string;
  details: string[];
  logoUrl: string;
  color: string;
  screenshot: string;
  externalUrl?: string;
  externalLinkText?: string;
}

const AICard: React.FC<AICardProps> = ({ 
  aiName, 
  summary, 
  details, 
  logoUrl, 
  color, 
  screenshot,
  externalUrl,
  externalLinkText 
}) => {
  const [expanded, setExpanded] = useState(false);
  const [screenshotVisible, setScreenshotVisible] = useState(false);
  
  return (
    <motion.div 
      className="rounded-xl overflow-hidden h-full transition-all duration-300"
      whileHover={{ y: -5 }}
      layout
    >
      <div className="border border-gray-800 rounded-xl bg-gray-900/60 backdrop-blur-sm h-full shadow-lg shadow-black/20">
        <div className="p-6 rounded-lg h-full flex flex-col">
          <div className="flex items-center gap-4 mb-6">
            <motion.div 
              className="p-2 rounded-full flex items-center justify-center shadow-md"
              style={{ backgroundColor: color }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <img 
                src={logoUrl} 
                alt={`${aiName} logo`} 
                className="w-8 h-8 object-contain" 
              />
            </motion.div>
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold text-white">{aiName}</h3>
              {externalUrl && (
                <motion.a
                  href={externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-2 rounded-full bg-blue-600/20 hover:bg-blue-600/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <ExternalLink size={16} className="text-blue-400" />
                </motion.a>
              )}
            </div>
          </div>
          
          <p className="text-gray-300 mb-6 text-lg">{summary}</p>
          
          <AnimatePresence>
            {expanded && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="space-y-3 mb-6 text-gray-300 pl-2">
                  {details.map((detail, index) => (
                    <motion.li 
                      key={index}
                      className="flex gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Bot size={18} className="mt-1 min-w-[18px] text-blue-400" />
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  {externalUrl && (
                    <motion.a
                      href={externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
                      whileHover={{ scale: 1.02 }}
                    >
                      <ExternalLink size={16} />
                      <span>{externalLinkText || "External Link"}</span>
                    </motion.a>
                  )}
                  
                  {!screenshotVisible && (
                    <motion.button
                      onClick={() => setScreenshotVisible(true)}
                      className="flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
                      whileHover={{ scale: 1.02 }}
                    >
                      <ExternalLink size={16} />
                      <span>View Screenshot</span>
                    </motion.button>
                  )}
                </div>
                
                <AnimatePresence>
                  {screenshotVisible && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      className="mb-6 overflow-hidden rounded-lg border border-gray-700"
                    >
                      <img 
                        src={screenshot} 
                        alt={`${aiName} analysis screenshot`}
                        className="w-full rounded-lg"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
          
          <motion.button 
            className={`mt-auto py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 font-medium transition-colors ${
              expanded 
                ? 'bg-gray-800 text-white hover:bg-gray-700' 
                : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
            }`}
            onClick={() => {
              setExpanded(!expanded);
              if (!expanded) {
                setScreenshotVisible(false);
              }
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{expanded ? "Show Less" : "Learn More"}</span>
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default AICard;