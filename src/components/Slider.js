import React from 'react';
import { Zoom } from 'react-slideshow-image';
 
const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 1000,
  infinite: true,
  indicators: false,
  scale: 0.4,
  arrows: false
}
 
const Slideshow = (props) => {
    return (
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {
            props.images.map((each, index) => <img alt="Images" key={index} style={{width: "100%"}} src={each} />)
          }
        </Zoom>
      </div>
    )
}

export default Slideshow;