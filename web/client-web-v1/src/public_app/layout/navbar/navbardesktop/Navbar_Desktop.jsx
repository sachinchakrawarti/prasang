import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react"; // Add useEffect
import {
  FaFeather,
  FaSearch,
  FaGlobe,
  FaPalette,
  FaChevronDown,
  FaRobot,
  FaCog,
  FaBell,
} from "react-icons/fa";
import { useTheme } from "../../../../theme";
import { useNavbarTranslation } from "../../../../hooks/useNavbarTranslation";
import SearchBar from "../components/SearchBar";
import LanguageSwitcher from "../components/LanguageSwitcher";
import ThemeSwitcher from "../components/ThemeSwitcher";
import Notification from "../components/Notification";

const NavbarDesktop = () => {
  console.log("🟢 NavbarDesktop rendering start");

  const [openDropdown, setOpenDropdown] = useState(null);
  const { theme, themeName } = useTheme();
  console.log("🟢 Theme loaded:", { themeName, themeExists: !!theme });

  let navTranslation;
  try {
    navTranslation = useNavbarTranslation();
    console.log("🟢 Translation hook loaded:", {
      hasNavItems: !!navTranslation?.navItems,
      navItemsLength: navTranslation?.navItems?.length,
      hasT: !!navTranslation?.t,
    });
  } catch (error) {
    console.error("🔴 Error in useNavbarTranslation:", error);
  }

  const { navItems, t } = navTranslation || { navItems: [], t: (text) => text };

  // Add useEffect to check if component mounts
  useEffect(() => {
    console.log("🟢 NavbarDesktop mounted");
  }, []);

  const handleDropdownEnter = (index) => setOpenDropdown(index);
  const handleDropdownLeave = () => setOpenDropdown(null);

  // Theme-based helper functions
  const getAccentBgClass = () => {
    switch (themeName) {
      case "forest":
        return "bg-green-100 dark:bg-green-900/30";
      case "lavender":
        return "bg-purple-100 dark:bg-purple-900/30";
      case "rose":
        return "bg-rose-100 dark:bg-rose-900/30";
      case "sepia":
        return "bg-amber-200 dark:bg-amber-900/30";
      default:
        return "bg-amber-100 dark:bg-amber-900/30";
    }
  };

  const getHoverBgClass = () => {
    switch (themeName) {
      case "forest":
        return "hover:bg-green-50 dark:hover:bg-green-900/20";
      case "lavender":
        return "hover:bg-purple-50 dark:hover:bg-purple-900/20";
      case "rose":
        return "hover:bg-rose-50 dark:hover:bg-rose-900/20";
      case "sepia":
        return "hover:bg-amber-100 dark:hover:bg-amber-900/20";
      default:
        return "hover:bg-amber-50 dark:hover:bg-amber-900/20";
    }
  };

  const getGradientBorder = () => {
    switch (themeName) {
      case "forest":
        return "from-green-400 to-emerald-400";
      case "lavender":
        return "from-purple-400 to-pink-400";
      case "rose":
        return "from-rose-400 to-pink-400";
      case "sepia":
        return "from-amber-600 to-yellow-600";
      default:
        return "from-amber-400 via-yellow-400 to-amber-400";
    }
  };

  const accentBgClass = getAccentBgClass();
  const hoverBgClass = getHoverBgClass();
  const gradientBorder = getGradientBorder();

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

  console.log("🟢 About to render JSX");

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-200 ${theme?.background?.primary || ""}`}
    >
      {/* Main Navbar with Gradient */}
      <div className={`${theme?.background?.gradient || ""} shadow-lg`}>
        {/* Decorative top border - theme aware */}
        <div className={`h-1 bg-gradient-to-r ${gradientBorder}`}></div>

        {/* First Row: Logo, Search, Icons, Sign Up */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo - theme aware */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <FaFeather
                  className={`text-2xl ${theme?.icon?.primary || "text-amber-500"} group-hover:scale-110 transition-transform`}
                />
              </div>
              <span
                className={`font-bold text-xl bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent ${theme?.text?.primary || ""}`}
              >
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
                className={`p-2 ${theme?.text?.accent || "text-amber-600"} ${hoverBgClass} rounded-full transition-all relative group`}
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
                className={`p-2 ${theme?.text?.accent || "text-amber-600"} ${hoverBgClass} rounded-full transition-all relative group`}
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
                className={`${theme?.button?.primary || "bg-gradient-to-r from-amber-500 to-yellow-500 text-white"} px-5 py-2 rounded-full shadow-md hover:shadow-lg ml-1`}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>

        {/* Second Row: Main Navigation Menu */}
        <div
          className={`border-t ${theme?.border?.accent || "border-amber-200"} ${theme?.background?.overlay || ""}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ul className="flex items-center justify-center space-x-1">
              {navItems && navItems.length > 0 ? (
                navItems.map((item, index) => (
                  <li
                    key={item.to}
                    className="relative flex items-stretch"
                    onMouseEnter={() => handleDropdownEnter(index)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {item.dropdown ? (
                      <>
                        {/* Main navigation link - theme aware */}
                        <NavLink
                          to={item.to}
                          className={({ isActive }) =>
                            `flex items-center gap-2 px-4 py-3 rounded-l-lg transition-all duration-200
                            ${
                              isActive
                                ? `${accentBgClass} ${theme?.text?.accent || "text-amber-600"} font-medium`
                                : `${theme?.text?.secondary || "text-gray-600"} ${hoverBgClass}`
                            }`
                          }
                        >
                          <item.icon size={16} />
                          <span className="font-medium">{item.label}</span>
                        </NavLink>

                        {/* Dropdown toggle button - theme aware */}
                        <button
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === index ? null : index,
                            )
                          }
                          className={`px-2 py-3 rounded-r-lg transition-all duration-200
                            ${
                              openDropdown === index
                                ? `${accentBgClass} ${theme?.text?.accent || "text-amber-600"}`
                                : `${theme?.text?.secondary || "text-gray-600"} ${hoverBgClass}`
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

                        {/* Dropdown Menu - theme aware */}
                        {openDropdown === index && (
                          <div
                            className={`absolute left-0 top-full mt-0 w-56 ${theme?.background?.card || "bg-white"} rounded-b-2xl shadow-xl border ${theme?.border?.accent || "border-amber-200"} py-2 z-50`}
                          >
                            {item.dropdown.map((subItem) => (
                              <NavLink
                                key={subItem.to}
                                to={subItem.to}
                                className={({ isActive }) =>
                                  `flex items-center gap-3 px-4 py-2 text-sm transition-colors
                                  ${
                                    isActive
                                      ? `${accentBgClass} ${theme?.text?.accent || "text-amber-600"} font-medium`
                                      : `${theme?.text?.secondary || "text-gray-600"} ${hoverBgClass}`
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
                              ? `${accentBgClass} ${theme?.text?.accent || "text-amber-600"} font-medium`
                              : `${theme?.text?.secondary || "text-gray-600"} ${hoverBgClass}`
                          }`
                        }
                      >
                        <item.icon size={16} />
                        <span className="font-medium">{item.label}</span>
                      </NavLink>
                    )}
                  </li>
                ))
              ) : (
                <li className="text-red-500 p-4">No navigation items loaded</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
