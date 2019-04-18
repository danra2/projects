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
    // onClick,
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

    if (photo.slider) {
        return (
            <div className="before-after-slider-photo-block">
              <div className="before-after-photo-img">
                  <BeforeAfterSlider
                      before={photo.after}
                      after={photo.before}
                      width={0.50*photo.width}
                      height={0.50*photo.height}
                  />
              </div>
              <div className="before-after-photo-description"> 
              <p className="before-after-photo-caption"> {photo.caption} </p>
              <p className="before-after-photo-credit"> {photo.credit} </p>
              </div>
            </div>
          );
        }
    else {
        return (
            <div className="before-after-photo-full-block">
              <img className="before-after-photo-full-img" {...photo}/>
              {/* <div className="photo-description"> 
              <p className="photo-caption"> {photo.caption} </p>
              <p className="photo-credit"> {photo.credit} </p>
              </div> */}
            </div>
          );
        }
    }

  export default SliderImage