"use client"
import React, { useEffect, useState, useRef } from 'react';

const CountingNumberComponent = ({ text, endNumber, duration = 1000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && rect.bottom >= 0) {
          setInView(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check immediately on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      const startTime = Date.now();
      const endTime = startTime + duration;

      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        setCount(Math.floor(progress * endNumber));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    }
  }, [inView, endNumber, duration]);

  return (
    <div ref={ref} className="">
        <h3 className='font-bold text-center text-[#172806]'>{count}%</h3>
    </div>
  );
};

export default CountingNumberComponent;
