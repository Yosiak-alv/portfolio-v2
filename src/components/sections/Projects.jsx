import React, {useState} from "react";
import { ProjectCard } from "../ProjectCard";
import { NavLink } from "react-router-dom";
import autorepairlinker from '../../assets/autorepairlinker_project.png';
import warehousewise from '../../assets/warehousewise_project.png';
import sportcity from '../../assets/sportcity_project.png';
import autopilot from '../../assets/autopilot_project.png';
export const Projects = () => {
    const projects = [
        {
            img:autopilot,
            langs:["PHP","Laravel","Vue.js","Inertia.js","Tailwindcss"],
            title:"AutoPilot",
            disc:"AutoPilot, a dynamic web application, sets the standard for automotive repair history management. Designed as a progressive web application (PWA), it adapts perfectly to any device, ensuring accessibility and convenience. This system is focused on each car belonging to different centers of the Fe y Alegría foundation, what repairs were made, what documents it has among many others.",
            link:'https://github.com/Yosiak-alv/AutoPilot'
        },
        {
            img:sportcity,
            langs:["PHP","Laravel","Vue.js","Inertia.js","Tailwindcss"],
            title:"SportCity",
            disc:"This project aims to help with the digitization of information such as customers, trainers, subscriptions, purchases, training sessions among others, which will help a better management of information for the gym SportCity located in Sonsonate.",
            link:'https://github.com/Yosiak-alv/SportCity'
        },
        {
            img:warehousewise,
            langs:["PHP","Laravel","Vue.js","Inertia.js","Tailwindcss"],
            title:"WarehouseWise",
            disc:"WarehouseWise is focused on facilitating the management of inventory data for a company. Through its graphical interface and user access, you can create and modify the existence of products including details such as price, type, quantity, among others.",
            link:'https://github.com/karivas-dev/WarehouseWise'
        },
        
    ];
    return (
        <div data-aos="fade-up" className="px-5 max-w-[1560px] mx-auto mt-20 py-10">

            <div  className=" flex justify-between items-center">

                <div className="font-medium w-2/3 text-[32px] text-white flex items-center gap-2">
                    <div>
                        <span className="text-customBlue">#</span>projects
                    </div>
                    <div className="line w-2/3 h-[1px] bg-customBlue"></div>

                </div>
                <div className="text-white font-medium hover:underline">
                    <NavLink to="/projects">
                        <span>View all ~~~&gt;</span>
                    </NavLink>
                </div>
            </div>


            <div className="flex flex-wrap justify-between gap-4 my-12">
                {
                    projects.map(({img,langs,title,disc,link}) => {
                        return(
                            <ProjectCard key={title} img={img} langs={langs} title={title} disc={disc} link={link}/>
                        )
                    })
                }
            </div>

           
        </div>
    );
}