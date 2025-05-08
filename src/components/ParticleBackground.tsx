
import React, { useCallback, useEffect } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

const ParticleBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Initializing tsparticles engine");
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    console.log("ParticleBackground component mounted");
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="w-full h-full"
      options={{
        fpsLimit: 60,
        fullScreen: {
          enable: false,
          zIndex: -1
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
              parallax: {
                enable: true,
                force: 60,
                smooth: 10
              }
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 150,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ["#ffffff", "#9b87f5", "#7E69AB", "#33C3F0", "#1EAEDB"],
          },
          links: {
            color: "#9b87f5",
            distance: 150,
            enable: true,
            opacity: 0.7,
            width: 1.5,
            triangles: {
              enable: false,
              opacity: 0.1
            }
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 120, // Increased number of particles for better visibility
          },
          opacity: {
            value: 0.9, // Increased opacity for better visibility
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
        background: {
          color: {
            value: "transparent"
          },
          opacity: 0,
        },
      }}
    />
  );
};

export default ParticleBackground;
