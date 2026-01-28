import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, KeyRound } from 'lucide-react';
import foxPeekImage from '@/assets/fox-peek.png';

interface LoginPageProps {
  onLogin: () => void;
}

const CORRECT_PASSWORD = 'iloveyou'; // You can change this!

const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password.toLowerCase() === CORRECT_PASSWORD) {
      onLogin();
    } else {
      setError('Hmm, that\'s not quite right. Try again, my love! 🦊');
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 parchment relative overflow-hidden">
      {/* Decorative leaves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            initial={{ 
              top: '-10%', 
              left: `${15 + i * 15}%`,
              rotate: 0,
              opacity: 0 
            }}
            animate={{ 
              top: '110%',
              rotate: 360,
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: 'linear'
            }}
          >
            🍂
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        <div className="card-den p-8 md:p-10">
          {/* Fox peek animation */}
          <motion.div 
            className="flex justify-center mb-6"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative">
              <div className="fox-glow">
                <img 
                  src={foxPeekImage} 
                  alt="Cute fox" 
                  className="w-32 h-32 object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
              Fox's Den of Memories
            </h1>
            <p className="text-muted-foreground font-body">
              A cozy place just for you 💕
            </p>
          </motion.div>

          {/* Login form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-foreground">
                Enter the secret password, my love
              </label>
              <motion.div
                animate={isShaking ? { x: [-10, 10, -10, 10, 0] } : {}}
                transition={{ duration: 0.4 }}
              >
                <div className="relative">
                  <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError('');
                    }}
                    placeholder="Hint: what we say every day..."
                    className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-border 
                             bg-background text-foreground placeholder:text-muted-foreground
                             focus:border-primary focus:ring-2 focus:ring-primary/20 
                             transition-all duration-200 font-body"
                  />
                </div>
              </motion.div>
            </div>

            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-destructive text-sm text-center"
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            <motion.button
              type="submit"
              className="btn-fox w-full flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Heart className="w-5 h-5" />
              <span>Enter the Den</span>
            </motion.button>
          </form>

          {/* Footer message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-sm text-muted-foreground mt-6 font-body italic"
          >
            Made with love, for my favorite fox 🦊
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
