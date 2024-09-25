import React from 'react'
import { Container } from '@mui/material'
import ReusableButton from '../components/ReusableButton/ReusableButton';
import Image from 'next/image';
import PlasticPlant from "../../../public/asset/plant-original.png"

function AboutUS() {
    return (
        <>
            <div className=' bg-[#afe57f] py-24 md:py-36'>
                <Container maxWidth="xl">
                    <div>
                        <h1 className='font-black text-center leading-none uppercase text-[#172806]'> Fueling Growth,<br /> Connecting the Best</h1>
                        <h6 className='text-[#172806] tracking-tight leading-none text-center mt-10'>We specialize in building high-performing, tailor-made teams that seamlessly integrate with your business, driving growth and delivering real, measurable results.</h6>
                        <div className='mt-10 flex justify-center items-start'>
                            <ReusableButton text='Get in touch with us' href='/contact' />
                        </div>
                    </div>
                </Container>
            </div>
            <div className=' bg-[#edefec] '>
                <Container maxWidth="xl">
                    <div className='grid grid-cols-1 md:grid-cols-2 items-end pt-10 gap-10 md:gap-20'>
                        <div className='order-1 md:order-0'>
                            <Image src={PlasticPlant} alt='Plastic Plant' />
                        </div>
                        <div className='md:order-1 text-center md:text-start my-auto'>
                            <h3 className='text-[#172806] font-bold uppercase leading-tight tracking-tight'>Cultivating Growth through Teamwork</h3>
                            <p className='text-[#172806] text-xl mt-6 md:mt-10'>At TheChatterBridge, we believe that businesses thrive when nurtured with the right talent. Just like a plant, a business grows stronger with the proper care, attention, and the right team. Our tailor-made offshore solutions are designed to integrate seamlessly into your workflow, cultivating success and driving sustainable growth.</p>
                        </div>
                    </div>
                </Container>
            </div>
            <Container maxWidth="xl">
                <div className='py-10 md:py-20'>
                    <h3 className='font-black uppercase tracking-tight text-[#afe57f] leading-none'>The Chatter Bridge: Your Growth Partner
                    </h3>
                    <h6 className=' tracking-tight text-white mt-3'>Our journey began with a vision to provide advanced tailored talents to businesses of all sizes.</h6>
                    <div className='grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-20 items-start gap-8'>
                        <div className='flex'>
                            <div className='bg-[#afe57f] rounded-xl flex-grow shadow-inner p-8 py-12'>
                                <h4 className='font-black uppercase tracking-tight leading-none text-[#172806]'>Our Mission </h4>
                                <p className='font-semibold text-lg md:text-2xl text-[#172806] mt-10 '>Our mission is to empower companies with high-performing, offshore teams that deliver guaranteed results. With over six years of experience in sales, marketing, and communication, we know what it takes to build successful teams. We are dedicated to helping you expand your sales force, streamline customer support, and enhance operational efficiency through tailored solutions.</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='bg-[#edefec] rounded-xl flex-grow shadow-inner p-8 py-11'>
                                <h4 className='font-black uppercase tracking-tight leading-none flex items-center gap-4 text-[#172806]'>
                                    <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="28.5" cy="28.5" r="28.5" fill="#AFE57F" />
                                        <path d="M13 27.9242L24.3363 39L45 19" stroke="#172806" stroke-width="7.73889" />
                                    </svg>Our Values </h4>
                                <p className='font-semibold text-lg md:text-2xl text-[#172806] mt-10 '>At TheChatterBridge, we believe that the right talent can elevate your business to new heights. Our approach goes beyond the conventional; we focus on understanding your industry, workflow, and culture to find individuals who fit seamlessly into your organization. By bridging the gap between businesses and talent, we ensure that you have the resources necessary for growth.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
            <div className='bg-white'>

                <Container maxWidth="xl">
                    <div className='py-10 md:py-20'>
                        <h3 className='font-black leading-none uppercase tracking-tight text-[#172806]'>Your Competitive Advantage
                        </h3>
                        <h6 className=' tracking-tight text-[#172806] mt-3'>Seamless Integration for Lasting Success in Every Aspect of Your Business
                        </h6>
                        <div className='grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-20 items-start gap-8'>
                            <div className='flex'>
                                <div className='bg-[#afe57f] rounded-xl flex-grow shadow-inner p-8 py-16'>
                                    <h5 className='font-black uppercase tracking-tight leading-none text-[#172806]'>Experience and Expertise </h5>
                                    <p className='font-semibold text-lg md:text-2xl text-[#172806] mt-10 '>TheChatterBridge is founded on years of hands-on experience in sales and marketing. We’ve worked with numerous entrepreneurs to strategize their sales SOPs and optimize their teams’ workflows. Our depth of knowledge allows us to identify and connect you with talent that not only meets your needs but also drives your success.</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='bg-[#172806] rounded-xl flex-grow shadow-inner p-8 py-16'>
                                    <h5 className='font-black uppercase tracking-tight leading-none flex items-center gap-2 text-white'>
                                        <svg width="47" height="53" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="28.5" cy="28.5" r="28.5" fill="#AFE57F" />
                                            <path d="M13 27.9242L24.3363 39L45 19" stroke="#172806" stroke-width="7.73889" />
                                        </svg>Visionary Founders</h5>
                                    <p className='font-semibold text-lg md:text-2xl text-white mt-10 pb-3 '>Founded by Furqan and Shehzer, lifelong friends with a shared dream of helping businesses scale, TheChatterBridge is more than a company—it’s a partnership. We aim to work alongside you, delivering tailor-made solutions that generate real value for your business.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </Container>
            </div>
            <div className=" bg-[#afe57f] py-20">
                <h3 className="font-black leading-none text-[#172806] text-center">Ready to get started?
                </h3>
                <p className="text-[#172806] mt-6 font-semibold text-center">Explore how NETSOL's professional services can strengthen your infrastructure with unparalleled security and uncompromised services.
                </p>
                <div className="w-full justify-center flex mt-10">
                    <ReusableButton text="Connect with us" href="/contact" />
                </div>
            </div>
        </>
    )
}

export default AboutUS
