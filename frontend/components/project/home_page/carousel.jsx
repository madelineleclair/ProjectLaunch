import React from 'react';
import Slider from 'react-slick';

const Carousel = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    dots: true,
    infinite: true,
  };

  return (
    <div className='outer-slider-container'>
        <Slider {...settings}>
          <img src={window.lexus_hover} />
          <img src={window.tournament}/>
          <img src={window.code_monkey_island} />
        </Slider>
    </div>
  );
};

export default Carousel;

// <button onClick={leftClick} className="left-button">left</button>
