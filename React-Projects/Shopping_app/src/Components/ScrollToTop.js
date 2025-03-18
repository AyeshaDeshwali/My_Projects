import React, { useEffect, useState } from "react";
import "./ScrollToTop.css"; // Optional for button styling

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const smoothScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          id="scrollToTopBtn"
          onClick={smoothScrollToTop}
          style={{ display: "block" }}
        >
          <i className="fa fa-arrow-up btnup"></i>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
