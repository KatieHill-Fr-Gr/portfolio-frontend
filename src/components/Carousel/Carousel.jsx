import './Carousel.css'

// import { DotButton, useDotButton } from './EmblaCarouselDotButton'
// import {
//   PrevButton,
//   NextButton,
//   usePrevNextButtons
// } from './EmblaCarouselArrowButtons'
// import useEmblaCarousel from 'embla-carousel-react'

export const Carousel = ({ items, type = "project" }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start"})

    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi)
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

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
                    <p className="item-description">{item.description}</p>
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

      <div className="carousel__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`carousel__dot ${
              index === selectedIndex ? "is-selected" : ""
            }`}
          />
        ))}
      </div>
      </div>
  )
} 
