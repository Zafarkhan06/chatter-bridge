import React from 'react';
import Image from 'next/image';
import { Container, } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReusableButton from '../ReusableButton/ReusableButton';

const InfoSection = ({
    title,
    subtitle,
    description,
    buttonText,
    buttonHref,
    imageSrc,
    imageAlt,
    reverseLayout = false, // Prop to control layout direction
    listPoints = []
}) => {
    return (
        <Container maxWidth="xl">
            <div className=" py-16 md:py-32 rounded-xl  grid grid-cols-1 items-center lg:grid-cols-2 gap-10 md:gap-20">
                {/* Content section */}
                <div
                    className={`grid grid-flow-row justify-between gap-5 ${reverseLayout ? 'md:order-2' : 'md:order-1'
                        }`}
                >
                    <h5 className="leading-none text-[#172806] tracking-tight">{title}</h5>
                    <h3 className="font-black uppercase leading-none tracking-tight text-[#172806]">
                        {subtitle.split('<br/>').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br className='hidden lg:block'/>
                            </React.Fragment>
                        ))}
                    </h3>
                    <p className="text-[#172806] font-semibold">{description}</p>
                    {/* <div className='flex gap-5 items-center justify-start flex-wrap'>
                        {
                            listPoints.map((point, index) => (
                                <div className='flex items-center text-[#172806] gap-2 text-xl font-semibold leading-none'>
                                    <CheckCircleIcon className='text-[#172806]' />
                                    {point}
                                </div>
                            ))
                        }
                    </div> */}
                    <div className="w-fit">
                        {/* <MyCustomButton text={buttonText} href={buttonHref} /> */}
                       <ReusableButton href={buttonHref} text={buttonText}/>
                    </div>
                </div>

                {/* Image section */}
                <div className={`flex ${reverseLayout ? 'md:justify-start' : 'md:justify-end'} order-1`}>
                    <Image src={imageSrc} alt={imageAlt} quality={100} className="rounded-xl lg:min-h-[450px] object-cover object-center" />
                </div>
            </div>
        </Container>
    );
};

export default InfoSection;
