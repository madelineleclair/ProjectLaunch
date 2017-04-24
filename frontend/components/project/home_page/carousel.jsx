import React from 'react';
// import Carousel from 'react-responsive-carousel';
import Slider from 'react-slick'

// class Carousel extends React.Component {
//   constructor(props) {
//     super(props);
//     const first = <img src={window.lexus_hover}/>;
//     const second = <img src={window.alinea}/>;
//     const third = <img src={window.code_monkey_island} />;
//     this.state = {number: 0, images: [first, second, third]};
//     this.nextPhoto = this.nextPhoto.bind(this);
//     this.previousPhoto = this.previousPhoto.bind(this);
//   }
//
//
//   nextPhoto() {
//     let number = this.state.number;
//     if (number === this.state.images.length - 1) {
//       this.setState({number: 0});
//     } else {
//       number += 1;
//       this.setState({number});
//     }
//   }
//
//   previousPhoto() {
//     let number = this.state.number;
//     if (number === 0) {
//       this.setState({number: this.state.images.length - 1});
//     } else {
//       number -= 1;
//       this.setState({number});
//     }
//   }
//
//   render() {
//     return (
//       <div onClick={this.changePhoto} className='slider'>
//         {this.state.images[this.state.number]}
//         <div>
//           <button onClick={this.previousPhoto} className="previous-button">Previuos</button>
//           <button onClick={this.nextPhoto} className="next-button">Next</button>
//         </div>
//       </div>
//     );
//   }
// }
//
const Carousel = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    infinite: true,
  };

  return (
    <div className='outer-slider-container'>
        <Slider {...settings}>
          <img src={window.lexus_hover} />
            <img src={window.alinea}/>
            <img src={window.code_monkey_island} />
        </Slider>
    </div>
  );
};

export default Carousel;
