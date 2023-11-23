import man from '../../assets/man.png';

export const AboutSection = () => {
    return(
        <div>
            <div className=''>
                {/* title */}
                <div className=" mb-12">
                    <div className=" text-white w-2/3 font-semibold text-[32px]">
                        <div className="">
                            <span className="text-[#C778DD]">/</span>
                            about-me
                        </div>
                        <div className=" text-white text-base font-normal mt-[14px]">
                            Who am i?
                        </div>
                    </div>
                </div>
                <div className=" flex-wrap flex items-center justify-between">
                    {/* left */}
                    <div className="md:w-[48%] w-full">
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
                    </div>
                    {/* right */}
                    <div className=" mx-auto">
                        <img className="mx-auto" src={man} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}