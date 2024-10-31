"use client";
import { useState } from 'react';
import { Container } from "@mui/material";
import Image from "next/image";
import ReusableButton from "../components/ReusableButton/ReusableButton";
import AnimatedWrapper from "../components/AnimatedFramerMotion/LeftInViewAnimation";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Email sent successfully');
        setFormData({ fullName: '', email: '', message: '' });
      } else {
        alert('Error sending email');
      }
    } catch (error) {
      alert('Error sending email');
    }
  };
  return (
    <>
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
                        <a href="emailto:Info@thechatterbridge.com" className=" text-[#E7E5E4]">
                          Send us an email to: <br />
                          <span className="font-bold">Info@thechatterbridge.com</span>
                        </a>

                      </div>
                    </div>
                  </Container>
                </div>
              </AnimatedWrapper>
            </div>
            <div className="md:w-[55%]">
              <AnimatedWrapper from="right" delay={0} duration={0.7}>
                <div className="bg-[#E7E5E4] rounded-3xl py-8 px-4 mt-10 ">
                  <Container>
                    <form onSubmit={handleSubmit}>
                      <h5 className="text-[#192128] font-bold pb-6">Send us a message</h5>
                      <div>
                        <label htmlFor="fullName">
                          <p className="text-[#192128] font-bold pb-2 text-2xl">Full Name</p>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full border rounded-lg text-black pl-4 h-12 focus:outline-none focus:border-[#afe57f]"
                          />
                        </label>
                        <label htmlFor="email">
                          <p className="text-[#192128] font-bold pb-2 pt-6 text-2xl">Email</p>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border rounded-lg text-black pl-4 h-12 focus:outline-none focus:border-[#afe57f]"
                          />
                        </label>
                        <label htmlFor="textarea">
                          <p className="text-[#192128] font-bold pb-2 pt-6 text-2xl">Message</p>
                          <textarea
                            id="textarea"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full border rounded-lg text-black pl-4 focus:outline-none focus:border-[#afe57f]"
                          ></textarea>
                        </label>
                        <button type="submit" className="coolBeans w-full border-none my-6">
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
    </>
  );
}
