// src/public_app/layout/navbar/navbardesktop/Navbar_Desktop.jsx
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import {
  FaFeather,
  FaSearch,
  FaGlobe,
  FaPalette,
  FaChevronDown,
  FaRobot,
  FaCog,
} from "react-icons/fa";
import SearchBar from "../components/SearchBar";
import LanguageSwitcher from "../components/LanguageSwitcher";
import ThemeSwitcher from "../components/ThemeSwitcher";
import Notification from "../components/NotificationDropdown";
import { navItems } from "../NavbarData";

const NavbarDesktop = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownEnter = (index) => setOpenDropdown(index);
  const handleDropdownLeave = () => setOpenDropdown(null);

  // Sample notifications
  const notifications = [
    {
      id: 1,
      type: "poem",
      message: "New poem from William Shakespeare",
      description: "Sonnet 154 has been added to the collection",
      time: "5 min ago",
      read: false,
      icon: FaFeather,
      iconColor: "text-amber-500",
      link: "/poem/154",
    },
    {
      id: 2,
      type: "like",
      message: "Your poem 'Sonnet 18' got 50 likes",
      description: "Congratulations! Your poem is trending",
      time: "1 hour ago",
      read: false,
      icon: FaRobot,
      iconColor: "text-rose-500",
      link: "/poem/18",
    },
    {
      id: 3,
      type: "poet",
      message: "Faiz Ahmed Faiz published new ghazal",
      description: "New ghazal added to his collection",
      time: "3 hours ago",
      read: true,
      icon: FaFeather,
      iconColor: "text-emerald-500",
      link: "/poems-types/gazal/faiz/urdu",
    },
    {
      id: 4,
      type: "event",
      message: "Weekly poetry contest starts tomorrow",
      description: "Theme: 'Nature's Beauty' - Submit your entries",
      time: "1 day ago",
      read: true,
      icon: FaRobot,
      iconColor: "text-purple-500",
      link: "/contests",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 transition-colors duration-200">
      {/* Main Navbar with Gradient */}
      <div className="bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 shadow-lg">
        {/* Decorative top border */}
        <div className="h-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400"></div>

        {/* First Row: Logo, Search, Icons, Sign Up */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <FaFeather className="text-2xl text-amber-500 group-hover:scale-110 transition-transform" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent">
                Prasang
              </span>
            </Link>

            {/* Desktop Search Component */}
            <SearchBar />

            {/* Right Side Icons */}
            <div className="flex items-center gap-2">
              {/* AI Assistant Icon */}
              <Link
                to="/ai-assistant"
                className="p-2 text-amber-600 hover:bg-amber-100 rounded-full transition-all relative group"
                aria-label="AI Assistant"
              >
                <FaRobot size={18} />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                  AI Assistant
                </span>
              </Link>

              {/* Language Switcher Component */}
              <LanguageSwitcher />

              {/* Theme Switcher Component */}
              <ThemeSwitcher />

              {/* Notifications Component */}
              <Notification
                notifications={notifications}
                position="right"
                maxHeight="max-h-96"
                width="w-80"
                showCount={true}
              />

              {/* Settings Icon - Links to Settings Page */}
              <Link
                to="/settings"
                className="p-2 text-amber-600 hover:bg-amber-100 rounded-full transition-all relative group"
                aria-label="Settings"
              >
                <FaCog size={18} />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                  Settings
                </span>
              </Link>

              {/* Sign Up Button */}
              <Link
                to="/signup"
                className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-5 py-2 rounded-full hover:from-amber-600 hover:to-yellow-600 transition-all shadow-md hover:shadow-lg shadow-amber-200 ml-1"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>

        {/* Second Row: Main Navigation Menu */}
        <div className="border-t border-amber-200 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ul className="flex items-center justify-center space-x-1">
              {navItems.map((item, index) => (
                <li
                  key={item.to}
                  className="relative flex items-stretch"
                  onMouseEnter={() => handleDropdownEnter(index)}
                  onMouseLeave={handleDropdownLeave}
                >
                  {item.dropdown ? (
                    <>
                      {/* Main navigation link */}
                      <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                          `flex items-center gap-2 px-4 py-3 rounded-l-lg transition-all duration-200
                          ${
                            isActive
                              ? "bg-amber-100 text-amber-700 font-medium"
                              : "text-amber-700 hover:bg-amber-50"
                          }`
                        }
                      >
                        <item.icon size={16} />
                        <span className="font-medium">{item.label}</span>
                      </NavLink>

                      {/* Dropdown toggle button */}
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === index ? null : index)
                        }
                        className={`px-2 py-3 rounded-r-lg transition-all duration-200
                          ${
                            openDropdown === index
                              ? "bg-amber-100 text-amber-700"
                              : "text-amber-700 hover:bg-amber-50"
                          }`}
                        aria-label="Toggle dropdown"
                      >
                        <FaChevronDown
                          size={12}
                          className={`transition-transform duration-200 ${
                            openDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      {openDropdown === index && (
                        <div className="absolute left-0 top-full mt-0 w-56 bg-white rounded-b-2xl shadow-xl border border-amber-200 py-2 z-50">
                          {item.dropdown.map((subItem) => (
                            <NavLink
                              key={subItem.to}
                              to={subItem.to}
                              className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-2 text-sm transition-colors
                                ${
                                  isActive
                                    ? "bg-amber-100 text-amber-700 font-medium"
                                    : "text-gray-700 hover:bg-amber-50"
                                }`
                              }
                              onClick={() => setOpenDropdown(null)}
                            >
                              {subItem.icon && <subItem.icon size={14} />}
                              <span>{subItem.label}</span>
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-200
                        ${
                          isActive
                            ? "bg-amber-100 text-amber-700 font-medium"
                            : "text-amber-700 hover:bg-amber-50"
                        }`
                      }
                    >
                      <item.icon size={16} />
                      <span className="font-medium">{item.label}</span>
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
