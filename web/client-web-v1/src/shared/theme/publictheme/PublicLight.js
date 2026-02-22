// PublicLight.js

export const PublicLight = {
  background: {
    section: "bg-gradient-to-b from-yellow-50 to-white",
    bookCoverSide: "bg-gradient-to-br from-yellow-100 to-white",
    navigationDots: "bg-white"
  },

  textColors: {
    primary: "text-gray-900",
    secondary: "text-gray-700",
    highlight: "text-yellow-700",
    badge: "text-yellow-800",
    wishlistSaved: "text-rose-600",
    wishlistDefault: "text-gray-600"
  },

  buttonColors: {
    primaryButton: {
      background: "bg-gradient-to-r from-yellow-600 to-yellow-500",
      hoverBackground: "hover:from-yellow-700 hover:to-yellow-600",
      textColor: "text-white"
    },
    secondaryButton: {
      background: "border-2 border-yellow-500",
      hoverBackground: "hover:bg-yellow-50",
      textColor: "text-yellow-600"
    },
    wishlistButton: {
      savedBackground: "bg-rose-50 border-rose-400",
      defaultBackground: "border-gray-300 hover:bg-gray-50"
    }
  },

  iconColors: {
    starFilled: "text-amber-400",
    starEmpty: "text-gray-300",
    navigationArrow: "text-yellow-600 hover:text-yellow-800"
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

  ringEffect: "ring-1 ring-inset ring-black/10",
  opacityOverlay: "opacity-10"
};



