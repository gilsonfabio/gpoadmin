import React from "react";
import Image from "next/image";

import imgInfor from '../../public/imgInfor02.jpg'
import Link from "next/link";

const Informe = () => {
    return (
        <div className='flex flex-col md:px-20 md:flex-row md:justify-between items-center w-full h-auto'>            
            <div className="flex flex-col w-[90%] md:w-[50%] h-auto ">
                <span className="text-md md:text-2xl md:font-semibold ">MÓDULO WEB</span>
                <span className="text-md md:text-xl md:font-semibold ">Permite fazer a gestão do seu capital político com agilidade e segurança!</span>
                <span className="text-md md:text-xl md:font-semibold ">Possui módulo de controle de campanhas;</span>
                <span className="text-md md:text-xl md:font-semibold ">Cadastro de eleitores, por regiões de atuação;</span>
                <span className="text-md md:text-xl md:font-semibold ">Permite criação de grupos de eleitores;</span>
                <span className="text-md md:text-xl md:font-semibold ">Controle Denuncias, Solicitações dos seus eleitores;</span>
                <span className="text-md md:text-xl md:font-semibold ">Envia notificações individuais ou por grupos de eleitores;</span>
                <span className="text-md md:text-xl md:font-semibold ">Mantem base de dados com vagas de cursos e emprego disponiveis;</span>
                <span className="text-md md:text-xl md:font-semibold ">Estatísticas de eleitores por região, permite administrar melhor a atuação do candidato;</span>
                <span className="text-md md:text-xl md:font-semibold ">Controle da agenda do candidato;</span>
                <span className="text-md md:text-xl md:font-semibold ">Envio de noticias importantes para seus eleitores;</span>
                <span className="text-md md:text-xl md:font-semibold ">Possibilidade de criação de enquetes;</span>
            </div>           
            <div className="w-[90%] md:w-[50%] h-auto ">
                <Image className="md:p-5 md:w-[80%] hover:cursor-pointer" src={imgInfor} alt="" /> 
            </div>
        </div>                
    );
}

export default Informe;