import { AboutHobbies } from "../components/sections/AboutHobbies"
import { AboutSection } from "../components/sections/AboutSection"
import { AboutSkillsSection } from "../components/sections/AboutSkillsSection"

export const About = () => {
    return(
        <div className='min-h-screen pt-[114px] px-5 max-w-[1560px] mx-auto'>
            <AboutSection/>
            <AboutSkillsSection/>
            <AboutHobbies/>
        </div>
    )
}