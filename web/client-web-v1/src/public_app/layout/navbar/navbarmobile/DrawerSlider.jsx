// src/public_app/layout/navbar/components/DrawerSlider.jsx
import { Link, NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const DrawerSlider = ({ isOpen, onClose, title = "Menu", children }) => {
  return (
    <div
      className={`fixed inset-0 z-40 transition-opacity duration-300 ${
        isOpen
          ? "opacity-100 visible"
          : "opacity-0 invisible pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`absolute left-0 top-0 h-full w-80 bg-gradient-to-b from-amber-50 to-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-amber-100 to-yellow-100 p-4 border-b border-amber-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-amber-800">{title}</h2>
              <button
                onClick={onClose}
                className="p-2 text-amber-600 hover:bg-amber-200 rounded-full transition-all"
                aria-label="Close menu"
              >
                <FaTimes size={20} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">{children}</div>

          {/* Footer */}
          <div className="sticky bottom-0 bg-gradient-to-r from-amber-50 to-yellow-50 p-4 border-t border-amber-200 text-center text-xs text-amber-600">
            <p>© 2024 Prasang Poetry</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerSlider;
