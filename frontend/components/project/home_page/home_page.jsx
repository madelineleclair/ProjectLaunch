import React from 'react';
import Carousel from './carousel';
import Categories from './categories';
import AlmostFundedContainer from './almost_funded_projects_container';
import PopularContainer from './popular_projects_container';

const HomePage = (props) => {
  return (
    <div>
      <div className="outer-slider-container">
        <Carousel />
      </div>
      <div className='home-page-categories-container'>
        <div className="home-page-almost-funded">
          <AlmostFundedContainer />
        </div>
        <div className="home-page-popular">
          <PopularContainer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;



// <div className='projects-we-love'>
//   Projects We Love
// </div>
// <div className="home-page-categories">
//   <Categories />
// </div>
