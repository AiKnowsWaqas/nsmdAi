
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, Menu, X, Link, MoreHorizontal } from 'lucide-react';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: 'Connect', href: 'https://nsmdwaqas.netlify.app/', external: true },
    { name: 'More', href: 'https://nsmdwaqas.github.io/', external: true },
  ];

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/50 backdrop-blur-md py-2 shadow-md' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center relative z-10">
        <a href="#" className="flex items-center gap-2">
          <Bot className="h-6 w-6 text-white" />
          <span className="font-bold text-xl">nsmdwaqas</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden absolute top-full left-0 right-0 bg-gray-900/80 backdrop-blur-md shadow-md py-4 z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-gray-300 py-2 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default NavBar;
