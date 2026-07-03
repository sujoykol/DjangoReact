import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeaderSearch = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (keyword.trim()) {
      navigate(`/products?search=${keyword}`);
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search Products"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={(e) =>
          e.key === "Enter" && handleSearch()
        }
      />

      
    </div>
  );
};

export default HeaderSearch;