import { useState } from "react";



export const About1 =() =>{
    return(
        <div className="relative  pt-[120px] pb-[110px] lg:pt-[150px]">
            <div className="container">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4 lg:w-5/12">
                        <div className="hero-content">
                            <h1 className="mb-3 text-4xl font-bold leading-snug text-dark text-[30px] md:text-[42px] ">
                                <p className={"text-red-600 pr-2 text-center"}>Crazibrain Solutions</p>Why Choose Us
                            </h1>
                            <div className="mb-8 max-w-[480px] text-base text-body-color">
                              <p className={"pb-1"}>Customization is our virtue we believe every client and business problem is unique, we customise the campaigns as per to give the best results to the client. </p>
                              <p className={"pb-1"}> We believe in doing! Our motto “Aim High and Do your Best”, aptly captures the ever-evolving spirit of Crazibrain. Thinking Big, Acting Fast and Trying Harder are the three pillars of Crazibrain attitude.</p>
                              <p className={"pb-1"}>Inspiring positive and technically brave are the most common traits of each member of Crazibrain family. We are committed to innovation-led, exponential growth.</p>
                            </div>
                            <ul className="flex flex-wrap items-center">
                                <li>
                                    <a
                                        href="../contact"
                                        className="inline-flex items-center justify-center px-6 py-4 text-base font-normal text-center text-white rounded-lg bg-primary hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10"
                                    >
                                        Get Started
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="hidden px-4 lg:block lg:w-1/12"></div>
                    <div className="w-full px-4 lg:w-6/12">
                        <div className="lg:ml-auto lg:text-right">
                            <div className="relative z-10 inline-block pt-11 lg:pt-0">
                                <img
                                    src="https://res.cloudinary.com/crazibrain/image/upload/v1698168648/crazibrain/team.png"
                                    alt="hero"
                                    className="md:max-w-[500px] rounded-tl-[100px] lg:ml-auto"
                                />
                                <span className="absolute -left-8 -bottom-8 z-[-1]">
                    <svg
                        width="93"
                        height="93"
                        viewBox="0 0 93 93"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#FF2200" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#FF2200" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#FF2200" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#FF2200" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#FF2200" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#FF2200" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#FF2200" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#FF2200" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#FF2200" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#FF2200" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#FF2200" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#FF2200" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#FF2200" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#FF2200" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#FF2200" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#FF2200" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default About1;



;