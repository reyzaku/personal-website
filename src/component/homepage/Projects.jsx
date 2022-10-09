import React from 'react'
import ProjectCard from '../global-component/ProjectCard'

const Projects = () => {
    return (
        <div className='bg-white my-36 mx-72'>
            <h3 className='text-5xl font-bebas mb-40'>My Project</h3>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>

        </div>
    )
}

export default Projects