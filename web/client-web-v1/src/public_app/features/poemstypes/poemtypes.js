
// src/public_app/features/poems/components/poemtypes.js
import {
  FaFeather,
  FaLeaf,
  FaMoon,
  FaSun,
  FaCloud,
  FaHeart,
  FaStar,
  FaBook,
  FaGlobe,
  FaDragon,
  FaMountain,
  FaWater,
  FaFire,
} from "react-icons/fa";

/**
 * Base data (no routes here)
 */
const basePoemTypes = [
  // 🌏 South Asian Poetry Forms
  {
    id: "ghazal",
    name: "Ghazal",
    region: "South Asia / Persia",
    origin: "7th Century Arabia",
    popularizedIn: "Persia & South Asia",
    language: "Urdu, Persian, Hindi",
    icon: FaHeart,
    description:
      "A poetic form consisting of rhyming couplets and a refrain, with each line sharing the same meter.",
    structure:
      "5-15 couplets, rhyme scheme (AA BA CA), final couplet often includes poet's name",
    famousPoets: ["Mirza Ghalib", "Rumi", "Faiz Ahmed Faiz"],
    example: "हज़ारों ख्वाहिशें ऐसी कि हर ख्वाहिश पे दम निकले",
    color: "from-rose-500 to-pink-500",
  },
  {
    id: "nazm",
    name: "Nazm",
    region: "South Asia",
    origin: "Urdu literature",
    language: "Urdu, Hindi",
    icon: FaBook,
    description:
      "A form of Urdu poetry that follows a unified theme or story.",
    structure: "Can be free verse or rhyming",
    famousPoets: ["Allama Iqbal", "Josh Malihabadi", "Kaifi Azmi"],
    example: "Khudi ko kar buland itna ke har taqdeer se pehle",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "doha",
    name: "Doha",
    region: "India",
    origin: "Ancient India",
    language: "Hindi",
    icon: FaLeaf,
    description:
      "A self-contained couplet conveying philosophical wisdom.",
    structure: "Two lines, 24 syllables (13+11)",
    famousPoets: ["Kabir Das", "Rahim", "Tulsidas"],
    example: "बुरा जो देखन मैं चला, बुरा न मिलिया कोय",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "chaupai",
    name: "Chaupai",
    region: "India",
    origin: "Medieval India",
    language: "Hindi, Awadhi",
    icon: FaMountain,
    description:
      "A quatrain form used in epic poetry like Ramcharitmanas.",
    structure: "Four lines with 16 syllables each",
    famousPoets: ["Tulsidas"],
    example: "जय हनुमान ज्ञान गुन सागर",
    color: "from-orange-500 to-red-500",
  },

  // 🇫🇷 French Forms
  {
    id: "ballade",
    name: "Ballade",
    region: "France",
    origin: "14th Century France",
    language: "French",
    icon: FaFeather,
    description: "Three main stanzas followed by a shorter envoi.",
    structure: "ABABBCBC rhyme pattern",
    famousPoets: ["François Villon"],
    example: "Mais où sont les neiges d'antan?",
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "rondeau",
    name: "Rondeau",
    region: "France",
    origin: "13th Century France",
    language: "French",
    icon: FaSun,
    description: "Poem using repeated refrain.",
    structure: "15 lines over 3 stanzas",
    famousPoets: ["Clément Marot"],
    example: "Ma foi, c'est fait de moi",
    color: "from-yellow-500 to-amber-500",
  },
  {
    id: "villanelle",
    name: "Villanelle",
    region: "France",
    origin: "16th Century France",
    language: "French",
    icon: FaStar,
    description:
      "Nineteen-line poem with repeating refrains.",
    structure: "5 tercets + 1 quatrain",
    famousPoets: ["Dylan Thomas"],
    example: "Do not go gentle into that good night",
    color: "from-purple-500 to-pink-500",
  },

  // 🏴 English Forms
  {
    id: "sonnet",
    name: "Sonnets",
    region: "England / Italy",
    origin: "13th Century Italy",
    popularizedIn: "England",
    language: "English, Italian",
    icon: FaHeart,
    description:
      "A 14-line poem usually about love.",
    structure:
      "ABAB CDCD EFEF GG (Shakespearean)",
    famousPoets: [
      "William Shakespeare",
      "John Milton",
      "Elizabeth Barrett Browning",
    ],
    example: "Shall I compare thee to a summer's day?",
    color: "from-rose-500 to-red-500",
  },
  {
    id: "blank_verse",
    name: "Blank Verse",
    region: "England",
    origin: "16th Century England",
    language: "English",
    icon: FaBook,
    description: "Unrhymed iambic pentameter.",
    structure: "No rhyme",
    famousPoets: ["Shakespeare", "Milton"],
    example: "To be, or not to be",
    color: "from-gray-500 to-slate-500",
  },
  {
    id: "heroic_couplet",
    name: "Heroic Couplet",
    region: "England",
    origin: "14th Century England",
    language: "English",
    icon: FaFire,
    description:
      "Rhyming pairs of iambic pentameter.",
    structure: "AA BB CC",
    famousPoets: ["Alexander Pope"],
    example: "True wit is nature to advantage dressed",
    color: "from-amber-500 to-yellow-500",
  },

  // 🇯🇵 Japanese
  {
    id: "haiku",
    name: "Haiku",
    region: "Japan",
    origin: "17th Century Japan",
    language: "Japanese",
    icon: FaLeaf,
    description:
      "Short poem capturing a moment in nature.",
    structure: "5-7-5 syllables",
    famousPoets: ["Matsuo Bashō"],
    example:
      "An old silent pond / A frog jumps into the pond",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "tanka",
    name: "Tanka",
    region: "Japan",
    origin: "7th Century Japan",
    language: "Japanese",
    icon: FaMoon,
    description:
      "Longer form of haiku expressing emotion.",
    structure: "5-7-5-7-7",
    famousPoets: ["Ono no Komachi"],
    example: "When I look carefully I see the nazuna blooming",
    color: "from-blue-500 to-indigo-500",
  },

  // Other
  {
    id: "sestina",
    name: "Sestina",
    region: "France / Italy",
    origin: "12th Century France",
    language: "French, Italian, English",
    icon: FaFire,
    description:
      "Complex poem with repeating end words.",
    structure: "6 stanzas + envoi",
    famousPoets: ["Dante", "Ezra Pound"],
    example: "Sestina: Altaforte",
    color: "from-red-500 to-rose-500",
  },
];

/**
 * Add route automatically
 */
export const poemTypes = basePoemTypes.map((poem) => ({
  ...poem,
  path: `/poems-types/${poem.id}`,
}));

/**
 * Regions
 */
export const regions = [
  {
    id: "south_asia",
    name: "South Asia",
    flag: "🌏",
    count: poemTypes.filter(
      (p) =>
        p.region.includes("South Asia") ||
        p.region.includes("India")
    ).length,
  },
  {
    id: "france",
    name: "France",
    flag: "🇫🇷",
    count: poemTypes.filter((p) =>
      p.region.includes("France")
    ).length,
  },
  {
    id: "england",
    name: "England",
    flag: "🏴",
    count: poemTypes.filter((p) =>
      p.region.includes("England")
    ).length,
  },
  {
    id: "japan",
    name: "Japan",
    flag: "🇯🇵",
    count: poemTypes.filter((p) =>
      p.region.includes("Japan")
    ).length,
  },
];

export default poemTypes;
