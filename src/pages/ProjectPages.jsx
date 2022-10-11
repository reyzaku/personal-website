import React from 'react'
import { useParams } from 'react-router-dom';
import Error from '../component/global-component/Error';
import Navbar from '../component/global-component/Navbar';
import Cms from '../component/project/Cms';
import Ecommerce from '../component/project/Ecommerce';

const ProjectPages = () => {
    let {id} = useParams()

    const Main = () => {
        console.log(id)
        switch(id){
            case "cms":
                return <Cms/>
            case "ecommerce":
                return <Ecommerce/>
            default:
                return <Error/>
        }
    }

    return (
        <div>
            <Navbar/>
            <Main/>
        </div>
    )
}

export default ProjectPages