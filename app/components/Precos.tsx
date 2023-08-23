import React from "react";
import { FaCheck } from 'react-icons/fa';
import Link from "next/link";

const Precos = () => {
    return (
        <div className="flex flex-col mt-4 bg-gray-300 ">
            <div className="flex items-center justify-center w-full">
                <span className="text-gray-500 text-3xl ">PLANOS</span>
            </div>
            <div className='flex flex-col md:px-20 md:flex-row md:justify-between items-center w-full h-auto px-3 mt-6 mb-10'>  
                <div className="flex flex-col ">
                    <div className='flex items-center justify-center bg-gray-500 rounded w-80 h-10 mt-2'>
                        <p className="text-white font-medium text-md leading-tight uppercase">Opção 1</p>
                    </div> 
                    <div className="flex flex-row items-center justify-center mt-2">
                        <span className="text-black text-md">R$</span>
                        <span className="text-black text-3xl">169,00</span>
                        <span className="text-black text-md">/mês</span>                                        
                    </div>
                    <div className="flex items-center justify-center w-full h-20 ">
                        <span className="text-black font-bold text-md">Módulo Web</span>
                    </div> 
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-green-500 fa-solid"/>
                        <span className="text-sm ml-2">cadastro de contatos ilimitados</span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-green-500 fa-solid"/>
                        <span className="text-sm ml-2">controle de denuncias ilimitadas</span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-green-500 fa-solid"/>
                        <span className="text-sm ml-2">controle de solicitações ilimitadas</span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-green-500 fa-solid"/>
                        <span className="text-sm ml-2">controle de agenda</span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-green-500 fa-solid"/>
                        <span className="text-sm ml-2">envio de notificações</span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-gray-300 fa-solid"/>
                        <span className="text-sm ml-2"></span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-gray-300 fa-solid"/>
                        <span className="text-sm ml-2"></span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-gray-300 fa-solid"/>
                        <span className="text-sm ml-2"></span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-gray-300 fa-solid"/>
                        <span className="text-sm ml-2"></span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-gray-300 fa-solid"/>
                        <span className="text-sm ml-2"></span>   
                    </div>
                    <div className='flex items-center justify-center bg-green-600 rounded hover:bg-green-800 transition duration-150 ease-in-out w-80 h-10'>
                        <p className="text-white font-medium text-md leading-tight uppercase">Assinar</p>
                    </div> 
                </div>
                <div className="flex flex-col ">
                    <div className='flex items-center justify-center bg-gray-500 rounded w-80 h-10 mt-2'>
                        <p className="text-white font-medium text-md leading-tight uppercase">Opção 2</p>
                    </div>
                    <div className="flex flex-row items-center justify-center mt-2">
                        <span className="text-black text-md">R$</span>
                        <span className="text-black text-3xl">279,00</span>
                        <span className="text-black text-md">/mês</span>                                        
                    </div> 
                    <div className="flex items-center justify-center w-full h-20">
                        <span className="text-black font-bold text-md">Módulo Web+Financeiro</span>
                    </div>                
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-green-500 fa-solid"/>
                        <span className="text-sm ml-2">cadastro de contatos ilimitados</span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-green-500 fa-solid"/>
                        <span className="text-sm ml-2">controle de denuncias ilimitadas</span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-green-500 fa-solid"/>
                        <span className="text-sm ml-2">controle de solicitações ilimitadas</span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-green-500 fa-solid"/>
                        <span className="text-sm ml-2">controle de agenda</span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-green-500 fa-solid"/>
                        <span className="text-sm ml-2">envio de notificações</span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-gray-300 fa-solid"/>
                        <span className="text-sm ml-2"></span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-gray-300 fa-solid"/>
                        <span className="text-sm ml-2"></span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-gray-300 fa-solid"/>
                        <span className="text-sm ml-2"></span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-gray-300 fa-solid"/>
                        <span className="text-sm ml-2"></span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-gray-300 fa-solid"/>
                        <span className="text-sm ml-2"></span>   
                    </div>
                    <div className='flex items-center justify-center bg-green-600 rounded hover:bg-green-800 transition duration-150 ease-in-out w-80 h-10'>
                        <p className="text-white font-medium text-md leading-tight uppercase">Assinar</p>
                    </div>  
                </div>
                <div className="flex flex-col ">
                    <div className='flex items-center justify-center bg-gray-500 rounded w-80 h-10 mt-2'>
                        <p className="text-white font-medium text-md leading-tight uppercase">Opção 3</p>
                    </div>
                    <div className="flex flex-row items-center justify-center mt-2">
                        <span className="text-black text-md">R$</span>
                        <span className="text-black text-3xl">289,00</span>
                        <span className="text-black text-md">/mês</span>                                        
                    </div> 
                    <div className="flex items-center justify-center w-full h-20">
                        <span className="text-black font-bold text-md">Módulo Web+Mobile</span>
                    </div>                
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-green-500 fa-solid"/>
                        <span className="text-sm ml-2">cadastro de contatos ilimitados</span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-green-500 fa-solid"/>
                        <span className="text-sm ml-2">controle de denuncias ilimitadas</span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-green-500 fa-solid"/>
                        <span className="text-sm ml-2">controle de solicitações ilimitadas</span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-green-500 fa-solid"/>
                        <span className="text-sm ml-2">controle de agenda</span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-green-500 fa-solid"/>
                        <span className="text-sm ml-2">envio de notificações</span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-gray-300 fa-solid"/>
                        <span className="text-sm ml-2"></span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-gray-300 fa-solid"/>
                        <span className="text-sm ml-2"></span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-gray-300 fa-solid"/>
                        <span className="text-sm ml-2"></span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-gray-300 fa-solid"/>
                        <span className="text-sm ml-2"></span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-gray-300 fa-solid"/>
                        <span className="text-sm ml-2"></span>   
                    </div>
                    <div className='flex items-center justify-center bg-green-600 rounded hover:bg-green-800 transition duration-150 ease-in-out w-80 h-10'>
                        <p className="text-white font-medium text-md leading-tight uppercase">Assinar</p>
                    </div>  
                </div>
                <div className="flex flex-col ">
                    <div className='flex items-center justify-center bg-gray-500 rounded w-80 h-10 mt-2'>
                        <p className="text-white font-medium text-md leading-tight uppercase">Opção 4</p>
                    </div> 
                    <div className="flex flex-row items-center justify-center mt-2">
                        <span className="text-black text-md">R$</span>
                        <span className="text-black text-3xl">399,00</span>
                        <span className="text-black text-md">/mês</span>                                        
                    </div>
                    <div className="flex items-center justify-center w-full h-20">
                        <span className="text-black font-bold text-md">Módulo Web+Mobile+Financeiro</span>
                    </div>                 
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-green-500 fa-solid"/>
                        <span className="text-sm ml-2">cadastro de contatos ilimitados</span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-green-500 fa-solid"/>
                        <span className="text-sm ml-2">controle de denuncias ilimitadas</span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-green-500 fa-solid"/>
                        <span className="text-sm ml-2">controle de solicitações ilimitadas</span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-green-500 fa-solid"/>
                        <span className="text-sm ml-2">controle de agenda</span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-green-500 fa-solid"/>
                        <span className="text-sm ml-2">envio de notificações</span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-gray-300 fa-solid"/>
                        <span className="text-sm ml-2"></span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-gray-300 fa-solid"/>
                        <span className="text-sm ml-2"></span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-gray-300 fa-solid"/>
                        <span className="text-sm ml-2"></span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-gray-300 fa-solid"/>
                        <span className="text-sm ml-2"></span>   
                    </div>
                    <div className="flex flex-row items-center p-1">
                        <FaCheck className="w-3 h-3 text-gray-300 fa-solid"/>
                        <span className="text-sm ml-2"></span>   
                    </div>
                    <div className='flex items-center justify-center bg-green-600 rounded hover:bg-green-800 transition duration-150 ease-in-out w-80 h-10'>
                        <p className="text-white font-medium text-md leading-tight uppercase">Assinar</p>
                    </div> 
                </div>                 
            </div>
        </div>                
    );
}

export default Precos;