import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import CountingNumberComponent from '../CountingNumber/CountingNumberComponent'; // Assuming this is your reusable component
import styles from './ReusableSlider.module.css'; // Custom CSS for styling

const EmblaCarouselSlider = (props) => {
  const { options } = props;
  const emblaOptions = {
    ...options,
    loop: true, // Disable loop if not needed
    slidesToScroll: 1, // Scroll one slide at a time
    align: "start" // Align slides to the start
  };
  const [emblaRef] = useEmblaCarousel(emblaOptions, [AutoScroll({ playOnInit: true })]);

  const slides = [
    { endNumber: 37, text: 'Customer Satisfaction Score Boost' },
    { endNumber: 43, text: 'Faster Query Response Times' },
    { endNumber: 52, text: 'Reduced Operational Expenses' },
    { endNumber: 36, text: 'Annual Subscriptions Growth' },
    { endNumber: 36, text: 'Higher Customer Lifetime Value' },
    { endNumber: 60, text: 'Improvement in Positive Customer Feedback' }
  ];

  return (
    <div className={styles.embla} >
      <div className={styles.embla__viewport}  ref={emblaRef}>
        <div className={styles.embla__container} >
          {slides.map((slide, index) => (
            <div className={styles.embla__slide}  key={index}>
              <div className="flex flex-col justify-start items-center gap-3 ">
                <CountingNumberComponent endNumber={slide.endNumber} text="Successful Projects" />
                <p className="text-[#444c58] text-center text-sm md:text-xl font-medium">{slide.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarouselSlider;
