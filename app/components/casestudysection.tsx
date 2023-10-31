import { useState } from "react";
import {  Brands} from "@/app/components/brands";


export const CasestudySection =() =>{
    return(
        <div className="relative  pt-[120px] pb-[110px] lg:pt-[150px]">
            <div className="container">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4 lg:w-5/12">
                        <div className="hero-content">
                            <h1 className="mb-3 text-4xl font-bold leading-snug text-dark sm:text-[42px] lg:text-[40px] xl:text-[42px]">
                                <p className={"text-red-600 pr-2 text-center"}>Crazibrain Solutions</p>for your Product
                            </h1>
                            <p className="mb-8 max-w-[480px] text-base text-body-color">
                                A Crazi Brain Solution for Your Product is a comprehensive service or platform that aims to provide all the necessary resources, tools, and support for businesses or individuals looking to bring a product to market or enhance their existing product offerings. This concept is designed to streamline and simplify the various stages of the product development and marketing process.

                            </p>
                            <ul className="flex flex-wrap items-center">
                                <li>
                                    <a
                                        href="/#"
                                        className="inline-flex items-center justify-center px-6 py-4 text-base font-normal text-center text-white rounded-lg bg-primary hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10"
                                    >
                                        Get Started
                                    </a>
                                </li>

                            </ul>
                            <div className="pt-16 clients">
                                <h6 className="flex items-center mb-3 text-xs font-normal text-body-color">
                                    Some Of Our Clients
                                    <span className="ml-2 inline-block h-[1px] w-8 bg-body-color"></span>
                                </h6>

                                <div className="flex items-center ">
                                  <Brands/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden px-4 lg:block lg:w-1/12"></div>
                    <div className="w-full px-4 lg:w-6/12">
                        <div className="lg:ml-auto lg:text-right">
                            <div className="relative z-10 inline-block pt-11 lg:pt-0">
                                <img
                                    src="https://res.cloudinary.com/crazibrain/image/upload/v1698238652/crazibrain/case-banner.png"
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


export default CasestudySection;

// @ts-ignore
const SingleImage = ({ href, imgSrc }) => {
    return (
        <>
            <a href={href} className="flex w-full items-center justify-center">
                <img src={imgSrc} alt="brand image" className="w-full h-10" />
            </a>
        </>
    );
};

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header
            className={`absolute top-0 left-0 z-20 flex items-center w-full bg-white`}
        >
            <div className="container">
                <div className="relative flex items-center justify-between -mx-4">
                    <div className="max-w-full px-4 w-60">
                        <a href="/#" className="block w-full py-5">
                            <img
                                src="https://cdn.tailgrids.com/1.0/assets/images/logo/logo.svg"
                                alt="logo"
                                className="w-full"
                            />
                        </a>
                    </div>
                    <div className="flex items-center justify-between w-full px-4">
                        <div>
                            <button
                                // @click="navbarOpen = !navbarOpen"
                                onClick={() => setOpen(!open)}
                                // :className="navbarOpen && 'navbarTogglerActive' "
                                id="navbarToggler"
                                className={` ${
                                    open && "navbarTogglerActive"
                                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                            >
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                            </button>
                            <nav
                                // :className="!navbarOpen && 'hidden' "
                                id="navbarCollapse"
                                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${
                                    !open && "hidden"
                                } `}
                            >
                                <ul className="block lg:flex">
                                    <ListItem
                                        navItemStyles="text-dark hover:text-primary"
                                        NavLink="/#"
                                    >
                                        Home
                                    </ListItem>
                                    <ListItem
                                        navItemStyles="text-dark hover:text-primary"
                                        NavLink="/#"
                                    >
                                        Payment
                                    </ListItem>
                                    <ListItem
                                        navItemStyles="text-dark hover:text-primary"
                                        NavLink="/#"
                                    >
                                        About
                                    </ListItem>
                                    <ListItem
                                        navItemStyles="text-dark hover:text-primary"
                                        NavLink="/#"
                                    >
                                        Blog
                                    </ListItem>
                                </ul>
                            </nav>
                        </div>
                        <div className="justify-end hidden pr-16 sm:flex lg:pr-0">
                            <a
                                href="/#"
                                className="py-3 text-base font-medium px-7 text-dark hover:text-primary"
                            >
                                Sign in
                            </a>

                            <a
                                href="/#"
                                className="py-3 text-base font-medium text-white rounded-lg bg-primary px-7 hover:bg-opacity-90"
                            >
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

// @ts-ignore
const ListItem = ({ children, navItemStyles, NavLink }) => {
    return (
        <>
            <li>
                <a
                    href={NavLink}
                    className={`flex py-2 text-base font-medium lg:ml-12 lg:inline-flex ${navItemStyles}`}
                >
                    {children}
                </a>
            </li>
        </>
    );
};