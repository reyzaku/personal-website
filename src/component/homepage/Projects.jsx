import React from 'react'
import ProjectCard from './ProjectCard'
import cms from '../project/media/cms1.png'
import ecommerce from '../project/media/ecommerce1.png'

const Projects = () => {
    return (
        <div className='bg-white my-36 mx-72'>
            <h3 className='text-5xl font-bebas mb-40 text-zinc-900'>My Project</h3>
            <ProjectCard project="ecommerce" image={ecommerce} title="Creating Full Stack E-Commerce web With MERN"/>
            <ProjectCard project="cms" image={cms} title="Creating Block type CMS like Dev.to with React And Tailwind CSS"/>
        </div>
    )
}

export default Projects