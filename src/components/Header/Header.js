"use client"
import React, { useState } from 'react';
import ThemeSwitcher from '../ThemeSwitcher';
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { CgClose } from "react-icons/cg";
import Image from 'next/image';

const Header = (props) => {
  const { toggleSidebar, open } = props

  return (
        <header className="flex w-full items-center justify-between p-4 shadow-lg bg-gray-200 dark:bg-black text-text-light dark:text-text-dark absolute top-0 left-0 z-50">
            <div className='flex items-center'>
                <Image src={'/logo.png'} alt='MarketViz Logo' width={24} height={36} />
                <h1 className="text-xl font-bold ml-2">MarketViz</h1>
            </div>
            <div className="flex items-center">
                <div className="hidden md:block">
                    <ThemeSwitcher />
                </div>
                {open ?
                <button className="md:hidden ml-4">
                    <CgClose />
                </button>:
                <button className="md:hidden ml-4" onClick={toggleSidebar}>
                    <HiOutlineMenuAlt3 />
                </button>}
            </div>
        </header>
    );
};

export default Header;
