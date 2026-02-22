export const DashboardLight = {
  background: {
    section: "bg-gradient-to-b from-green-50 to-white",
    sidebar: "bg-white",
    navbar: "bg-white"
  },

  textColors: {
    primary: "text-gray-900",
    secondary: "text-gray-600",
    highlight: "text-green-700",
    badge: "text-green-800"
  },

  buttonColors: {
    primaryButton: {
      background: "bg-gradient-to-r from-green-600 to-green-500",
      hoverBackground: "hover:from-green-700 hover:to-green-600",
      textColor: "text-white"
    },
    secondaryButton: {
      background: "border-2 border-green-500",
      hoverBackground: "hover:bg-green-50",
      textColor: "text-green-600"
    }
  },

  iconColors: {
    active: "text-green-600",
    inactive: "text-gray-400"
  },

  border: {
    default: "rounded-xl",
    button: "rounded-lg"
  },

  shadow: {
    container: "shadow-xl",
    button: "shadow-md hover:shadow-lg"
  },

  layout: {
    sectionPadding: "p-6",
    containerWidth: "max-w-full"
  },

  ringEffect: "ring-1 ring-inset ring-black/10"
};