import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoginPage from '@/components/LoginPage';
import FoxDen from '@/components/FoxDen';
import ValentineCountdown from '@/components/ValentineCountdown';

// Set Valentine's Day 2025 as the unlock date (change year as needed)
const VALENTINE_DATE = new Date('2025-02-14T00:00:00');

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Check if we're past Valentine's Day
  useEffect(() => {
    const now = new Date();
    if (now >= VALENTINE_DATE) {
      setIsUnlocked(true);
    }
  }, []);

  // Check for existing session
  useEffect(() => {
    const session = localStorage.getItem('foxDenSession');
    if (session === 'authenticated') {
      setIsLoggedIn(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = () => {
    localStorage.setItem('foxDenSession', 'authenticated');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('foxDenSession');
    setIsLoggedIn(false);
  };

  const handleUnlock = () => {
    setIsUnlocked(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="text-6xl mb-4"
          >
            🦊
          </motion.div>
          <p className="text-muted-foreground font-body">
            Preparing the den...
          </p>
        </motion.div>
      </div>
    );
  }

  // Show countdown if before Valentine's Day
  if (!isUnlocked) {
    return <ValentineCountdown targetDate={VALENTINE_DATE} onUnlock={handleUnlock} />;
  }

  return (
    <AnimatePresence mode="wait">
      {isLoggedIn ? (
        <motion.div
          key="den"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FoxDen onLogout={handleLogout} />
        </motion.div>
      ) : (
        <motion.div
          key="login"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LoginPage onLogin={handleLogin} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Index;
