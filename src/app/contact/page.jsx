import { Container } from "@mui/material";
import Image from "next/image";
import ReusableButton from "../components/ReusableButton/ReusableButton";

export default function Contact() {
  return (
    <>
      {/* Main Heading */}
      <div className=" my-10">
        <Container className="">
          <h1 className="font-black text-center uppercase text-[#afe57f]">
            Contact US
          </h1>
          <h6 className="text-[#afe57f] text-center">
            Launch and grow your business in the UAE using our intuitive
            platform. Contact us if you have any queries.
          </h6>
        </Container>
      </div>

      {/* For large Screen */}
      <div className=" lg:mt-28 lg:block hidden">
        <Container className="">
          <div className="flex gap-8 items-stretch  justify-center ">
            <div className="flex flex-col w-[45%] ">
              {/* Green Card */}
              <div className="mt-10 mb-6  px-6 py-8  rounded-3xl bg-[#afe57f] ">
                <Container className="">
                  <div className="flex flex-col justify-center items-start gap-4">
                    <Image
                      src={require("../../../public/asset/contact-page-icon.png")}
                      width={100}
                      className=""
                    />
                    <h5 className="text-[#172806] font-bold tracking-tighter leading-tight">
                      Set up an account for instant answers from Fox Chat
                    </h5>
                    <p className="text-[#172806] pb-8">
                      FirmFox is an AI-powered platform that will guide you
                      through the application process. If you have any questions
                      along the way - our chatbot is here to help.
                    </p>
                    <ReusableButton text={"Connect with us"} href={"/"} />
                  </div>
                </Container>
              </div>

              {/* Second Card */}
              <div className="rounded-3xl mt-4 mb-10 px-4 py-8 bg-[#afe57f]   ">
                <Container>
                  <div className="flex flex-col items-start justify-center gap-4">
                    <h5 className="font-bold text-[#172806]">
                      Speak to our team
                    </h5>
                    <p className="font-semibold text-[#172806]">
                      If there is anything you would like to discuss with a
                      member of our team, please feel free to get in touch.
                    </p>
                    <p className="font-semibold text-[#172806]">
                      Send us an email to: <br />
                      <span className="font-bold">hello@firmfox.com</span>{" "}
                      <br />
                      <br />
                      Alternatively, you can call: <br />
                      <span className="font-bold">+971 55 975 8358</span>
                    </p>
                  </div>
                </Container>
              </div>
            </div>
            <div className="w-[60%]">
              {/* Form Section  */}
              <div className="bg-[#edefec] rounded-3xl py-8 px-4 mt-10 ">
                <Container>
                  <form action="">
                    <h5 className="text-[#172806] font-bold pb-6">
                      Send us a message
                    </h5>
                    <div className="pl-4">
                      <label htmlFor="fullName">
                        <p className="text-[#172806] font-bold pb-2 text-2xl">
                          Full Name
                        </p>

                        <input
                          type="email"
                          id="fullName"
                          className="w-full border rounded-lg  text-black pl-4 h-12 focus:outline-none focus:border-[#afe57f]"
                        />
                      </label>
                      <label htmlFor="email">
                        <p className="text-[#172806] font-bold pb-2 pt-6 text-2xl">
                          Email
                        </p>

                        <input
                          type="text"
                          id="email"
                          className="w-full border rounded-lg  text-black pl-4 h-12 focus:outline-none focus:border-[#afe57f]"
                        />
                      </label>
                      <label htmlFor="textarea">
                        <p className="text-[#172806] font-bold pb-2 pt-6 text-2xl">
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
            </div>
          </div>
        </Container>
      </div>

      {/* For small and medium Screen */}
      <div className="lg:hidden mt-16 ">
        {/* Form Section  */}
        <div className="bg-[#edefec] border rounded-lg py-8 px-4 mt-10 lg:hidden">
          <Container maxWidth="xl">
            <form action="">
              <h3 className="text-[#172806] font-bold pb-6">
                Send us a message
              </h3>
              <div className="pl-4">
                <label htmlFor="fullName">
                  <h5 className="text-[#172806] font-semibold pb-2">
                    Full Name
                  </h5>

                  <input
                    type="email"
                    id="fullName"
                    className="w-full border rounded-lg  text-black pl-4 h-12 focus:outline-none focus:border-[#afe57f]"
                  />
                </label>
                <label htmlFor="email">
                  <h5 className="text-[#172806] font-semibold pt-6 pb-2">
                    Email
                  </h5>

                  <input
                    type="text"
                    id="email"
                    className="w-full border rounded-lg  text-black pl-4 h-12 focus:outline-none focus:border-[#afe57f]"
                  />
                </label>
                <label htmlFor="textarea">
                  <h5 className="text-[#172806] font-semibold pt-6 pb-2">
                    Message
                  </h5>

                  <textarea
                    id="textarea"
                    rows="5"
                    className="w-full border rounded-lg  text-black pl-4  focus:outline-none focus:border-[#afe57f]"
                  ></textarea>
                </label>
                <button className="coolBeans w-full my-6">Submit</button>
              </div>
            </form>
          </Container>
        </div>

        <div className="md:flex md:gap-4 md:items-center  md:mt-16 md:justify-center md:mx-10">
          {/* Green Card */}
          <div className="mt-10 mb-6 mx-4 px-6 py-8  rounded-xl md:rounded-3xl  bg-[#afe57f] lg:hidden md:flex-1 md:mb-10">
            <Container className="">
              <div className="flex flex-col justify-center items-start gap-4">
                <Image
                  src={require("../../../public/asset/contact-page-icon.png")}
                  width={100}
                  className=""
                />
                <h4 className="text-[#172806] font-bold tracking-tighter leading-tight">
                  Set up an account for instant answers from Fox Chat
                </h4>
                <p className="text-[#172806] pb-8">
                  FirmFox is an AI-powered platform that will guide you through
                  the application process. If you have any questions along the
                  way - our chatbot is here to help.
                </p>
                <ReusableButton text={"Connect with us"} href={"/"} />
              </div>
            </Container>
          </div>

          {/* Second Card */}
          <div className="rounded-xl md:rounded-3xl mt-4 mb-10 mx-4 px-4 py-8 bg-[#afe57f] lg:hidden md:flex-1 md:mt-10 md:flex md:items-center md:py-10">
            <Container>
              <div className="flex flex-col items-start justify-center gap-4">
                <h4 className="font-bold text-[#172806]">Speak to our team</h4>
                <h6 className="font-semibold text-[#172806]">
                  If there is anything you would like to discuss with a member
                  of our team, please feel free to get in touch.
                </h6>
                <h6 className="font-semibold text-[#172806]">
                  Send us an email to:{" "}
                  <span className="font-bold">hello@firmfox.com</span> <br />
                  <br />
                  Alternatively, you can call: <br />
                  <span className="font-bold">+971 55 975 8358</span>
                </h6>
              </div>
            </Container>
          </div>
        </div>
      </div>

      {/* Last Card */}

      <div className="rounded-3xl bg-[#edefec] lg:px-10 lg:py-20 lg:mx-32 lg:mt-20 md:mx-20">
        <Container>
          <div className="flex flex-col gap-10 p-6 justify-center items-center pt-8 lg:flex-row lg:justify-between ">
            <Image
              src={require("../../../public/asset/services-3.jpg")}
              className="block lg:hidden"
            />
            <div className="lg:flex-1 lg:flex lg:flex-col lg:items-start lg:gap-10">
              <h2 className="font-bold text-[#172806] text-center leading-tight tracking-tighter mt-10 lg:text-start lg:leading-none lg:text-5xl">
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
      </div>
    </>
  );
}
