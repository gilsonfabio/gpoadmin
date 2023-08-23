"use client"
import React, {useState} from "react";
import { FaCheck } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

import Link from "next/link";

const Contato = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    
    function sendEmail(e:any) {
        e.preventDefault();

        if (name === '' || email === '' || phone === '' || subject === '' || message === '') {
            alert('Favor preencher todos os campos!');
            return;
        }

        const templateParams = {
            from_name: name,
            email: email,
            phone: phone,
            subject: subject,
            message: message, 
        }

        emailjs.send("service_04zry3v", "template_133bdzv", templateParams, "AjR7P2NtO3oT0zcxj")
        .then((response) => {
            console.log("EMAIL ENVIADO", response.status, response.text)
            setName('')
            setEmail('')
            setPhone('')
            setSubject('')
            setMessage('')

        }, (err:any) => {
            console.log("ERRO", err)
        })
    }    
   
    return (
        <div className="flex flex-col mt-0 bg-gray-100 md:p-20 w-full">
            <div className="flex items-center justify-center w-full">
                <span className="text-gray-600 text-3xl mt-1 mb-5 ">FALE CONOSCO</span>
            </div>
            <div className="flex flex-col md:flex-row w-full ">
                <div className="w-full md:w-[50%] bg-gray-100 p-2">
                    <div className="flex flex-col w-full ">
                        <span className="w-fullh-auto mt-0 mb-20 md:text-sm">Entre em contato conosco para solucionar qualquer dúvida</span>
                        <div className="flex flex-row md:items-center w-[90%] md:w-1/2 h-auto bg-gray-200 rounded shadow-xl p-2 mb-10 ">
                            <FaWhatsapp className="w-10 h-10 text-green-500 fa-solid"/>
                            <span className="text-black text-xl font-bold ml-5">(62)98289-7455</span>
                        </div>
                        <div className="flex flex-row items-center w-[90%] md:w-1/2 h-auto bg-gray-200 rounded shadow-xl p-2 ">
                            <span className="text-4xl text-green-500 fa-solid">@</span>
                            <span className="text-black text-sm font-bold ml-7">contato@innvento.com.br</span>
                        </div>
                    </div>                    
                </div>
                <div className="w-full md:w-[50%] bg-gray-300 p-2">
                    <form onSubmit={() => {}}>
                        <div className="mb-5">
                            <label className="mb-3 block text-base font-medium text-[#07074D]">Nome Completo</label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                placeholder="Nome completo" 
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                        </div>
                        <div className="mb-5">
                            <label className="mb-3 block text-base font-medium text-[#07074D]">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                placeholder="example@domain.com"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email} 
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                        </div>
                        <div className="mb-5">
                            <label className="mb-3 block text-base font-medium text-[#07074D]">Telefone</label>
                            <input 
                                type="text" 
                                name="telefone" 
                                id="telefone" 
                                placeholder="(99)99999-9999"
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone} 
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                        </div>
                        <div className="mb-5">
                            <label className="mb-3 block text-base font-medium text-[#07074D]">Assunto</label>
                            <input 
                                type="text" 
                                name="subject" 
                                id="subject" 
                                placeholder="Assunto"
                                onChange={(e) => setSubject(e.target.value)}
                                value={subject} 
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                        </div>
                        <div className="mb-5">
                            <label className="mb-3 block text-base font-medium text-[#07074D]">Mensagem</label>
                            <textarea 
                                rows={4} 
                                name="message" 
                                id="message" 
                                placeholder="Mensagem"
                                onChange={(e) => setMessage(e.target.value)}
                                value={message} 
                                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">

                            </textarea>
                        </div>
                        <div>
                            <button type="submit" className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>                
    );
}

export default Contato;