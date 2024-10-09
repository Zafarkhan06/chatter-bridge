import React from 'react';
import Image from 'next/image';

const ServiceCard = ({ imageSrc, altText, category, title, description, isBlack="true"}) => {
  return (
    <div className='grid grid-flow-row gap-7'>
      <Image src={imageSrc} alt={altText} quality={100} className='rounded-xl md:min-h-[500px] max-h-[500px] object-cover object-center' />
      <div className='w-fit'>
        <p className={` ${isBlack ? 'bg-[#444c58]': 'bg-[#192128]'} text-lg text-white px-5 py-2 uppercase font-bold`}>{category}</p>
      </div>
      <h5 className='tracking-tight -mt-3 leading-none uppercase font-black text-white'>
        {title}
      </h5>
      <p className='text-[#E7E5E4] font-semibold md:leading-tight -mt-3 md:w-5/6 tracking-normal' dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};

export default ServiceCard;
