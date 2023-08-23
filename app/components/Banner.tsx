import React from "react";
import Image from "next/image";

import imgBanner from '../../public/imgBanner.jpg';
import Link from "next/link";

const Banner = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row md:justify-between items-center w-full h-auto'>
            <div className="w-[90%] md:w-[50%] h-auto ">
                <div className="flex flex-col md:ml-24">
                    <span className="text-xl md:text-4xl text-black font-bold">O poder de controlar</span>
                    <span className="text-xl md:text-4xl text-black font-bold">seu capital político e suas campanhas</span>
                    <span className="text-xl md:text-4xl text-black font-bold">agora na suas mãos!</span>
                </div>
            </div>
            <div className="w-[90%] md:w-[50%] h-auto ">
                <Image className="hover:cursor-pointer" src={imgBanner} alt="" /> 
            </div>
            
        </div>                
    );
}

export default Banner;