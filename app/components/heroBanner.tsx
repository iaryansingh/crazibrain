import * as React from "react";
import {Button} from "@nextui-org/react";
import { IconDeviceMobileCheck } from '@tabler/icons-react';


export const HeroBanner = () => {
    return (
    <div className="main content-center flex justify-center align-middle">

            <video autoPlay loop muted  poster="/" className={"w-[100%] "} >
                <source src="https://res.cloudinary.com/crazibrain/video/upload/q_auto:good/v1698317026/crazibrain/crazibrain-video.mp4" className={"/"} type="video/mp4" />
            </video>
        <div className="content h-[350px] md:h-[710px]  max-w-[900px] content-center justify-center absolute px-5">
            <div className="md:text-[25px]  text-[18px] font-bold text-center max-w-[1400px] mt-[15%] md:mt-[35%]">
                <div className="flex flex-col text-white">
                   <h1 className={"pb-3"}>Design, Build, Grow <br/>
                       A Results Driven Digital Agency with a Crazibrain Solutions in </h1>

                    <h2 className=" pb-3 justify-center text-center text-[12px] md:text-[20px] max-w-[1400px] ">
                        Sales development Solutions
                    </h2>

                    <a href="/contact">  <Button color="primary" variant="solid" className=" md:text-[20px] text-[14px] ">Get in Touch</Button>
                    </a>
                </div>
            </div>


        </div>

    </div>


    );
};