import React from 'react';
import Image from 'next/image';
import { Container, } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReusableButton from '../ReusableButton/ReusableButton';
import AnimatedWrapper from '../AnimatedFramerMotion/LeftInViewAnimation';

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
                    <AnimatedWrapper from={'top'} delay={0} duration={1}>
                        <h5 className="leading-none text-[#A9A9A9] tracking-tight">{title}</h5>
                    </AnimatedWrapper>
                    <AnimatedWrapper from={reverseLayout ? 'right' : 'left'} delay={0.3} duration={1}>
                        <h3 className="font-black uppercase leading-none tracking-normal text-[#E7E5E4]">
                            {subtitle.split('<br/>').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br className='hidden lg:block' />
                                </React.Fragment>
                            ))}
                        </h3>
                    </AnimatedWrapper>
                    <AnimatedWrapper from={reverseLayout ? 'left' : 'right'} delay={0.4} duration={1}>
                        <p className="text-[#E7E5E4] font-semibold">{description}</p>
                    </AnimatedWrapper>
                    <AnimatedWrapper from={'bottom'} delay={0} duration={1.2}>
                        <div className="w-fit">
                            <ReusableButton href={buttonHref} text={buttonText} />
                        </div>
                    </AnimatedWrapper>
                </div>

                {/* Image section */}
                <div className={`flex ${reverseLayout ? 'md:justify-start' : 'md:justify-end'} order-1`}>
                    <AnimatedWrapper from={reverseLayout ? 'left' : 'right'} delay={0} duration={1.1}>
                        <Image src={imageSrc} alt={imageAlt} quality={100} className="rounded-xl lg:min-h-[450px] object-cover object-center" />
                    </AnimatedWrapper>
                </div>
            </div>
        </Container>
    );
};

export default InfoSection;
