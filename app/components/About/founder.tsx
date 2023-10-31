import {Button} from "@nextui-org/react";
import NextImage from "next/image";
export const Founder =() =>{

    return (
        <div className="flex flex-row flex-wrap w-full px-5 md:mt-10 md:px-10 py-5 md:py-16 justify-between ">
            <div className=" md:w-[500px]  ">
                <h1 className="text-[30px]  md:text-5xl mb-10 mt-10  ">Know About Us</h1>
                <p>
                    We are young team of members focused on creating an extremely dependable organization, not making brands tech savvy rather making technology brand savvy.
                    Pioneers in automating repetitive business processes using the Power Artificial Intelligence, we are currently operating to take Visualization on a next level with the support of our ingenious and experienced team and cutting-edge tech like Augmented and Virtual Reality. Today we are runners in the race for changing the Traditional ways of research and Brand engagement by using Gamification Techniques.
                    We would be glad to be associated with you at a Business Challenge stage rather than just Execution.
                </p>
                <a href="/about"> <Button color="primary" variant="solid" className="mt-4 font-bold">Learn More </Button> </a>
            </div>
            <div className=" md:w-[500px] md:h-[500px] content-baseline pt-10">
                <Image
                    removeWrapper
                    width={500}
                    height={500}
                    alt="Card background"
                    src="https://res.cloudinary.com/guidona/image/upload/f_auto,c_limit,w_1080,q_auto/v1693336147/home-page/tech.png"
                />
            </div>
        </div>
    )
}