import React, { useEffect, useState } from "react";
import SlickSlider from "react-slick";
import { getBanners } from "../../services/bannerService";


const Slider = SlickSlider.default || SlickSlider;

const HomeSlider = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    try {
      const data = await getBanners();

      const activeBanners = data.filter(
        (banner) => banner.is_active
      );

      setBanners(activeBanners);
    } catch (error) {
      console.error("Banner Error:", error);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <div className="home-slider">
      <div className="main-slider">
        <Slider {...settings}>
          {banners.map((banner) => (
            <div key={banner.id} className="main-slider-item">
              <img
                src={banner.image}
                alt={banner.title}
                className="img-fluid w-100"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeSlider;