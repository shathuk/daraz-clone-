import React from 'react'
import Image from 'next/image'
import bannerImg from '../images/3953a423-fabe-4d83-b381-aaa0ffc3d744.png'
import mainLogo from '../images/logo.png'
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import aniImg from '../images/animate-banner.gif'

function Header() {
    return (
        <header>
            {/* top nav */}
        <div>
            <div className="flex justify-center bg-dark_gray">
                <Image 
                src = {bannerImg}
                objectFit="contain"
                className="cursor-pointer"
                />
            </div>
        </div>

        {/* middle nav */}
        <div className="flex justify-center space-x-6 p-2 font-sans text-xs md:text-sm bg-light_gray">
            <p className="cursor-pointer hover:underline hover:text-primaryclr">SAVE MORE ON APP</p>
            <p className="cursor-pointer hover:underline hover:text-primaryclr">CORPORATE & BULK PURCHASING</p>
            <p className="cursor-pointer hover:underline hover:text-primaryclr">SELL ON DARAZ</p>
            <p className="cursor-pointer hover:underline hover:text-primaryclr">CUSTOMER CARE</p>
            <p className="cursor-pointer hover:underline hover:text-primaryclr">TRACK MY ORDER</p>
            <p className="cursor-pointer hover:underline hover:text-primaryclr">SHATHU'S ACCOUNT</p>


        </div>

        {/* buttom nav */}
      
        <div className="flex justify-center items-center flex-grow space-x-6 max-w-screen-xl mx-auto">
            {/* Logo */}
            <div className="flex items-center flex-grow sm:flex-grow-0">
            <Image 
                src = {mainLogo}
                height={80}
                width={140}
                objectFit="contain"
                className="cursor-pointer"
                />
            </div>

            {/* Search Bar */}
            <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-primaryclr">
                <input className="p-2 h-full bg-white w-6 flex-grow flex-shrink focus:outline-none px-4" type="text" placeholder="Search in daraz" />
                <SearchIcon className="h-14 p-4 text-white" />
            </div>

            {/* Right menu */}
            <div className="flex items-center space-x-6">

                <div className="relative flex">
                    <span className="absolute top-0 right-0 h-5 w-4 bg-primaryclr text-center rounded-full text-white font-bold">0</span>
                    <ShoppingCartIcon className="h-8 cursor-pointer "/>
                </div>

                <div>
                <Image 
                src = {aniImg}
                height={80}
                width={200}
                objectFit="contain"
                className="cursor-pointer"
                />
                </div>

            </div>
        </div>
        <div className="flex sm:hidden items-center h-10 rounded-md flex-grow cursor-pointer bg-primaryclr mb-4">
                <MenuIcon className="h-10 bg-light_gray" />
                <input className="p-2 h-full bg-white w-6 flex-grow flex-shrink focus:outline-none px-4" type="text" placeholder="Search in daraz" />
                <SearchIcon className="h-14 p-4 text-white" />
        </div>
        
   
        </header>
        
    )
}

export default Header
