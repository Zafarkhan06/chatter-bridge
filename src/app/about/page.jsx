import { Container } from "@mui/material";
import CountingNumberComponent from "../components/CountingNumber/CountingNumberComponent";
import Card from "../../app/components/Cards/Cards";
import Image from "next/image";

export default function ImageWithText() {
  return (
    <div>
      {/* Main Section starts from here */}
      <div className=" backgroundImageonxl ">
        <Container className="">
          <div className=" flex flex-col justify-between items-center md:gap-4">
            <h1 className="text-white font-bold text-center text-4xl md:text-5xl lg:text-7xl leading-tight tracking-tight ">
              Transcend the <br />
              <span>limits of Technology</span>
            </h1>
            <p className="text-sm lg:text-xl font-semibold text-center">
              From{" "}
              <span className="text-green-950">
                AI-powered finance solutions
              </span>{" "}
              to innovative cloud services.
            </p>

            <button className="border  text-center rounded-md px-11 py-4 text-xl font-semibold bg-[#18998e] text-black hover:bg-transparent hover:text-white hover:border-[#18998e] transition-all duration-500 mt-12">
              Why Netsol
            </button>
          </div>
        </Container>
      </div>

      {/* Main Section Ends here */}

      {/* 2nd manin section starts here */}
      <div className=" my-28 mx-10 border rounded-3xl bg-[#afe57f] ">
        <Container>
          <div className="flex flex-col lg:flex-row lg:justify-center lg:items-stretch  rounded-3xl p-4 lg:p-10  ">
            <Image
              src={require("../../../public/asset/about-hero.png")}
              alt="about-hero"
              className="flex-1 overflow-hidden hidden lg:flex "
            ></Image>

            <div className=" flex flex-col  lg:items-start pl-4 lg:pl-16 gap-4 lg:gap-6 pt-6 lg:flex-1 justify-center lg:justify-start items-center">
              <p className="text-[#ff6347] font-bold text-lg">
                Rate & Term Refinance
              </p>
              <h4 className="text-[#161a0c] font-bold leading-tight tracking-tight">
                Quickly Increase <br />
                <span>Your Home Equity</span>
              </h4>
              <Image
                src={require("../../../public/asset/about-hero.png")}
                alt="about-hero"
                width={500}
                height={500}
                className="flex-1 overflow-hidden lg:hidden"
              />
              <p className="text-center lg:text-left text-black flex flex-wrap">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Provident ducimus qui, est rem voluptates itaque! Maiores eaque
                aliquid sequi doloribus, et voluptatibus dolor quibusdam sint
                quo! Numquam voluptatem minus quidem!
              </p>
              <button className="bg-[#ff6347] border rounded-full px-8 py-3 text-center hover:bg-transparent hover:border-[#ff6347] hover:text-black transition-all duration-500">
                CLick me
              </button>
            </div>
          </div>
        </Container>
      </div>
      {/* 2nd main section ends here */}

      {/* Cards Section starts from here */}
      <div className=" pb-16 pt-8">
        <h4 className="font-bold text-center mb-10 text-[#ff6347]">
          Our Services
        </h4>
        <Container className="">
          <div className="flex  justify-center md:justify-center flex-wrap gap-6 items-stretch ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </Container>
      </div>
      {/* Cards section ends here */}

      {/* Counting Cards starts here */}
      <div className=" ">
        <Container>
          <div className="">
            <div className="flex flex-col lg:flex-row  lg:items-stretch lg:justify-between items-center justify-center py-12 lg:py-16">
              <h3 className="lg:flex-1  font-bold text-[#ff6347] leading-tight tracking-tight">
                Benefits of Rate <br />
                <span>& Terms Refinance</span>
              </h3>
              <p className="lg:flex-1  lg:flex lg:justify-center lg:items-center text-center lg:text-left text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                corporis cupiditate, tempore, magni praesentium hic laborum
                quidem, voluptatum magnam beatae voluptatibus dicta officiis
                dignissimos consequuntur natus exercitationem eaque. Ipsam,
                numquam.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-stretch lg: flex-wrap justify-center items-center gap-14 lg:gap-20  mt-14 pb-20">
              <div className="w-[90%] lg:w-[45%] flex flex-col items-center justify-center  rounded-xl group bg-[#afe57f] py-6 px-4">
                <Image
                  src={require("../../../public/asset/about-icon-1.png")}
                  alt="about-icon"
                  width={130}
                  height={130}
                />
                <CountingNumberComponent
                  text={"Assets managed globally"}
                  endNumber={500}
                  smtext={"B+"}
                />
                <p className="text-center mt-6 text-[#172806] ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Minima itaque exercitationem sunt sequi nobis qui corrupti
                  cupiditate ex. Fugiat error expedita pariatur alias at, qui
                  minus sed! Totam, porro non!
                </p>
              </div>
              <div className="w-[90%] lg:w-[45%] flex flex-col items-center justify-center  rounded-xl  bg-[#afe57f]  py-6 px-4">
                <Image
                  src={require("../../../public/asset/about-icon-2.png")}
                  alt="about-icon"
                  width={130}
                  height={130}
                  className=" "
                />
                <CountingNumberComponent
                  text={"Customer Worldwide"}
                  endNumber={200}
                  smtext={"+"}
                />
                <p className="text-center mt-6 text-black transition-all duration-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Minima itaque exercitationem sunt sequi nobis qui corrupti
                  cupiditate ex. Fugiat error expedita pariatur alias at, qui
                  minus sed! Totam, porro non!
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* Counting cards end here */}
    </div>
  );
}
