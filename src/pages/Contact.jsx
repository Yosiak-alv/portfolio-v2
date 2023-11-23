import React from 'react';
import { FaDiscord } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Contact = () => {
    return (
        <div className='px-5 max-w-[1560px] min-h-screen mx-auto pt-20 py-10'>
            {/* title */}
            <div className=" text-white font-semibold text-[32px] mt-12">
                <span className=' text-[#C778DD]'>/</span>contact-me
            </div>
            {/* h2 title */}
            <div className=" text-white mt-[14px] mb-[46px]">What I am looking for?</div>
            {/* flex main */}
            <div className="flex justify-between flex-wrap gap-10">
                {/* left side */}
                <div className=" md:w-3/5 w-full">
                    {/* some text */}
                    <div className=" text-[#ABB2BF] font-medium">
                        I’m interested if any kind of opportunity. However, if you have other request or question, don’t hesitate to contact me
                    </div>
                </div>
                {/* right side */}
                <div className=" flex gap-3">
                    {/* boxes/flex */}

                    {/* 2 */}
                    <div className=" p-4 border border-[#ABB2BF]">
                        <h2 className=' text-white font-medium pb-4 '>Message me here</h2>
                        <div className=" text-[#ABB2BF]">
                            {/* contacts */}
                            <a href="https://www.instagram.com/josias_rom/" target='_blank' rel='noopener noreferrer'>
                                <div className=" text-[#ABB2BF] flex items-center gap-1">
                                    <FaInstagram color="#ABB2BF"/>
                                    <span className='hover:underline'>josias_rom</span>
                                </div>
                            </a>
                            {/* contacts */}
                            <div className=" flex gap-1 items-center">
                                {/* img */}
                                <IoMdMail color="#ABB2BF"/>
                                {/* text */}
                                <span>josiasalvarengaromero@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* all media */}
            <div className="mt-6 mb-5x">  
                {/* title */}
                <div className="text-[32px] font-medium text-white"><span className='text-[#C778DD]'>#</span>all-media</div>
                {/* media */}
                <div className="flex gap-6 flex-wrap">
                    <a href="https://github.com/Yosiak-alv" target='_blank' rel='noopener noreferrer'>
                        <div className=" text-[#ABB2BF] flex items-center gap-1">
                            <FaGithub color="#ABB2BF"/>
                            <span  className='hover:underline'>Yosiak-alv</span>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/josías-alvarenga-314920238" target='_blank' rel='noopener noreferrer'>
                        <div className=" text-[#ABB2BF] flex items-center gap-1">
                            <FaLinkedin color="#ABB2BF"/>
                            <span className='hover:underline'>Josias Alvarenga</span>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/josias_rom/" target='_blank' rel='noopener noreferrer'>
                        <div className=" text-[#ABB2BF] flex items-center gap-1">
                            <FaInstagram color="#ABB2BF"/>
                            <span className='hover:underline'>josias_rom</span>
                        </div>
                    </a>
                    <a href="https://discordapp.com/users/689464923969028144" target='_blank' rel='noopener noreferrer'>
                        <div className=" text-[#ABB2BF] flex items-center gap-1">
                            <FaDiscord color="#ABB2BF"/>
                                {/* text */}
                                <span className='hover:underline'>Josias-Alv</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}