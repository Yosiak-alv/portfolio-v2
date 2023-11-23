import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { CompleteProjects } from '../components/sections/CompleteProjects';
import { SmallProjects } from '../components/sections/SmallProjects';

export const Projects = () => {

    return (
        <div className='min-h-screen pt-[114px] px-5 max-w-[1560px] mx-auto'>
            <CompleteProjects/>
            <SmallProjects/>
        </div>
    );
}