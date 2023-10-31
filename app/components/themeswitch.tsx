'use client'

import { useEffect, useState } from 'react'
import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { useTheme, } from 'next-themes'


export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Theme"]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

      useEffect(() => {
        setMounted(true)
      }, [])

      if (!mounted) return null


        // @ts-ignore

    return (
        <div className='flex gap-4'>




        <Dropdown>
            <DropdownTrigger>
                <Button
                    variant="bordered"
                    className="capitalize"
                >
                    {selectedValue}
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Theme Selection"
                variant="flat"
                className={"w-full"}
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                // @ts-ignore
                onSelectionChange={setSelectedKeys}
            >
                <DropdownItem key="Light">  <Button    className={"w-full"} size='sm' variant='flat' onClick={() => setTheme('light')}>Light</Button></DropdownItem>
                <DropdownItem key="Dark">  <Button    className={"w-full"} size='sm' variant='flat' onClick={() => setTheme('dark')}>Dark</Button></DropdownItem>
                <DropdownItem key="Crazi">  <Button    className={"w-full"} size='sm' variant='flat' onClick={() => setTheme('modern')}>Crazi</Button></DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>



  )
}
