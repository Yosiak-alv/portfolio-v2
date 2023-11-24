import React from 'react';
import shapes from '../../assets/shapes.png';

export const AboutHobbies = () => {
    return (
        <div data-aos="fade-right"  className='px-5 max-w-[1560px] mx-auto pt-20 py-10'>
            {/* title */}
            <div className=" mb-12 text-[32px] font-medium text-white">
                <span className='text-customBlue'>#</span>
                my-hobbies
            </div>
            <div className="flex justify-center gap-y-10 md:justify-between gap-4 items-center flex-wrap">
                {/* left */}
                <div className=" flex justify-start gap-4 w-full md:w-[48%] flex-wrap">
                    <div className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal">
                        I like to develop new things
                    </div>
                    <div className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal">
                        I often bike with my friends
                    </div>
                    <div className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal">
                        I like chess and someday I would like to be a GrandMaster
                    </div>
                    <div className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal">
                        I like any kind of sport but my favorite is football.
                    </div>
                    <div className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal">
                        I’m a fanatic of the Batman
                    </div>
                    <div className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal">
                        My favorite anime is Dragon Ball
                    </div>
                    <div className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal">
                        I like to play video games like Mario Bros, Fifa, among others.
                    </div>
                </div>
                {/* right */}
                <div className=" flex justify-center items-center  w-full md:w-[48%]">
                    <img className=' w-[250px]' src={shapes} alt="a" />
                </div>
            </div>
        </div>
    )
}