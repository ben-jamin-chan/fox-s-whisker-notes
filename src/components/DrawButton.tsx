import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface DrawButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

const DrawButton = ({ onClick, isLoading }: DrawButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      disabled={isLoading}
      className="btn-fox text-xl md:text-2xl px-10 py-5 flex items-center gap-3 disabled:opacity-70"
      whileHover={{ scale: 1.05, boxShadow: '0 12px 40px -8px hsl(24 85% 55% / 0.5)' }}
      whileTap={{ scale: 0.95 }}
      animate={isLoading ? {} : { 
        boxShadow: [
          '0 4px 20px -4px hsl(24 85% 55% / 0.35)',
          '0 8px 30px -4px hsl(24 85% 55% / 0.5)',
          '0 4px 20px -4px hsl(24 85% 55% / 0.35)',
        ]
      }}
      transition={{
        boxShadow: { duration: 2, repeat: Infinity },
      }}
    >
      <Sparkles className={`w-6 h-6 ${isLoading ? 'animate-spin' : 'animate-pulse'}`} />
      <span>{isLoading ? 'Finding a memory...' : 'Draw a Memory'}</span>
      <Sparkles className={`w-6 h-6 ${isLoading ? 'animate-spin' : 'animate-pulse'}`} />
    </motion.button>
  );
};

export default DrawButton;
