import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Container } from '@mui/material';
const MyCustomButton = dynamic(() => import('../CustomButton/CustomButton'), {
    ssr: false, // Disable server-side rendering for this component
});

const InfoSection = ({
    title,
    subtitle,
    description,
    buttonText,
    buttonHref,
    imageSrc,
    imageAlt,
    reverseLayout = false, // Prop to control layout direction
}) => {
    return (
        <Container maxWidth="xl">
            <div className="my-16 py-16 md:py-32 rounded-xl  grid grid-cols-1 items-center md:grid-cols-2 gap-10 md:gap-20">
                {/* Content section */}
                <div
                    className={`grid grid-flow-row justify-between gap-5 ${reverseLayout ? 'md:order-2' : 'md:order-1'
                        }`}
                >
                    <h5 className="leading-none text-[#161a0c]">{title}</h5>
                    <h2 className="font-black leading-none text-[#161a0c]">
                        {subtitle.split('<br/>').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </h2>
                    <p className="text-[#161a0c] font-semibold">{description}</p>
                    <div className="w-fit">
                        <MyCustomButton text={buttonText} href={buttonHref} />
                    </div>
                </div>

                {/* Image section */}
                <div className={`flex ${reverseLayout ? 'md:justify-start' : 'md:justify-end'} order-1`}>
                    <Image src={imageSrc} alt={imageAlt} className="rounded-xl object-cover max-h-[30%] object-center" />
                </div>
            </div>
        </Container>
    );
};

export default InfoSection;
