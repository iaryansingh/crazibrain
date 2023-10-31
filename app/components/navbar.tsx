'use client'

import React from "react";
import { NavbarMenuToggle,
    NavbarMenu, NavbarMenuItem, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";
import { IconChevronDown } from '@tabler/icons-react';
import ThemeSwitch from "@/app/components/themeswitch";




export const NavbarHeader = () => {


    // Dropdown menu
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuItems = [
        "Company",
        "Services",
        "Our Product",
        "About Us",
        "Case Studies",
        "Newsletters",
    ];

    return (
        <Navbar  isBordered
                 isMenuOpen={isMenuOpen}
                 onMenuOpenChange={setIsMenuOpen}
                 className={"py-6 "}
                 maxWidth={'full'}
        >

            <>
                <NavbarContent className="sm:hidden" justify="start">
                    <NavbarMenuToggle />
                </NavbarContent>

                <NavbarContent className="sm:hidden pr-3" justify="center">
                    <NavbarBrand>
                        <img src={"./logo.svg"} alt={"Logo img"}/>
                    </NavbarBrand>
                </NavbarContent>
            </>


            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <img src={"./logo.svg"} alt={"Logo img"}/>
                </NavbarBrand>
                <NavbarItem>
                    <Link color="foreground"  href="../">
                        Home
                    </Link>
                </NavbarItem>


                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className=" text-[16px] bg-transparent data-[hover=true]:bg-transparent"
                                radius="sm"
                                variant="light"
                            >
                                Services <IconChevronDown/>
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="ACME features"
                        className="w-[340px]"
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >
                        <DropdownItem
                            key="autoscaling"
                            description=" SFA, DMS, R & R, Loyalty, KYC(Sales & Retain, Direct Beneficiary Transfer(DBT)"
                        >
                         Sales Development Solutions
                        </DropdownItem>
                        <DropdownItem
                            key="usage_metrics"
                            description="CRM, Gamification, Brand Company, Trial and Repeats, Digital Marketing, Cusumer Database Managements"
                        >
                           Mar-Tech Solutions
                        </DropdownItem>
                        <DropdownItem
                            key="production_ready"
                            description="HR Bots, CB Scan, Assessment"
                        >
                         HR-Tech Solutions
                        </DropdownItem>
                        <DropdownItem
                            key="99_uptime"
                            description="IVR, AR/VR, UI/UX Design, Loyalty Platform, Mobile Marketing, Data and Analytics,  Website Development, Gratification Services, Mobile App Development."
                        >
                          Custom Dev Solutions
                        </DropdownItem>

                    </DropdownMenu>
                </Dropdown>
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className=" text-[15px] bg-transparent data-[hover=true]:bg-transparent"
                                radius="sm"
                                variant="light"
                            >
                                Our Products <IconChevronDown/>
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="ACME features"
                        className="w-[340px]"
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >
                        <DropdownItem
                            key="autoscaling"
                            description="ACME scales apps to meet user demand, automagically, based on load."
                        >
                            iScan
                        </DropdownItem>
                        <DropdownItem
                            key="usage_metrics"
                            description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                        >
                           KYC
                        </DropdownItem>
                        <DropdownItem
                            key="production_ready"
                            description="ACME runs on ACME, join us and others serving requests at web scale."
                        >
                           MTOP
                        </DropdownItem>
                        <DropdownItem
                            key="99_uptime"
                            description="Applications stay on the grid with high availability and high uptime guarantees."
                        >
                            <Link color="foreground" href="./">
                                Others
                            </Link>

                        </DropdownItem>

                    </DropdownMenu>
                </Dropdown>
                <NavbarItem>
                    <Link color="foreground" href="../about">
                     About Us
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className=" lg:flex">
                  <ThemeSwitch/>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="../contact" variant="flat">
                      Get in Touch
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};
