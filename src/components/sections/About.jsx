import React from "react";
import man from '../../assets/man.png';
import { Link, NavLink } from "react-router-dom";
export const About = () => {

    return (
        <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
            {/* bottom */}
            <div className=" flex-wrap flex items-center justify-between">
                {/* left */}
                <div className="md:w-[48%] w-full">
                    {/* title */}
                    <div className=" mb-12">
                        <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
                            <div className="">
                                <span className="text-customBlue">#</span>about-me
                            </div>
                            <div className="line w-1/3 h-px bg-customBlue"></div>
                        </div>
                    </div>
                    {/* disc */}
                    <p className="text-[#ABB2BF] text-justify">
                        Hello, i’m Josias!
                        <br />
                        <br />
                        I have the ambition to develop professionally in the field of web development, 
                        being an active part of a company where I can contribute significantly to their projects. 
                        My main goal is to start my career as a Back-End Developer, with the desire to apply my 
                        acquired knowledge and eventually evolve into a Full Stack Developer profile.
                        <br />
                        <br />
                        Currently, I am developing independent projects involving technologies such as 
                        SQL, Laravel, Inertia.js, Bootstrap, Tailwind, Vue.js amoung others.
                    </p>
                    {/* button */}
                    <div className="mt-7">
                        <NavLink
                            to="/about-me"
                            className=" duration-150 hover:bg-customBlue-700 border border-customBlue px-4 py-2 text-white "
                        >
                            <button>Read more -{">"}</button>
                        </NavLink>
                    </div>
                </div>
                {/* right */}
                <div className=" mx-auto">
                    <img className="mx-auto" src={man} alt="" />
                </div>
            </div>
        </div>
    );
}