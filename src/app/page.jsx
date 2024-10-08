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


      <div className=" bg-[#333c4d] pb-52 md:pb-64 ">
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
              <div className="bg-[#333c4d] rounded-xl flex-grow shadow-inner p-8 py-12">
                <h4 className="font-black uppercase flex items-center gap-4 tracking-normal leading-none text-[#E7E5E4]">
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
                    <circle cx="28.5" cy="28.5" r="28.5" fill="#AFE57F" />
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

      <div className=" bg-[#afe57f] ">
        <InfoSection {...InforSectionData[1]} />
      </div>
      <div className=" py-16 md:py-24 ">
        <Container maxWidth="xl">
          <h3 className="text-[#afe57f] font-extrabold uppercase text-center leading-none">Our Services</h3>
          <div className=" grid md:grid-cols-2 mt-12 lg:grid-cols-3 gap-5">
            {
              servicesData.map((service, index) => (
                <Link key={index} href="/services">
                  <div className="bg-[#edefec] good-glass cursor-pointer text-[#172806] flex flex-col rounded-lg p-5 py-16 hover:shadow-lg hover:shadow-[#b8db94] items-center justify-center">
                    <div className="min-h-36">
                      <Image src={service.image} alt="Customer Support" quality={100} width={200} />
                    </div>
                    <h6 className="font-semibold text-center mt-5">{service.title}</h6>
                  </div>
                </Link>
              ))
            }
            {/* <div className="bg-[#edefec] cursor-pointer text-[#172806] flex flex-col rounded-lg p-5 py-16 hover:shadow-lg hover:shadow-[#b8db94] items-center justify-center">
              <Image src={CustomerSupport} alt="Customer Support" quality={100} width={200} />
              <h6 className="font-semibold text-center mt-5">Customer Support</h6>
            </div> */}
          </div>

        </Container>
      </div>
      <div className='bg-white py-16 md:py-24'>
        <Container maxWidth="xl">
          <h2 className='font-black uppercase tracking-normaler text-[#172806]'>What's In It For You?
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 items-start'>
            <ServiceCard
              imageSrc={TeamBuilding}
              altText="services"
              category="Custom Team Building"
              title="Custom-Fit Solutions"
              description="Every business relies on solid administrative support, but generic solutions won’t cut it. The Chatter Bridge delivers personalized admin and support services tailored to fit your unique operational demands"
            />
            <ServiceCard
              imageSrc={Scalable}
              altText="services"
              category="Scalability"
              title="Scalability That Keeps Up with You"
              description="From nimble start-ups to large enterprises, our services adapt and scale effortlessly to match your evolving business needs"
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
  );
}
