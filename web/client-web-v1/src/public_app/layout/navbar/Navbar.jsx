// src/public_app/layout/navbar/Navbar.jsx

import { useState } from "react";
import NavbarDesktop from "./navbardesktop/Navbar_Desktop";
import NavbarMobile from "./navbarmobile/Navbar_Mobile";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden lg:block">
        <NavbarDesktop />
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden">
        <NavbarMobile
          isOpen={isMobileMenuOpen}
          onClose={closeMobileMenu}
          onOpen={openMobileMenu}
        />
      </div>
    </>
  );
};

export default Navbar;
