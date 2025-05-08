
import React, { useEffect, useRef, useState } from 'react';
import { Bot } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  life: number;
  maxLife: number;
  rotation: number;
  type: 'dot' | 'icon';
}

const CursorTrail: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const requestRef = useRef<number>(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previousTimeRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add new particles on mouse move
      if (Math.random() > 0.5) {
        const type = Math.random() > 0.8 ? 'icon' : 'dot';
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          size: type === 'icon' ? 10 : Math.random() * 4 + 2,
          color: type === 'icon' ? '#3B82F6' : '#06B6D4',
          life: 0,
          maxLife: Math.random() * 40 + 20,
          rotation: Math.random() * Math.PI * 2,
          type
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const resizeCanvas = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const animate = (time: number) => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw particles
    particlesRef.current.forEach((particle, index) => {
      particle.life++;
      
      if (particle.life >= particle.maxLife) {
        particlesRef.current.splice(index, 1);
        return;
      }
      
      const lifeRatio = particle.life / particle.maxLife;
      const opacity = 1 - lifeRatio;
      const scale = 1 - lifeRatio * 0.5;
      
      ctx.save();
      ctx.globalAlpha = opacity;
      
      if (particle.type === 'dot') {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      } else {
        // Draw AI-themed symbol (simplified bot icon)
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        ctx.scale(scale, scale);
        
        // Simple circular bot face
        ctx.beginPath();
        ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // "Eyes"
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(-particle.size/3, -particle.size/4, particle.size/4, 0, Math.PI * 2);
        ctx.arc(particle.size/3, -particle.size/4, particle.size/4, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.restore();
    });
    
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      aria-hidden="true"
    />
  );
};

export default CursorTrail;
