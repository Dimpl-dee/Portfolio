import React from 'react';
import './Slide.css';
import Marquee from 'react-fast-marquee';

function Slide() {
  return (
   <Marquee>
        <div className="slider-mar">
            <span className="slider-des">"I have no doubt that Dayo would be 
            an asset to any team she is also a highly creative thinker"</span>
            <span>&nbsp; - Joshua &#x2661;</span>
        </div>
        <div className="slider-mar">
            <span className="slider-des">"Her ability to transform 
            designs into responsive user interface is truly noteworthy."</span>
            <span>&nbsp; - David &#x2661;</span>
        </div>
        <div className="slider-mar">
            <span className="slider-des">"Dayo's coding skills are outstanding, 
            and her commitment to delivering top-notch solutions is truly commendable"</span>
            <span>&nbsp; - Lanre &#x2661;</span>
        </div>
   
   </Marquee>
  )
}

export default Slide