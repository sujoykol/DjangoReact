import React, { useState, useEffect } from "react";

const BackToTop = () => {
 const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle the visibility of the "Back to Top" button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler back to top
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <a
      href="#"
      onClick={scrollToTop}
      className="back-to-top"
      style={{
        display: showBackToTop ? "block" : "none",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 999,
        cursor: "pointer",
      }}
    >
      <i className="fa fa-chevron-up"></i>
    </a>
  );
};

export default BackToTop;