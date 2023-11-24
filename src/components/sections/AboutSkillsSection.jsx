

export const AboutSkillsSection = () => {
    const skills = [
        {
            title: "Languages",
            languages: ["PHP", "JavaScript",'Java','Python','C++','C#','C'],
        },
        { title: "Databases", languages: ["SQLite",'MySQL' ,'SQL Server',"PostgreSQL", "Mongo"] },
        {
            title: "Tools",
            languages: [
                "VSCode",
                "Visual Studio",
                "PhpStorm",
                'PyCharm',
                'WebStorm',
                "Git",
                "GitHub",
            ],
        },
        {
            title: "Other",
            languages: ["HTML", "CSS", "Tailwindcss", "Bootstrap",'Inertia.js'],
        },
        {
            title: "Frameworks",
            languages: [
                'Laravel',
                'Django',
                "React.js",
                "Vue.js",
                "React Native",
            ],
        },
    ];
    return (
        <div className="px-5 max-w-[1560px] mx-auto pt-20 py-10">
            {/* title */}
            <div className=" mb-12 text-[32px] font-medium text-white">
                <span className='text-customBlue'>#</span>
                skills
            </div>
            {/* cards */}
            <div className=" flex justify-around gap-4 flex-wrap">
                {/* card */}
                {skills.map(({ title, languages }) => {
                    return (
                        <div className="w-[90%] sm:w-[45%] md:w-[24%] lg:w-[18%] border border-[#ABB2BF]" key={title}>
                            <div className=" text-white p-2">
                                <h2 className=" font-semibold">{title}</h2>
                            </div>
                            <div className=" flex gap-2 border-t border-[#ABB2BF] flex-wrap p-2 text-[#ABB2BF]">
                                {languages.map((e) => {
                                    return <span key={e}>{e}</span>;
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}