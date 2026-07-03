import React from 'react';
import feature from "../assets/img/category-1.jpg";


const ProductSidebar = ({
  categories,
  brands,
  onCategorySelect,
  onBrandSelect
}) => {

   const noUnderline = {
    textDecoration: "none"
  };


  const tags = [
    'Lorem ipsum', 'Vivamus', 'Phasellus', 'pulvinar', 
    'Curabitur', 'Fusce', 'Sem quis', 'Mollis metus', 
    'Sit amet', 'Vel posuere', 'orci luctus', 'Nam lorem'
  ];

  return (
    <div className="col-md-3">
      {/* Category Widget */}
      <div className="sidebar-widget category">
      <h2 className="title">Category</h2>

      <ul>
    {categories.map((cat) => (
      <li key={cat.id}>
       <a style={noUnderline}
          href="#"
          onClick={(e) => {
            e.preventDefault(); // Stops the page from reloading/jumping
            onCategorySelect(cat.id);
          }}
        >
          {cat.name}
        </a>
      </li>
    ))}
  </ul>
</div>

      {/* Featured Banner Widget */}
      <div className="sidebar-widget image">
        <h2 className="title">Featured Product</h2>
        <a href="#">
          <img src={feature} alt="Featured Product Category" />
        </a>
      </div>

      {/* Brands Widget */}
      <div className="sidebar-widget brands">
        <h2 className="title">Our Brands</h2>

        <ul>
          {brands.map((brand) => (
            <li key={brand.id}>
              <a style={noUnderline}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onBrandSelect(brand.id);
                }}
              >
                {brand.name}
              </a>

              
            </li>
          ))}
        </ul>
      </div>

      {/* Tags Cloud Widget */}
      <div className="sidebar-widget tag">
        <h2 className="title">Tags Cloud</h2>
        {tags.map((tag, idx) => (
          <a key={idx} href="#" style={noUnderline}>{tag}</a>
        ))}
      </div>
    </div>
  );
};

export default ProductSidebar;