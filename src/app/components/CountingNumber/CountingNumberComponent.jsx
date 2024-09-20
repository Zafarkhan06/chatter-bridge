"use client";
import React, { useEffect, useState, useRef } from "react";

const CountingNumberComponent = ({
  text,
  endNumber,
  duration = 1000,
  smtext,
}) => {
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
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check immediately on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
    <div ref={ref} className="leading-snug">
      <h1 className="font-bold text-white tracking-wide text-center">
        {count}
        {smtext}
      </h1>
      <h6 className="text-white">{text}</h6>
      {/* <p className="font-semibold text-white">
        Key Client Average Speed to Answer
      </p> */}
    </div>
  );
};

export default CountingNumberComponent;
