import React, { useState } from "react";
import "./ImageCards.css";

interface IImageProps {
  images: string[];
}

const ImageCards = ({ images }: IImageProps) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const changePicture = (index: number) => {
    setMainImage(images[index]);
    setSelectedIndex(index);
  };
  return (
    <div className="main-container">
      <img className="main-pic" src={mainImage} alt="main" />
      <div className="image-selector">
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
