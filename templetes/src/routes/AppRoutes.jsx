import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import ProductList from "../pages/PoductList";
import ProductDetail from  "../pages/ProductDetail";
import Cart from "../pages/Cart";
import CheckoutPage from "../pages/CheckoutPage";
import Contact from "../pages/ContactPage"
import Login from "../pages/AuthPage"
import Account from "../pages/MyAccountPage"
import ProtectedRoute from "./ProtectedRoute";
import WishlistPage from "../pages/WishlistPage";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainLayout />}>
            {/* This loads on the root url (http://localhost:5173/) */}
            <Route index element={<Home />} />
            
            {/* This loads on the products url (http://localhost:5173/products) */}
            <Route path="products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="/account" element={
                  <ProtectedRoute>
                    <Account/>
                  </ProtectedRoute>
                }
              />
            <Route path="wishlist" element={<ProtectedRoute><WishlistPage /> </ProtectedRoute> } 
/>
          </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;