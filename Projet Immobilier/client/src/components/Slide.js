import React from "react";
import {Slide} from "react-slideshow-image";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";

const proprietes = {
    duration:5000,
    transitionDuration: 500,
    infinite: true,
    indicator: true,
    arrows: true
}
const Slides = () =>{
    return(
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="slide1">
                    <img src={img1} alt="img1"/>
                </div>
                <div className="slide1">
                    <img src={img2} alt="img2"/>
                </div>
                <div className="slide1">
                    <img src={img3} alt="img3"/>
                </div>
            </Slide>
        </div>
    )
}
export default Slides;