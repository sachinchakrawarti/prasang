import { useTheme } from "../../../utils/GlobalImports";

const Navbar = () => {
  const { theme, mode, toggleTheme } = useTheme();

  return (
    <nav
      className={`
        ${theme.background.section}
        ${theme.layout.sectionPadding}
        flex items-center justify-between
      `}
    >
      {/* Logo / Brand */}
      <h1 className={`text-2xl font-bold ${theme.textColors.primary}`}>
        Prasang
      </h1>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <a
          href="/"
          className={`${theme.textColors.secondary} hover:${theme.textColors.highlight}`}
        >
          Home
        </a>

        <a
          href="/about"
          className={`${theme.textColors.secondary} hover:${theme.textColors.highlight}`}
        >
          About
        </a>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`
            ${theme.buttonColors.primaryButton.background}
            ${theme.buttonColors.primaryButton.hoverBackground}
            ${theme.buttonColors.primaryButton.textColor}
            ${theme.border.button}
            ${theme.shadow.button}
            px-4 py-2 transition-all duration-300
          `}
        >
          {mode === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
