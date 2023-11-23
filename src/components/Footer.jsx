import React from "react";
const currentYear = new Date().getFullYear();
import logo from "../assets/Logo.png";
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";;

export const Footer = () =>{

    return (
        <div>
            <div className="w-full h-[1px] bg-[#ABB2BF] mt-20 mb-8"></div>
            <div className="px-5 max-w-[1560px] mx-auto ">
                <div className="flex justify-between gap-y-10 flex-wrap">
                    <div className="mx-auto">
                        <div className="flex items-center gap-8 mb-3">
                            <div className="flex gap-2 items-center text-2xl font-bold text-white">
                                <img src={logo} alt="logo" />
                                <span>Josias</span>
                            </div>
                        </div>
                        <div className="text-[#FFFFFF]">
                            <p>
                               Web Developer from El Salvador
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto mb-3">
                        <h2 className="text-white text-2xl font-medium mb-3">Socials</h2>
                        <div className="flex items-center gap-2">
                            <a href="https://github.com/Yosiak-alv" target='_blank' rel='noopener noreferrer'><FaGithub color="#ABB2BF"/></a>
                            <a href="https://www.linkedin.com/in/josías-alvarenga-314920238" target='_blank' rel='noopener noreferrer'><FaLinkedin color="#ABB2BF"/></a>
                            <a href="https://www.instagram.com/josias_rom/" target='_blank' rel='noopener noreferrer'><FaInstagram color="#ABB2BF"/></a>
                        </div>
                    </div>
                </div>
                <div className="text-center text-[#ABB2BF] pb-8">{currentYear}™ All Rights Reserved, Made by Josias Alvarenga</div>
            </div>
        </div>
        
       
    )
}