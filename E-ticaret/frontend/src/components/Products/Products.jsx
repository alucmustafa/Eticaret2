import "./Products.css";
import { Productitem } from "./Productitem";
import { useState } from "react";
import Proptypes from "prop-types"
import ProductData from "../../data.json";
import Slider from "react-slick";


const NextBtn=({onClick})=>{
  return(
    <button className="glide__arrow glide__arrow--right" onClick={onClick}>
    <i className="bi bi-chevron-right"></i>
  </button>
  )
}
NextBtn.propTypes={
  onClick:Proptypes.func
}
const PrevBtn=({onClick})=>{
  return(
    <button className="glide__arrow glide__arrow--left" onClick={onClick}>
    <i className="bi bi-chevron-left"></i>
  </button>
  )
}
PrevBtn.propTypes={
  onClick:Proptypes.func
}

export const Products = () => {
  const [products, setProdcts] = useState(ProductData);


 

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<NextBtn/>,
    prevArrow:<PrevBtn/>,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="products">
      <div className="container">
  
        <div className="section-title">
          <h2>Featured Products</h2>
          <p>Summer Collection New Morden Design</p>
        </div>
        <div className="product-wrapper product-carousel">
          <div className="glide__track">
            <Slider {...sliderSettings}>
              {products.map((product) => (
                <Productitem product={product} key={product.id}  />
              ))}
            </Slider>
          </div>
          <div className="glide__arrows">
         
          
          </div>
        </div>
      </div>
    </section>
  );
};
