// src/config/theme.js
const lightTheme = {
  background: {
    section: "bg-gradient-to-b from-amber-50 via-amber-100/50 to-white",
    poemCard: "bg-gradient-to-br from-amber-50 to-white",
    heroSection: "bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200",
    navigationDots: "bg-white/80 backdrop-blur-sm",
    verseHighlight: "bg-amber-100/30",
    paperTexture: "bg-white bg-opacity-90",
    featureCard: "bg-gradient-to-br from-amber-50 to-yellow-50",
    footerGradient: "bg-gradient-to-t from-amber-100/50 to-transparent"
  },

  textColors: {
    primary: "text-gray-800",
    secondary: "text-gray-600",
    highlight: "text-amber-600",
    poemTitle: "text-amber-800",
    poetName: "text-amber-600",
    verse: "text-gray-700",
    lineBreak: "text-amber-400",
    badge: "text-amber-700",
    savedPoem: "text-rose-500",
    unsavedPoem: "text-gray-400",
    muted: "text-gray-500",
    white: "text-white"
  },

  buttonColors: {
    primaryButton: {
      background: "bg-gradient-to-r from-amber-500 to-amber-400",
      hoverBackground: "hover:from-amber-600 hover:to-amber-500",
      textColor: "text-white",
      shadow: "shadow-amber-200"
    },
    secondaryButton: {
      background: "border-2 border-amber-400 bg-transparent",
      hoverBackground: "hover:bg-amber-50",
      textColor: "text-amber-600",
      hoverTextColor: "hover:text-amber-700"
    },
    outlineButton: {
      background: "bg-white",
      hoverBackground: "hover:bg-amber-50",
      textColor: "text-amber-600",
      border: "border border-amber-200",
      hoverBorder: "hover:border-amber-300"
    },
    ghostButton: {
      background: "bg-transparent",
      hoverBackground: "hover:bg-amber-50/50",
      textColor: "text-amber-600"
    }
  },

  iconColors: {
    starFilled: "text-amber-400",
    starEmpty: "text-gray-300",
    navigationArrow: "text-amber-500 hover:text-amber-600",
    feather: "text-amber-500",
    heart: "text-rose-500",
    leaf: "text-emerald-500",
    sun: "text-amber-400",
    bookmark: "text-amber-600",
    quote: "text-amber-300",
    pen: "text-amber-600"
  },

  border: {
    default: "rounded-xl",
    button: "rounded-lg",
    poemCard: "rounded-2xl",
    navigationDot: "rounded-full",
    input: "rounded-xl",
    card: "rounded-2xl",
    badge: "rounded-full"
  },

  shadow: {
    poemCard: "shadow-lg shadow-amber-100/50 hover:shadow-xl hover:shadow-amber-200/30",
    container: "shadow-xl shadow-amber-100/30",
    button: "shadow-md hover:shadow-lg",
    navigationDotContainer: "shadow-sm",
    dropdown: "shadow-lg shadow-amber-200/30",
    card: "shadow-md hover:shadow-lg transition-shadow duration-300",
    soft: "shadow-sm"
  },

  layout: {
    sectionPadding: "py-16 px-4 sm:px-6 lg:px-8",
    containerWidth: "max-w-7xl mx-auto",
    poemContainer: "max-w-4xl mx-auto",
    verseSpacing: "space-y-4",
    cardPadding: "p-6",
    sectionSpacing: "mb-16"
  },

  effects: {
    ringEffect: "ring-1 ring-inset ring-amber-200/20",
    opacityOverlay: "opacity-10",
    verseHover: "hover:bg-amber-50/50 transition-colors duration-200",
    cardHover: "hover:scale-[1.02] transition-transform duration-200",
    fadeIn: "animate-fadeIn",
    slideUp: "animate-slideUp",
    gradientOverlay: "bg-gradient-to-t from-amber-100/20 to-transparent"
  },

  gradients: {
    poemHeader: "bg-gradient-to-r from-amber-200/30 via-transparent to-amber-200/30",
    verseDivider: "bg-gradient-to-r from-transparent via-amber-300 to-transparent",
    sunrise: "bg-gradient-to-b from-amber-100/40 to-white",
    goldenHour: "bg-gradient-to-t from-amber-50 to-white",
    warmGlow: "bg-gradient-to-r from-amber-100 via-yellow-50 to-amber-100",
    softRadial: "bg-radial-gradient(circle at top, rgba(251, 191, 36, 0.1), transparent)"
  },

  animation: {
    fadeIn: "animate-fadeIn duration-500",
    slideIn: "animate-slideIn duration-300",
    pulse: "animate-pulse-slow",
    float: "animate-float duration-3000 infinite"
  },

  // Poetry-specific styles
  poetry: {
    titleFont: "font-serif text-3xl md:text-4xl font-bold tracking-tight",
    poetFont: "font-sans text-sm uppercase tracking-wider",
    verseFont: "font-serif text-lg leading-relaxed",
    quoteFont: "font-serif italic text-xl",
    lineHeight: "leading-8",
    dropCap: "first-letter:text-5xl first-letter:font-serif first-letter:text-amber-600 first-letter:float-left first-letter:mr-2"
  },

  // Card styles
  cards: {
    featured: "bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100",
    default: "bg-white border border-amber-100",
    hover: "hover:border-amber-200 hover:shadow-lg hover:shadow-amber-100"
  },

  // Status colors
  status: {
    success: "text-emerald-600 bg-emerald-50",
    error: "text-rose-600 bg-rose-50",
    warning: "text-amber-600 bg-amber-50",
    info: "text-sky-600 bg-sky-50"
  }
};

export default lightTheme;