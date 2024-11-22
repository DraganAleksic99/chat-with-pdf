import { useState, useEffect } from 'react';
import { animate, useMotionValue } from 'framer-motion';

function useAnimatedText(text: string) {
  const animatedCursor = useMotionValue(0);
  const [cursor, setCursor] = useState(0);

  useEffect(() => {
    const controls = animate(animatedCursor, text.length, {
      ease: 'linear',
      onUpdate(latest) {
        setCursor(Math.floor(latest));
      }
    });

    return () => controls.stop();
  }, [animatedCursor, text]);

  return text.slice(0, cursor);
}

export { useAnimatedText };
