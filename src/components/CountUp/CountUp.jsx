import { useEffect, useRef, useState } from "react"
import CountUp from "react-countup"

function ScrollCountUp({ end, duration = 2.5 }) {
  const countUpRef = useRef(null)
  const [startCount, setStartCount] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startCount) {
          setStartCount(true)
        }
      },
      { threshold: 0.5 }
    )

    if (countUpRef.current) {
      observer.observe(countUpRef.current)
    }

    return () => {
      if (countUpRef.current) {
        observer.unobserve(countUpRef.current)
      }
    }
  }, [startCount])

  return (
    <div ref={countUpRef}>
      {startCount ? (
        <CountUp 
          start={0} 
          end={end} 
          duration={duration}
        />
      ) : (
        <span>0</span>
      )}
    </div>
  )
}

export default ScrollCountUp