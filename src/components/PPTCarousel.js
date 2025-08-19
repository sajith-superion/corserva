import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import all new images from assets
import image1 from '../assets/Screenshot 2025-08-19 155730.png';
import image2 from '../assets/Screenshot 2025-08-19 155740.png';
import image3 from '../assets/Screenshot 2025-08-19 155749.png';
import image4 from '../assets/Screenshot 2025-08-19 155759.png';
import image5 from '../assets/Screenshot 2025-08-19 155808.png';
import image6 from '../assets/Screenshot 2025-08-19 155816.png';
import image7 from '../assets/Screenshot 2025-08-19 155823.png';
import image8 from '../assets/Screenshot 2025-08-19 155833.png';
import image9 from '../assets/Screenshot 2025-08-19 155841.png';
import image10 from '../assets/Screenshot 2025-08-19 155849.png';
import image11 from '../assets/Screenshot 2025-08-19 155856.png';
import image12 from '../assets/Screenshot 2025-08-19 155903.png';
import image13 from '../assets/Screenshot 2025-08-19 155912.png';
import image14 from '../assets/Screenshot 2025-08-19 155923.png';

const PPTCarousel = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const slides = [
    { id: 1, image: image1, title: "Slide 1" },
    { id: 2, image: image2, title: "Slide 2" },
    { id: 3, image: image3, title: "Slide 3" },
    { id: 4, image: image4, title: "Slide 4" },
    { id: 5, image: image5, title: "Slide 5" },
    { id: 6, image: image6, title: "Slide 6" },
    { id: 7, image: image7, title: "Slide 7" },
    { id: 8, image: image8, title: "Slide 8" },
    { id: 9, image: image9, title: "Slide 9" },
    { id: 10, image: image10, title: "Slide 10" },
    { id: 11, image: image11, title: "Slide 11" },
    { id: 12, image: image12, title: "Slide 12" },
    { id: 13, image: image13, title: "Slide 13" },
    { id: 14, image: image14, title: "Slide 14" }
  ];

  return (
    <div className="carousel-container">
      <Slider {...carouselSettings}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <div className="slide-content">
              <img src={slide.image} alt={slide.title} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PPTCarousel;
