import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { projectShow } from '../../services/projects'
import { ChevronsRightLeft } from 'lucide-react'


const ProjectPage = () => {
    const { projectId } = useParams()
    const [project, setProject] = useState({})
    const [error, setError] = useState({})
    const [uploading, setUploading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const getProject = async () => {
            try {
                const response = await projectShow(projectId)
                setProject(response.data)
            } catch (error) {
                console.error('Error fetching data:', error)
                if (error.response && error.response.status === 404) {
                    navigate('/404', { replace: true })
                } else {
                    setError({ message: 'Unable to load project' })
                }
            }
        }
        if (projectId) {
            getProject()
        }
    }, [projectId, navigate])

    console.log(projectId)
    console.log(project)

    return (
        <div className="page-content">
            {project.name ? (
            <div className="page-title">
                <h1>{project.name}</h1>
                <p>{project.subtitle}</p>
                <p>{project.description}</p>
            </div>
            ) : (
                <p>Loading...</p>  
            )}
        </div>

    )


}

export default ProjectPage