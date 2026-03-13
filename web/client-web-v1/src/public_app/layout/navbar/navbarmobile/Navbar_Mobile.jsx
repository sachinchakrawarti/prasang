import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import {
  FaUserCircle,
  FaRobot,
  FaCog,
  FaSearch,
  FaFeather,
  FaSignInAlt,
  FaUserPlus,
  FaBars,
  FaChevronDown,
  FaGlobe,
  FaPalette,
} from "react-icons/fa";

import { navItems } from "../NavbarData";
import LanguageSwitcher from "../components/LanguageSwitcher";
import ThemeSwitcher from "../components/ThemeSwitcher";
import Notification from "../components/NotificationDropdown";
import DrawerSlider from "./DrawerSlider";

const NavbarMobile = ({ isOpen, onClose, onOpen }) => {
  const [showAIDropdown, setShowAIDropdown] = useState(false);

  const notifications = [
    {
      id: 1,
      type: "poem",
      message: "New poem from William Shakespeare",
      description: "Sonnet 154 has been added",
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
      description: "Your poem is trending",
      time: "1 hour ago",
      read: false,
      icon: FaRobot,
      iconColor: "text-rose-500",
      link: "/poem/18",
    },
  ];

  const aiTools = [
    { name: "Poem Generator", path: "/ai/poem-generator", icon: FaRobot },
    { name: "Rhyme Finder", path: "/ai/rhyme-finder", icon: FaRobot },
    { name: "Meter Analyzer", path: "/ai/meter-analyzer", icon: FaRobot },
    { name: "Translation Assistant", path: "/ai/translate", icon: FaRobot },
    { name: "Writing Prompts", path: "/ai/prompts", icon: FaRobot },
  ];

  return (
    <>
      {/* Mobile Top Navbar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 shadow-md">
        <div className="h-16 px-3 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpen}
              className="p-2 text-amber-600 hover:bg-amber-100 rounded-full"
            >
              <FaBars size={22} />
            </button>

            <Link to="/" className="flex items-center gap-2">
              <FaFeather className="text-xl text-amber-500" />
              <span className="font-bold text-lg bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent">
                Prasang
              </span>
            </Link>
          </div>

          {/* Right */}
          <div className="flex items-center gap-1">
            <Link
              to="/search"
              className="p-2 text-amber-600 hover:bg-amber-100 rounded-full"
            >
              <FaSearch size={16} />
            </Link>

            <button className="p-2 text-amber-600 hover:bg-amber-100 rounded-full">
              <FaGlobe size={16} />
            </button>

            <button className="p-2 text-amber-600 hover:bg-amber-100 rounded-full">
              <FaPalette size={16} />
            </button>

            <Notification
              notifications={notifications}
              position="right"
              maxHeight="max-h-60"
              width="w-64 sm:w-72"
              showCount
            />

            <Link
              to="/settings"
              className="p-2 text-amber-600 hover:bg-amber-100 rounded-full"
            >
              <FaCog size={16} />
            </Link>

            {/* Hide signup on tiny screens */}
            <Link
              to="/signup"
              className="hidden xs:block bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:from-amber-600 hover:to-yellow-600 shadow-md whitespace-nowrap"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="lg:hidden h-16"></div>

      {/* Drawer */}
      <DrawerSlider isOpen={isOpen} onClose={onClose} title="Menu">
        {/* AI Tools */}
        <div className="mb-6">
          <button
            onClick={() => setShowAIDropdown(!showAIDropdown)}
            className="w-full flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-amber-50 rounded-xl border border-amber-200"
          >
            <div className="flex items-center gap-3">
              <FaRobot className="text-purple-600" size={20} />
              <span className="font-medium text-gray-800">AI Tools</span>
            </div>

            <FaChevronDown
              className={`text-amber-600 transition-transform ${
                showAIDropdown ? "rotate-180" : ""
              }`}
            />
          </button>

          {showAIDropdown && (
            <div className="mt-2 pl-4 space-y-1">
              {aiTools.map((tool) => (
                <Link
                  key={tool.name}
                  to={tool.path}
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-amber-50 rounded-xl text-sm"
                >
                  <tool.icon size={14} className="text-amber-500" />
                  {tool.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-xl text-sm ${
                  isActive
                    ? "bg-amber-100 text-amber-700 font-medium"
                    : "text-gray-600 hover:bg-amber-50"
                }`
              }
            >
              <item.icon size={16} />
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Language */}
        <LanguageSwitcher mobile />

        {/* Theme */}
        <ThemeSwitcher mobile />

        {/* Account */}
        <div className="mt-6 pt-4 border-t border-amber-200">
          <div className="text-xs font-semibold text-gray-500 uppercase mb-2">
            Account
          </div>

          <Link
            to="/profile"
            onClick={onClose}
            className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-amber-50 rounded-xl text-sm"
          >
            <FaUserCircle size={16} className="text-amber-500" />
            Profile
          </Link>

          <div className="flex gap-2 mt-3">
            <Link
              to="/login"
              onClick={onClose}
              className="flex-1 flex items-center justify-center gap-2 border-2 border-amber-500 text-amber-600 px-3 py-2 rounded-xl hover:bg-amber-50 text-sm font-medium"
            >
              <FaSignInAlt size={14} />
              Login
            </Link>

            <Link
              to="/signup"
              onClick={onClose}
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-3 py-2 rounded-xl hover:from-amber-600 hover:to-yellow-600 text-sm font-medium"
            >
              <FaUserPlus size={14} />
              Sign Up
            </Link>
          </div>
        </div>
      </DrawerSlider>
    </>
  );
};

export default NavbarMobile;
