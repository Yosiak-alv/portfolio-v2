import React,{useEffect, useState} from "react";
import Logo from "../assets/Logo.png";
import close from "../assets/close.png";
import { NavLink } from "react-router-dom";

export const NavBar =() => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="fixed top-0 left-0 right-0 bg-[#282C33]">
            <div className="px-5 max-w-[1560px] mx-auto flex items-center justify-between pt-6 my-2">
                <div className="left flex gap-2 items-center font-bold text-white text-base">
                    {/* Logo */}
                    <div className="img">
                        <img src={Logo} alt="Logo" />
                    </div>
                    Josias
                </div>
                <div className="right flex items-center">
                    <div className={`menu duration-300 flex flex-col md:flex-row justify-center fixed w-full ${!toggle ? `right-[-100%] top-0 bottom-0`:`right-0 top-0 bottom-0`} 
                     bg-[#282C33] md:static`}>
                        <NavLink to="/" onClick={() => setToggle(false)}>
                            <li className="text-[#ABB2BF] text-[32px] md:text-base my-4 md:my-auto list-none mx-4">
                                <span className="text-[#C778DD] font-medium">#</span>home
                            </li>
                        </NavLink>
                        <NavLink to="/projects" onClick={() => setToggle(false)}>
                            <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                                <span className="text-[#C778DD] font-medium">#</span>projects
                            </li>
                        </NavLink>
                        <NavLink to="/about-me" onClick={() => setToggle(false)}>
                            <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                                <span className="text-[#C778DD] font-medium">#</span>about-me
                            </li>
                        </NavLink>
                        <NavLink to="/contact-me" onClick={() => setToggle(false)}>
                            <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                                <span className="text-[#C778DD] font-medium">#</span>contact-me
                            </li>
                        </NavLink>
                    </div>
                    {
                        toggle &&   <div onClick={() => setToggle(false)} className="close absolute block md:hidden right-3 top-3">
                                        <img src={close} alt="X" />
                                    </div>
                    }
                    {/* Hamburger */}
                    <div onClick={() => setToggle(true)} className="">
                        <div className="open block md:hidden w-8">
                            <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
                            <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
                            <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}