import { useParams } from 'react-router-dom';
import ImagesSliderDetail from '../Components/ImagesSliderDetail';
import '../Styles/DetailComponentStyles.modules.scss'
import { useEffect, useState } from 'react';
import { Carousel } from '@mantine/carousel';



function ProductDetail (){
    const { projects } = useContext(AllProjectContext);
    const {projectId} = useParams()
    const [project, setProject] = useState();
    useEffect(()=> {
        setProject(projects(projectId))
    }, [projectId])


    return ( 

    <>
    <ImagesSliderDetail/>
    <h2>{project.title}</h2>

    <section className='InfoBlat'>
        <p className="DescriptionText">{project.description}</p>
        <span className="YearText">{project.year}</span>
        <span className="CreditsText">{project.credits}</span>
    </section>
    
    </>
    )
}

export default ProductDetail;