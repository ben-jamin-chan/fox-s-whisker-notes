import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, LogOut, Sparkles } from 'lucide-react';
import foxDenHero from '@/assets/fox-den-hero.jpg';
import foxPeekImage from '@/assets/fox-peek.png';
import { sampleMemories, getRandomMemory, Memory } from '@/data/memories';
import DrawButton from './DrawButton';
import MemoryCard from './MemoryCard';

interface FoxDenProps {
  onLogout: () => void;
}

const FoxDen = ({ onLogout }: FoxDenProps) => {
  const [currentMemory, setCurrentMemory] = useState<Memory | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [memoriesDrawn, setMemoriesDrawn] = useState(0);

  const triggerConfetti = useCallback(() => {
    // Fire confetti from both sides
    const count = 150;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#f97316', '#fb923c', '#fbbf24', '#22c55e', '#f43f5e'],
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55, origin: { x: 0.2, y: 0.7 } });
    fire(0.2, { spread: 60, origin: { x: 0.5, y: 0.7 } });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8, origin: { x: 0.8, y: 0.7 } });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2, origin: { x: 0.5, y: 0.6 } });
  }, []);

  const handleDrawMemory = async () => {
    setIsDrawing(true);
    
    // Simulate a brief delay for anticipation
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const memory = getRandomMemory(sampleMemories);
    setCurrentMemory(memory);
    setMemoriesDrawn(prev => prev + 1);
    setIsDrawing(false);
    
    // Trigger confetti!
    triggerConfetti();
  };

  const handleCloseMemory = () => {
    setCurrentMemory(null);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={foxDenHero} 
          alt="Fox's Den" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 p-4 md:p-6 flex justify-between items-center"
      >
        <div className="flex items-center gap-3">
          <img src={foxPeekImage} alt="Fox" className="w-10 h-10 object-contain" />
          <span className="font-display text-lg md:text-xl font-semibold text-foreground">
            Fox's Den
          </span>
        </div>
        <button
          onClick={onLogout}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/80 backdrop-blur-sm
                     hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
        >
          <LogOut className="w-4 h-4" />
          <span className="hidden sm:inline">Leave Den</span>
        </button>
      </motion.header>

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-4">
        {/* Welcome message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4 drop-shadow-lg">
            Welcome to Our Den
          </h1>
          <p className="text-lg md:text-xl max-w-md mx-auto font-body text-center leading-relaxed text-gray-800 
relative">
  <span className="absolute inset-0 blur-2xl bg-pink-300/30 -z-10 rounded-full"></span>
  Every memory is a treasure. Draw one and let me remind you why I love you 💕
</p>

        </motion.div>

        {/* Fox mascot with glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
          className="mb-8 relative"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="fox-glow"
          >
            <img 
              src={foxPeekImage} 
              alt="Our fox" 
              className="w-40 h-40 md:w-52 md:h-52 object-contain drop-shadow-2xl"
            />
          </motion.div>
          
          {/* Sparkles around fox */}
          <motion.div
            className="absolute -top-4 -right-4"
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ rotate: { duration: 8, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity } }}
          >
            <Sparkles className="w-8 h-8 text-fox-amber" />
          </motion.div>
          <motion.div
            className="absolute -bottom-2 -left-4"
            animate={{ rotate: -360, scale: [1, 1.3, 1] }}
            transition={{ rotate: { duration: 10, repeat: Infinity, ease: "linear" }, scale: { duration: 2.5, repeat: Infinity } }}
          >
            <Heart className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>

        {/* Draw button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <DrawButton onClick={handleDrawMemory} isLoading={isDrawing} />
        </motion.div>

        {/* Memories counter */}
        {memoriesDrawn > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-muted-foreground font-body"
          >
            {memoriesDrawn} {memoriesDrawn === 1 ? 'memory' : 'memories'} discovered today 🦊
          </motion.p>
        )}
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="relative z-10 p-4 text-center text-sm text-muted-foreground/70"
      >
        <p className="font-body italic">
          Made with endless love for my beautiful wife 💕
        </p>
      </motion.footer>

      {/* Memory card modal */}
      <AnimatePresence>
        {currentMemory && (
          <MemoryCard 
            memory={currentMemory} 
            onClose={handleCloseMemory} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default FoxDen;
