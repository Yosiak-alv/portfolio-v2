import React from "react"
import { Hero } from '../components/sections/Hero';
import { Projects } from '../components/sections/Projects';
import { Skills } from '../components/sections/Skills';
import { About } from '../components/sections/About';
import { Contact } from '../components/sections/Contact';

export const Home = () => {
    return(
        <>
            <Hero/>
            <Projects/>
            <Skills/>
            <About/>
            <Contact/>
        </>
    )
}