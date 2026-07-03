import SlickSlider from "react-slick";
import React, { useState, useEffect } from "react"

const Slider = SlickSlider.default || SlickSlider;

import ProductCard from  "../Product/ProductCard.jsx";
import { getRecentProducts } from "../../services/featureProduct.js";

// 1. Static Product JSON Data using your exact relative string paths


const RecentProducts = () => {

  const [products, setProducts] = useState([]);
    
      useEffect(() => {
        fetchRecentProducts();
      }, []);
    
      const fetchRecentProducts = async () => {
        try {
            const data = await getRecentProducts();
            console.log("Products:", data);
            const activeProducts = data.filter(
              (product) => product.status
            );
           console.log("Active:", activeProducts);
            setProducts(activeProducts);
        } catch (error) {
          console.error("Recent Products Error:", error);
        }
      };
  
  
  // Helper function to resolve relative image paths dynamically at runtime
  const getImageUrl = (path) => {
    return new URL(path, import.meta.url).href;
  };

  // 2. Slick Slider Responsive Settings Configuration
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Displays 4 columns matching your layout context
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 992, // Tablet layout
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576, // Mobile layout
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="recent-product">
      <div className="container">
        
        {/* Section Header Block */}
        <div className="section-header">
          <h3>Recent Product</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra at massa sit amet ultricies. Nullam consequat, mauris non interdum cursus
          </p>
        </div>

        {/* 3. Responsive Carousels via Slick Component Wrapper */}
        <div className="row align-items-center product-slider product-slider-4">
         <Slider {...settings}>
                  {products.map((product) => (
                    <div key={product.id} className="px-2"> 
                      <ProductCard 
                        productId={product.id}
                        imageNum={
                          product.images?.length
                            ? product.images[0].image
                            : "/placeholder.jpg"
                        }
                        title={product.name}
                        price={product.price}
                        oldPrice={product.discount_price}
                        className="" 
                      />
                    </div>
                  ))}
                </Slider>
        </div>

      </div>
    </div>
  );
};

export default RecentProducts;
