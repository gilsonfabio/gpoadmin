import React from "react";
import Image from "next/image";

import imgInfor from '../../public/imgInfor03.jpg'
import Link from "next/link";

const InfMobile = () => {
    return (
        <div className='flex flex-col bg-gray-300 md:px-20 md:flex-row md:justify-between items-center w-full h-auto'>       
            <div className="w-[90%] md:w-[50%] h-auto ">
                <Image className="md:p-5 md:w-[80%] hover:cursor-pointer" src={imgInfor} alt="" /> 
            </div>     
            <div className="flex flex-col w-[90%] md:w-[50%] h-auto ">
                <span className="text-md md:text-2xl md:font-semibold ">MÓDULO MOBILE</span>
                <span className="text-md md:text-xl md:font-semibold ">Conecta você diretamente ao seus contatos;</span>
                <span className="text-md md:text-xl md:font-semibold ">Atualiza seu eleitor com notícias e seu dia a dia;</span>
                <span className="text-md md:text-xl md:font-semibold ">Administra as denuncias feitas por ele;</span>
                <span className="text-md md:text-xl md:font-semibold ">Controla as solicitações dos seus contatos;</span>
                <span className="text-md md:text-xl md:font-semibold ">Informa sobre oportunidades de cursos e empregos;</span>
                <span className="text-md md:text-xl md:font-semibold ">Permite criações de enquetes; </span>
                <span className="text-md md:text-xl md:font-semibold ">Canal de divulgação de informações importantes p/ seus contatos;</span>
            </div>            
        </div>                
    );
}

export default InfMobile;