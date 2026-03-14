// src/public_app/layout/navbar/navbarmobile/Navbar_Mobile.jsx
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import {
  FaUserCircle,
  FaCog,
  FaSearch,
  FaFeather,
  FaSignInAlt,
  FaUserPlus,
  FaBars,
  FaBell,
} from "react-icons/fa";
import { useTheme } from "../../../../theme";
import { useLanguage } from "../../../../context/LanguageContext";
import { translateMobile } from "../../../../locales/mobileNavbarTranslations";
import DrawerSlider from "./DrawerSlider";
import ThemeSwitcherMobile from "./components/ThemeSwitcherMobile";
import LanguageSwitcherMobile from "./components/LanguageSwitcherMobile"; // Import the new component
import { mobileNavItemsConfig } from "./components/NavbarMobileData";

const NavbarMobile = ({ isOpen, onClose, onOpen }) => {
  const { theme } = useTheme();
  const { language } = useLanguage();

  // Translation helper
  const t = (text) => translateMobile(text, language);

  // Translate navigation items
  const translatedNavItems = mobileNavItemsConfig.map((item) => ({
    ...item,
    label: t(item.labelKey),
  }));

  return (
    <>
      {/* Mobile Top Navbar */}
      <div
        className={`lg:hidden fixed top-0 left-0 right-0 z-40 ${theme.background.navbar} ${theme.shadow.sm}`}
      >
        <div className="h-16 px-3 flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpen}
              className={`p-2 ${theme.text.accent} ${theme.background.cardHover} rounded-full transition`}
            >
              <FaBars size={22} />
            </button>

            <Link to="/" className="flex items-center gap-2 group">
              <FaFeather
                className={`text-xl ${theme.icon.primary} group-hover:scale-110 transition-transform`}
              />
              <span className={`font-bold text-lg ${theme.text.primary}`}>
                Prasang
              </span>
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-1">
            <Link
              to="/search"
              className={`p-2 ${theme.text.accent} ${theme.background.cardHover} rounded-full transition`}
              aria-label={t("search")}
            >
              <FaSearch size={16} />
            </Link>

            {/* Language Switcher - Now uses the dropdown component */}
            <LanguageSwitcherMobile />

            <ThemeSwitcherMobile />

            {/* Notification Icon */}
            <Link
              to="/notifications"
              className={`p-2 ${theme.text.accent} ${theme.background.cardHover} rounded-full transition relative`}
              aria-label={t("notifications")}
            >
              <FaBell size={16} />
            </Link>

            <Link
              to="/settings"
              className={`p-2 ${theme.text.accent} ${theme.background.cardHover} rounded-full transition`}
              aria-label={t("settings")}
            >
              <FaCog size={16} />
            </Link>

            <Link
              to="/signup"
              className={`hidden xs:block ${theme.button.primary} px-3 py-1.5 rounded-full text-xs font-medium shadow-md hover:shadow-lg transition-all whitespace-nowrap`}
            >
              {t("signUp")}
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="lg:hidden h-16"></div>

      {/* Drawer */}
      <DrawerSlider isOpen={isOpen} onClose={onClose} title={t("menu")}>
        {/* Navigation - Mobile flat list (no dropdowns) */}
        <div className="space-y-2">
          {translatedNavItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-xl text-sm transition ${
                  isActive
                    ? `${theme.background.accent} ${theme.text.accent} font-medium`
                    : `${theme.text.secondary} ${theme.background.cardHover}`
                }`
              }
            >
              <item.icon size={16} className={theme.icon.primary} />
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Account */}
        <div className={`mt-6 pt-4 border-t ${theme.border.accent}`}>
          <div
            className={`text-xs font-semibold ${theme.text.tertiary} uppercase mb-2`}
          >
            {t("account")}
          </div>

          <Link
            to="/profile"
            onClick={onClose}
            className={`flex items-center gap-3 px-4 py-2 ${theme.text.primary} ${theme.background.cardHover} rounded-xl text-sm transition`}
          >
            <FaUserCircle size={16} className={theme.icon.primary} />
            {t("profile")}
          </Link>

          <div className="flex gap-2 mt-3">
            <Link
              to="/login"
              onClick={onClose}
              className={`flex-1 flex items-center justify-center gap-2 border-2 ${theme.button.secondary} px-3 py-2 rounded-xl text-sm font-medium transition`}
            >
              <FaSignInAlt size={14} />
              {t("login")}
            </Link>

            <Link
              to="/signup"
              onClick={onClose}
              className={`flex-1 flex items-center justify-center gap-2 ${theme.button.primary} px-3 py-2 rounded-xl text-sm font-medium transition`}
            >
              <FaUserPlus size={14} />
              {t("signUp")}
            </Link>
          </div>
        </div>
      </DrawerSlider>
    </>
  );
};

export default NavbarMobile;
