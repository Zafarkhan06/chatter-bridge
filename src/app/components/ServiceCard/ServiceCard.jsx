import React from 'react';
import Image from 'next/image';
import AnimatedWrapper from '../AnimatedFramerMotion/LeftInViewAnimation';

const ServiceCard = ({ imageSrc, altText, category, title, description, isBlack = "true" }) => {
  return (
    <div className='grid grid-flow-row gap-7'>
      <AnimatedWrapper from='top' delay={0} duration={0.7}>
        <Image src={imageSrc} alt={altText} quality={100} className='rounded-xl md:min-h-[500px] max-h-[500px] object-cover object-center' />
      </AnimatedWrapper>
      <AnimatedWrapper from='left' delay={0} duration={0.7}>
        <div className='w-fit'>
          <p className={` ${isBlack ? 'bg-[#444c58]' : 'bg-[#192128]'} text-lg text-white px-5 py-2 uppercase font-bold`}>{category}</p>
        </div>
      </AnimatedWrapper>
      <AnimatedWrapper from='right' delay={0} duration={0.9}>
        <h5 className='tracking-tight -mt-3 leading-none uppercase font-black text-white'>
          {title}
        </h5>
      </AnimatedWrapper>
      <AnimatedWrapper from='bottom' delay={0} duration={1}>
        <p className='text-[#E7E5E4] font-semibold md:leading-tight -mt-3 md:w-5/6 tracking-normal' dangerouslySetInnerHTML={{ __html: description }} />
      </AnimatedWrapper>
    </div>
  );
};

export default ServiceCard;
