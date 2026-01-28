import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Lock, Calendar } from 'lucide-react';
import foxPeekImage from '@/assets/fox-peek.png';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface ValentineCountdownProps {
  targetDate: Date;
  onUnlock: () => void;
}

const ValentineCountdown = ({ targetDate, onUnlock }: ValentineCountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        onUnlock();
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onUnlock]);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="flex flex-col items-center"
    >
      <div className="relative">
        <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-card/80 backdrop-blur-md border-2 border-primary/20 
                      flex items-center justify-center shadow-lg">
          <motion.span 
            key={value}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl md:text-5xl font-display font-bold text-foreground"
          >
            {value.toString().padStart(2, '0')}
          </motion.span>
        </div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-primary/30 blur-sm" />
      </div>
      <span className="mt-3 text-sm md:text-base font-body text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
    </motion.div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center p-4 parchment relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl md:text-3xl"
            initial={{ 
              bottom: '-10%', 
              left: `${5 + i * 8}%`,
              opacity: 0 
            }}
            animate={{ 
              bottom: '110%',
              opacity: [0, 0.6, 0.6, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 8 + i * 1.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: 'linear'
            }}
          >
            💕
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl"
      >
        <div className="card-den p-8 md:p-12 text-center">
          {/* Lock icon with fox */}
          <motion.div 
            className="flex justify-center mb-8 relative"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative">
              <div className="fox-glow">
                <img 
                  src={foxPeekImage} 
                  alt="Waiting fox" 
                  className="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-lg"
                />
              </div>
              <motion.div
                className="absolute -top-2 -right-2 bg-primary/20 backdrop-blur-sm rounded-full p-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Lock className="w-5 h-5 text-primary" />
              </motion.div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
              Something Special is Coming...
            </h1>
            <div className="flex items-center justify-center gap-2 text-muted-foreground font-body">
              <Calendar className="w-4 h-4" />
              <span>Unlocks on Valentine's Day</span>
              <Heart className="w-4 h-4 text-primary" />
            </div>
          </motion.div>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-3 md:gap-6 mb-10"
          >
            <TimeBlock value={timeLeft.days} label="Days" />
            <TimeBlock value={timeLeft.hours} label="Hours" />
            <TimeBlock value={timeLeft.minutes} label="Minutes" />
            <TimeBlock value={timeLeft.seconds} label="Seconds" />
          </motion.div>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-muted-foreground font-body italic text-lg"
          >
            A little fox is guarding a treasure just for you... 🦊💕
          </motion.p>

          {/* Decorative divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 text-sm text-muted-foreground/70 font-body"
          >
            Come back on February 14th to discover what's inside! 
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default ValentineCountdown;
