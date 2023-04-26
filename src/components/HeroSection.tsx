import imageOneBig from "../assets/image-product-1.jpg";
import imageTwoBig from "../assets/image-product-2.jpg";
import imageThreeBig from "../assets/image-product-3.jpg";
import imageFourBig from "../assets/image-product-4.jpg";
import ImageCards from "./pure/ImageCards";
import ProductInfo from "./pure/ProductInfo";
import "./HeroSection.css";

const imagesArray = [imageOneBig, imageTwoBig, imageThreeBig, imageFourBig];

const HeroSection = () => {
  return (
    <div className="hero-container">
      <ImageCards images={imagesArray}></ImageCards>
      <ProductInfo></ProductInfo>
    </div>
  );
};

export default HeroSection;
