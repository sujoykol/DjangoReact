import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SlickSlider from "react-slick";
import ProductCard from "../Product/ProductCard";
import { getRelatedProducts } from "../../services/productService";

const Slider = SlickSlider.default || SlickSlider;

const RealatedProducts = () => {

    const [products, setProducts] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        loadRelatedProducts();
    }, [id]);


    const loadRelatedProducts = async () => {
        try {
            const data = await getRelatedProducts(id);
            setProducts(data);
        } catch (error) {
            console.error(error);
        }
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    if (products.length === 0) {
        return null;
    }

    return (
        <div className="featured-product">
            <div className="container">

                <div className="section-header">
                    <h3>Related Products</h3>
                </div>

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

export default RealatedProducts;