import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Memory, getMemoryTypeLabel } from '@/data/memories';

interface MemoryCardProps {
  memory: Memory;
  onClose: () => void;
}

const MemoryCard = ({ memory, onClose }: MemoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bark/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 25 
        }}
        className="card-memory max-w-lg w-full p-6 md:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-muted/80 
                     transition-colors text-muted-foreground hover:text-foreground"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Type badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary 
                         rounded-full text-sm font-semibold font-body">
            {getMemoryTypeLabel(memory.type)}
          </span>
        </motion.div>

        {/* Custom memory image */}
        {memory.imageUrl && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-6 rounded-xl overflow-hidden shadow-cozy"
          >
            <img 
              src={memory.imageUrl} 
              alt="Memory photo" 
              className="w-full h-full object-cover"
              // className="w-full h-48 object-cover"
            />
          </motion.div>
        )}

        {/* Memory content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-lg md:text-xl text-foreground font-body leading-relaxed mb-6">
            {memory.content}
          </p>

          {/* Fox pun */}
          {memory.foxPun && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-start gap-3 p-4 rounded-xl bg-fox-cream/50 border border-primary/20"
            >
              <span className="text-2xl">🦊</span>
              <p className="text-primary font-display italic text-lg">
                {memory.foxPun}
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Decorative hearts */}
        <motion.div
          className="absolute -top-3 -right-3"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-3xl">💕</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MemoryCard;
