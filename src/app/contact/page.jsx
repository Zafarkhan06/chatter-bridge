import { Container } from "@mui/material";
import Image from "next/image";
import ReusableButton from "../components/ReusableButton/ReusableButton";
import AnimatedWrapper from "../components/AnimatedFramerMotion/LeftInViewAnimation";

export default function Contact() {
  return (
    <>
      {/* Main Heading */}
      <div className=" py-24">
        <Container maxWidth="xl">
          <AnimatedWrapper from="top" delay={0} duration={0.7}>
            <h1 className="font-black text-center uppercase text-[#E7E5E4]">
              Contact US
            </h1>
          </AnimatedWrapper>
          <AnimatedWrapper from="bottom" delay={0.2} duration={0.7}>
            <h6 className="text-white text-center">
              We can’t wait to connect with you.
            </h6>
          </AnimatedWrapper>
        </Container>
      </div>

      {/* For large Screen */}
      <div className=" my-16">
        <Container maxWidth="xl">
          <div className="flex gap-5 md:gap-20 flex-col md:flex-row items-stretch  justify-between ">
            <div className="flex flex-col md:w-[45%] ">
              {/* Green Card */}
              <div className="mt-10 mb-6  px-6 py-8  rounded-3xl bg-[#444c58] ">

                <div className="flex flex-col justify-center items-start gap-4">
                  <AnimatedWrapper from="top" delay={0.2} duration={0.7}>
                    <div className="flex items-center gap-3">
                      <Image
                        src={require("../../../public/asset/contact-page-icon.png")}
                        width={50}
                        className=""
                      />
                      <h6 className="text-[#E7E5E4] font-bold tracking-tighter leading-tight">
                        Let’s Connect and Grow Together
                      </h6>
                    </div>
                  </AnimatedWrapper>
                  <AnimatedWrapper from="bottom" delay={0.4} duration={0.7}>

                    <p className="text-[#E7E5E4]">
                      Have any questions or need tailored solutions? We’re here to help. Reach out to us via email or explore other ways to connect. Let’s work together to create value and take your business to new heights.
                    </p>
                  </AnimatedWrapper>
                  <AnimatedWrapper from="left" delay={0.6} duration={0.7}>
                    <ReusableButton text={"Check our services"} href={"/"} />
                  </AnimatedWrapper>
                </div>

              </div>

              {/* Second Card */}
              <AnimatedWrapper from="bottom" delay={0.8} duration={0.7}>
              <div className="rounded-3xl mt-6 mb-10 px-4 py-12 flex-grow bg-[#444c58]   ">
                <Container>
                  <div className="flex flex-col items-start justify-center gap-4">
                    <h6 className="font-bold text-[#E7E5E4] leading-none">
                      Contact Us Directly
                    </h6>
                    <p className=" text-[#E7E5E4]">
                      Prefer a direct conversation? We’re just a call away. Our team is ready to assist you with any inquiries. Reach out and let’s get started!
                    </p>
                    <div className="flex gap-6 md:flex-row flex-col">
                      <p className=" text-[#E7E5E4]">
                        Send us an email to: <br />
                        <span className="font-bold">hello@firmfox.com</span>
                      </p>
                      <p className=" text-[#E7E5E4]">
                        Alternatively, you can call:<br />
                        <span className="font-bold">+971 55 975 8358</span>
                      </p>
                    </div>
                  </div>
                </Container>
              </div>
              </AnimatedWrapper>
            </div>
            <div className="md:w-[55%]">
              <AnimatedWrapper from="right" delay={0} duration={0.7}>
              {/* Form Section  */}
              <div className="bg-[#E7E5E4] rounded-3xl py-8 px-4 mt-10 ">
                <Container>
                  <form action="">
                    <h5 className="text-[#192128] font-bold pb-6">
                      Send us a message
                    </h5>
                    <div className="">
                      <label htmlFor="fullName">
                        <p className="text-[#192128] font-bold pb-2 text-2xl">
                          Full Name
                        </p>

                        <input
                          type="email"
                          id="fullName"
                          className="w-full border rounded-lg  text-black pl-4 h-12 focus:outline-none focus:border-[#afe57f]"
                        />
                      </label>
                      <label htmlFor="email">
                        <p className="text-[#192128] font-bold pb-2 pt-6 text-2xl">
                          Email
                        </p>

                        <input
                          type="text"
                          id="email"
                          className="w-full border rounded-lg  text-black pl-4 h-12 focus:outline-none focus:border-[#afe57f]"
                        />
                      </label>
                      <label htmlFor="textarea">
                        <p className="text-[#192128] font-bold pb-2 pt-6 text-2xl">
                          Message
                        </p>

                        <textarea
                          id="textarea"
                          rows="5"
                          className="w-full border rounded-lg  text-black pl-4  focus:outline-none focus:border-[#afe57f]"
                        ></textarea>
                      </label>
                      <button className="coolBeans w-full border-none my-6">
                        Submit
                      </button>
                    </div>
                  </form>
                </Container>
              </div>
              </AnimatedWrapper>
            </div>
          </div>
        </Container>
      </div>


      {/* Last Card */}

      {/* <div className="rounded-3xl bg-[#edefec] lg:px-10 lg:py-20 lg:mx-32 lg:mt-20 md:mx-20">
        <Container>
          <div className="flex flex-col gap-10 p-6 justify-center items-center pt-8 lg:flex-row lg:justify-between ">
            <Image
              src={require("../../../public/asset/services-3.jpg")}
              className="block lg:hidden"
            />
            <div className="lg:flex-1 lg:flex lg:flex-col lg:items-start lg:gap-10">
              <h2 className="font-bold text-[#192128] text-center leading-tight tracking-tighter mt-10 lg:text-start lg:leading-none lg:text-5xl">
                Launch and Grow Your Business in the UAE
              </h2>
              <p className="text-[#172806] text-center lg:text-start">
                Follow the link below to visit the FirmFox platform, where you
                can create and manage your business.
              </p>
              <div className="flex justify-center items-center">
                <ReusableButton text={"Get Started Soon"} href={"/"} />
              </div>
            </div>

            <Image
              src={require("../../../public/asset/services-3.jpg")}
              className="hidden lg:block lg:flex-1"
            />
          </div>
        </Container>
      </div> */}
    </>
  );
}
