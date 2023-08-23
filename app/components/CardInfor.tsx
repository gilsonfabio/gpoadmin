import React from "react";
import Image from "next/image";

import imgInfor from '../../public/imgInfor01.jpg'
import Link from "next/link";

const CardInfor = () => {
    return (
        <div className='bg-gray-300 flex flex-col md:px-20 md:flex-row md:justify-between items-center w-full h-auto'>
            <div className="w-[90%] md:w-[50%] h-auto ">
                <Image className="md:p-5 md:w-[80%] hover:cursor-pointer" src={imgInfor} alt="" /> 
            </div>
            <div className="flex items-center justify-center w-[90%] md:w-[50%] h-auto ">
                <span className="text-md md:text-2xl md:font-semibold ">Com o mundo cada dia mais globalizado, e com informações cada vez mais rápidas e nem sempre verdadeiras, surge a necessidade de manter seu capital politico sempre 
                    conectado com suas atividades. Nós estamos aqui para te ajudar a unir seus eleitores a você. 
                </span>
            </div>           
        </div>                
    );
}

export default CardInfor;