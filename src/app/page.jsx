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
import Scalable from "../../public/asset/scalabale-business.jpg";

export default function Home() {
  const OPTIONS = { dragFree: false, loop: true }
  const SLIDE_COUNT = 5
  const InforSectionData = [
    {
      "title": "Connecting Businesses with Custom Talent",
      "subtitle": "Tailored Teams<br/> for Real Results",
      "description": "With over 6 years of experience in sales, marketing, and communication, we’ve mastered the art of building high-performing offshore teams. At TheChatterBridge, we specialize in matching businesses with talent perfectly aligned to their industry, culture, and goals.",
      "buttonText": "Explore Our Services",
      "buttonHref": "/services",
      "imageSrc": costEffiecentImage,
      "imageAlt": "Cost Efficient Image",
      "reverseLayout": false,
      'listPoints': ['Custom Talent Acquisition', 'Cost-Effective Solutions'] // List for this section

    },
    {
      "title": "Goal-oriented Solutions for Your Business",
      "subtitle": "Elite Talent, <br/>Exceptional sKILLS",
      "description": "Our offshore professionals are handpicked to bring specialized skills and industry knowledge to your business. Trained to meet your exact requirements, they seamlessly integrate into your operations, ensuring consistent performance and real results.",
      "buttonText": "Request a proposal",
      "buttonHref": "/contact",
      "imageSrc": ServicesImage2,
      "imageAlt": "Cost Efficient Image",
      "reverseLayout": true,
      'listPoints': ['Tailored talent aligned with your business needs', 'Skilled teams that deliver measurable impact'] // List for this section
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


      <div className=" bg-[#afe57f] ">
        <InfoSection {...InforSectionData[0]} />
      </div>

      <div className=" bg-[#edefec]">
        <Container maxWidth="xl">
          <div className="py-16 md:py-32 ">
            <h3 className="font-black hidden md:block leading-none uppercase text-[#172806] text-center">Trusted by 20+ Businesses for Our Tailored Solutions</h3>
            <h5 className="font-black md:hidden leading-none uppercase text-[#172806] text-center">Trusted by 20+ Businesses for Our Tailored Solutions</h5>
            <div className="grid grid-cols-2 md:grid-cols-3 mt-16 md:mt-24">
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

            </div>
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
          <h2 className='font-black uppercase tracking-tighter text-[#172806]'>What's In It For You?
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 items-start'>
            <ServiceCard
              imageSrc={TeamBuilding}
              altText="services"
              category="Custom Team Building"
              title="Custom-Fit Solutions"
              description="Admin is the backbone of any business, but one size definitely doesn’t fit all. Big Outsource tailors our services to meet your unique admin and support sv demands."
            />
            <ServiceCard
              imageSrc={Scalable}
              altText="services"
              category="Scalability"
              title="Scalability That Keeps Up with You"
              description="Whether you're a small start-up or a sprawling enterprise, we scale our services to meet your changing needs."
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
