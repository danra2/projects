import React from 'react'
import BeforeAfterSlider from 'react-before-after-slider'
import './css/before-after.css';
 
const cont = {
    backgroundColor: "#eee",
    cursor: "pointer",
    overflow: "hidden",
    position: "relative"
};

const SliderImage = ({
    photo,
    direction,
    index,
    top,
    left
  }) => {

    if (direction === "column") {
      cont.position = "absolute";
      cont.left = left;
      cont.top = top;
    }

    if (photo.display==='slider') {
        return (
            <div className="before-after-slider-photo-block">
              <div className="before-after-photo-img">
                  <BeforeAfterSlider
                      before={photo.after}
                      after={photo.before}
                      width={0.725*photo.width}
                      height={0.725*photo.height}
                  />
              </div>
              <div className="before-after-photo-description"> 
                <p className="before-after-photo-caption"> {photo.caption} </p>
                <p className="before-after-photo-credit"> {photo.credit} </p>
              </div>
            </div>
          );
        }
    else if (photo.display==='full') {
      return (
          <div className="before-after-photo-full-block">
            <img className="before-after-photo-full-img" {...photo}/>
            <div className="before-after-photo-description"> 
              <p className="before-after-photo-caption"> {photo.caption} </p>
              <p className="before-after-photo-credit"> {photo.credit} </p>
            </div> 
          </div>
        );
      }
    else {
      return (
          <div className="before-after-multiple-photo-block">
            <img {...photo}/>
            <div className="before-after-photo-description"> 
              <p className="before-after-photo-caption"> {photo.caption} </p>
              <p className="before-after-photo-credit"> {photo.credit} </p>
            </div>  
          </div>
        );
      }
  }

  export default SliderImage