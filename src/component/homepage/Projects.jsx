import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <div className='bg-white my-36 mx-72'>
            <h3 className='text-5xl font-bebas mb-40 text-zinc-900'>My Project</h3>
            <ProjectCard project="ecommerce"/>
            <ProjectCard project="cms"/>
        </div>
    )
}

export default Projects