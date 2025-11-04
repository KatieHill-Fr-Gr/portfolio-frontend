import './Carousel.css'
import useEmblaCarousel from 'embla-carousel-react'
import { useCarouselButtons } from '../../hooks/useCarouselButtons'


export const ProjectsCarousel = ({ projects }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel
  const { scrollPrev, scrollNext, prevBtnDisabled, nextBtnDisabled } = useCarouselButtons(emblaApi)

  return (
    <div className="carousel">
      <div className="carousel__viewport" ref={emblaRef}>
        {items.length > 0 ? (
          <div className="carousel__container">
            {items.map((item) => {
              <div key={item._id} className="carousel__slide">
                <div className="item-image">
                  <img src={item.images?.[0]} alt={item.name} />
                </div>
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <span>{item.subtitle}</span>
                </div>
                <Link to={`/${type}/${item._id}`} className="project-link">
                  View
                </Link>
              </div>
            })}
          </div>
        ) : (
          <p>There was a problem loading.</p>
        )}
      </div>

      <div className="carousel__buttons">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>

      {/* <div className="carousel__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`carousel__dot ${index === selectedIndex ? "is-selected" : ""
              }`}
          />
        ))}
      </div> */}
    </div>
  )
} 
