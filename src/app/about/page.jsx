import { Container } from "@mui/material";
import CountingNumberComponent from "../components/CountingNumber/CountingNumberComponent";
import Card from "../../app/components/Cards/Cards";

import Image from "next/image";

export default function ImageWithText() {
  return (
    <div>
      {/* Main Section starts from here */}
      <div className="backgroundImageContainer">
        <Container>
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

      {/* Counting Section starts here */}

      <div className="flex justify-around items-start gap-4 mt-4">
        <CountingNumberComponent
          text={"Assets managed globally"}
          endNumber={500}
          smtext={"B+"}
        />
        <CountingNumberComponent
          text={"Customer Worldwide"}
          endNumber={200}
          smtext={"+"}
        />
        <CountingNumberComponent
          text={"Years on NASDAQ : NTWK"}
          endNumber={25}
          smtext={"+"}
        />
      </div>

      {/* Couting Section ends here */}

      {/* Cards Section starts from here */}

      <div className="mt-10 bg-[#ff6347]">
        <h4 className="font-bold text-center mb-10">Our Services</h4>
        <div className="flex md:flex-row flex-col justify-around  gap-4">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
