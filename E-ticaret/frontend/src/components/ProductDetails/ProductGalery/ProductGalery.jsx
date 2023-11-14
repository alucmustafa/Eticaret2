import React, { useState } from "react";
import "./ProductGalery.css";
import ImgData from "../../../data.json";
import Slider from "react-slick";
import Proptypes from "prop-types";

const PrevBtn = ({ onClick }) => {
  return (
    <button
      className="glide__arrow glide__arrow--left"
      data-glide-dir="<"
      onClick={onClick}
      style={{zIndex:"3"}}
    >
      <i className="bi bi-chevron-left"></i>
    </button>
  );
};
PrevBtn.protoTypes = {
  onClick: Proptypes.func,
};


const NextBtn = ({ onClick }) => {
  return (
    <button
      className="glide__arrow glide__arrow--right"
      data-glide-dir=">"
      onClick={onClick}
      style={{zIndex:"2"}}
    >
      <i className="bi bi-chevron-right"></i>
    </button>
  );
};
NextBtn.protoTypes = {
  onClick: Proptypes.func,
};


const ProductGalery = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <PrevBtn />,
    nextArrow: <NextBtn />,
  };
  const [activeImg, setActiveImg] = useState(ImgData[0].img.singleImage);
  return (
    <div className="product-gallery">
      <div className="single-image-wrapper">
        <img src={`/${activeImg}`} id="single-image" alt="" />
      </div>
      <div className="product-thumb">
        <div className="glide__track">
          <ol className="gallery-thumbs glide__slides product_galery_ol">
            <Slider {...sliderSettings}>
              {ImgData[0].img.thumbs.map((imgItem, index) => (
                <li
                  className="glide__slide glide__slide--active product_galery_li"
                  key={index}
                  onClick={() => setActiveImg(imgItem)}
                >
                  <img
                    src={`/${imgItem}`}
                    alt=""
                    className={`img-fluid ${
                      imgItem === activeImg ? "active" : ""
                    }`}
                  />
                </li>
              ))}
            </Slider>
          </ol>
        </div>
        <div className="glide__arrows" data-glide-el="controls"></div>
      </div>
    </div>
  );
};

export default ProductGalery;
