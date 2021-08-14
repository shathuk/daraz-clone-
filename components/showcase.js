import React from 'react'
import qr from '../images/qr-code.png'
import lgo from '../images/lg.png'
import appstore from '../images/appstore.png'
import android from '../images/android.png'
import Image from 'next/image'
function showcase() {
    return (
        <div className="flex justify-evenly mt-10 p-10 bg-dark text-white">
            <div>
                <h2 className="font-bold text-lg">Customer Care</h2>
                <ul className="text-sm">
                <li className="cursor-pointer hover:underline">Help Center</li> 
                <li className="cursor-pointer hover:underline">How to Buy</li> 
                <li className="cursor-pointer hover:underline">Corporate & Bulk Purchasing</li> 
                <li className="cursor-pointer hover:underline">Returns & Refunds</li> 
                <li className="cursor-pointer hover:underline">Contact Us</li> 
                </ul>

                <h2 className="font-bold text-lg mt-8">Earn With Daraz</h2>
                <ul className="text-sm">
                <li className="cursor-pointer hover:underline">Help Center</li> 
                <li className="cursor-pointer hover:underline">How to Buy</li> 
                <li className="cursor-pointer hover:underline">Corporate & Bulk Purchasing</li> 
                <li className="cursor-pointer hover:underline">Returns & Refunds</li>  
                </ul>
            </div>
            <div>
            <h2 className="font-bold text-lg">Customer Care</h2>
                <ul className="text-sm">
                <li className="cursor-pointer hover:underline">Help Center</li> 
                <li className="cursor-pointer hover:underline">How to Buy</li> 
                <li className="cursor-pointer hover:underline">Corporate & Bulk Purchasing</li> 
                <li className="cursor-pointer hover:underline">Returns & Refunds</li> 
                <li className="cursor-pointer hover:underline">Contact Us</li> 
                </ul>
            </div>

            <div>
            <Image 
                src = {qr}
                width="100"
                height="100"
                objectFit="contain"
                className="cursor-pointer"
                />

                
                <p className="text-primaryclr mb-5">Download the APP</p>

                <Image 
                src = {appstore}
                width="150"
                height="50"
                objectFit="contain"
                className="cursor-pointer"
                />

                <Image 
                src = {android}
                width="150"
                height="50"
                objectFit="contain"
                className="cursor-pointer"
                />
            </div>
            
        </div>
    )
}

export default showcase
