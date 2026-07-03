import React from 'react';

// 1. Import your exact image paths here
import cat1 from "../assets/img/category-1.jpg";
import cat2 from "../assets/img/category-2.jpg";
import cat3 from "../assets/img/category-3.jpg";
import cat4 from "../assets/img/category-4.jpg";



// 2. Pass the imported variables directly into your data array
const categoriesData = [
  { id: 1, imgSrc: cat1, name: "Category Name 1", column: 1 },
  { id: 3, imgSrc: cat3, name: "Category Name 3", column: 2 },
  { id: 4, imgSrc: cat4, name: "Category Name 4", column: 2 },
  { id: 2, imgSrc: cat2, name: "Category Name 2", column: 3 }
];

const CategorySection = () => {
  // Filter items for each specific column layout
  const col1Items = categoriesData.filter(item => item.column === 1);
  const col2Items = categoriesData.filter(item => item.column === 2);
  const col3Items = categoriesData.filter(item => item.column === 3);

  return (
    <div className="category">
      <div className="container-fluid">
        <div className="row">
          
          {/* Column 1 */}
          <div className="col-md-4">
            {col1Items.map(item => (
              <div className="category-img" key={item.id}>
                <img src={item.imgSrc} alt={item.name} />
                <a className="category-name" href="">
                  <h2>{item.name}</h2>
                </a>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="col-md-4">
            {col2Items.map(item => (
              <div className="category-img" key={item.id}>
                <img src={item.imgSrc} alt={item.name} />
                <a className="category-name" href="">
                  <h2>{item.name}</h2>
                </a>
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="col-md-4">
            {col3Items.map(item => (
              <div className="category-img" key={item.id}>
                <img src={item.imgSrc} alt={item.name} />
                <a className="category-name" href="">
                  <h2>{item.name}</h2>
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default CategorySection;