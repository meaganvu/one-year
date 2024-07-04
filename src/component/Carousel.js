import "./Carousel.css";
import { useState } from "react";
import Slider from "react-slick";

function importAll(r) {
  let images = [];
  r.keys().map((item, index) => {
    images[index] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../images/carousel-images", false, /\.(png|jpe?g|svg)$/)
);

console.log(images); // Debugging: Check if images are being imported correctly

function Carousel() {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="Carousel">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={`carousel-img-${idx}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
