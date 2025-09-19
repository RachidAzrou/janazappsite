import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "@assets/generated_images/Islamic_architecture_hero_background_5d13e65a.png";

interface SplashOverlayProps {
  onFinish: () => void;
}

export default function SplashOverlay({ onFinish }: SplashOverlayProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Skip animation and finish immediately
      onFinish();
      return;
    }

    // Timeline: 
    // 0-300ms: logo fade/scale in
    // 300-2000ms: logo static 
    // 2000-2400ms: logo fade out
    // 2200ms: signal hero to start fade in
    // 2600ms: overlay remove
    
    // Start hero animation at 2200ms
    const heroTimer = setTimeout(() => {
      onFinish();
    }, 2200);
    
    // Remove overlay at 2600ms
    const overlayTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2600);

    return () => {
      clearTimeout(heroTimer);
      clearTimeout(overlayTimer);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ pointerEvents: 'none' }}
          aria-hidden="true"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Same background as hero */}
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Logo with animation */}
          <motion.div
            className="relative z-10 flex items-center justify-center"
            initial={{ opacity: 0, scale: 1.0 }}
            animate={{ 
              opacity: [0, 1, 1, 0], 
              scale: [1.0, 1.06, 1.06, 0.98]
            }}
            transition={{
              duration: 2.4,
              times: [0, 0.125, 0.833, 1], // 0ms, 300ms, 2000ms, 2400ms mapped to 0-2.4s
              ease: ["easeOut", "linear", "easeIn"]
            }}
          >
            <img
              src="/assets/janazapp-logo.png"
              alt=""
              className="max-w-[min(36vw,300px)] md:max-w-[min(36vw,300px)] max-h-[min(36vh,300px)] object-contain"
              style={{
                filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3))'
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}