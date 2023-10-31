import React, {ReactNode} from "react";



export const Services = () => {
    return (
        <section className="pt-0  pb-10 lg:pb-20 h-full">
            <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-12">
                <SingleCard
                    image=" https://res.cloudinary.com/crazibrain/image/upload/v1698168649/crazibrain/service1.png"
                    CardTitle=" Sales Development Solutions"
                    titleHref="/#"
                    btnHref="/#"
                    CardDescription=" Sales solutions encompass tools and strategies like CRM software, sales automation, training, and sales tactics to boost sales efforts. Development solutions cover various fields, including software development and personal/professional growth."
                    Button="View Details"
                />
                <SingleCard
                    image="https://res.cloudinary.com/crazibrain/image/upload/v1698168649/crazibrain/service2.png"
                    CardTitle="Mar-Tech Solutions"
                    CardDescription=" MarTech includes a wide array of tools and software for marketers to plan, execute, and analyze marketing campaigns. These solutions streamline and enhance marketing efforts, helping businesses reach their target audiences more efficiently."
                    Button="View Details"
                />
                <SingleCard
                    image="https://res.cloudinary.com/crazibrain/image/upload/v1698168648/crazibrain/service3.png"
                    CardTitle=" HR Solutions"
                    CardDescription=" HR solutions are software and tech tools that streamline HR processes, enhance workforce management, and improve the employee experience for more efficient HR management."
                    Button="View Details"
                />

                <SingleCard
                    image="https://res.cloudinary.com/crazibrain/image/upload/v1698168648/crazibrain/service4.png"
                    CardTitle=" Custom Dev Solutions"
                    CardDescription="IVR, AR/VR, UI/UX Design, Loyalty Platform, Mobile Marketing, Data and Analytics,  Website Development, Gratification Services, Mobile App Development. "
                    Button="View Details"
                />
            </div>
        </section>
    );
};


export default Services;

interface SingleCardProps {
    image: string;
    Button?: string;
    CardDescription: string;
    CardTitle: string;
    titleHref?: string;
    btnHref?: string;
}

const SingleCard: React.FC<SingleCardProps> = ({
                                                   image,
                                                   Button,
                                                   CardDescription,
                                                   CardTitle,
                                                   titleHref,
                                                   btnHref,
                                               }) => {
    return (
        <>
            <div className="overflow-hidden flex flex-col justify-between ">
                <div className={" p-5 justify-center m-auto"}>
                    <img src={image} alt="" className=" h-[160px] m-auto"  />
                </div>

                <div className="p-8 text-center sm:p-5 md:p-5 xl:p-5 ">
                    <h3>
                        <a
                            href={titleHref ? titleHref : "/#"}
                            className="mb-4 block text-[18px] font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[30px] xl:text-xl "
                        >
                            {CardTitle}
                        </a>
                    </h3>
                    <p className="text-[12px] leading-relaxed mb-3 text-body-color">
                        {CardDescription}
                    </p>

                    {Button && (
                        <a
                            href={btnHref ? btnHref : "#"}
                            className="inline-block rounded-md border border-[#E5E7EB] py-2 px-7 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white"
                        >
                            {Button}
                        </a>
                    )}
                </div>
            </div>
        </>
    );
};
