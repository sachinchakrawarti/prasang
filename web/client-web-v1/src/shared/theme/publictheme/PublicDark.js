
export const PublicDark = {
  background: {
    section: "bg-gradient-to-b from-gray-900 to-black",
    bookCoverSide: "bg-gradient-to-br from-gray-800 to-gray-900",
    navigationDots: "bg-gray-800"
  },

  textColors: {
    primary: "text-white",
    secondary: "text-gray-300",
    highlight: "text-yellow-400",
    badge: "text-yellow-300",
    wishlistSaved: "text-rose-400",
    wishlistDefault: "text-gray-400"
  },

  buttonColors: {
    primaryButton: {
      background: "bg-gradient-to-r from-yellow-500 to-yellow-400",
      hoverBackground: "hover:from-yellow-400 hover:to-yellow-300",
      textColor: "text-black"
    },
    secondaryButton: {
      background: "border-2 border-yellow-400",
      hoverBackground: "hover:bg-yellow-900/20",
      textColor: "text-yellow-400"
    },
    wishlistButton: {
      savedBackground: "bg-rose-900/30 border-rose-400",
      defaultBackground: "border-gray-600 hover:bg-gray-800"
    }
  },

  iconColors: {
    starFilled: "text-amber-400",
    starEmpty: "text-gray-600",
    navigationArrow: "text-yellow-400 hover:text-yellow-300"
  },

  border: {
    default: "rounded-xl",
    button: "rounded-lg",
    navigationDot: "rounded-full"
  },

  shadow: {
    book: "shadow-2xl",
    container: "shadow-xl",
    button: "shadow-md hover:shadow-lg",
    navigationDotContainer: "shadow-sm"
  },

  layout: {
    sectionPadding: "py-12 px-4 sm:px-6 lg:px-8",
    containerWidth: "max-w-7xl"
  },

  ringEffect: "ring-1 ring-inset ring-white/10",
  opacityOverlay: "opacity-20"
};