import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';
import { Slides } from '../../utils/constants/slider';

import Slider from "react-slick";
export default function CustomSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        // <Carousel>
        //     <Carousel.Item>
        //         <img
        //             className="d-block w-100"
        //             src={require("../../Assests/carousel-1.jpg")}
        //             alt="First slide"
        //         />
        //         <Carousel.Caption>
        //             <h3>First slide label</h3>
        //             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //             className="d-block w-100"
        //             src={require("../../Assests/carousel-2.jpg")}
        //             alt="Second slide"
        //         />

        //         <Carousel.Caption>
        //             <h3>Second slide label</h3>
        //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //             className="d-block w-100"
        //             src={require("../../Assests/carousel-3.jpg")}
        //             alt="Third slide"
        //         />

        //         <Carousel.Caption>
        //             <h3>Third slide label</h3>
        //             <p>
        //                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        //             </p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        // </Carousel>
        <div className='slider' >
        <Slider {...settings}>
        {/* backgroundImage: `url(${Item.bgURL}) */}
         {
            Slides.map((Item)=>{
                return(
                <div key={Item.title} >
            {/* <img  src={Item.bgURL} alt=""></img> */}
           <div className={Item.slide}>
                  <div className='inner-slider'>
                  <h3>{Item.title}</h3>
            <p>{Item.subTitle}</p>
           <div className='btns'> <button className='btn'>{Item.btnTitle1}</button>
            <button className='btn'>{Item.btnTitle2}</button></div>
                  </div>
           </div>
          </div>
                )
            })
         }
        </Slider>
      </div>
    )
}
