import React, { useState } from "react";
import "./ImageCards.css";
import PrevButton from "../../assets/icon-previous.svg";
import NextButton from "../../assets/icon-next.svg";

interface IImageProps {
  images: string[];
}

const ImageCards = ({ images }: IImageProps) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const changePicture = (index: number) => {
    if (index >= 0 && index < images.length) {
      setMainImage(images[index]);
      setSelectedIndex(index);
    }
  };
  return (
    <div className="main-container">
      <img className="main-pic" src={mainImage} alt="main" />
      <div className="image-selector">
        <button
          className="prev-btn"
          onClick={() => changePicture(selectedIndex - 1)}
        >
          <img src={PrevButton} alt="previous" />
        </button>
        <button
          className="next-btn"
          onClick={() => changePicture(selectedIndex + 1)}
        >
          <img src={NextButton} alt="next" />
        </button>
        {images.map((image, index) => (
          <img
            className={`thumbnail ${selectedIndex === index ? "active " : ""}`}
            onClick={() => changePicture(index)}
            src={image}
            key={index}
            alt="thumbnail"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCards;
