import React from 'react';

let small_projects = [
    {
        languages: ["PYTHON"],
        title: "Virtual_Assistant",
        body: 'a simple python virtual assistant with voice recognition and other with openia.',
        link:'https://github.com/Yosiak-alv/Virtual_Assistant'
    },
    {
        languages: ["C#","WINFORMS"],
        title: "crud_entity_framework ",
        body: 'Crud with Entity Framework example.',
        link:'https://github.com/Yosiak-alv/crud_entity_framework'
    },
    {
        languages: ["JAVA", "ANDROID"],
        title: "java_calculator",
        body: 'A simple android (java) app of a calculator.',
        link:'https://github.com/Yosiak-alv/java_calculator'
    },
    {
        languages: ["PYTHON", "TKINTER", "MYSQL"],
        title: "Python_crud_mysql",
        body: 'A simple python crud with GUI (Tkinter).',
        link:'https://github.com/Yosiak-alv/Python_crud_mysql'
    },
    {
        languages: ["PYTHON", "DJANGO"],
        title: "crud_django",
        body: 'A Simple Crud in Django.',
        link:'https://github.com/Yosiak-alv/crud_django'
    },
    {
        languages: ["PYTHON"],
        title: "PythonCRUD_Console",
        body: 'Simple program developed in python with CRUD logic of a json file.',
        link:'https://github.com/Yosiak-alv/PythonCRUD_Console'
    },

];
export const SmallProjects = () => {
    return(
        <div>
            <div className='pt-[80px] px-5 max-w-[1560px] mx-auto'>
                {/* title */}
                <div className="">
                    <div className=" text-white font-medium mt-[68px] mb-[48px] text-[32px]">
                        <span className=" text-[#C778DD]">#</span>
                        <span>small-projects</span>
                    </div>
                </div>
                {/* body/cards */}
                <div className="cards flex justify-center flex-wrap gap-4">
                    {
                        // mapping
                        small_projects.map(e => {
                            let { languages, title, body,link } = e
                            return(
                                <div className="card max-w-[331px] w-full border border-[#ABB2BF]" key={title}>
                                    {/* skills */}
                                    <div className=" border-b border-[#ABB2BF] p-2 text-[#ABB2BF]">
                                        {languages.map(lang => {
                                            return <span key={lang}>{lang} </span>
                                        })}
                                    </div>
                                    {/* discription */}
                                    <div className="disc p-4">
                                        <h2 className=' text-white font-medium text-2xl'>{title}</h2>
                                        <p className=' text-[#ABB2BF] py-4'>{body}</p>
                                        {/* we are only coders so maybe no one have figma projects */}
                                        <button className=' border border-[#C778DD] px-4 py-2 text-white duration-150 hover:bg-[#C778DD33]'>
                                            <a href={link}  target='_blank' rel='noopener noreferrer'>Github {'<'}~{'>'}</a>
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}