import React from 'react';
import { Container } from '@mui/material';
import services1 from '../../../public/asset/services-1.jpg';
import services2 from '../../../public/asset/services-2.jpg';
import services3 from '../../../public/asset/services-3.jpg';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import Image from 'next/image';
import ReusableButton from '../components/ReusableButton/ReusableButton';
import chatsupport from '../../../public/asset/chat-support-services.jpg';
import virtualassistant from '../../../public/asset/virtual-assistant.webp';
import telemarketing from '../../../public/asset/telemarketing-services.jpg';
import customerSupport from '../../../public/asset/customer-support-services.png';
import answeringServices from '../../../public/asset/answering-service-services.jpg';
import emailSupport from '../../../public/asset/email-support-services.png';
import carSmoke from "../../../public/asset/car-smokey.gif";
import CancelIcon from '@mui/icons-material/Cancel';

function Services() {
    return (
        <>
            <Container maxWidth="xl">
                <div className='flex flex-col py-24 md:flex-row md:py-36 gap-10 justify-between items-center'>
                    <div className='md:w-[55%] flex flex-col gap-5 md:gap-10 justify-between'>
                        <h2 className='leading-none uppercase font-black text-[#afe57f]'>Optimize Services,
                            Enhance Support
                        </h2>
                        <p className='leading-none text-2xl'>We provide support where your business <br className='hidden md:block' /> needs it the most. Start today and outsource any <br className='hidden md:block' /> business process. Try us for free!.</p>
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
            <div className='mt-44 md:mt-[250px] bg-white py-28'>
                <Container maxWidth="xl" sx={{ position: "relative", }}>
                    <div className="flex justify-center">
                        <Image src={carSmoke} alt="car smoke" height={700} className="absolute md:-top-[550px] -top-[330px]" />
                    </div>
                    <div className="">
                        <h3 className="font-black uppercase tracking-tight text-[#172806] leading-none">
                            Efficient Taxi Dispatching Services
                        </h3>
                        <h6 className=" tracking-tight text-[#172806] mt-3">
                            24/7 Dispatching to Keep Your Fleet Moving
                        </h6>
                        <div className="grid grid-cols-1 md:grid-cols-2 mt-16 items-start gap-8">
                            <div className="flex">
                                <div className="bg-[#afe57f] rounded-xl flex-grow shadow-inner p-8 py-12">
                                    <h4 className="font-black uppercase flex items-center gap-4 tracking-tight leading-none text-[#172806]">
                                        <CancelIcon sx={{ fontSize: "57px", color: "red" }} />Ineffecient Way
                                    </h4>
                                    <ul className="list-disc font-semibold text-lg md:text-2xl md:ml-10 list-outside text-[#172806] mt-10">
                                        <li className="mt-3">Hiring and maintaining an onsite dispatch team with expensive salaries.</li>
                                        <li className="mt-3">Dispatchers available only during business hours, leading to downtime.</li>
                                        <li className="mt-3">No real-time tracking or updates.</li>
                                        <li className="mt-3">Increased overhead from managing in-house teams.</li>
                                        <li className="mt-3">Lack of access to global talent and resources.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="bg-[#edefec] rounded-xl flex-grow shadow-inner p-8 py-12">
                                    <h4 className="font-black uppercase tracking-tight leading-none flex items-center gap-4 text-[#172806]">
                                        <svg
                                            width="57"
                                            height="57"
                                            viewBox="0 0 57 57"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="28.5" cy="28.5" r="28.5" fill="#AFE57F" />
                                            <path
                                                d="M13 27.9242L24.3363 39L45 19"
                                                stroke="#172806"
                                                stroke-width="7.73889"
                                            />
                                        </svg>
                                        Chatter Bridge Way
                                    </h4>
                                    <ul className="list-disc font-semibold text-lg md:text-2xl md:ml-10 list-outside text-[#172806] mt-10">
                                        <li className="mt-3">Remote, expert dispatchers at a fraction of the cost.                  </li>
                                        <li className="mt-3">Scalable solutions tailored to your fleet’s needs.                  </li>
                                        <li className="mt-3">Real-time tracking and communication for drivers and passengers.                  </li>
                                        <li className="mt-3">Reduced overhead with seamless outsourcing.                  </li>
                                        <li className="mt-3">Flexible services that adapt to the size and specific needs of your operation.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='bg-[#edefec] py-16 md:py-24'>
                <Container maxWidth="xl">
                    <h2 className='font-black uppercase tracking-tighter text-[#3d3f3b]'>Services designed to HELP YOU grow </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 items-start'>
                        <ServiceCard
                            imageSrc={customerSupport}
                            altText="services"
                            category="Customer Support"
                            title="Make Every Customer Feel Valued"
                            description="Tailored responses and attention to individual needs elevate the support experience, fostering a strong connection with your brand. Personalization is key to exceeding expectations and securing loyalty.
                            <br/>By anticipating customer issues and offering solutions before they escalate, we demonstrate your brand’s commitment to their satisfaction. 
                            <br/><br/>
                             <i>
                             Get Your Outsourced Customer Support Services Up and Running in Less Than 7 Days!
                             </i>"
                        />
                        <ServiceCard
                            imageSrc={telemarketing}
                            altText="services"
                            category="Telemarketing"
                            title="Boost Sales, Build Connections"
                            description="Our telemarketing experts connect you with potential clients, helping you grow your business through personalized outreach and effective communication strategies that drive conversions.
                            <br/>
                            Leverage our expertise in managing inbound and outbound sales campaigns to efficiently hit your customer contact goals. 
                            Let us handle the complexities of telemarketing, allowing you to focus on your core business.<br/><br/>
                             <i>
                             3x Your Sales with Outsourced Telemarketing Services
                             </i>
                            "
                        />
                    </div>
                </Container>
            </div>
            <div className='bg-[#afe57f] py-16 md:py-24'>
                <h2 className='hidden md:block font-black uppercase tracking-tighter md:text-center text-[#3d3f3b]'>Streamlined Communication, Anytime</h2>
                <h3 className='md:hidden block font-black uppercase tracking-tighter md:text-center text-[#3d3f3b]'>Streamlined Communication, Anytime</h3>

                <Container maxWidth="xl">
                    <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 items-start'>
                        <ServiceCard
                            imageSrc={chatsupport}
                            altText="Chat Support"
                            category="Chat Support"
                            title="Real-Time Solutions, Real Results"
                            description="Connect instantly with your customers on live chat at a fraction of the cost. Lower First Response Times (FRTs), boost customer satisfaction and more with live chat support outsourcing.
                            <br/>Engage your customers instantly with our live chat support. We provide prompt, professional assistance, ensuring quick resolutions and a seamless customer experience every time.
                            <br/><br/>
                             <i>
                            Get Your Outsourced Live Chat Up and Running in Less Than a Week!
                             </i>"
                        />
                        <ServiceCard
                            imageSrc={virtualassistant}
                            altText="services"
                            category="Virtual Assistant"
                            title="Productivity Without Boundaries"
                            description="Our virtual assistants handle administrative tasks, scheduling, and more, allowing you to focus on what matters most.
                             We offer flexible, reliable support to streamline your day-to-day operations. </br>
                             We match you with virtual assistants whose skills align with your specific business requirements, ensuring optimal productivity. Make your business life easy by hiring the best VAs – quickly!

                                        <br/><br/>
                                                                    <i>
                                                                    Optimize Your Workflow with Professional Virtual Assistance
                                                                    </i>
                                        "
                        />
                    </div>
                </Container>
            </div>
            <div className='bg-white py-16 md:py-24'>
                <h2 className='font-black uppercase tracking-tighter md:text-center pl-5 text-[#172806]'>Efficiency Through Tailored Assistance                    </h2>
                <Container maxWidth="xl">

                    <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 items-start'>
                        <ServiceCard
                            imageSrc={answeringServices}
                            altText="services"
                            category="Answering Services"
                            title="Never Miss a Call Again"
                            description="Ensure every call is answered with our top-tier outsourced answering services. Enhance your customer experience with professional, courteous, and prompt responses, available 24/7.
                            <br/>Our answering services are designed to help you manage high call volumes, ensuring that every customer inquiry is addressed promptly and professionally.
                            <br/><br/>
                                <i>
                                Get Your Outsourced Answering and Running in < 7 Days!
                                </i>
                            "
                        />
                        <ServiceCard
                            imageSrc={emailSupport}
                            altText="services"
                            category="Email Support"
                            title="Timely Responses, Exceptional Service"
                            description="Our email support team delivers quick, clear, and helpful responses to customer inquiries. We handle everything from simple questions to complex issues, ensuring high customer satisfaction.
                            <br/>
                            Stay on top of your inbox with quick replies, personalized attention, and clear solutions using the best-in-class email support outsourcing service

                            <br/><br/>
                                <i>
                               Launch Your Email Support Campaign right now.
                                </i>
"
                        />
                    </div>
                </Container>
            </div>
            <div className=" bg-[#afe57f] py-16">
                <h3 className="font-black leading-none uppercase text-[#172806] text-center">
                    Ready to get started?
                </h3>
                <p className="text-[#172806] mt-6 font-semibold text-center">
                    Discover how TheChatterBridge’s tailored solutions can enhance your business operations with exceptional talent, seamless integration, and unmatched support.
                </p>
                <div className="w-full justify-center flex mt-6">
                    <ReusableButton text="Connect with us" href="/contact" />
                </div>
            </div>
        </>
    )
}

export default Services
