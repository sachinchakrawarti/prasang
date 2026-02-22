import { useTheme } from "../../../utils/GlobalImports";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Language options for multilingual support
const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  { code: "gu", name: "ગુજરાતી", flag: "🇮🇳" },
  { code: "bn", name: "বাংলা", flag: "🇮🇳" },
  { code: "ta", name: "தமிழ்", flag: "🇮🇳" },
  { code: "te", name: "తెలుగు", flag: "🇮🇳" },
  { code: "ml", name: "മലയാളം", flag: "🇮🇳" },
  { code: "kn", name: "ಕನ್ನಡ", flag: "🇮🇳" },
  { code: "mr", name: "मराठी", flag: "🇮🇳" },
  { code: "ur", name: "اردو", flag: "🇮🇳" },
  { code: "pa", name: "ਪੰਜਾਬੀ", flag: "🇮🇳" },
  { code: "sa", name: "संस्कृतम्", flag: "🇮🇳" },
];

// Poetry-themed navigation items with translations
const navItems = {
  home: {
    en: "Home",
    hi: "होम",
    gu: "હોમ",
    bn: "হোম",
    ta: "முகப்பு",
    te: "హోమ్",
    ml: "ഹോം",
    kn: "ಹೋಮ್",
    mr: "होम",
    ur: "ہوم",
    pa: "ਹੋਮ",
    sa: "गृहम्",
  },
  poetry: {
    en: "Poetry",
    hi: "कविताएँ",
    gu: "કવિતાઓ",
    bn: "কবিতা",
    ta: "கவிதைகள்",
    te: "కవితలు",
    ml: "കവിതകൾ",
    kn: "ಕವಿತೆಗಳು",
    mr: "कविता",
    ur: "شاعری",
    pa: "ਕਵਿਤਾਵਾਂ",
    sa: "काव्यानि",
  },
  poets: {
    en: "Poets",
    hi: "कवि",
    gu: "કવિઓ",
    bn: "কবি",
    ta: "கவிஞர்கள்",
    te: "కవులు",
    ml: "കവികൾ",
    kn: "ಕವಿಗಳು",
    mr: "कवी",
    ur: "شعرا",
    pa: "ਕਵੀ",
    sa: "कवयः",
  },
  stories: {
    en: "Stories",
    hi: "कहानियाँ",
    gu: "વાર્તાઓ",
    bn: "গল্প",
    ta: "கதைகள்",
    te: "కథలు",
    ml: "കഥകൾ",
    kn: "ಕಥೆಗಳು",
    mr: "कथा",
    ur: "کہانیاں",
    pa: "ਕਹਾਣੀਆਂ",
    sa: "कथाः",
  },
  about: {
    en: "About",
    hi: "हमारे बारे में",
    gu: "અમારા વિશે",
    bn: "আমাদের সম্পর্কে",
    ta: "எங்களைப் பற்றி",
    te: "మా గురించి",
    ml: "ഞങ്ങളെക്കുറിച്ച്",
    kn: "ನಮ್ಮ ಬಗ್ಗೆ",
    mr: "आमच्याबद्दल",
    ur: "ہمارے بارے میں",
    pa: "ਸਾਡੇ ਬਾਰੇ",
    sa: "अस्माकम् विषये",
  },
  contact: {
    en: "Contact",
    hi: "संपर्क",
    gu: "સંપર્ક",
    bn: "যোগাযোগ",
    ta: "தொடர்பு",
    te: "సంప్రదించండి",
    ml: "ബന്ധപ്പെടുക",
    kn: "ಸಂಪರ್ಕಿಸಿ",
    mr: "संपर्क",
    ur: "رابطہ",
    pa: "ਸੰਪਰਕ",
    sa: "संपर्कः",
  },
};

const Navbar = () => {
  const { theme, mode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Get translation for current language
  const t = (key) => {
    return navItems[key]?.[currentLang] || navItems[key]?.en || key;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className={`
          fixed top-0 left-0 right-0 z-50
          ${theme.background.section}
          ${theme.layout.sectionPadding}
          ${scrolled ? "shadow-lg backdrop-blur-md bg-opacity-90" : ""}
          transition-all duration-300
          border-b ${theme.ringEffect}
          flex items-center justify-between
          py-3 sm:py-4
        `}
      >
        {/* Logo / Brand with poetic animation */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative cursor-pointer group"
        >
          <h1
            className={`text-3xl sm:text-4xl font-bold ${theme.textColors.primary} relative`}
          >
            <span className="relative">
              Prasang
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className={`absolute bottom-0 left-0 h-0.5 ${theme.textColors.highlight} opacity-50`}
              />
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            className={`text-xs ${theme.textColors.secondary} mt-1 italic`}
          >
            {currentLang === "en"
              ? "Where words find their home"
              : currentLang === "hi"
                ? "जहाँ शब्दों को घर मिलता है"
                : currentLang === "gu"
                  ? "જ્યાં શબ્દોને ઘર મળે છે"
                  : "Where words find their home"}
          </motion.p>
        </motion.div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {["home", "poetry", "poets", "stories", "about", "contact"].map(
            (item) => (
              <motion.a
                key={item}
                href={`/${item === "home" ? "" : item}`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                onClick={() => setActiveItem(item)}
                className={`
                relative font-medium transition-colors duration-300
                ${activeItem === item ? theme.textColors.highlight : theme.textColors.secondary}
                hover:${theme.textColors.highlight}
                group
              `}
              >
                {t(item)}
                {activeItem === item && (
                  <motion.span
                    layoutId="activeNav"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${theme.textColors.highlight}`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ),
          )}
        </div>

        {/* Right Side - Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Language Selector - Poetry themed */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsLangOpen(!isLangOpen)}
              className={`
                flex items-center gap-2 px-3 py-2
                ${theme.buttonColors.secondaryButton.background}
                ${theme.buttonColors.secondaryButton.hoverBackground}
                ${theme.buttonColors.secondaryButton.textColor}
                ${theme.border.button}
                ${theme.shadow.button}
                transition-all duration-300
              `}
            >
              <span className="text-lg">
                {languages.find((l) => l.code === currentLang)?.flag}
              </span>
              <span className="hidden sm:inline">
                {languages.find((l) => l.code === currentLang)?.name}
              </span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${isLangOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className={`
                    absolute right-0 mt-2 w-64 max-h-96 overflow-y-auto
                    ${theme.background.navigationDots}
                    ${theme.shadow.container}
                    ${theme.border.default}
                    ${theme.ringEffect}
                    py-2 z-50
                  `}
                >
                  {languages.map((lang) => (
                    <motion.button
                      key={lang.code}
                      whileHover={{ x: 5 }}
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`
                        w-full text-left px-4 py-3
                        flex items-center gap-3
                        ${currentLang === lang.code ? theme.background.bookCoverSide : ""}
                        hover:${theme.background.bookCoverSide}
                        transition-colors duration-200
                      `}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span className={theme.textColors.primary}>
                        {lang.name}
                      </span>
                      {currentLang === lang.code && (
                        <svg
                          className="w-4 h-4 ml-auto"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme Toggle Button - Poetic animation */}
          <motion.button
            whileHover={{ scale: 1.05, rotate: mode === "light" ? 180 : 0 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={`
              ${theme.buttonColors.primaryButton.background}
              ${theme.buttonColors.primaryButton.hoverBackground}
              ${theme.buttonColors.primaryButton.textColor}
              ${theme.border.button}
              ${theme.shadow.button}
              px-4 py-2 transition-all duration-300
              flex items-center gap-2
              relative overflow-hidden group
            `}
          >
            <span className="relative z-10">
              {mode === "light" ? "🌙" : "☀️"}
            </span>
            <span className="hidden sm:inline relative z-10">
              {mode === "light" ? "Dark" : "Light"}
            </span>
            <motion.div
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
              initial={false}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
            />
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`
              md:hidden p-2
              ${theme.buttonColors.secondaryButton.background}
              ${theme.buttonColors.secondaryButton.textColor}
              ${theme.border.button}
              rounded-lg
            `}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`
              fixed top-[72px] left-0 right-0 z-40
              md:hidden
              ${theme.background.section}
              ${theme.shadow.container}
              border-b ${theme.ringEffect}
              py-4 px-6
            `}
          >
            <div className="flex flex-col gap-3">
              {["home", "poetry", "poets", "stories", "about", "contact"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={`/${item === "home" ? "" : item}`}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => {
                      setActiveItem(item);
                      setIsOpen(false);
                    }}
                    className={`
                    py-3 px-4 rounded-lg
                    ${activeItem === item ? theme.background.bookCoverSide : ""}
                    ${activeItem === item ? theme.textColors.highlight : theme.textColors.secondary}
                    hover:${theme.background.bookCoverSide}
                    transition-all duration-200
                    font-medium
                  `}
                  >
                    {t(item)}
                  </motion.a>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-[88px] sm:h-[96px]" />
    </>
  );
};

export default Navbar;
