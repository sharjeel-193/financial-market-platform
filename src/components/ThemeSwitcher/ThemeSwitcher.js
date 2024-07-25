"use client"
import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon} from 'react-icons/fi'

const ThemeSwitcher = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check local storage to set the initial theme
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setIsDarkMode(storedTheme === 'dark');
            document.documentElement.classList.toggle('dark', storedTheme === 'dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDarkMode ? 'dark' : 'light';
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark', !isDarkMode);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div className="flex items-center">
            <div className={`text-secondary ${isDarkMode? 'hidden': 'visible'}`}><FiSun /></div>
                <label className="relative inline-flex items-center mx-1 cursor-pointer">
                    <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} className="sr-only" />
                    <div className="w-11 h-6 bg-gray-300 rounded-full dark:bg-gray-700"></div>
                    <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-gray-700 dark:bg-white rounded-full shadow transform transition-transform ${isDarkMode ? 'translate-x-5' : 'translate-x-0'}`}></span>
                </label>
            <div className={`text-primary ${isDarkMode? 'visible': 'hidden'}`}><FiMoon /></div>
        </div>
    );
};

export default ThemeSwitcher;
