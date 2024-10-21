import React from 'react';
import Container from '@mui/material/Container';
import logo from "../../../../public/asset/new-logo.png"
import Image from 'next/image';
const Footer = () => {
    return (
        <footer className="   md:px-10 rounded-2xl md:rounded-[60px] my-10 pt-10">
            <div>
                <Container
                    disableGutters={true}
                    maxWidth="xl"
                >
                    {/* <div className='bg-[#E7E5E4] pt-10 rounded-xl py-10'>
                        <a className="flex cursor-pointer items-center justify-center gap-1 font-medium" href="/">
                            <Image
                                src={logo}
                                alt="muntazim logo"
                                className=" cursor-pointer"
                            />
                        </a>
                        <div className='flex flex-col justify-center items-center'>
                            <p className="font-medium   md:w-2/3 mb-7 mt-4 text-center  text-[#192128]">
                                TheChatterBridge offers offshore staffing solutions that seamlessly integrate with your business, enhancing sales, customer support, and operational efficiency to drive real results and lasting growth.
                            </p>
                            <button className="bg-[#444c58] hover:bg-[#192128] text-[#E7E5E4] py-3 rounded-lg text-xl font-semibold w-44">Contact US</button>
                        </div>

                    </div> */}
                    <div className="relative text-[#E7E5E4] pt-10  ">
                        <div className="container">
                            <div className="relative grid text-[#E7E5E4] lg:grid-cols-4 lg:gap-0 ">
                                <div className="col-span-1 w-full space-y-5  p-4 rounded-xl">
                                    <div className='-mt-4'>
                                        <a className="flex cursor-pointer items-start gap-1 font-medium" href="/">
                                          <h4>Chatter Bridge</h4>
                                        </a>
                                        <p className="font-light text-[#E7E5E4]">
                                            The Chatter Bridge offers offshore staffing solutions that seamlessly integrate with your business, enhancing sales, customer support, and operational efficiency to drive real results and lasting growth.                </p>


                                    </div>
                                    <div className="flex items-center gap-3 ">
                                        <button type="button" className="ttnc-ButtonCircle flex items-center justify-center rounded-full !leading-none focus:ring-transparent disabled:bg-opacity-70 bg-custom-dark-gray w-10 h-10 ">
                                            <svg stroke="#E7E5E4" fill="#E7E5E4" stroke-width="0" viewBox="0 0 16 16" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path></svg>
                                        </button>
                                        <button type="button" className="ttnc-ButtonCircle flex items-center justify-center rounded-full !leading-none focus:ring-transparent disabled:bg-opacity-70 bg-custom-dark-gray w-10 h-10 ">
                                            <svg stroke="#E7E5E4" fill="#E7E5E4" stroke-width="0" viewBox="0 0 16 16" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                                            </svg></button>
                                        <button type="button" className="ttnc-ButtonCircle flex items-center justify-center rounded-full !leading-none focus:ring-transparent disabled:bg-opacity-70 bg-custom-dark-gray w-10 h-10 ">
                                            <svg stroke="#E7E5E4" fill="#E7E5E4" stroke-width="0" viewBox="0 0 16 16" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path></svg></button><button type="button" className="ttnc-ButtonCircle flex items-center justify-center rounded-full !leading-none focus:ring-transparent disabled:bg-opacity-70 bg-custom-dark-gray w-10 h-10 ">
                                            <svg stroke="#E7E5E4" fill="#E7E5E4" stroke-width="0" viewBox="0 0 448 512" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg></button><button type="button" className="ttnc-ButtonCircle flex items-center justify-center rounded-full !leading-none focus:ring-transparent disabled:bg-opacity-70 bg-custom-dark-gray w-10 h-10 "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path></svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex mt-6 md:mt-0 md:flex-row  md:ml-6 flex-col  p-4 md:px-10 rounded-xl text-[#E7E5E4] justify-around items-start gap-10  col-span-2">
                                    <div className="space-y-5 w-full md:w-2/4 ">
                                        <div className="text-xl text-[#E7E5E4] font-medium">Pages</div>
                                        <div className="flex flex-col items-start justify-center gap-5">
                                            <div className="relative inline-block"><a className="underline-text" href="/">Home</a>
                                            </div>
                                            <div className="relative inline-block"><a className="underline-text" href="/services">
                                                Services</a></div><div className="relative inline-block">
                                                <a className="underline-text" href="/contact">Contact</a>
                                            </div><div className="relative inline-block">
                                                <a className="underline-text" href="/about">About Us</a>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="space-y-3 w-full ">
                                        <div className="text-xl font-medium">Contact Us</div>
                                        <div className="flex flex-col items-start justify-center gap-5">

                                            <div className="relative inline-block">
                                                <a className="underline-text" href="mailto:info.swiftcabs@gmail.com">
                                                    Email: info.swiftcabs@gmail.com</a>
                                            </div>
                                            <div className="relative inline-block">
                                                <a className="underline-text">
                                                    Rushden office
                                                    : 119 High Street Rushden</a>
                                            </div>
                                            <div className="relative inline-block">
                                                <a className="underline-text">
                                                    Wellingborough office: 1A Alma Street Wellingborough</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-span-1 mt-6 md:mt-0 md:ml-6  p-4 px-5 rounded-xl">
                                    <h2 className="text-xl font-medium text-[#E7E5E4]">

                                        The Chatter Bridge: Your Partner in Growth</h2>

                                    <div className="relative mt-5 max-w-sm text-[#E7E5E4]">
                                        <p>Empowering businesses with high-performing offshore teams that integrate effortlessly into your operations.
                                            Boost sales, streamline support, and enhance efficiency with solutions designed to deliver real results from day one.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 flex flex-col items-center justify-center border-t border-[#E7E5E4] py-3 text-[#E7E5E4] 2xl:py-5">
                                <div>
                                    <p className='text-center w-full'>© <span> All rights reserved by</span>
                                        <span><a className="font-semibold pl-2" target="_blank" href="https://devspherelabs.com/">The Chatter Bridge</a>
                                        </span></p></div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;