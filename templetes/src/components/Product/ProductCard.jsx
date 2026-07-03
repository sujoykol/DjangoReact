import { useNavigate } from "react-router-dom";
import { addToCart } from "../../services/cartService";
import { addToWishlist } from "../../services/wishlistService";

const ProductCard = ({
  productId,
  imageNum,
  title,
  price,
  oldPrice,
  className = "col-lg-4"
}) => {

   const navigate = useNavigate();

  
   const handleAddToCart = async (e) => {
    e.stopPropagation(); // IMPORTANT (prevents opening detail page)
     

    try {

      await addToCart(productId);
      window.dispatchEvent(
        new Event("cart-updated")
      );

      alert("Added to cart");

    } catch (error) {

      console.error(error);

      alert("Failed to add to cart");
    }
  };

  const handleWishlist = async (e) => {
  e.stopPropagation();

  try {
    await addToWishlist(productId);

    alert("Added to Wishlist");
  } catch (error) {
    console.error(error);
    alert("Failed");
  }
};

  const goToDetail = () => {
    navigate(`/products/${productId}`);
  };


  return (
    <div className={className}>
      <div className="product-item"
      onClick={goToDetail}
        style={{ cursor: "pointer" }}
      >

        <div className="product-image">

        
            <img src={imageNum} alt={title} />
          

          <div className="product-action">

            <button
              onClick={handleAddToCart}
              className="btn btn-link"
            >
              <i className="fa fa-cart-plus"></i>
            </button>
            <button
                className="btn btn-link"
                onClick={handleWishlist}
              >
                <i className="fa fa-heart"></i>
              </button>


          </div>

        </div>

        <div className="product-content">
          <div className="title">
            <a href="#">{title}</a>
          </div>

          <div className="price">
            ${price}
            <span>${oldPrice}</span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;