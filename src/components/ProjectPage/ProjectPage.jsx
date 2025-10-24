import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { projectShow } from '../../services/projects'
import { ChevronsRightLeft } from 'lucide-react'


const ProjectPage = () => {
    const [project, setProject] = useState(null)
    const [error, setError] = useState({})
    const [uploading, setUploading] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        const getProject = async () => {
            try {
                const response = await projectShow(project)
                const projectData = response.data
                setProject(projectData)
            } catch (error) {
                console.error('Error fetching data:', error)
                setError({ message: 'Unable to load project' })
            }
        }

        if (project) {
            getProject()
        }
    }, [project])

    console.log(project)

    return (
        <div className="page-content">
            <div className="page-title">
                <h1>{project.name}</h1>
                <h2>{project.subtitle}</h2>
            </div>
        </div>

    )


}

export default ProjectPage