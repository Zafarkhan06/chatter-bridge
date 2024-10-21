import React from 'react';
import { Container } from '@mui/material';
import services1 from '../../../public/asset/consult-2.jpg';
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
import AnimatedWrapper from '../components/AnimatedFramerMotion/LeftInViewAnimation';

function Services() {
    return (
        <div className='overflow-hidden'>
            <Container maxWidth="xl">
                <div className='flex flex-col py-24 md:flex-row md:py-36 gap-10 justify-between items-center'>
                    <div className='md:w-[55%] flex flex-col gap-5 md:gap-8 justify-between'>
                        <AnimatedWrapper from='right' delay={0} duration={0.7}>
                            <h3 className='leading-none uppercase font-black text-[#E7E5E4] text-balance'>Maximize Efficiency, Elevate Your Support Solutions
                            </h3>
                        </AnimatedWrapper>
                        <AnimatedWrapper from='left' delay={0.2} duration={0.7}>
                            <p className='leading-tight text-2xl'> Empower your business with expert support exactly where it’s needed most.Outsource any business process with ease. <br />Get started today with a free trial!</p>
                        </AnimatedWrapper>
                        <AnimatedWrapper from='bottom' delay={0.4} duration={0.7}>
                            <button className='coolBeans w-44'>
                                Contact US
                            </button>
                        </AnimatedWrapper>
                    </div>
                    <div className='md:w-[45%]'>
                        <AnimatedWrapper from='right' delay={0.6} duration={0.7}>
                            <Image src={services1} alt='services' className='w-full h-full rounded-lg' />
                        </AnimatedWrapper>
                    </div>
                </div>
            </Container>
            <div className='mt-44 md:mt-[250px] bg-[#444c58] py-28'>
                <Container maxWidth="xl" sx={{ position: "relative", }}>
                    <div className="flex justify-center">
                        <Image src={carSmoke} alt="car smoke" height={700} className="absolute md:-top-[550px] -top-[330px]" />
                    </div>
                    <div className="">
                        <AnimatedWrapper from="top" delay={0} duration={1}>
                            <h3 className="font-black uppercase tracking-tight text-[#E7E5E4] leading-none">
                                Efficient Taxi Dispatching Services
                            </h3>
                        </AnimatedWrapper>
                        <AnimatedWrapper from="left" delay={0} duration={1}>
                            <h6 className=" tracking-tight text-[#E7E5E4] mt-3">
                                24/7 Dispatching to Keep Your Fleet Moving
                            </h6>
                        </AnimatedWrapper>
                        <div className="grid grid-cols-1 md:grid-cols-2 mt-16 items-start gap-8">
                            <AnimatedWrapper from="left" delay={0} duration={1}>
                                <div className="flex">
                                    <div className="bg-[#192128] rounded-xl flex-grow shadow-inner p-8 py-12">
                                        <h4 className="font-black uppercase flex items-center gap-4 tracking-tight leading-none text-[#E7E5E4]">
                                            <CancelIcon sx={{ fontSize: "57px", color: "red" }} />Ineffecient Way
                                        </h4>
                                        <ul className="list-disc font-semibold text-lg md:text-2xl md:ml-10 list-outside text-[#E7E5E4] mt-10">
                                            <li className="mt-3">Hiring and maintaining an onsite dispatch team with expensive salaries.</li>
                                            <li className="mt-3">Dispatchers available only during business hours, leading to downtime.</li>
                                            <li className="mt-3">No real-time tracking or updates.</li>
                                            <li className="mt-3">Increased overhead from managing in-house teams.</li>
                                            <li className="mt-3">Lack of access to global talent and resources.</li>
                                        </ul>
                                    </div>
                                </div>
                            </AnimatedWrapper>
                            <AnimatedWrapper from="bottom" delay={0} duration={1}>
                                <div className="flex">
                                    <div className="bg-[#edefec] rounded-xl flex-grow shadow-inner p-8 py-12">
                                        <h4 className="font-black uppercase tracking-tight leading-none flex items-center gap-4 text-[#444c58]">
                                            <svg
                                                width="57"
                                                height="57"
                                                viewBox="0 0 57 57"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx="28.5" cy="28.5" r="28.5" fill="#66cc8a" />
                                                <path
                                                    d="M13 27.9242L24.3363 39L45 19"
                                                    stroke="#444c58"
                                                    stroke-width="7.73889"
                                                />
                                            </svg>
                                            Chatter Bridge Way
                                        </h4>
                                        <ul className="list-disc font-semibold text-lg md:text-2xl md:ml-10 list-outside text-[#444c58] mt-10">
                                            <li className="mt-3">Remote, expert dispatchers at a fraction of the cost.                  </li>
                                            <li className="mt-3">Scalable solutions tailored to your fleet’s needs.                  </li>
                                            <li className="mt-3">Real-time tracking and communication for drivers and passengers.                  </li>
                                            <li className="mt-3">Reduced overhead with seamless outsourcing.                  </li>
                                            <li className="mt-3">Flexible services that adapt to the size and specific needs of your operation.</li>
                                        </ul>
                                    </div>
                                </div>
                            </AnimatedWrapper>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='bg-[#192128] py-16 md:py-24'>
                <Container maxWidth="xl">
                    <AnimatedWrapper from='left' delay={0} duration={0.7}>
                        <h4 className='font-black uppercase tracking-tighter text-[#E7E5E4]'>Tailored Solutions to Fuel Your Business Growth </h4>
                    </AnimatedWrapper>
                    <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 items-start'>
                        <ServiceCard
                            imageSrc={customerSupport}
                            altText="services"
                            category="Customer Support"
                            title="Make Every Customer Feel Valued"
                            description="Personalized responses and focused attention to each customer's needs create a superior support experience that strengthens your brand's connection with them. Anticipating challenges and providing proactive solutions showcase your brand’s dedication to customer satisfaction, exceeding expectations and building lasting loyalty. 
                            <br/><br/>
                             <i>
                             Get your outsourced customer support fully operational in under 7 days!
                             </i>"
                        />
                        <ServiceCard
                            imageSrc={telemarketing}
                            altText="services"
                            category="Telemarketing"
                            title="MORE OUTREACH, MORE SALES! "
                            description="Our telemarketing specialists help you engage with potential clients through tailored outreach and proven communication strategies that boost conversions. Harness our expertise in managing both inbound and outbound sales campaigns to consistently meet your customer contact targets. Leave the complexities of telemarketing to us, so you can stay focused on growing your core business.<br/><br/>
                             <i>
                             Triple Your Sales with Expert Outsourced Telemarketing Services!
                             </i>
                            "
                        />
                    </div>
                </Container>
            </div>
            <div className='bg-[#444c58] py-16 md:py-24'>
                <Container maxWidth="xl">
                    <AnimatedWrapper from='right' delay={0} duration={0.7}>
                        <h3 className='hidden md:block font-black uppercase tracking-tighter md:text-start text-[#E7E5E4]'>Seamless Communication, Around the Clock</h3>
                        <h4 className='md:hidden block font-black uppercase tracking-tighter md:text-center text-[#E7E5E4]'>Seamless Communication, Around the Clock</h4>
                    </AnimatedWrapper>
                    <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 items-start'>
                        <ServiceCard
                            imageSrc={chatsupport}
                            isBlack={false}
                            altText="Chat Support"
                            category="Chat Support"
                            title="RAPID RESPONSE, REAL CONNECTION, INSTANT SOLUTIONS, HAPPY CUSTOMERS!"
                            description="Instantly have your customers connected to a real rep through cost-effective live chat support. Reduce First Response Times (FRTs), enhance customer satisfaction, and elevate engagement with our outsourced live chat solutions. Deliver fast, professional assistance to ensure seamless customer interactions and rapid issue resolution.<br/><br/>
                             <i>
                            Launch Your Outsourced Live Chat Support in Under a Week!
                             </i>"
                        />
                        <ServiceCard
                            imageSrc={virtualassistant}
                            altText="services"
                            isBlack={false}
                            category="Virtual Assistant"
                            title="LIMITLESS PRODUCTIVITY"
                            description="Our virtual assistants expertly manage administrative tasks, scheduling, and more, freeing you to concentrate on what truly matters. We provide flexible and dependable support to enhance your daily operations. We pair you with virtual assistants whose expertise perfectly aligns with your unique business needs, ensuring maximum productivity. Simplify your business operations by quickly hiring top-notch VAs!<br/><br/>
                                                                    <i>
                                                                    Enhance Your Workflow with Professional Virtual Assistance!
                                                                    </i>
                                        "
                        />
                    </div>
                </Container>
            </div>
            <div className='bg-[#192128] py-16 md:py-24'>

                <Container maxWidth="xl">
                    <AnimatedWrapper from='left' delay={0} duration={0.7}>
                        <h4 className='font-black uppercase tracking-tighter  text-[#E7E5E4]'>Streamline Operations with Customized Assistance
                        </h4>
                    </AnimatedWrapper>
                    <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 items-start'>
                        <ServiceCard
                            imageSrc={answeringServices}
                            altText="services"
                            category="Answering Services"
                            title="Never Miss a Call Again"
                            description="Guarantee that every call is handled with our premium outsourced answering services. Elevate your customer experience with professional, friendly, and timely responses available around the clock. Our answering solutions are tailored to efficiently manage high call volumes, ensuring that every customer inquiry is met with prompt and professional care.
<br/><br/>
                                <i>
                                Launch Your Outsourced Answering Service in Less Than 7 Days!

                                </i>
                            "
                        />
                        <ServiceCard
                            imageSrc={emailSupport}
                            altText="services"
                            category="Email Support"
                            title="Timely Responses, Exceptional Service"
                            description="Our email support team provides fast, clear, and effective responses to all customer inquiries. We manage everything from straightforward questions to intricate concerns, guaranteeing exceptional customer satisfaction. Keep your inbox organized with swift replies, personalized care, and comprehensive solutions through our top-tier email support outsourcing service.
<br/><br/>
                                <i>
                              Initiate Your Email Support Campaign Today!

                                </i>
"
                        />
                    </div>
                </Container>
            </div>
            <div className=" bg-[#E7E5E4] py-16">
                <AnimatedWrapper from="top" delay={0.1} duration={1}>
                    <h3 className="font-black leading-none uppercase text-[#444c58] text-center">
                        Ready to get started?
                    </h3>
                </AnimatedWrapper>
                <AnimatedWrapper from="left" delay={0.2} duration={1}>
                    <p className="text-[#444c58] mt-6 font-semibold text-center">
                        Discover how TheChatterBridge’s tailored solutions can enhance your business operations with exceptional talent, seamless integration, and unmatched support.
                    </p>
                </AnimatedWrapper>
                <AnimatedWrapper from="bottom" delay={0.3} duration={1}>
                    <div className="w-full justify-center flex mt-6">
                        <ReusableButton text="Connect with us" href="/contact" />
                    </div>
                </AnimatedWrapper>
            </div>
        </div>
    )
}

export default Services
