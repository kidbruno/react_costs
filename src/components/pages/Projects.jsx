import { useNavigate } from 'react-router-dom'
import Message from '../layout/Message'
import styles from './Projects.module.css'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import { useEffect } from 'react'

function Projects() {

    const location = useNavigate()
    let message = '' 

    if(location.state){
        message = location.state.message
    }

    useEffect(() => {
        fetch('http://localhost5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((resp) => resp.json)
    })

    return(

        <div className={styles.project_container}> 
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto"/>
            </div>
            {message && <Message type="success" msg={message}/>}
            <Container customClass="start">
                <p>Projetos...</p>  
            </Container>
        </div>
 
    )
}

export default Projects