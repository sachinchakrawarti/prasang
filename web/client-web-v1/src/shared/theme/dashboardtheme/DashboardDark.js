export const DashboardDark = {
  background: {
    section: "bg-gradient-to-b from-gray-900 to-black",
    sidebar: "bg-gray-900",
    navbar: "bg-gray-800"
  },

  textColors: {
    primary: "text-white",
    secondary: "text-gray-300",
    highlight: "text-green-400",
    badge: "text-green-300"
  },

  buttonColors: {
    primaryButton: {
      background: "bg-gradient-to-r from-green-500 to-green-400",
      hoverBackground: "hover:from-green-400 hover:to-green-300",
      textColor: "text-black"
    },
    secondaryButton: {
      background: "border-2 border-green-400",
      hoverBackground: "hover:bg-green-900/20",
      textColor: "text-green-400"
    }
  },

  iconColors: {
    active: "text-green-400",
    inactive: "text-gray-500"
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

  ringEffect: "ring-1 ring-inset ring-white/10"
};