import React, { useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/common/Breadcrumb";
import ProductSidebar from '../components/Product/Sidebar';
import ProductCard from '../components/Product/ProductCard';
import RealatedProducts from '../components/Product/RealatedProducts';
import { getProductDetails } from "../services/productService";
import { addToCart } from "../services/cartService";
import { addToWishlist } from "../services/wishlistService";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Thumbs, Zoom, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/zoom";

// Vite Glob Loader to handle local assets safely
const productImages = import.meta.glob('../assets/img/product-*.png', { eager: true });

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {
  const loadProduct = async () => {
    const data = await getProductDetails(id);
    setProduct(data);
  };

  loadProduct();
}, [id]);
const handleAddToCart = async () => {
  try {
    await addToCart(product.id, quantity);

    window.dispatchEvent(
      new Event("cart-updated")
    );

    alert("Added to cart");
  } catch (error) {
    console.error(error);
    alert("Failed to add to cart");
  }
};

const handleWishlist = async () => {
  try {
    await addToWishlist(product.id);

    alert("Added to Wishlist");
  } catch (error) {
    console.error(error);
  }
};

  return (
    <>
      <Breadcrumb />

      <div className="product-detail">
        <div className="container">
          <div className="row">
            
            {/* Middle Content Section (Left Column) */}
            <div className="col-md-9">
              <div className="product-detail-top">
                <div className="row align-items-center">
                  
                  {/* Product Image Box */}
                  <div className="col-md-5">
                    <div className="product-slider-single">
                      <Swiper
    modules={[Navigation, Thumbs, Zoom, Autoplay]}
    navigation
    zoom
    autoplay={{
        delay: 3000,
        disableOnInteraction: false,
    }}
    thumbs={{ swiper: thumbsSwiper }}
    spaceBetween={10}
>
    {product?.images?.map((img) => (
        <SwiperSlide key={img.id}>
            <div className="swiper-zoom-container">
                <img
                    src={img.image}
                    alt={product.name}
                    className="img-fluid"
                />
            </div>
        </SwiperSlide>
    ))}
</Swiper>

<Swiper
    onSwiper={setThumbsSwiper}
    modules={[Thumbs]}
    spaceBetween={10}
    slidesPerView={4}
    watchSlidesProgress
    className="mt-3"
>
    {product?.images?.map((img) => (
        <SwiperSlide key={img.id}>
            <img
                src={img.image}
                alt={product.name}
                className="img-fluid border"
                style={{
                    cursor: "pointer",
                    height: "90px",
                    objectFit: "cover",
                }}
            />
        </SwiperSlide>
    ))}
</Swiper>

                      
                    </div>
                  </div>

                  {/* Product Vital Info Box */}
                  <div className="col-md-7">
                    <div className="product-content">
                      <div className="title"><h2>{product?.name}</h2></div>
                      <div className="ratting">
                        {[...Array(5)].map((_, i) => <i key={i} className="fa fa-star text-primary"></i>)}
                      </div>
                      <div className="price">
                        <h4>${product?.price} <span>$25</span></h4>
                      </div>
                      <div className="details">
                        <p>
                          {product?.short_description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum quam ac tellus dignissim, at dignissim libero tempor. Duis convallis ante id id id finibus. Praesent feugiat accumsan nisl, vel finibus leo pulvinar vel."}
                        </p>
                      </div>

                      {/* Quantity Utility Controller */}
                      <div className="quantity">
  <h4>Quantity:</h4>
  <div className="qty">
                            <button className="btn-minus" onClick={() => setQuantity(q => Math.max(1, q - 1))}>
                              <i className="fa fa-minus"></i>
                            </button>
                            <input type="text" value={quantity} readOnly />
                            <button className="btn-plus" onClick={() => setQuantity(q => q + 1)}>
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </div>

                        {/* Action Call buttons converted to real buttons */}
                        <div className="action">
                          <button 
                            className="btn" 
                             onClick={handleAddToCart}
                          >
                            <i className="fa fa-shopping-cart"></i> Add to Cart
                          </button>
                          <button
                                className="btn"
                                onClick={handleWishlist}
                              >
                                <i className="fa fa-heart"></i>
                                Wishlist
                              </button>
                            
                        </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Toggled Tabs Review / Specification Box */}
              <div className="row product-detail-bottom mt-5">
                <div className="col-12">
                  <ul className="nav nav-pills justify-content-start border-bottom mb-3">
                    <li className="nav-item">
                      <button className={`nav-link border-0 rounded-0 ${activeTab === 'description' ? 'active' : ''}`} onClick={() => setActiveTab('description')}>Description</button>
                    </li>
                    <li className="nav-item">
                      <button className={`nav-link border-0 rounded-0 ${activeTab === 'specification' ? 'active' : ''}`} onClick={() => setActiveTab('specification')}>Specification</button>
                    </li>
                    <li className="nav-item">
                      <button className={`nav-link border-0 rounded-0 ${activeTab === 'reviews' ? 'active' : ''}`} onClick={() => setActiveTab('reviews')}>Reviews (1)</button>
                    </li>
                  </ul>

                  <div className="tab-content p-3 border">
                    {activeTab === 'description' && (
                      <div className="tab-pane fade show active">
                        <h4>Product description</h4>
                        <p>{product?.description}</p>
                      </div>
                    )}
                    {activeTab === 'specification' && (
                      <div className="tab-pane fade show active">
                        <h4>Product specification</h4>
                        <ul>
                          <li>Lorem ipsum dolor sit amet.</li>
                          <li>Consectetur adipiscing elit.</li>
                          <li>Duis convallis ante id finibus.</li>
                        </ul>
                      </div>
                    )}
                    {activeTab === 'reviews' && (
                      <div className="tab-pane fade show active">
                        <h4>Customer Reviews</h4>
                        <p>1 review for Phasellus Gravida</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Related Products Section Bottom row */}
             <RealatedProducts />

            </div>

          
           
            <ProductSidebar/>
           

          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;