"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import EmblaCarousel from "./components/EmbalaSlider/EmbalaSLider";
import { Container } from "@mui/material";
import costEffiecentImage from "../../public/asset/home-1.jpg";
import InfoSection from "./components/CustomTextSection/InfoSection";
import GoalPng from "../../public/asset/goal.svg";
import SuccessPng from "../../public/asset/sucess.svg";
import SavingPng from "../../public/asset/saving.svg";
import ServicesImage from "../../public/asset/services-home.jpg";
import ReusableButton from "./components/ReusableButton/ReusableButton";

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
  ]



  return (
    <>
      <EmblaCarousel options={OPTIONS} />

      {InforSectionData.map((section, index) => (
        <div className="mx-5 bg-[#afe57f] rounded-2xl md:rounded-[60px]">
          <InfoSection key={index} {...section} />
        </div>
      ))}
      <div className="mx-5 bg-[#edefec] rounded-2xl md:rounded-[60px]">
        <Container maxWidth="xl">
          <div className="py-16 md:py-32 ">
            <h3 className="font-black leading-none text-[#172806] text-center">Empowering Your Business <br/> with Proven Success
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-24 gap-10">
              <div className="flex justify-start items-start gap-3">
                <Image src={GoalPng} alt="Goal Image" quality={100} />
                <div>
                  <p className="text-[#172806] font-semibold text-2xl leading-none ">20+ Successful Projects</p>
                  <p className="text-[#172806] text-sm mt-4 font-semibold">With over 20 projects completed across multiple industries, we have a proven track record of helping businesses expand their teams and scale effectively. Our experience ensures that every team we build delivers on your unique needs.
                  </p>
                </div>
              </div>

              <div className="flex justify-start items-start gap-3">
                <Image src={SavingPng} alt="Goal Image" quality={100} />
                <div>
                  <p className="text-[#172806] font-semibold text-2xl leading-none ">$2.09M saved per company</p>
                  <p className="text-[#172806] text-sm mt-4 font-semibold">Cybersecurity tools backed with AI <br />can bring savings of over $2.09 million per <br />company in the United States.</p>
                </div>
              </div>

              <div className="flex justify-start items-start gap-3">
                <Image src={SuccessPng} alt="Goal Image" quality={100} />
                <div>
                  <p className="text-[#172806] font-semibold text-2xl leading-none ">48% more crucial</p>
                  <p className="text-[#172806] text-sm mt-4 font-semibold">SMBs and enterprises now believe <br /> that AI will be  essential in protecting <br /> against cybersecurity risks and threats.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {InforSectionData.map((section, index) => (
        <div className="mx-5 bg-[#afe57f] rounded-2xl md:rounded-[60px]">
          <InfoSection key={index} {...section} />
        </div>
      ))}
      <div className="mx-5 py-16 md:py-32 bg-[#edefec] rounded-2xl md:rounded-[60px]">
        <Container maxWidth="xl">
          <div className=" grid grid-cols-2 items-center gap-20">
            <Image src={ServicesImage} alt="Services Image" className="rounded-xl" quality={100} />
            <div>
              <h4 className="text-[#172806] font-extrabold text-end leading-none">Endlessly Amazing Services provided by our team</h4>
              <div className="grid grid-cols-2 gap-8 mt-10">
                <div className="text-black text-end">
                  <h5 className="font-semibold">Upfron</h5>
                  <p>it is a good oportunity to invest Utilities for controlling the leading (line height) of an element.

                  </p>
                </div>
                <div className="text-black text-end ">
                  <h5 className="font-semibold">Upfron</h5>
                  <p>it is a good oportunity to invest Utilities for controlling the leading (line height) of an element.

                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-5">
                <div className="text-black text-end">
                  <h5 className="font-semibold">Upfron</h5>
                  <p>it is a good oportunity to invest Utilities for controlling the leading (line height) of an element.

                  </p>
                </div>
                <div className="text-black text-end ">
                  <h5 className="font-semibold">Upfron</h5>
                  <p>it is a good oportunity to invest Utilities for controlling the leading (line height) of an element.

                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-5">
                <div className="text-black text-end">
                  <h5 className="font-semibold">Upfron</h5>
                  <p>it is a good oportunity to invest Utilities for controlling the leading (line height) of an element.

                  </p>
                </div>
                <div className="text-black text-end ">
                  <h5 className="font-semibold">Upfron</h5>
                  <p>it is a good oportunity to invest Utilities for controlling the leading (line height) of an element.

                  </p>
                </div>
              </div>
            </div>
          </div>

        </Container>
      </div>
      <div className=" bg-[#afe57f] py-20 mt-16">
        <h3 className="font-black leading-none text-[#172806] text-center">Ready to get started?
        </h3>
        <p className="text-[#172806] mt-6 font-semibold text-center">Explore how NETSOL's professional services can strengthen your infrastructure with unparalleled security and uncompromised services.
        </p>
        <div className="w-full justify-center flex mt-10">
          <ReusableButton text="Connect with us" href="/contact" />
        </div>
      </div>
    </>
  );
}
