import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../services/productService";
import { getCategories } from "../services/categoryService";
import { getBrands } from "../services/brandService";
import Breadcrumb from "../components/common/Breadcrumb";
import ProductSearch from '../components/ProductSearch';
import ProductSort from '../components/ProductSort';
import ProductCard from '../components/Product/ProductCard';
import ProductPagination from '../components/ProductPagination';
import ProductSidebar from '../components/ProductSidebar';

// Fast-load all product images inside the asset folder securely
const productImages = import.meta.glob('../assets/img/product-*.png', { eager: true });

const ProductList = () => {


const [searchParams] = useSearchParams();

const search = searchParams.get("search") || "";  
  
const [products, setProducts] = useState([]);
const [page, setPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);
const [loading, setLoading] = useState(true);
const [ordering, setOrdering] = useState("");
const [categories, setCategories] = useState([]);
const [brands, setBrands] = useState([]);
const [category, setCategory] = useState("");
const [brand, setBrand] = useState("");

const fetchProducts = async (
  searchText = search,
  orderBy = ordering,
  pageNumber = page,
  categoryId = category,
  brandId = brand
) => {
  try {
    const data = await getProducts(
      searchText,
      orderBy,
      pageNumber,
      categoryId,
      brandId
    );

    setProducts(data.results);

   setTotalPages(
      Math.ceil(data.count / data.page_size)
    );

    setPage(pageNumber);

  } catch (error) {
    console.error(error);
  }
};
useEffect(() => {
  loadCategories();
  loadBrands();
  fetchProducts(search);
}, [search]);

const loadCategories = async () => {
  const data = await getCategories();
  setCategories(data);
};

const loadBrands = async () => {
  const data = await getBrands();
  setBrands(data);
};

  return (
    <>
      <Breadcrumb />
      
      <div className="product-view">
        <div className="container">
          <div className="row">
            
            <div className="col-md-9">
              <div className="row">
                
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-md-8">
                      <ProductSearch
                        onSearch={(keyword) =>
                          fetchProducts(keyword, ordering)
                        }
                      />
                      
                    </div>
                    <div className="col-md-4">
                      <ProductSort
  onSort={(orderBy) =>
    fetchProducts(search, orderBy)
  }
/>
                    </div>
                  </div>
                </div>

                {products.map((product) => (
                  <ProductCard
                     key={product.id}
                    productId={product.id}
                    imageNum={
                          product.images?.length
                            ? product.images[0].image
                            : "/placeholder.jpg"
                        }// Sends the parsed, compiled asset URL straight to the card
                    title={product.name}
                    price={product.price}
                    oldPrice={product.discount_price}
                  />

                                


                ))}

                <ProductPagination
                  currentPage={page}
                  totalPages={totalPages}
                  onPageChange={(newPage) =>
                    fetchProducts(search, ordering, newPage)
                  }
                />

              </div>
            </div>

           <ProductSidebar
  categories={categories}
  brands={brands}
  onCategorySelect={(id) => {
    console.log("Category selected:", id);

    setCategory(id);

    fetchProducts(
      search,
      ordering,
      1,
      id,
      brand
    );
  }}
  onBrandSelect={(id) => {
  console.log("Brand selected:", id);

  setBrand(id);

  fetchProducts(
    search,
    ordering,
    1,
    category,
    id
  );
}}
/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;