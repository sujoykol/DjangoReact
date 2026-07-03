import React from 'react';
import feature from "../../assets/img/category-1.jpg";

const Sidebar = () => {
  const noUnderline = { textDecoration: 'none' };

  const categories = [
    { name: 'Lorem Ipsum', count: 83 },
    { name: 'Cras sagittis', count: 198 },
    { name: 'Vivamus', count: 95 },
    { name: 'Fusce vitae', count: 48 },
    { name: 'Vestibulum', count: 210 },
    { name: 'Proin phar', count: 78 }
  ];

  const brands = [
    { name: 'Nulla', count: 45 },
    { name: 'Curabitur', count: 34 },
    { name: 'Nunc', count: 67 },
    { name: 'Ullamcorper', count: 74 },
    { name: 'Fusce', count: 89 },
    { name: 'Sagittis', count: 28 }
  ];

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
          {categories.map((cat, idx) => (
            <li key={idx}>
              <a href="#" style={noUnderline}>{cat.name}</a>
              <span>({cat.count})</span>
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
          {brands.map((brand, idx) => (
            <li key={idx}>
              <a href="#" style={noUnderline}>{brand.name}</a>
              <span>({brand.count})</span>
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

export default Sidebar;