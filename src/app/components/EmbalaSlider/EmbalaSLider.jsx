import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { Container } from '@mui/material';
import Link from 'next/link';
import styles from './EmbalaSlider.module.css'; // Custom CSS for styling
import testImage1 from "../../../../public/asset/testing-image-1.jpg";
import testImage2 from "../../../../public/asset/testing-image-2.jpg";
import testImage3 from "../../../../public/asset/testing-image-3.jpg";

// Slide content configuration with HTML in descriptions
const slideContent = [
    {
        image: testImage1,
        title: 'effortlessly.',
        subtitle: 'Get more done,',
        description: 'We build tailored offshore teams, designed to boost productivity, <br/>and integrate with your workflow effortlessly.',
        button: 'Discover Our Solutions',
        href: '/services'
    },
    {
        image: testImage2,
        title: 'Talent, Tailored Success.',
        subtitle: 'No one-size-fits-all.',
        description: 'At TheChatterBridge, we handpick teams that align with your<br/> business’s culture, industry, and growth goals.',
        button: 'Find Your Perfect Fit',
        href: '/contact'

    },
    {
        image: testImage3,
        title: 'With the right talent.',
        subtitle: 'Drive growth faster,',
        description: 'We provide you with industry-specific talent, empowering your <br/> business to grow and achieve results quickly.',
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
                                    priority={true}
                                />
                                <Container maxWidth="xl" disableGutters>
                                    <div className={styles.embla__slide__textOverlay}>
                                        <h4 className="font-bold leading-none text-[#fdfefb]">
                                            {slide.subtitle}
                                        </h4>
                                        <h1 className="font-black text-[#afe57f] text-start leading-none mt-2">
                                            {slide.title}
                                        </h1>
                                        <div className="w-fit mt-10">
                                            <Link href={slide.href}>
                                                <button className='coolBeans w-full'>{slide.button}</button>
                                            </Link>
                                        </div>
                                        <p className="font-medium mt-16" dangerouslySetInnerHTML={{ __html: slide.description }} />
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
