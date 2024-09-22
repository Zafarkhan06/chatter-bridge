import React from 'react';
import { Container } from '@mui/material';
import MyCustomButton from '../components/CustomButton/CustomButton';
import services1 from '../../../public/asset/services-1.jpg';
import services2 from '../../../public/asset/services-2.jpg';
import services3 from '../../../public/asset/services-3.jpg';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import Image from 'next/image';

function Services() {
    return (
        <>
            <Container maxWidth="xl">
                <div className='flex flex-col py-24 md:flex-row md:py-36 gap-10 justify-between items-center'>
                    <div className='md:w-[55%] flex flex-col gap-5 md:gap-10 justify-between'>
                        <h2 className='leading-none uppercase font-black text-[#afe57f]'>Optimize Service
                            Enhance Support
                        </h2>
                        <p className='leading-none text-2xl'>Our inbound services are designed to help<br className='hidden md:block' /> you deliver exceptional customer experiences,<br className='hidden md:block' /> every time.</p>
                        <button className='coolBeans w-44'>
                            Contact US
                        </button>
                    </div>
                    <div className='md:w-1/2 grid grid-cols-2 gap-10'>
                        <div>
                            <Image src={services1} alt='services' height={900} />
                        </div>
                        <div className='flex flex-col justify-between'>
                            <Image src={services2} alt='services' height={900} />
                            <Image src={services3} alt='services' height={900} />
                        </div>
                    </div>
                </div>

            </Container>
            <div className='bg-[#edefec] py-16 md:py-24'>
                <Container maxWidth="xl">
                    <h2 className='font-black uppercase tracking-tighter text-[#3d3f3b]'>Services designed to HELP YOU grow   </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 items-start'>
                        <ServiceCard
                            imageSrc={services2}
                            altText="services"
                            category="Truck Dispatching"
                            title="GET Up to 15X Monthly Revenue"
                            description="We empower creators with generous funding to help scale their businesses and expedite their growth."
                        />
                        <ServiceCard
                            imageSrc={services2}
                            altText="services"
                            category="Truck Dispatching"
                            title="GET Up to 15X Monthly Revenue"
                            description="We empower creators with generous funding to help scale their businesses and expedite their growth."
                        />
                    </div>
                </Container>
            </div>
            <div className='bg-[#afe57f] py-16 md:py-24'>
                <Container maxWidth="xl">
                    <h2 className='font-black uppercase tracking-tighter text-[#3d3f3b]'>Services designed to HELP YOU grow   </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 items-start'>
                        <ServiceCard
                            imageSrc={services2}
                            altText="services"
                            category="Truck Dispatching"
                            title="GET Up to 15X Monthly Revenue"
                            description="We empower creators with generous funding to help scale their businesses and expedite their growth."
                        />
                        <ServiceCard
                            imageSrc={services2}
                            altText="services"
                            category="Truck Dispatching"
                            title="GET Up to 15X Monthly Revenue"
                            description="We empower creators with generous funding to help scale their businesses and expedite their growth."
                        />
                    </div>
                </Container>
            </div>
            <div className='bg-white py-16 md:py-24'>
                <Container maxWidth="xl">
                    <h2 className='font-black uppercase tracking-tighter text-[#3d3f3b]'>Services designed to HELP YOU grow   </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 items-start'>
                        <ServiceCard
                            imageSrc={services2}
                            altText="services"
                            category="Truck Dispatching"
                            title="GET Up to 15X Monthly Revenue"
                            description="We empower creators with generous funding to help scale their businesses and expedite their growth."
                        />
                        <ServiceCard
                            imageSrc={services2}
                            altText="services"
                            category="Truck Dispatching"
                            title="GET Up to 15X Monthly Revenue"
                            description="We empower creators with generous funding to help scale their businesses and expedite their growth."
                        />
                    </div>
                </Container>
            </div>
            <div className=" bg-[#afe57f] py-20">
                <h3 className="font-black leading-none text-[#172806] text-center">Ready to get started?
                </h3>
                <p className="text-[#172806] mt-6 font-semibold text-center">Explore how NETSOL's professional services can strengthen your infrastructure with unparalleled security and uncompromised services.
                </p>
                <div className="w-full justify-center flex mt-10">
                    <MyCustomButton text="Connect with us" href="/contact" />
                </div>
            </div>
        </>
    )
}

export default Services
