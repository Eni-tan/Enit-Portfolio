import React, { useEffect, useRef } from 'react'
import styles from './AnimatedBackground.module.css'

const AnimatedBackground = () => {
  const cursorRef = useRef(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    // Smooth animation loop
    const animate = () => {
      // Smooth interpolation for cursor position
      positionRef.current.x += (targetRef.current.x - positionRef.current.x) * 0.15;
      positionRef.current.y += (targetRef.current.y - positionRef.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = 
          `translate(${positionRef.current.x}px, ${positionRef.current.y}px)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.backgroundContainer}>
      <div ref={cursorRef} className={styles.cursorGlow}></div>
    </div>
  )
}

export default AnimatedBackground
