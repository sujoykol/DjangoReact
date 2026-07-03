import React, { useState, useEffect } from "react";
import SlickSlider from "react-slick";
import ProductCard from  "../Product/ProductCard.jsx";
import { getFeaturedProducts } from "../../services/featureProduct.js";

const Slider = SlickSlider.default || SlickSlider;


const FeaturedProducts = () => {

   const [products, setProducts] = useState([]);
  
    useEffect(() => {
      fetchFeaturedProducts();
    }, []);
  
    const fetchFeaturedProducts = async () => {
      try {
          const data = await getFeaturedProducts();
          console.log("Products:", data);
          const activeProducts = data.filter(
            (product) => product.status
          );
         console.log("Active:", activeProducts);
          setProducts(activeProducts);
      } catch (error) {
        console.error("Featured Products Error:", error);
      }
    };

       
  
  // Helper function to resolve your asset path string format
  const getImageUrl = (path) => {
    return new URL(path, import.meta.url).href;
  };

  // 2. Slick Slider Configuration Settings
  const settings = {
    dots: false,            
    infinite: true,         
    speed: 500,             
    slidesToShow: 4,        
    slidesToScroll: 1,      
    autoplay: true,         
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,    
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,    
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="featured-product">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <h3>Featured Product</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra at massa sit amet ultricies. Nullam consequat, mauris non interdum cursus
          </p>
        </div>

        {/* 3. The Slick Slider Component Wrapper */}
        <div className="product-slider product-slider-4">
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

export default FeaturedProducts;
