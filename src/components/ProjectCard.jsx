import React from "react"
import { FaGithub } from "react-icons/fa"
export const ProjectCard = ({ img, langs, title, disc,link,live }) => {
    return(
        <div className="border mx-auto w-[90%] md:w-[48%] lg:w-[30%] border-[#ABB2BF] p-0">
            <div className="">
                <img className="w-full text-white" src={img} alt={title} />
            </div>
            <div className="flex gap-2 flex-wrap p-2 border-y border-[#ABB2BF]">
                {
                    langs.map(e => {
                        return(
                            <span key={e} className="text-white">{e}</span>
                        )
                    })
                }
            </div>
            <div className="p-4">
                <h2 className="text-[#FFFFFF] text-2xl font-medium">{title}</h2>
                <p className="py-4 text-[#ABB2BF]">{disc}</p>
                <div className="flex justify-between items-center">
                    <a href={link} target='_blank' rel='noopener noreferrer'
                        className="py-2 px-4 text-white border border-customBlue hover:bg-customBlue-700 duration-200">
                        Github ~{'>'}
                    </a>
                    {live && <a href={live} target='_blank' rel='noopener noreferrer'
                        className="py-2 px-4 text-white border border-customBlue hover:bg-customBlue-700 duration-100">
                        Live ~{'>'}
                    </a>}

                </div>
            </div>
        </div>
    );
}