import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: 1,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: 'rgba(147, 51, 234, 0.1)',
      mixBlendMode: 'difference',
    },
  };

  useEffect(() => {
    const textElements = document.querySelectorAll('p, h1, h2, h3, a, button');
    
    const mouseEnter = () => setCursorVariant('text');
    const mouseLeave = () => setCursorVariant('default');

    textElements.forEach((element) => {
      element.addEventListener('mouseenter', mouseEnter);
      element.addEventListener('mouseleave', mouseLeave);
    });

    return () => {
      textElements.forEach((element) => {
        element.removeEventListener('mouseenter', mouseEnter);
        element.removeEventListener('mouseleave', mouseLeave);
      });
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor-dot fixed top-0 left-0 w-8 h-8 bg-purple-600 rounded-full pointer-events-none z-50 mix-blend-difference"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="cursor-dot-outline fixed top-0 left-0 w-8 h-8 border-2 border-purple-600 rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
    </>
  );
};

export default CustomCursor;