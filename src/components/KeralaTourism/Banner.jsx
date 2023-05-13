import React from 'react'
import { Carousel } from 'react-bootstrap'

function Banner() {
  return (
    <div>
       <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="	https://www.keralatourism.org/images/banner/medium_desktop/adventure1920x650.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://www.keralatourism.org/images/banner/medium_desktop/international_children’spainting_competition_2023.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="	https://www.keralatourism.org/images/banner/medium_desktop/malabar-banner-1920.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://www.keralatourism.org/images/banner/desktop/caravan-tour-1920.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://www.keralatourism.org/images/banner/desktop/kozhikode_-1920-650_-_desktop.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
    </div>
  )
}

export default Banner
