import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Bot, BrainCircuit, CheckCircle2, Zap } from 'lucide-react';

const SimilaritiesSection = () => {
  const commonTraits = [
    {
      name: "Supply Chain Expertise",
      description: "All AI systems identified Waqas as having significant experience and expertise in supply chain management and consulting.",
      icon: <Bot className="w-6 h-6 text-blue-400" />,
    },
    {
      name: "Educational Background",
      description: "Multiple AI systems mentioned Waqas's educational background from B.S.A Crescent University or Crescent University in Chennai.",
      icon: <BrainCircuit className="w-6 h-6 text-purple-400" />,
    },
    {
      name: "Consultant Role",
      description: "There's consensus about Waqas working as a consultant, with specific mentions of supply chain consulting.",
      icon: <CheckCircle2 className="w-6 h-6 text-green-400" />,
    },
    {
      name: "Technical Background",
      description: "Several AI systems noted Waqas's technical background, with mentions of electrical engineering or technology expertise.",
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
    },
  ];

  const consensusData = [
    { name: 'Supply Chain Expert', value: 100, color: '#3B82F6' },
    { name: 'Consultant', value: 100, color: '#8B5CF6' },
    { name: 'Indian Origin', value: 75, color: '#EC4899' },
    { name: 'B.S.A Crescent Grad', value: 75, color: '#10B981' },
    { name: 'Technical Background', value: 75, color: '#F59E0B' },
    { name: 'Online Presence', value: 50, color: '#6366F1' },
    { name: 'Blogger', value: 50, color: '#EF4444' },
    { name: 'Accenture Employee', value: 25, color: '#14B8A6' },
  ];

  return (
    <section id="ai-consensus" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent opacity-40"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            AI Consensus About Waqas
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            While each AI has its unique perspective, there are key areas where they agree
            about Waqas's background and expertise.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Common Identifiers</h3>
            
            <div className="space-y-6">
              {commonTraits.map((trait, index) => (
                <motion.div 
                  key={trait.name}
                  className="flex gap-4 p-5 rounded-xl bg-gray-800/40 border border-gray-700 shadow-lg backdrop-blur-sm hover:bg-gray-800/60 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="rounded-full bg-gray-900 p-3">{trait.icon}</div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">{trait.name}</h4>
                    <p className="text-gray-300">{trait.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="h-[450px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">AI Agreement Level</h3>
            <motion.div 
              className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg h-full"
              whileHover={{ y: -5 }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={consensusData}
                  margin={{ top: 20, right: 20, left: 40, bottom: 20 }}
                >
                  <XAxis 
                    type="number" 
                    domain={[0, 100]} 
                    tickCount={5} 
                    tick={{ fill: '#CBD5E1' }} 
                    axisLine={{ stroke: '#475569' }}
                    tickLine={{ stroke: '#475569' }}
                  />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    scale="band" 
                    width={150}
                    tick={{ fill: '#CBD5E1', fontSize: 13 }}
                    axisLine={{ stroke: '#475569' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      borderColor: '#475569',
                      borderRadius: '0.5rem',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
                    }}
                    formatter={(value) => [`${value}% of AIs mention this`, 'Agreement']}
                    cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}
                  />
                  <Bar 
                    dataKey="value" 
                    radius={[0, 6, 6, 0]} 
                    barSize={20}
                    animationDuration={1500}
                  >
                    {consensusData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color} 
                        fillOpacity={0.9} 
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SimilaritiesSection;
