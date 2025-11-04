import '../../styles/Carousel.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import useEmblaCarousel from 'embla-carousel-react'
import { PrevButton, NextButton } from '../CarouselButtons/CarouselButtons'
import { useCarouselButtons } from '../../hooks/useCarouselButtons'
import { projectsIndex } from '../../services/projects'


export const ProjectsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const { scrollPrev, scrollNext, prevBtnDisabled, nextBtnDisabled } = useCarouselButtons(emblaApi)
  const [projects, setProjects] = useState([])
  const [projectsLoading, setProjectsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setProjectsLoading(true)
        const projects = await projectsIndex()
        setProjects(projects.data)
      } catch (error) {
        console.error('Error:', error)
        setProjects([])
      } finally {
        setProjectsLoading(false)
      }
    }
    loadProjects()
  }, [])

  return (
    <div className="carousel">
      <div className="carousel__viewport" ref={emblaRef}>
        {projects.length > 0 ? (
          <div className="carousel__container">
            {projects.map((project) => (
              <div key={project._id} className="carousel__slide">
                <div className="item-image">
                  <img src={project.images?.[0]} alt={project.name} />
                </div>
                <div className="item-info">
                  <h3>{project.name}</h3>
                  <span>{project.subtitle}</span>
                </div>
                <Link to={`/projects/${project._id}`} className="project-link">
                  View
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>There was a problem loading.</p>
        )}
      </div>

      <div className="carousel__buttons">
        <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
        <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
      </div>
    </div>
  )
} 
