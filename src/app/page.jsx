"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import EmblaCarousel from "./components/EmbalaSlider/EmbalaSLider";
import { Container } from "@mui/material";
import costEffiecentImage from "../../public/asset/home-1.jpg";
import InfoSection from "./components/CustomTextSection/InfoSection";
import ServicesImage2 from "../../public/asset/chatter-bridge-home-2.jpeg";
import ServicesImage from "../../public/asset/services-home.jpg";
import ReusableButton from "./components/ReusableButton/ReusableButton";
import CountingNumberComponent from "./components/CountingNumber/CountingNumberComponent";
import CustomerSupport from "../../public/asset/customer-support.png";
import teleMarketing from "../../public/asset/tele-marketing.png";
import chatSupport from "../../public/asset/chatsupport.png";
import virtualAssistant from "../../public/asset/virtual assistant (2).png";
import answeringServices from "../../public/asset/answering-services (1).png";
import emailSupport from "../../public/asset/palnt-plastic (3).png";
import Link from "next/link";
import ServiceCard from "./components/ServiceCard/ServiceCard";
import TeamBuilding from "../../public/asset/team-building (1).png";
import Scalable from "../../public/asset/scalable-business.png";
import carSmoke from "../../public/asset/car-smokey.gif";
import CancelIcon from '@mui/icons-material/Cancel';
import EmblaCarouselSlider from "./components/Reusable-Slider/ReusableSlider";

export default function Home() {
  const OPTIONS = { dragFree: false, loop: true }
  const SLIDE_COUNT = 5
  const InforSectionData = [
    {
      "title": "Connecting Businesses with Custom Talent ",
      "subtitle": "Connecting You<br/> with the Right Fit",
      "description": "With over 6 years of experience in sales, marketing, and communication, we’ve mastered the art of building high-performing offshore teams. At TheChatterBridge, we specialize in matching businesses with talent perfectly aligned to their industry, culture, and goals.",
      "buttonText": "Explore Our Services",
      "buttonHref": "/services",
      "imageSrc": costEffiecentImage,
      "imageAlt": "Cost Efficient Image",
      "reverseLayout": false,
      // 'listPoints': ['Custom Talent Acquisition', 'Cost-Effective Solutions'] // List for this section

    },
    {
      "title": "Goal-oriented Solutions for Your Business",
      "subtitle": "Business Expansion <br/>that saves costs",
      "description": "Our offshore professionals are industry specific knowledge to bring specialized skills and industry knowledge to your businesses. Trained to meet your exact requirements, they seamlessly integrate into your operations, ensuring consistent performance and real results.",
      "buttonText": "Request a proposal",
      "buttonHref": "/contact",
      "imageSrc": ServicesImage2,
      "imageAlt": "Cost Efficient Image",
      "reverseLayout": true,
      // 'listPoints': ['Tailored talent aligned with your business needs', 'Skilled teams that deliver measurable impact'] // List for this section
    }
  ]

  const servicesData = [
    {
      "title": "Customer Support",
      "image": CustomerSupport,
    },
    {
      "title": "Tele Marketing",
      "image": teleMarketing,
    },
    {
      "title": "Chat Support",
      "image": chatSupport,
    },
    {
      "title": "Virtual Assistant",
      "image": virtualAssistant,
    },
    {
      "title": "Answering Services",
      "image": answeringServices,
    },
    {
      "title": "Email Support",
      "image": emailSupport,
    }
  ]



  return (
    <>
      <EmblaCarousel options={OPTIONS} />


      <div className=" bg-[#444c58] pb-52 md:pb-64 ">
        <InfoSection {...InforSectionData[0]} />
      </div>

      <Container maxWidth="xl" sx={{ position: "relative", }}>
        <div className="flex justify-center my-10 md:mt-32">
          <Image src={carSmoke} alt="car smoke" height={700} className="absolute md:-top-[600px] -top-[320px]" />
        </div>
        <div className="mb-20 md:mb-32">
          <h3 className="font-black uppercase tracking-normal text-[#E7E5E4]  leading-none">
            Efficient Taxi Dispatching Services
          </h3>
          <h6 className=" tracking-normal text-[#E7E5E4] mt-3">
            24/7 Dispatching to Keep Your Fleet Moving
          </h6>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-20 items-start gap-8">
            <div className="flex">
              <div className="bg-[#444c58] rounded-xl flex-grow shadow-inner p-8 py-12">
                <h4 className="font-black uppercase flex items-center gap-4 tracking-normal leading-none text-[#E7E5E4]">
                  <CancelIcon sx={{ fontSize: "57px", color: "#E7E5E4" }} />Ineffecient Way
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
            <div className="flex">
              <div className="bg-[#E7E5E4] rounded-xl flex-grow shadow-inner p-8 py-12">
                <h4 className="font-black uppercase tracking-normal leading-none flex items-center gap-4 text-[#444c58]">
                  <svg
                    width="57"
                    height="57"
                    viewBox="0 0 57 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="28.5" cy="28.5" r="28.5" fill="#444c58" />
                    <path
                      d="M13 27.9242L24.3363 39L45 19"
                      stroke="#E7E5E4"
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
          </div>
        </div>
      </Container>

      <div className=" bg-[#E7E5E4]">
        <Container maxWidth="xl">
          <div className="py-16 md:py-32 ">
            <h3 className="font-black leading-none uppercase text-[#444c58] text-center">Domain <span className="text-[#444c58]">expertise</span></h3>
            <h6 className="font-normal leading-none mt-6 text-[#444c58] text-center mb-16">Trusted by 20+ Businesses for Our Customized Solutions</h6>

            <EmblaCarouselSlider />
            {/* <div className="grid grid-cols-2 md:grid-cols-3 mt-16 md:mt-24">
              <div className="flex flex-col justify-start items-center gap-3 border-b-2 border-[#172806] p-8 border-r-2">
                <CountingNumberComponent endNumber={37} text="Successful Projects" />
                <p className="text-[#616E82] text-center text-sm md:text-xl font-medium" >Customer Satisfaction Score Boost
                </p>
              </div>

              <div className="flex flex-col justify-start items-center gap-3 border-b-2 border-[#172806] p-8 md:border-r-2">
                <CountingNumberComponent endNumber={43} text="Successful Projects" />
                <p className="text-[#616E82] text-center text-sm md:text-xl font-medium" >Faster Query Response Times
                </p>
              </div>

              <div className="flex flex-col justify-start items-center gap-3 border-b-2 border-[#172806]  border-r-2 md:border-r-0 p-8 ">
                <CountingNumberComponent endNumber={52} text="Successful Projects" />
                <p className="text-[#616E82] text-center text-sm md:text-xl font-medium" >Reduced Operational Expenses
                </p>
              </div>
              <div className="flex flex-col justify-start items-center gap-3 border-[#172806] p-8  border-b-2 md:border-b-0 md:border-r-2">
                <CountingNumberComponent endNumber={36} text="Successful Projects" />
                <p className="text-[#616E82] text-center text-sm md:text-xl font-medium" >Annual Subscriptions Growth
                </p>
              </div>
              <div className="flex flex-col justify-start items-center gap-3 border-[#172806] p-8 border-r-2">
                <CountingNumberComponent endNumber={36} text="Successful Projects" />
                <p className="text-[#616E82] text-center text-sm md:text-xl font-medium" >Higher Customer Lifetime Value
                </p>
              </div>
              <div className="flex flex-col justify-start items-center gap-3  border-[#172806] p-8 ">
                <CountingNumberComponent endNumber={60} text="Successful Projects" />
                <p className="text-[#616E82] text-center text-sm md:text-xl font-medium" >Improvement in Positive Customer Feedback
                </p>
              </div>

            </div> */}
          </div>
        </Container>
      </div>

      <div className=" bg-[#444c58] ">
        <InfoSection {...InforSectionData[1]} />
      </div>

      <section className="bg-[#E7E5E4]">
        <Container maxWidth="xl">
          <div className="text-center w-full">
            <h4 className="font-black uppercase text-[#444c58] pt-8 md:pt-16">Improve your flow with our services</h4>
            <div className="grid grid-cols-1 md:grid-cols-10 gap-8 md:px-0 lg:px-24 mt-8 md:mt-16 md:!grid-cols-12 md:!px-0 pb-16 md:pb-32">
              <div className="col-span-4 grid grid-cols-4 gap-8 relative px-8 pt-8 pb-14 rounded-xl border overflow-hidden text-left bg-[#E7E5E4] border-[#444c58] " style={{ boxShadow: "rgba(132, 59, 206, 0.15) 0px 4px 24px" }}>
                <div className="col-span-3">
                  <p className="text-h5 font-semibold mb-4 text-[#444c58]">Customer Support</p>
                  <p className="text-sm text-gray-600">Make Every Customer Feel Valued                  </p>
                </div>
                <div className="absolute flex items-center justify-center -bottom-8 -right-8 w-32 h-32">
                  <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 z-0" style={{ transform: "rotate(90deg)" }}></svg>
                  <div className="flex items-center justify-center z-10 rounded-full w-24 h-24 border bg-[#E7E5E4] border-[#444c58]">
                    <div className="icon-container icon-md w-10 h-10 step-feature-card text-[#444c58]" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z"></path>
                      </svg>
                      <path d="M18 20V10m-6 10V4M6 20v-6"></path>
                    </div>
                  </div>
                </div>
              </div>
              <div data-colour="pink" className="col-span-4 grid grid-cols-4 gap-8 relative px-8 pt-8 pb-14 rounded-xl border overflow-hidden text-left bg-[#E7E5E4] border-[#444c58] " style={{ boxShadow: "rgba(132, 59, 206, 0.15) 0px 4px 24px" }}>
                <div className="col-span-3">
                  <p className="text-h5 font-semibold mb-4 text-[#444c58]">Telemarketing</p>
                  <p className="text-sm text-gray-600 capitalize">more outreach, more sales!</p>
                </div>
                <div className="absolute flex items-center justify-center -bottom-8 -right-8 w-32 h-32">
                  <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 z-0" style={{ transform: "rotate(90deg)" }}></svg>
                  <div className="flex items-center justify-center z-10 rounded-full w-24 h-24 border bg-[#E7E5E4] border-[#444c58]">
                    <div className="icon-container icon-md w-10 h-10 step-feature-card text-[#444c58]" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40C0 114.6 114.6 0 256 0S512 114.6 512 256l0 144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24l-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40L464 256c0-114.9-93.1-208-208-208zM144 208l16 0c17.7 0 32 14.3 32 32l0 112c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-48c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64l0 48c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-112c0-17.7 14.3-32 32-32l16 0z" /></svg>
                    </div>
                  </div>
                </div>
              </div>
              <div data-colour="pink" className="col-span-4 grid grid-cols-4 gap-8 relative px-8 pt-8 pb-14 rounded-xl border overflow-hidden text-left bg-[#E7E5E4] border-[#444c58] " style={{ boxShadow: "rgba(132, 59, 206, 0.15) 0px 4px 24px" }}>
                <div className="col-span-3">
                  <p className="text-h5 font-semibold mb-4 text-[#444c58]">Chat Support
                  </p>
                  <p className="text-sm text-gray-600 capitalize">Rapid response, real connection, instant solutions, happy customers!</p>
                </div>
                <div className="absolute flex items-center justify-center -bottom-8 -right-8 w-32 h-32">
                  <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 z-0" style={{ transform: "rotate(90deg)" }}></svg>
                  <div className="flex items-center justify-center z-10 rounded-full w-24 h-24 border bg-[#E7E5E4] border-[#444c58]">
                    <div className="icon-container icon-md w-10 h-10 step-feature-card text-[#444c58]" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" /></svg>
                    </div>
                  </div>
                </div>
              </div>
              <div data-colour="pink" className="col-span-4 grid grid-cols-4 gap-8 relative px-8 pt-8 pb-14 rounded-xl border overflow-hidden text-left bg-[#E7E5E4] border-[#444c58] " style={{ boxShadow: "rgba(132, 59, 206, 0.15) 0px 4px 24px" }}>
                <div className="col-span-3">
                  <p className="text-h5 font-semibold mb-4 text-[#444c58]">Virtual Assistant</p>
                  <p className="text-sm text-gray-600">Limitless Productivity</p>
                </div>
                <div className="absolute flex items-center justify-center -bottom-8 -right-8 w-32 h-32">
                  <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 z-0" style={{ transform: "rotate(90deg)" }}></svg>
                  <div className="flex items-center justify-center z-10 rounded-full w-24 h-24 border bg-[#E7E5E4] border-[#444c58]">
                    <div className="icon-container icon-md w-10 h-10 step-feature-card text-[#444c58]" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M14.5 10a4.5 4.5 0 004.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 01-.493.11 3.01 3.01 0 01-1.618-1.616.455.455 0 01.11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 00-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 103.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01zM5 16a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd"></path>
                        <path d="M14.5 11.5c.173 0 .345-.007.514-.022l3.754 3.754a2.5 2.5 0 01-3.536 3.536l-4.41-4.41 2.172-2.607c.052-.063.147-.138.342-.196.202-.06.469-.087.777-.067.128.008.257.012.387.012zM6 4.586l2.33 2.33a.452.452 0 01-.08.09L6.8 8.214 4.586 6H3.309a.5.5 0 01-.447-.276l-1.7-3.402a.5.5 0 01.093-.577l.49-.49a.5.5 0 01.577-.094l3.402 1.7A.5.5 0 016 3.31v1.277z"></path>
                      </svg>
                      <path d="M18 20V10m-6 10V4M6 20v-6"></path>
                    </div>
                  </div>
                </div>
              </div>
              <div data-colour="pink" className="col-span-4 grid grid-cols-4 gap-8 relative px-8 pt-8 pb-14 rounded-xl border overflow-hidden text-left bg-[#E7E5E4] border-[#444c58] " style={{ boxShadow: "rgba(132, 59, 206, 0.15) 0px 4px 24px" }}>
                <div className="col-span-3">
                  <p className="text-h5 font-semibold mb-4 text-[#444c58]">Answering Services</p>
                  <p className="text-sm text-gray-600">Never Miss A Call Again</p>
                </div>
                <div className="absolute flex items-center justify-center -bottom-8 -right-8 w-32 h-32">
                  <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 z-0" style={{ transform: "rotate(90deg)" }}></svg>
                  <div className="flex items-center justify-center z-10 rounded-full w-24 h-24 border bg-[#E7E5E4] border-[#444c58]">
                    <div className="icon-container icon-md w-10 h-10 step-feature-card text-[#444c58]" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M9.661 2.237a.531.531 0 01.678 0 11.947 11.947 0 007.078 2.749.5.5 0 01.479.425c.069.52.104 1.05.104 1.59 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 01-.332 0C5.26 16.564 2 12.163 2 7c0-.538.035-1.069.104-1.589a.5.5 0 01.48-.425 11.947 11.947 0 007.077-2.75zm4.196 5.954a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path>
                      </svg>
                      <path d="M18 20V10m-6 10V4M6 20v-6"></path>
                    </div>
                  </div>
                </div>
              </div>
              <div data-colour="pink" className="col-span-4 grid grid-cols-4 gap-8 relative px-8 pt-8 pb-14 rounded-xl border overflow-hidden text-left bg-[#E7E5E4] border-[#444c58] " style={{ boxShadow: "rgba(132, 59, 206, 0.15) 0px 4px 24px" }}>
                <div className="col-span-3">
                  <p className="text-h5 font-semibold mb-4 text-[#444c58]">Email Support</p>
                  <p className="text-sm text-gray-600">Timely Responses, Exceptional Service</p>
                </div>
                <div className="absolute flex items-center justify-center -bottom-8 -right-8 w-32 h-32">
                  <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 z-0" style={{ transform: "rotate(90deg)" }}></svg>
                  <div className="flex items-center justify-center z-10 rounded-full w-24 h-24 border bg-[#E7E5E4] border-[#444c58]">
                    <div className="icon-container icon-md w-10 h-10 step-feature-card text-[#444c58]" aria-hidden="true">
                      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M6 4.75A.75.75 0 016.75 4h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 4.75zM6 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 10zm0 5.25a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75zM1.99 4.75a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1v-.01zM1.99 15.25a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1v-.01zM1.99 10a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V10z" clip-rule="evenodd"></path>
                      </svg>
                      <path d="M18 20V10m-6 10V4M6 20v-6"></path> */}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div className=' py-16 md:py-24 bg-[#444c58]'>
        <Container maxWidth="xl">
          <h2 className='font-black uppercase tracking-normaler text-[#E7E5E4]'>What's In It For You?
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 mt-10 text-[#E7E5E4] gap-10 items-start'>
            <ServiceCard
              isBlack={false}
              imageSrc={TeamBuilding}
              altText="services"
              category="Custom Team Building"
              title="Custom-Fit Solutions"
              description="Every business relies on solid administrative support, but generic solutions won’t cut it. The Chatter Bridge delivers personalized admin and support services tailored to fit your unique operational demands"
            />
            <ServiceCard
            isBlack={false}
              imageSrc={Scalable}
              altText="services"
              category="Scalability"
              title="Scalability That Keeps Up with You"
              description="From nimble start-ups to large enterprises, our services adapt and scale effortlessly to match your evolving business needs"
            />
          </div>
        </Container>
      </div>
      <div className=" bg-[#E7E5E4] py-16">
        <h3 className="font-black leading-none uppercase text-[#444c58] text-center">
          Ready to get started?
        </h3>
        <p className="text-[#444c58] mt-6 font-semibold text-center">
          Discover how TheChatterBridge’s tailored solutions can enhance your business operations with exceptional talent, seamless integration, and unmatched support.
        </p>
        <div className="w-full justify-center flex mt-6">
          <ReusableButton text="Connect with us" href="/contact" />
        </div>
      </div>
    </>
  );
}
