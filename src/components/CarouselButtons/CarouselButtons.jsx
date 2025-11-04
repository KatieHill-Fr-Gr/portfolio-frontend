
export const PrevButton = ({ onClick, disabled }) => (
  <button
    className="carousel__button carousel__button--prev"
    onClick={onClick}
    disabled={disabled}
    aria-label="Previous slide"
  >
    ←
  </button>
)

export const NextButton = ({ onClick, disabled }) => (
  <button
    className="carousel__button carousel__button--next"
    onClick={onClick}
    disabled={disabled}
    aria-label="Next slide"
  >
    →
  </button>
)