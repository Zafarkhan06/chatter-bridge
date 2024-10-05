import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { Container } from '@mui/material';
import Link from 'next/link';
import styles from './EmbalaSlider.module.css'; // Custom CSS for styling
import testImage1 from "../../../../public/asset/handpicked-talent.png";
import testImage3 from "../../../../public/asset/streamline-services.png";
import testImage2 from "../../../../public/asset/ideal-workspace.jpeg";

// Slide content configuration with HTML in descriptions
const slideContent = [
    {
        image: testImage1,
        title: 'Impactful Results',
        subtitle: 'Handpicked Talent,',
        description: 'We build tailored offshore teams, designed to boost productivity, and integrate with your workflow effortlessly',
        button: 'Discover Our Solutions',
        href: '/services'
    },
    {
        image: testImage2,
        title: 'Ideal Workforce',
        subtitle: 'Ideal Growth  =',
        description: 'At The Chatter Bridge,  We work with industry specific individuals that align with your business’s culture, industry, and growth goals',
        button: 'Find Your Perfect Fit',
        href: '/contact'

    },
    {
        image: testImage3,
        title: 'Ease the Pressure ',
        subtitle: 'Streamline Productivity,',
        description: ' We create customised workflows and strategies that seamlessly align with your processes, driving efficiency and enhancing output',
        button: 'Get Your Dream Team',
        href: '/contact'
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
                                    quality={100}
                                    priority={true}
                                />
                                <Container maxWidth="xl" sx={{position: "relative", display: "flex", justifyContent: "center", alignItems: "center"}} disableGutters>
                                    <div className={styles.embla__slide__textOverlay}>
                                        <h4 className="font-bold text-center leading-none text-[#fdfefb]">
                                            {slide.subtitle}
                                        </h4>
                                        <h1 className="font-black text-[#afe57f] text-center leading-none mt-2">
                                            {slide.title}
                                        </h1>
                                        <div className="w-fit mt-10">
                                            <Link href={slide.href}>
                                                <button className='coolBeans w-full'>{slide.button}</button>
                                            </Link>
                                        </div>
                                        <p className="font-medium text-center mt-16" dangerouslySetInnerHTML={{ __html: slide.description }} />
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
