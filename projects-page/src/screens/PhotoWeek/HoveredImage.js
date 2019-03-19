import React from "react";
import './PhotoWeek.css';

const cont = {
  backgroundColor: "#eee",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative"
};

const HoveredImage = ({
  index,
  onClick,
  photo,
  margin,
  direction,
  top,
  left
}) => {

  if (direction === "column") {
    cont.position = "absolute";
    cont.left = left;
    cont.top = top;
  }
  return (
    <div
      style={{ margin, height: photo.height, width: photo.width, ...cont }}
    >
      <img
        className={"photo-img"}
        {...photo}
        // onMouseOver={e => console.log(e)}
        // style={{opacity: 0.5}}
      />
    </div>
  );
};

export default HoveredImage;
