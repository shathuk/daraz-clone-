import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import banner1 from '../images/banner-1.jpg'
import banner2 from '../images/banner-2.jpg'
import banner3 from '../images/banner-3.jpg'
import banner4 from '../images/banner-4.jpg'
import icon1 from '../images/icon-1.png'
import icon2 from '../images/icon-2.png'
import icon3 from '../images/icon-3.gif'
import icon4 from '../images/icon-4.gif'
import icon5 from '../images/icon-5.gif'

function Banner() {
    return (
        <div>

        
        <div className="relative">
            <div className="hidden sm:inline ml-10 p-4 absolute z-50 bg-white text-xs sm:text-base shadow-2xl">
                <p className="pb-2 ">Automotive & Motorbike</p>
                <p className="pb-2 ">Sports & Outdoor</p>
                <p className="pb-2 ">Electronic Devices</p>
                <p className="pb-2 ">Electronic Accessories</p>
                <p className="pb-2 ">TV & Home Appliances</p>
                <p className="pb-2 ">Health & Beauty</p>
                <p className="pb-2 ">Babies & Toys</p>
                <p className="pb-2 ">Groceries & Pets</p>
                <p className="pb-2 ">Home & Lifestyle</p>
                <p className="pb-2 ">Women's Fashion</p>
                <p className="pb-2">Men's Fashion</p>
                <p>Watches & Accessories</p>
            </div>

                <div>
                    <Carousel 
                        autoPlay
                        infiniteLoop
                        interval={3000}
                        showThumbs={false}
                        showStatus={false}
                    >

                            <div>
                            <Image 
                                src = {banner1}
                               
                                objectFit="contain"
                                className="cursor-pointer"
                                />
                            </div>

                            <div>
                            <Image 
                                src = {banner2}
                                
                                objectFit="contain"
                                className="cursor-pointer"
                                />
                            </div>

                            <div>
                            <Image 
                                src = {banner3}
                                
                                objectFit="contain"
                                className="cursor-pointer"
                                />
                            </div>

                            <div>
                            <Image 
                                src = {banner4}
                                
                                objectFit="contain"
                                className="cursor-pointer"
                                />
                            </div>
                    </Carousel>
                    
                </div>
        </div>
        

        <div className="flex items-center space-x-4 sm:space-x-8 mt-4">
            
            <div className="sm:flex sm:items-center bg-white py-2 px-5 rounded-full hover:shadow-inner shadow-2xl">
               
            <Image 
            src = {icon1}
            height={30}
            width={50}
            objectFit="contain"
            className="cursor-pointer"
            />
            <p className="text-xs sm:text-lg">Daraz Mall</p>
            </div>
            



            <div className="sm:flex sm:items-center bg-white py-2 px-5 rounded-full hover:shadow-inner shadow-2xl">
            <Image 
            src = {icon2}
            height={30}
            width={50}
            objectFit="contain"
            className="cursor-pointer"
            />
            <p className="text-xs sm:text-lg">Reload & Pay</p>
            </div>

            <div className="sm:flex sm:items-center bg-white py-2 px-5 rounded-full hover:shadow-inner shadow-2xl">
            <Image 
            src = {icon3}
            height={30}
            width={50}
            objectFit="contain"
            className="cursor-pointer"
            />
            <p className="text-xs sm:text-lg">Daraz Fashion</p>
            </div>

            <div className="sm:flex sm:items-center bg-white py-2 px-5 rounded-full hover:shadow-inner shadow-2xl">
            <Image 
            src = {icon4}
            height={30}
            width={50}
            objectFit="contain"
            className="cursor-pointer"
            />
            <p className="text-xs sm:text-lg">daraz Mart</p>
            </div>

            <div className="sm:flex sm:items-center bg-white py-2 px-5 rounded-full hover:shadow-inner shadow-2xl">
            <Image 
            src = {icon5}
            height={30}
            width={50}
            objectFit="contain"
            className="cursor-pointer"
            />
            <p className="text-xs sm:text-lg">Daraz Gifting</p>
            </div>
            
        </div>
    </div>
        
    )
}

export default Banner
