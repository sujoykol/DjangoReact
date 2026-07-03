import React, { useEffect, useState } from "react";
import {
  getWishlist,
  removeWishlist,
} from "../services/wishlistService";
import { addToCart } from "../services/cartService";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadWishlist();
  }, []);

  const loadWishlist = async () => {
    try {
      const data = await getWishlist();
      setWishlist(data);
      console.log(data);
    } catch (error) {
      console.error("Failed to load wishlist", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveItem = async (id) => {
    try {
      await removeWishlist(id);

      setWishlist((prev) =>
        prev.filter((item) => item.id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

const handleAddToCart = async (item) => {
  try {
    await addToCart(item.product);      // Product ID

    window.dispatchEvent(new Event("cart-updated"));

    await removeWishlist(item.id);      // Wishlist ID

    loadWishlist();                     // Refresh the page data

    alert("Added to cart");
  } catch (error) {
    console.log(error.response?.data);
    console.error(error);
  }
};

  if (loading) {
    return (
      <div className="container py-5 text-center">
        Loading wishlist...
      </div>
    );
  }

  return (
    <div className="wishlist-section py-5 bg-white">
      <div className="container">
        <div className="table-responsive rounded border bg-white">
          <table className="table table-bordered text-center align-middle mb-0">
            <thead className="table-primary">
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Add to Cart</th>
                <th>Remove</th>
              </tr>
            </thead>

            <tbody>
              {wishlist.length === 0 ? (
                <tr>
                  <td colSpan="5" className="py-5">
                    Your wishlist is empty.
                  </td>
                </tr>
              ) : (
                wishlist.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.product_image}
                        alt={item.product_name}
                        width="70"
                      />
                    </td>

                    <td>{item.product_name}</td>

                    <td>${item.product_price}</td>

                    <td>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleAddToCart(item)}
                      >
                        Add to Cart
                      </button>
                    </td>

                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() =>
                          handleRemoveItem(item.id)
                        }
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;