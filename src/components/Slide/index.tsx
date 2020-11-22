import React, { useState, useEffect, useCallback } from 'react'

import {
  Container
} from './styles'

interface imageSlide {
  src: string
  title: string
}

interface SlideProps {
  images: imageSlide[]
}

const Slide: React.FC<SlideProps> = ({ images }) => {
  const [active, setActive] = useState(0)
  const [intervalSlide, setIntervalSlide] = useState(0)

  const changeImage = useCallback(() => {
    if (active < images.length - 1) {
      setActive((previousActive) => {
        return previousActive + 1
      })
    } else {
      setActive(0)
    }
  }, [active, images.length])

  const stopSlide = useCallback(() => {
    clearInterval(intervalSlide)
  }, [intervalSlide])

  const initSlide = useCallback(() => {
    setIntervalSlide(setInterval(changeImage, 3000))
  }, [changeImage])

  useEffect(() => {
    setActive(0)
  }, [])

  useEffect(() => {
    initSlide()
  }, [initSlide])

  useEffect(() => {
    return () => {
      clearInterval(intervalSlide)
    }
  }, [intervalSlide])

  return (
    <Container onMouseOver={stopSlide} onMouseLeave={initSlide}>
      {
        images.map((image, index) => (
          <div key={image.title} className={(active === index) ? 'active' : ''}>
            <img src={image.src} alt={image.title} />
            <h2>{image.title}</h2>
          </div>
        ))
      }
    </Container>
  )
}

export default Slide