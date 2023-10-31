
import {cloudinaryLoader} from "@/app/utils";
import {Image} from "@nextui-org/react";

export const Clients =() =>{


    return(
        <div className=" flex justify-center max-w-[1400px] text-center m-auto  mx-5">
            <Image
                width={1000}
                height={500}
                alt="Client Images"
                src="https://res.cloudinary.com/crazibrain/image/upload/f_auto,c_limit,w_1080,q_auto/v1698168652/crazibrain/clients.png"
            />
        </div>
    );
};