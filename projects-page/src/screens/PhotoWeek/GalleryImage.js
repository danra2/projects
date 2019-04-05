import React from "react";
import "./PhotoWeek.css";

const cont = {
  backgroundColor: "#eee",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative"
};

const GalleryImage = ({ photo, onClick, direction, index, top, left }) => {
  if (direction === "column") {
    cont.position = "absolute";
    cont.left = left;
    cont.top = top;
  }

  return (
    <div className="photo-block">
      <img
        className="photo-img"
        {...photo}
        onClick={e => onClick(e, { index, photo })}
        alt=""
      />
      <div className="photo-description">
        <p className="photo-caption"> {photo.caption} </p>
        <p className="photo-credit"> {photo.credit} </p>
      </div>
    </div>
  );
};

export default GalleryImage;
