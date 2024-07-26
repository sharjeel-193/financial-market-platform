"use client"
import React, { useRef, useEffect } from 'react';
import { menuData } from '@/data';
import { useMediaQuery } from 'react-responsive';
import screenBreakpointsData from '@/data/screenBreakpointsData';
import { usePathname } from 'next/navigation';
import ThemeSwitcher from '../ThemeSwitcher';

const Sidebar = (props) => {

    const { open, toggleSidebar } = props;
    const isMobile = useMediaQuery({ query: `(max-width: ${screenBreakpointsData.md})`});
    const sidebarRef = useRef(null);
    const currentPath = usePathname();

    useEffect(() => {
        console.log(currentPath)
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                toggleSidebar(false);
            }
        };

        if (isMobile && open) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [open, isMobile, toggleSidebar, currentPath]);

    return (
        <div className={`absolute z-0 top-0 left-0 w-full h-screen bg-black ${isMobile?(open?'bg-opacity-55':'bg-opacity-0'):'bg-opacity-0'}`}>
            <nav 
                className={`w-48 bg-gray-200 dark:bg-black text-text-light dark:text-text-dark pt-20 min-h-screen p-4 absolute ${open?'left-0':'-left-72'}`}
                ref={sidebarRef}
            >
                <ul>
                    {menuData && menuData.map((item, index) => (
                        <li
                            key={`menu-item-${index}`}
                            className={`
                                cursor-pointer flex items-center py-2 px-4 rounded 
                                hover:bg-primary dark:hover:bg-secondary  
                                ${item.path === currentPath ? 'text-secondary dark:text-primary hover:text-text-light hover:dark:text-text-dark' : ''}
                            `}
                        >
                            <a href={item.path} className={`${item.path === currentPath ? 'font-extrabold' : ''}`}>{item.name}</a>
                        </li>
                    ))}
                </ul>
                <div className='px-4 mt-4'><ThemeSwitcher /></div>
            </nav>
        </div>
    );
};

export default Sidebar;
