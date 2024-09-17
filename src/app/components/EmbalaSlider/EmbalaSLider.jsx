import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { Container } from '@mui/material';
import dynamic from 'next/dynamic';
import styles from './EmbalaSlider.module.css'; // Custom CSS for styling

// Dynamically import the custom button component
const MyCustomButton = dynamic(() => import('../CustomButton/CustomButton'), {
    ssr: false, // Disable server-side rendering for this component
});

// Import images
import testImage1 from "../../../../public/asset/testing-image-1.jpg";
import testImage2 from "../../../../public/asset/testing-image-2.jpg";
import testImage3 from "../../../../public/asset/testing-image-3.jpg";

// Slide content configuration with HTML in descriptions
const slideContent = [
    {
        image: testImage1,
        title: 'effortlessly.',
        subtitle: 'Get more done,',
        description: 'A study by the Asian Journal of Economics and Banking found that reducing costs in operations while enhancing efficiency boosts profitability and competitive advantage.'
    },
    {
        image: testImage2,
        title: 'Unlock your goals',
        subtitle: 'without breaking the bank.',
        description: 'Save up to 60% compared to hiring locally.<br/>Get the same results.<br/>Achieve the same goal.'
    },
    {
        image: testImage3,
        title: 'Keep your team,',
        subtitle: 'not the overhead.',
        description: 'Save up to 60% compared to hiring locally.<br/>Get the same results.<br/>Achieve the same goal.'
    }
];

const EmblaCarousel = (props) => {
    const { options } = props;
    const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

    return (
        <section className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {slideContent.map((slide, index) => (
                        <div className={styles.embla__slide} key={index}>
                            <div className={styles.embla__slide__imageWrapper}>
                                <Image
                                    src={slide.image}
                                    alt={`Slide image ${index + 1}`}
                                    layout="fill"
                                    objectFit="cover"
                                    priority={true}
                                />
                                <Container maxWidth="xl" disableGutters>
                                    <div className={styles.embla__slide__textOverlay}>
                                        <h4 className='font-bold leading-none text-[#bada55]'>{slide.subtitle}</h4>
                                        <h1 className='font-black text-[#fdfefb] text-start leading-none mt-2'>{slide.title}</h1>
                                        <div className='w-fit mt-10'>
                                            <MyCustomButton text="Get Started" href="/contact" />
                                        </div>
                                        <p className='font-medium mt-16' dangerouslySetInnerHTML={{ __html: slide.description }} />
                                    </div>
                                </Container>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmblaCarousel;
