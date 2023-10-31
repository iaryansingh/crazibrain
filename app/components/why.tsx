'use client'
import React from "react";
import {Image} from "@nextui-org/react";
import NextImage from "next/image";

import {cloudinaryLoader} from "@/app/utils";



export const Why =() => {
    function title() {
        return undefined;
    }

    return(
        <div
            className="max-w-[1300px] grid grid-col justify-center md:grid-cols-2  gap-12 md:gap-28  md:justify-between mx-6 md:mx-12 mb-20 ">
            <div className=" order-1 m-auto	">
                <Image
                    width={250}
                    height={250}
                    className={"m-auto"}
                    alt="Why-Crazibrain"
                    src="https://res.cloudinary.com/crazibrain/image/upload/v1698168648/crazibrain/service1.png"
                />
            </div>

            <div className=" max-w-[600px] text-left order-2 ">

                <div>
                    <div className={"pb-2 text-[25px] font-bold flex flex-row text-center justify-center  flex-wrap"}> <p className={"text-red-600 pr-2 text-center"}>Crazi Brain Solution</p>   for your Product</div>
                    <p>
                        A Crazibrain Solution for Your Product is a comprehensive service or platform that aims to provide all the necessary resources, tools, and support for businesses or individuals looking to bring a product to market or enhance their existing product offerings. This concept is designed to streamline and simplify the various stages of the product development and marketing process.
                    </p>
                </div>
            </div>


            <div className=" max-w-[600px] text-left md:order-3 order-4 ">
                <div>
                    <div className={"pb-2 text-[25px] md:text-[25px] font-bold flex flex-row text-center justify-center flex-wrap"}> <p className={"text-red-600 pr-2 text-center"}>Crazi brain solutions </p> organized for efficiency.</div>
                    <p>
                        With regularly scheduled meetings, strategic work flow management, regular client interactions, advanced QA, timely bug testing & timely deployments of working prototypes and ROI updates we are always prepared to deliver a seamless working experience.
                    </p>
                </div>
            </div>

            <div className="max-w-600px md-order4 order-3 m-auto	">
                <Image

                    width={250}
                    height={250}
                    className={"m-auto justify-center"}
                    alt="Why-Crazibrain"
                    src="https://res.cloudinary.com/crazibrain/image/upload/v1698168648/crazibrain/why-2.png"
                />
            </div>

            <div className="max-w-600px order-5 m-auto">
                <Image
                    width={150}
                    height={150}
                    className={" "}
                    alt="Why-Crazibrain"
                    src="https://res.cloudinary.com/crazibrain/image/upload/v1698168648/crazibrain/why-3.png"
                />
            </div>

            <div className=" max-w-[600px] text-left order-6">
                <div>
                    <div className={" text-[25px] pb-2 font-bold flex flex-row text-center justify-center flex-wrap"}> <p className={"text-red-600 pr-2 text-center"}>Crazi Brain Solution</p>   for your Product</div>
                    <p>
                        A Crazibrain Solution for Your Product is a comprehensive service or platform that aims to provide all the necessary resources, tools, and support for businesses or individuals looking to bring a product to market or enhance their existing product offerings. This concept is designed to streamline and simplify the various stages of the product development and marketing process.
                    </p>
                </div>
            </div>
        </div>
    );
};