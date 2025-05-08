
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CursorEffect: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    const handleLinkHoverIn = () => setCursorVariant("link");
    const handleLinkHoverOut = () => setCursorVariant("default");

    const links = document.querySelectorAll('a, button');
    
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHoverIn);
      link.addEventListener('mouseleave', handleLinkHoverOut);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHoverIn);
        link.removeEventListener('mouseleave', handleLinkHoverOut);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: 0.5,
      scale: 1
    },
    link: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.5,
      opacity: 0.8,
      backgroundColor: "rgba(6, 182, 212, 0.4)", // Using ai-accent color
      mixBlendMode: "lighten" as "lighten"
    }
  };

  // Only show on desktop
  const [isDesktop, setIsDesktop] = useState(false);
  
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    
    return () => {
      window.removeEventListener('resize', checkIsDesktop);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        className="cursor-dot hidden md:block w-8 h-8 rounded-full bg-ai-accent fixed top-0 left-0 pointer-events-none z-50"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", damping: 25, stiffness: 700 }}
      />
      
      <motion.div 
        className="cursor-ring hidden md:block w-32 h-32 rounded-full border border-ai-accent/30 fixed top-0 left-0 pointer-events-none z-40"
        style={{
          x: mousePosition.x - 64,
          y: mousePosition.y - 64
        }}
        transition={{ type: "spring", damping: 50, stiffness: 200 }}
      />
      
      {/* Particles trailing effect */}
      <motion.div 
        className="cursor-particle hidden md:block w-2 h-2 bg-ai-primary rounded-full fixed opacity-0 top-0 left-0 pointer-events-none z-40"
        style={{
          x: mousePosition.x,
          y: mousePosition.y
        }}
        animate={{
          opacity: [0, 0.8, 0],
          scale: [0.5, 1, 0.5],
          y: mousePosition.y + Math.random() * 40 - 20,
          x: mousePosition.x + Math.random() * 40 - 20,
        }}
        transition={{ duration: 1 }}
      />
      
      <motion.div 
        className="cursor-particle hidden md:block w-2 h-2 bg-ai-accent rounded-full fixed opacity-0 top-0 left-0 pointer-events-none z-40"
        style={{
          x: mousePosition.x,
          y: mousePosition.y
        }}
        animate={{
          opacity: [0, 0.8, 0],
          scale: [0.5, 1, 0.5],
          y: mousePosition.y + Math.random() * 40 - 20,
          x: mousePosition.x + Math.random() * 40 - 20,
        }}
        transition={{ duration: 1, delay: 0.2 }}
      />
    </>
  );
};

export default CursorEffect;
