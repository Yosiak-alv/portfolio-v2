import React from "react";
import Logo from "../../assets/Logo.png";
export const NavBar =() => {
    return (
        <div className="fixed top-0 left-0 right-0 bg-[#282C33]">
            <div className="max-w-[1560px] mx-auto">
                <div className="left flex gap-2 items-center font-bold text-white text-base">
                    {/* Logo */}
                    <div className="img">
                        <img src={Logo} alt="Logo" />
                    </div>
                    Josias
                </div>
                <div className="right">
                    <div className="menu flex">
                        <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                            <span className="text-[#C778DD] font-medium">#</span>home
                        </li>
                        <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                            <span className="text-[#C778DD] font-medium">#</span>home
                        </li>
                        <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                            <span className="text-[#C778DD] font-medium">#</span>about-me
                        </li>
                        <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                            <span className="text-[#C778DD] font-medium">#</span>contact-me
                        </li>
                    </div>
                </div>
            </div>
        </div>
    )
}