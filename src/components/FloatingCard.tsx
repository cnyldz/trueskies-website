import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  onClick?: () => void;
}

export function FloatingCard({ children, className = '', intensity = 1, onClick }: FloatingCardProps) {
  return (
    <motion.div
      className={`floating-card ${className}`}
      onClick={onClick}
      whileHover={{
        scale: 1.02,
        y: -8,
      }}
      animate={{
        y: [0, -10 * intensity, 0],
      }}
      transition={{
        y: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        },
        hover: {
          duration: 0.3
        }
      }}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </motion.div>
  );
}
