// src/utils/GoUpGoDown.jsx
import React, { useState, useEffect } from "react";
import { FaArrowUp, FaTimes, FaArrowDown } from "react-icons/fa";

const GoUpGoDown = () => {
  const [show, setShow] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [showClose, setShowClose] = useState(false);
  const [hideTimeout, setHideTimeout] = useState(null);

  useEffect(() => {
    // Check if user has permanently hidden the button
    const userHidden = localStorage.getItem("goUpDownHidden") === "true";
    setIsHidden(userHidden);

    const clearHideTimer = () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        setHideTimeout(null);
      }
    };

    const startHideTimer = () => {
      clearHideTimer();
      const timer = setTimeout(() => {
        setShow(false);
      }, 2000); // Hide after 2 seconds of stopping
      setHideTimeout(timer);
    };

    const handleScroll = () => {
      if (userHidden) return;

      // Show button immediately on scroll
      setShow(true);

      // Check if at bottom
      const scrollPosition = window.scrollY + window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;
      const buffer = 100;
      setIsAtBottom(scrollPosition >= totalHeight - buffer);

      // Reset hide timer
      startHideTimer();
    };

    const handleTouchStart = () => {
      if (userHidden) return;
      // Show button on touch
      setShow(true);
      startHideTimer();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchstart", handleTouchStart);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      clearHideTimer();
    };
  }, [hideTimeout]);

  const handleAction = () => {
    if (isAtBottom) {
      // If at bottom, go to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // If not at bottom, go to bottom
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  const permanentlyHide = (e) => {
    e.stopPropagation();
    localStorage.setItem("goUpDownHidden", "true");
    setIsHidden(true);
    setShow(false);
  };

  if (isHidden || !show) return null;

  return (
    <div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
      onMouseEnter={() => setShowClose(true)}
      onMouseLeave={() => setShowClose(false)}
    >
      {/* Close button (appears on hover) - smaller on mobile */}
      {showClose && (
        <button
          onClick={permanentlyHide}
          className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-all flex items-center justify-center z-10"
          aria-label="Permanently hide button"
        >
          <FaTimes size={10} className="sm:size-3" />
        </button>
      )}

      {/* Main navigation button - smaller on mobile */}
      <button
        onClick={handleAction}
        className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-amber-500 to-yellow-500 
          hover:from-amber-600 hover:to-yellow-600 text-white rounded-full shadow-lg 
          transition-all hover:scale-110 flex items-center justify-center relative`}
        aria-label={isAtBottom ? "Go to top" : "Go to bottom"}
      >
        {isAtBottom ? (
          <FaArrowUp size={16} className="sm:size-5" />
        ) : (
          <FaArrowDown size={16} className="sm:size-5" />
        )}

        {/* Small indicator dot */}
        <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full animate-pulse"></span>
      </button>
    </div>
  );
};

export default GoUpGoDown;
