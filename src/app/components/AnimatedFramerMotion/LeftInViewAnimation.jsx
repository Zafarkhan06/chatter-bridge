"use client"
import { motion } from "framer-motion";

const AnimatedWrapper = ({
  children,
  from = "left", // Direction of animation: 'left', 'right', 'top', 'bottom'
  initialX = 0,   // Custom initial x-offset
  initialY = 0,   // Custom initial y-offset
  delay = 0,      // Delay time for the animation
  duration = 1,   // Duration of the animation
}) => {
  // Set the initial position based on the 'from' prop
  const getInitialPosition = () => {
    switch (from) {
      case "left":
        return { x: initialX || -90, y: 0 };
      case "right":
        return { x: initialX || 90, y: 0 };
      case "top":
        return { x: 0, y: initialY || -90 };
      case "bottom":
        return { x: 0, y: initialY || 90 };
      default:
        return { x: 0, y: 0 };
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...getInitialPosition(), // Set initial position based on direction
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Move to original position
        y: 0, // Move to original position
        transition: {
          duration, // Set animation duration
          delay,    // Set animation delay
        },
      }}
      viewport={{ once: true }} // Trigger animation once in view
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
