import React from 'react';
import { ProjectCard } from '../ProjectCard';
import autorepairlinker from '../../assets/autorepairlinker_project.png';
import happydents from '../../assets/happydents_project.png';
import warehousewise from '../../assets/warehousewise_project.png';
import sporcity from '../../assets/sportcity_project.png';
import sportcityWeb from '../../assets/sportcity_web_project.png';
const projects = [
    {
        img:autorepairlinker,
        langs:["PHP","Laravel","React Native","NativeWind","React Query"],
        title:"AutoRepairLinker",
        disc:"AutoRepair Linker is a mobile React Native application in which myself and other four talented developers are working on at the moment. Designed to streamline the management of automobile insurance claims, it offers key solutions for insurers, repair shops, and parts suppliers.",
        link:'https://github.com/karivas-dev/AutoRepairLinker'
    },
    {
        img:sporcity,
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
    {
        img:happydents,
        langs:["PHP","Laravel","Vue.js","Inertia.js","Tailwindcss"],
        title:"HappyDents",
        disc:"This project is aimed at helping with the digitalization of medical records of a Dental Clinic located in San Salvador called Happy Dents. This app contains forms for patient registration, medical history, relative's medical history, odontogram, appointment system and a billing system.",
        link:'https://github.com/Yosiak-alv/HappyDents'
    },
    {
        img:sportcityWeb,
        langs:["Vue.js","Tailwindcss","Email.js","Swiper","SweetAlert"],
        title:"SportCity Landing Page",
        disc:"Presentation page for the gym SportCity located in Sonsonate. This website contains contact forms, information about their different memberships, their schedules among many others.",
        link:'https://github.com/Yosiak-alv/sportcity_landing_page',
        live:'https://yosiak-alv.github.io/sportcity_landing_page/'
    },
];

export const CompleteProjects = () => {
    return (
        <div className=''>
            <div className=''> 
                <div className='text-white font-bold text-[32px]'>
                    <span className='text-customBlue'>/</span>
                    <span>projects</span>
                </div>
                <div className='text-white mt-[14px] '>List of my projects</div>
            </div>
            <div className=''>
                <div className='text-white font-bold mt-[68px] mb-[48px] text-[32px]'>
                    <span className='text-customBlue'>#</span>
                    <span>completed projects</span>
                </div>
            </div>
            <div className="flex flex-wrap justify-between gap-4 my-12">
                {
                    projects.map(({img,langs,title,disc,link,live}) => {
                        return(
                            <ProjectCard key={title} img={img} langs={langs} title={title} disc={disc} link={link} live={live}/>
                        )
                    })
                }
            </div>
        </div>
    )
}