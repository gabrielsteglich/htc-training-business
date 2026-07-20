import React from 'react';

interface CloudParticlesProps {
    count?: number;
    className?: string;
}

export const CloudParticles: React.FC<CloudParticlesProps> = ({
    count = 15,
    className = ''
}) => {
    // Generate random particles with varied properties
    const particles = Array.from({ length: count }, (_, i) => ({
        id: i,
        size: Math.random() * 60 + 20, // 20-80px
        left: Math.random() * 100, // 0-100%
        delay: Math.random() * 20, // 0-20s delay
        duration: Math.random() * 30 + 40, // 40-70s for full animation
        opacity: Math.random() * 0.08 + 0.02, // 0.02-0.1 opacity (very subtle)
        blur: Math.random() * 20 + 10, // 10-30px blur
    }));

    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="absolute rounded-full bg-white"
                    style={{
                        width: `${particle.size}px`,
                        height: `${particle.size * 0.6}px`,
                        left: `${particle.left}%`,
                        bottom: '-10%',
                        opacity: particle.opacity,
                        filter: `blur(${particle.blur}px)`,
                        animation: `cloudFloat ${particle.duration}s linear ${particle.delay}s infinite`,
                    }}
                />
            ))}

            {/* CSS Animation */}
            <style>{`
        @keyframes cloudFloat {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          5% {
            opacity: 0.08;
          }
          95% {
            opacity: 0.08;
          }
          100% {
            transform: translateY(-120vh) translateX(50px);
            opacity: 0;
          }
        }
      `}</style>
        </div>
    );
};
