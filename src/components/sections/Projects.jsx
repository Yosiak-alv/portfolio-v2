import React, {useState} from "react";
import { ProjectCard } from "../ProjectCard";
import { NavLink } from "react-router-dom";
import autorepairlinker from '../../assets/autorepairlinker_project.png';
import warehousewise from '../../assets/warehousewise_project.png';
import sportcity from '../../assets/sportcity_project.png';
export const Projects = () => {
    const projects = [
        {
            img:autorepairlinker,
            langs:["PHP","Laravel","React Native","NativeWind","React Query"],
            title:"AutoRepairLinker",
            disc:"AutoRepair Linker is a mobile React Native application in which myself and other four talented developers are working on at the moment. Designed to streamline the management of automobile insurance claims, it offers key solutions for insurers, repair shops, and parts suppliers.",
            link:'https://github.com/karivas-dev/AutoRepairLinker'
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
        <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
            <div data-aos="fade-down-right" className=" flex justify-between items-center">

                <div className="font-medium w-2/3 text-[32px] text-white flex items-center gap-2">
                    <div>
                        <span className="text-[#C778DD]">#</span>projects
                    </div>
                    <div className="line w-2/3 h-[1px] bg-[#C778DD]"></div>

                </div>
                <div className="text-white font-medium">
                    <NavLink to="/projects">
                        <span>View all ~~~&gt;</span>
                    </NavLink>
                </div>
            </div>
            <div data-aos="fade-up" className="flex flex-wrap justify-between gap-4 my-12">
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