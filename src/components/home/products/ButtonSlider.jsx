import React from "react";
import leftArrow from "./items/left-arrow.svg";
import rightArrow from "./items/right-arrow.svg";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow}  alt=""/>
    </button>
  );
}