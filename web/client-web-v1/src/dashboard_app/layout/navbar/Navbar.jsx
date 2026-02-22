import { useTheme } from "../../../utils/GlobalImports";

const Navbar = () => {
  const { theme, mode, toggleTheme } = useTheme();

  return (
    <nav
      className={`
        ${theme.background.navbar}
        ${theme.layout.sectionPadding}
        flex items-center justify-between
        shadow-md
      `}
    >
      {/* Left - Title */}
      <h1 className={`text-xl font-semibold ${theme.textColors.primary}`}>
        Dashboard
      </h1>

      {/* Right - Actions */}
      <div className="flex items-center gap-4">
        <span className={theme.textColors.secondary}>Admin Panel</span>

        {/* Theme Toggle */}
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
