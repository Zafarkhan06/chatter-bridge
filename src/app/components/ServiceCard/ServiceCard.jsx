import React from 'react';
import Image from 'next/image';

const ServiceCard = ({ imageSrc, altText, category, title, description }) => {
  return (
    <div className='grid grid-flow-row gap-7'>
      <Image src={imageSrc} alt={altText} quality={100} className='rounded-xl h-96 object-cover object-center' />
      <div className='w-fit'>
        <p className='bg-[#3d3f3b] text-lg text-white px-5 py-2 uppercase font-bold'>{category}</p>
      </div>
      <h5 className='tracking-tighter -mt-3 leading-none uppercase font-black text-[#3d3f3b]'>
        {title}
      </h5>
      <p className='text-[#172806] font-semibold leading-none -mt-3 w-3/4 tracking-tighter'>
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
