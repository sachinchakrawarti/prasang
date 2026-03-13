// src/public_app/layout/footer/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaFeather,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBookOpen,
  FaUserFriends,
  FaInfoCircle,
  FaPenFancy,
  FaGlobe,
  FaRss,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/", icon: FaFeather },
    { name: "Poems", path: "/poems", icon: FaBookOpen },
    { name: "Poets", path: "/poets", icon: FaUserFriends },
    { name: "Poetry Forms", path: "/poems-types", icon: FaPenFancy },
    { name: "About", path: "/about", icon: FaInfoCircle },
  ];

  const resources = [
    { name: "Writing Tips", path: "/blog/writing-tips" },
    { name: "Poetry Glossary", path: "/resources/glossary" },
    { name: "Famous Poets", path: "/poets/featured" },
    { name: "Contests", path: "/contests" },
    { name: "Workshops", path: "/workshops" },
  ];

  const socialLinks = [
    {
      icon: FaTwitter,
      href: "https://twitter.com/prasang_poetry",
      label: "Twitter",
      color: "hover:text-blue-400",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/prasang.poetry",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      icon: FaFacebook,
      href: "https://facebook.com/prasangpoetry",
      label: "Facebook",
      color: "hover:text-blue-600",
    },
    {
      icon: FaYoutube,
      href: "https://youtube.com/@prasangpoetry",
      label: "YouTube",
      color: "hover:text-red-500",
    },
    {
      icon: FaRss,
      href: "/rss",
      label: "RSS Feed",
      color: "hover:text-orange-500",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-amber-100 mt-16">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <FaFeather className="text-2xl text-amber-500 group-hover:scale-110 transition-transform" />
                <FaHeart className="absolute -top-1 -right-2 text-xs text-rose-400" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                Prasang
              </span>
            </Link>

            <p className="text-gray-600 text-sm leading-relaxed">
              A sanctuary for poets and poetry lovers to connect, share, and
              inspire. Where words dance on paper and emotions find their voice.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors`}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-amber-600 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <link.icon className="text-xs text-gray-400 group-hover:text-amber-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {resources.map((resource, idx) => (
                <li key={idx}>
                  <Link
                    to={resource.path}
                    className="text-gray-600 hover:text-amber-600 transition-colors text-sm"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-amber-500 mt-1 flex-shrink-0" />
                <a
                  href="mailto:hello@prasang.com"
                  className="text-gray-600 hover:text-amber-600 transition-colors text-sm"
                >
                  hello@prasang.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaPhone className="text-amber-500 mt-1 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-600 hover:text-amber-600 transition-colors text-sm"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-amber-500 mt-1 flex-shrink-0" />
                <address className="text-gray-600 text-sm not-italic">
                  123 Poetry Lane
                  <br />
                  Creative City, PC 12345
                </address>
              </li>
            </ul>

            {/* Newsletter Signup */}
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Subscribe to our newsletter
              </h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-sm rounded-lg hover:from-amber-600 hover:to-yellow-600 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-xs text-gray-500 text-center md:text-left">
              © {currentYear} Prasang. All rights reserved. |
              <Link to="/privacy" className="hover:text-amber-600 ml-1">
                Privacy
              </Link>
              <span className="mx-2">•</span>
              <Link to="/terms" className="hover:text-amber-600">
                Terms
              </Link>
              <span className="mx-2">•</span>
              <Link to="/sitemap" className="hover:text-amber-600">
                Sitemap
              </Link>
            </p>

            {/* Made with love */}
            <p className="text-xs text-gray-500 flex items-center gap-1">
              Made with <FaHeart className="text-rose-400 text-xs" /> for poetry
              lovers
              <span className="mx-1">•</span>
              <FaGlobe className="text-amber-500 text-xs" /> 5 languages
            </p>

            {/* Back to top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xs text-amber-600 hover:text-amber-700 flex items-center gap-1"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
