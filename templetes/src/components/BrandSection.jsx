import React, { useEffect, useState } from "react";
import SlickSlider from "react-slick";
import { getBrands } from "../services/brandService";

const Slider = SlickSlider.default || SlickSlider;

function BrandSection() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    loadBrands();
  }, []);

  const loadBrands = async () => {
    try {
      const data = await getBrands();

      const activeBrands = data.filter(
        (brand) => brand.is_active
      );

      setBrands(activeBrands);
    } catch (error) {
      console.error("Brand Error:", error);
    }
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="brand">
      <div className="container">
        <div className="section-header">
          <h3>Our Brands</h3>
        </div>

        <Slider className="brand-slider" {...settings}>
          {brands.map((brand) => (
            <div key={brand.id} className="brand-item">
              <img
                src={brand.logo}
                alt={brand.name}
                className="img-fluid"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default BrandSection;