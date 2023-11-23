import React from "react"
import { IoMdMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Contact = () => {

    return(
        <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
            {/* top */}
            <div className="">
                {/* header */}
                <div className=" mb-10">
                    <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
                    <div className="">
                        <span className="text-[#C778DD]">#</span>contacts
                    </div>
                    <div className="line w-1/3 h-px bg-[#C778DD]"></div>
                    </div>
                </div>
            </div>
            {/* bottom */}
            <div className=" flex items-start flex-wrap gap-10 justify-between">
                {/* left */}
                <div className="left w-full md:w-1/2">
                    <p className=" text-[#ABB2BF]">
                    I’m interested if any kind of opportunity. However, if you have other request or question, don’t hesitate to contact me
                    </p>
                </div>
                {/* right */}
                <div className="mx-auto">
                    {/* box */}
                    <div className="border border-[#ABB2BF] p-4">
                        <h2 className=" mb-4 text-white font-semibold">
                            Message me here
                        </h2>
                        {/* get in touch */}
                        <div className="">
                            {/* links */}
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
                            <div className="flex gap-1 items-center">
                                <IoMdMail color="#ABB2BF"/>
                                <span className="text-[#ABB2BF]">josiasalvarengaromero@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}