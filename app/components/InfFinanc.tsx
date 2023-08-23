import React from "react";
import Image from "next/image";

import imgInfor from '../../public/imgInfor04.jpg'
import Link from "next/link";

const InfFinanc = () => {
    return (
        <div className='flex flex-col md:px-20 md:flex-row md:justify-between items-center w-full h-auto'>            
            <div className="flex flex-col w-[90%] md:w-[50%] h-auto ">
                <span className="text-md md:text-2xl md:font-semibold ">MÓDULO FINANCEIRO</span>
                <span className="text-md md:text-xl md:font-semibold ">Permite controlar despesas por campanhas e outras;</span>
                <span className="text-md md:text-xl md:font-semibold ">Administra gastos de verbas e doações;</span>
                <span className="text-md md:text-xl md:font-semibold ">Controla despesas por tipo;</span>
                <span className="text-md md:text-xl md:font-semibold ">Relatorios administrativos;</span>
                <span className="text-md md:text-xl md:font-semibold ">Estatisticas de despesas por tipos;</span>
            </div>           
            <div className="w-[90%] md:w-[50%] h-auto ">
                <Image className="md:p-5 md:w-[80%] hover:cursor-pointer" src={imgInfor} alt="" /> 
            </div>
        </div>                
    );
}

export default InfFinanc;