//  import styles from './Project.module.css'
 import { useParams } from 'react-router-dom'
 import { useState, useEffect } from 'react'
 import Loading from '../layout/Loading'
 import Container from '../layout/Container'
 import styles from './Project.module.css'
 import ProjectForm from '../project/ProjectForm'
 import Message from '../layout/Message'

function Project(){
    
    const {id} = useParams()
    console.log(id)

    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [message, SetMessage] = useState()
    const [type, setType] = useState()

    useEffect(() => {
        
       setTimeout(() => {

            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data)
            })
            .catch((err) => console.log(err))
       }, 1000)
    }, [id])

    function editPost(project){
        SetMessage('')

        //budget validation
        if(project.budget < project.cost){
            SetMessage('O orçamento não pode ser menor que o custo do projeto!')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            
            setProject(data)
            setShowProjectForm(false)
            SetMessage('Projeto atualizado!')
            setType('success')
        })
        .catch((err) => console.log(err))
    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm(){
        setShowServiceForm(!showServiceForm)
    }

    return (
        <> 
            {project.name ? (
                <div className={styles.project_details}>
                    <Container customClass="column">
                        {message && <Message type={type} msg={message} />}
                        <div className={styles.details_container}>
                            <h1>Projeto: {project.name}</h1>
                            <button onClick={toggleProjectForm} className={styles.btn}> 
                                {!showProjectForm ? 'Editar Projeto' : 'Fechar'}
                            </button>

                            {!showProjectForm ? (
                                <div className={styles.project_info}>
                                    <p>
                                        <span>Categoria:</span> {project.category.name}
                                    </p>
                                    <p>
                                        <span>Valor Total do Orçamento:</span> R${project.budget}
                                    </p>
                                    <p>
                                        <span>Total Utilizado:</span> R${project.cost}
                                    </p>
                                </div>
                             ) : (
                                <div className={styles.project_info}>
                                    <ProjectForm 
                                        handleSubmit={editPost} 
                                        btnText="Concluir Edição" 
                                        projectData={project} 
                                    />
                                </div>
                            )}
                        </div>
                        <div className={styles.service_form_container}>
                             <h2>Adicione um Serviço:</h2>
                             <button onClick={toggleServiceForm} className={styles.btn}> 
                                {!showProjectForm ? 'Adicionar Serviço' : 'Fechar'}
                            </button>
                        </div>
                        <div className='styles.project_info'>
                                {showServiceForm && <div>Formulário do Serviço.</div>}
                        </div>
                    </Container>  
                </div> 
            ): (
                <Loading/> 
            )} 
        </>
    )
}

export default Project