import React,{useState, useEffect} from 'react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { Container } from '@mui/material';
import Link from 'next/link';
import styles from './EmbalaSlider.module.css'; // Custom CSS for styling
import testImage1 from "../../../../public/asset/handpicked-talent.png";
import testImage3 from "../../../../public/asset/streamline-services.png";
import testImage2 from "../../../../public/asset/ideal-workspace.jpeg";
import AnimatedWrapper from '../AnimatedFramerMotion/LeftInViewAnimation';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

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
        title: 'Workforce Harmony',
        subtitle: 'Ideal Growth  = Ideal Workforce',
        description: 'At The Chatter Bridge,  we work with industry specific individuals that align with your business’s culture, industry, and growth goals',
        button: 'Find Your Perfect Fit',
        href: '/contact'

    },
    {
        image: testImage3,
        title: 'Ease the Pressure ',
        subtitle: 'Streamline Productivity,',
        description: 'At The Chatter Bridge, we bring together industry-specific professionals who complement your business’s culture, industry demands, and growth objectives, ensuring a seamless partnership',
        button: 'Get Your Dream Team',
        href: '/contact'
    }
];

const EmblaCarousel = (props) => {
    const { options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    useEffect(() => {
        if (emblaApi) {
            const handleSelect = () => {
                setCanScrollPrev(emblaApi.canScrollPrev());
                setCanScrollNext(emblaApi.canScrollNext());
            };

            emblaApi.on('select', handleSelect);
            handleSelect();
        }
    }, [emblaApi]);

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
                                <Container maxWidth="xl" sx={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }} disableGutters>
                                    <div className={styles.embla__slide__textOverlay}>
                                        <AnimatedWrapper from="left" delay={0.5} duration={1}>
                                            <h4 className="font-bold text-center leading-none text-[#E7E5E4]">
                                                {slide.subtitle}
                                            </h4>
                                        </AnimatedWrapper>
                                        <AnimatedWrapper from="right" delay={0.5} initialY="90" duration={1.5}>
                                            <h1 className="font-black text-gray-300 text-center leading-none mt-2">
                                                {slide.title}
                                            </h1>
                                        </AnimatedWrapper>
                                        <AnimatedWrapper from="bottom" delay={0.5} duration={1.1}>
                                            <div className="w-fit mt-10">
                                                <Link href={slide.href}>
                                                    <button className='coolBeans w-full'>{slide.button}</button>
                                                </Link>
                                            </div>
                                        </AnimatedWrapper>
                                        <AnimatedWrapper from="top" delay={1.5} duration={1}>
                                            <p className="font-medium text-center mt-16" dangerouslySetInnerHTML={{ __html: slide.description }} />
                                        </AnimatedWrapper>
                                    </div>
                                </Container>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            <button
                className={`${styles.embla__button} ${styles.embla__button__prev}`}
                onClick={() => emblaApi && emblaApi.scrollPrev()}
                disabled={!canScrollPrev}
            >
                <ArrowBackOutlinedIcon sx={{fontSize: {xs:"20px", md: "40px"}, color: "#b6b3b1"}}/>
            </button>
            <button
                className={`${styles.embla__button} ${styles.embla__button__next}`}
                onClick={() => emblaApi && emblaApi.scrollNext()}
                disabled={!canScrollNext}
            >
                <ArrowForwardOutlinedIcon sx={{fontSize: {xs:"20px", md: "40px"}, color: "#b6b3b1"}}/>
            </button>
        </section>
    );
};

export default EmblaCarousel;
