import React,{useState} from 'react';
import me from '../../assets/me.png';
export const Hero = () => {

    return(
        <div data-aos="fade-right" className='px-5 max-w-[1560px] mx-auto min-h-screen pt-20 flex items-center justify-between flex-wrap'>
            <div className='w-10/12 sm:w-8/12 mx-auto '>
                <h1 className="font-semibold text-[32px] text-white mb-3">
                    I'm  a <span className="text-customBlue">web developer</span> and <br />
                    <span className="text-customBlue">focus to be a Full Stack Developer</span>
                </h1>
                <p className="text-[#ABB2BF] my-6 text-justify">
                    Computer enthusiast,technology and programming with the main objective of 
                    starting my career as a Backend Developer, with the desire to apply my acquired knowledge 
                    and, over time, evolve towards a Full Stack Developer profile.
                </p>
                <a href="https://drive.google.com/file/d/1TVHBTIll2gQcdZxIkPZqyjmOlYlWnoZB/view?usp=sharing" target='_blank' rel='noopener noreferrer' className="text-white font-medium py-2 px-4 border duration-200 border-customBlue hover:bg-customBlue-700">
                    View Résumé
                </a>
            </div>
            <div className='mx-auto'>
                <div className=''>
                    <img src={me} alt="" />
                </div>
                <div className="border flex items-center gap-2 border-[#ABB2BF] p-2 text-[#ABB2BF]">
                    <div className="w-4 h-4 bg-customBlue"></div>
                    <div className="">
                    Currently working on <span className="text-white">Independent projects</span>
                    </div>
                </div>
            </div>
        </div>
    );

}