"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import EmblaCarousel from "./components/EmbalaSlider/EmbalaSLider";
import { Container } from "@mui/material";
import CountingNumberComponent from "./components/CountingNumber/CountingNumberComponent";
import costEffiecentImage from "../../public/asset/cost-efficeint-never-cheap.jpg";
import InfoSection from "./components/CustomTextSection/InfoSection";
import Info2ndImage from "../../public/asset/image-2nd-portion (3).png";
import GoalPng from "../../public/asset/goal.svg";
import SuccessPng from "../../public/asset/sucess.svg";
import SavingPng from "../../public/asset/saving.svg";

const MyCustomButton = dynamic(() => import('./components/CustomButton/CustomButton'), {
  ssr: false, // Disable server-side rendering for this component
});

export default function Home() {
  const OPTIONS = { dragFree: false, loop: true }
  const SLIDE_COUNT = 5
  const InforSectionData = [
    {
      "title": "Reduce Operational Cost",
      "subtitle": "Cost-Efficient,<br/>But Never Cheap",
      "description": "Quality service doesn’t have to break the bank. We’ve mastered the art of providing top-tier service without top-tier costs.",
      "buttonText": "Get Started",
      "buttonHref": "/contact",
      "imageSrc": costEffiecentImage,
      "imageAlt": "Cost Efficient Image",
      "reverseLayout": false
    },
    {
      "title": "Boost Your Productivity",
      "subtitle": "Work Smart,<br/>Not Hard",
      "description": "Achieve your goals with minimal effort. Leverage the best tools and practices to skyrocket your efficiency.",
      "buttonText": "Learn More",
      "buttonHref": "/learn-more",
      "imageSrc": Info2ndImage,
      "imageAlt": "Boost Productivity",
      "reverseLayout": true
    }
  ]



  return (
    <>
      <EmblaCarousel options={OPTIONS} />

      {InforSectionData.map((section, index) => (
        <div className="mx-5 bg-[#ff6347] rounded-2xl md:rounded-[60px]">
          <InfoSection key={index} {...section} />
        </div>
      ))}
      <div className="mx-5 bg-[#ff6347] rounded-2xl md:rounded-[60px]">
        <Container maxWidth="xl">
          <div className="py-16 md:py-32 ">
            <h3 className="font-black leading-none text-white text-center">AI-powered insights on information<br /> security services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-24 gap-10">
              <div className="flex justify-start items-start gap-3">
                <Image src={GoalPng} alt="Goal Image" quality={100} />
                <div>
                  <p className="text-white font-semibold text-2xl leading-none ">48% more crucial</p>
                  <p className="text-white text-sm mt-4 font-semibold">SMBs and enterprises now believe <br /> that AI will be  essential in protecting <br /> against cybersecurity risks and threats.
                  </p>
                </div>
              </div>

              <div className="flex justify-start items-start gap-3">
                <Image src={SavingPng} alt="Goal Image" quality={100} />
                <div>
                  <p className="text-white font-semibold text-2xl leading-none ">$2.09M saved per company</p>
                  <p className="text-white text-sm mt-4 font-semibold">Cybersecurity tools backed with AI <br />can bring savings of over $2.09 million per <br />company in the United States.</p>
                </div>
              </div>

              <div className="flex justify-start items-start gap-3">
                <Image src={SuccessPng} alt="Goal Image" quality={100} />
                <div>
                  <p className="text-white font-semibold text-2xl leading-none ">48% more crucial</p>
                  <p className="text-white text-sm mt-4 font-semibold">SMBs and enterprises now believe <br /> that AI will be  essential in protecting <br /> against cybersecurity risks and threats.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className=" bg-[#ff6347] py-20 my-16">
        <h3 className="font-black leading-none text-white text-center">Ready to get started?
        </h3>
        <p className="text-white mt-6 font-semibold text-center">Explore how NETSOL's professional services can strengthen your infrastructure with unparalleled security and uncompromised services.
        </p>
        <div className="w-full justify-center flex mt-10">
          <MyCustomButton text="Connect with us" href="/contact" />
        </div>
      </div>
    </>
  );
}
