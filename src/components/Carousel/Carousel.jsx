import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

const Carousel = ({ items, type = "project" }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start"})

    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi)
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

    return (
    <div className="carousel">
      <div className="carousel-viewport" ref={emblaRef}>
        {items.length > 0 ? (
          <div className="carousel-container">
            {items.map((item) => {
                <div key={item._id} className="carousel-slide">
                  <div className="item-image">
                    <img src={item.images?.[0]} alt={item.name} />
                  </div>
                  <div className="item-info">
                    <div className="item-header">
                      <h3 className="item-title">{item.title}</h3>
                      <span className="item-type">{item.type}</span>
                    </div>
                    <p className="item-description">{item.description}</p>

                    <Link to={`/${type}/${item._id}`} className="project-link">
                      View
                    </Link>
                  </div>
                </div>
            })}
          </div>
        ) : (
          <p>There was a problem loading.</p>
        )}
      </div>
      </div>
  )
} 


export default Carousel