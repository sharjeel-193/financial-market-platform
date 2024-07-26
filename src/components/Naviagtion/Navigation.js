"use client"
import React, {useState} from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar';
import { useMediaQuery } from 'react-responsive';

function Navigation() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    const handleToggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }
    return (
        <div>
            <Header toggleSidebar={handleToggleSidebar} open={isMobile ? isSidebarOpen : true} />
            <Sidebar open={isMobile ? isSidebarOpen : true} toggleSidebar={handleToggleSidebar} />
        </div>
    )
}

export default Navigation