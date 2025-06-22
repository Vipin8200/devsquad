import React, { useEffect, useRef } from 'react';
// Import your logo - replace with your actual logo path
import DevSquadLogo from '../assets/image/devsquad-logo.png'; // Example path

const DevSquadLoader = ({ isVisible = true, onComplete }) => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const logoRef = useRef(null);
  const particlesRef = useRef([]);
  const progressRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    if (!isVisible) return;

    // Create anime.js-like animations using CSS animations and JavaScript
    const animateLoader = () => {
      // Logo animation sequence
      const logo = logoRef.current;
      if (logo) {
        // Initial scale and rotation
        logo.style.transform = 'scale(0) rotate(-180deg)';
        logo.style.opacity = '0';
        
        setTimeout(() => {
          logo.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
          logo.style.transform = 'scale(1) rotate(0deg)';
          logo.style.opacity = '1';
        }, 300);

        // Pulse effect
        setTimeout(() => {
          logo.style.animation = 'pulse 2s infinite';
        }, 1100);
      }

      // Text animation sequence
      const text = textRef.current;
      if (text) {
        const letters = text.querySelectorAll('.letter');
        letters.forEach((letter, index) => {
          letter.style.transform = 'translateY(100px) rotateX(90deg)';
          letter.style.opacity = '0';
          
          setTimeout(() => {
            letter.style.transition = `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)`;
            letter.style.transform = 'translateY(0) rotateX(0deg)';
            letter.style.opacity = '1';
          }, 800 + index * 100);
        });
      }

      // Progress bar animation
      const progress = progressRef.current;
      if (progress) {
        setTimeout(() => {
          progress.style.transform = 'scaleX(1)';
        }, 1500);
      }

      // Particles animation
      animateParticles();

      // Glow effect
      const glow = glowRef.current;
      if (glow) {
        setTimeout(() => {
          glow.style.opacity = '1';
          glow.style.animation = 'glow 3s ease-in-out infinite alternate';
        }, 1000);
      }

      // Auto complete after animation
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 4000);
    };

    const animateParticles = () => {
      particlesRef.current.forEach((particle, index) => {
        if (particle) {
          const delay = Math.random() * 2000;
          const duration = 3000 + Math.random() * 2000;
          
          setTimeout(() => {
            particle.style.animation = `float ${duration}ms infinite linear`;
          }, delay);
        }
      });
    };

    // Start animations
    setTimeout(animateLoader, 100);

    // Cleanup
    return () => {
      if (logoRef.current) logoRef.current.style.animation = '';
      if (glowRef.current) glowRef.current.style.animation = '';
    };
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          ref={el => particlesRef.current[i] = el}
          className="absolute w-2 h-2 bg-white rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`
          }}
        />
      ))}

      {/* Main Content */}
      <div className="text-center z-10">
        {/* Logo Container */}
        <div className="relative mb-8">
          {/* Glow Effect */}
          <div 
            ref={glowRef}
            className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-0 scale-150"
          />
          
          {/* Logo */}
          <div 
            ref={logoRef}
            className="relative w-28 h-28 mx-auto bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl transform-gpu p-1"
          >
            <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center overflow-hidden">
              <img 
                src={DevSquadLogo} 
                alt="DevSquad Logo" 
                className="w-20 h-20 object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Company Name */}
        <div ref={textRef} className="mb-8">
          <h1 className="text-5xl font-bold text-white mb-2 tracking-wider">
            {'DevSquad'.split('').map((letter, index) => (
              <span 
                key={index} 
                className="letter inline-block transform-gpu"
                style={{ transformOrigin: 'center bottom' }}
              >
                {letter}
              </span>
            ))}
          </h1>
          <p className="text-xl text-gray-300 font-light tracking-wide">
            IT Solutions & Development
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-700 rounded-full mx-auto mb-6 overflow-hidden">
          <div 
            ref={progressRef}
            className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full transform scale-x-0 origin-left transition-transform duration-3000 ease-out"
          />
        </div>

        {/* Loading Text */}
        <div className="text-gray-400 text-sm font-medium tracking-widest animate-pulse">
          INITIALIZING EXPERIENCE...
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes glow {
          0% { opacity: 0.5; transform: scale(1); }
          100% { opacity: 0.8; transform: scale(1.1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default DevSquadLoader;