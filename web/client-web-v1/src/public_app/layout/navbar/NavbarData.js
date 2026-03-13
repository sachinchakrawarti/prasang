import {
  FaHome,
  FaBook,
  FaUser,
  FaInfoCircle,
  FaPenFancy,
  FaHeart,
  FaFeatherAlt,
  FaHistory,
  FaAward,
  FaBlog,
  FaQuestionCircle,
  FaPenNib
} from "react-icons/fa";

export const navItems = [
  {
    label: "Home",
    to: "/",
    icon: FaHome,
  },
  {
    label: "Poems",
    to: "/poems",
    icon: FaBook,
    dropdown: [
      { label: "All Poems", to: "/poems" },
      { label: "Popular", to: "/poems/popular" },
      { label: "New", to: "/poems/new" },
      { label: "Classics", to: "/poems/classics" },
      { label: "Categories", to: "/poems/categories" },
      { label: "Poem Types", to: "/poemstypes" },
    ],
  },

  {
    label: "Prose",
    to: "/prose",
    icon: FaPenNib,
    dropdown: [
      { label: "All Prose", to: "/prose" },
      { label: "Short Stories", to: "/prose/stories" },
      { label: "Essays", to: "/prose/essays" },
      { label: "Articles", to: "/prose/articles" },
      { label: "Memoirs", to: "/prose/memoirs" },
      { label: "Literary Criticism", to: "/prose/criticism" },
    ],
  },

  {
    label: "Poets",
    to: "/poets",
    icon: FaUser,
    dropdown: [
      { label: "All Poets", to: "/poets" },
      { label: "Featured", to: "/poets/featured" },
      { label: "New Poets", to: "/poets/new" },
      { label: "Interviews", to: "/poets/interviews" },
    ],
  },

  // ✨ Contributors Section
  {
    label: "Contributors",
    to: "/contributors",
    icon: FaFeatherAlt,
    dropdown: [
      { label: "All Contributors", to: "/contributors" },
      { label: "Translators", to: "/translators" },
      { label: "Scholars", to: "/scholars" },
      { label: "Editors", to: "/editors" },
      { label: "Commentators", to: "/commentators" }
    ],
  },

  {
    label: "About",
    to: "/about",
    icon: FaInfoCircle,
  },

  {
    label: "Test Page",
    to: "/testpage",
    icon: FaInfoCircle,
  },
];