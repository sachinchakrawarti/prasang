// src/public_app/features/poems/monostich/Monostich.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFeather,
  FaStar,
  FaSearch,
  FaFilter,
  FaGlobe,
  FaLanguage,
  FaTimes,
  FaUser,
  FaQuoteLeft,
  FaQuoteRight,
  FaRobot,
  FaChevronDown,
  FaChevronUp,
  FaBookmark,
  FaCopy,
} from "react-icons/fa";

// Monostich data
const monostichData = [
  // English Monostich
  {
    id: "english-1",
    text: "After great pain, a formal feeling comes –",
    poet: "Emily Dickinson",
    poetId: "emily-dickinson",
    country: "USA",
    era: "19th Century",
    year: "1862",
    language: "English",
    themes: ["Pain", "Emotion", "Formality"],
    tags: ["american", "classic", "emotion"],
    romanization: null,
    translations: {
      hindi: "बड़े दर्द के बाद, एक औपचारिक सी भावना आती है",
      urdu: "شدید درد کے بعد، ایک رسمی سی کیفیت طاری ہوتی ہے",
      french: "Après une grande douleur, un sentiment formel vient",
      arabic: "بعد الألم الكبير، يأتي شعور رسمي",
      persian: "پس از درد بزرگ، حسی رسمی فرا می‌رسد",
    },
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "english-2",
    text: "I am the master of my fate, I am the captain of my soul.",
    poet: "William Ernest Henley",
    poetId: "william-henley",
    country: "England",
    era: "19th Century",
    year: "1875",
    language: "English",
    themes: ["Courage", "Determination", "Soul"],
    tags: ["victorian", "inspirational", "famous"],
    romanization: null,
    translations: {
      hindi: "मैं अपनी किस्मत का मालिक हूं, मैं अपनी आत्मा का कप्तान हूं",
      urdu: "میں اپنی قسمت کا مالک ہوں، میں اپنی روح کا کپتان ہوں",
      french:
        "Je suis le maître de mon destin, je suis le capitaine de mon âme",
      arabic: "أنا سيد مصيري، أنا قائد روحي",
      persian: "من ارباب سرنوشت خویشم، من ناخدای جان خویشم",
    },
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "english-3",
    text: "The woods are lovely, dark and deep.",
    poet: "Robert Frost",
    poetId: "robert-frost",
    country: "USA",
    era: "20th Century",
    year: "1923",
    language: "English",
    themes: ["Nature", "Beauty", "Stillness"],
    tags: ["american", "nature", "famous"],
    romanization: null,
    translations: {
      hindi: "जंगल प्यारे, अंधेरे और गहरे हैं",
      urdu: "جنگل خوبصورت، تاریک اور گہرے ہیں",
      french: "Les bois sont beaux, sombres et profonds",
      arabic: "الغابات جميلة، مظلمة وعميقة",
      persian: "جنگل‌ها دوست‌داشتنی، تاریک و ژرفند",
    },
    color: "from-amber-500 to-orange-500",
  },

  // Hindi Monostich
  {
    id: "hindi-1",
    text: "कोई दिया जले तो रोशनी भी होगी।",
    poet: "Nida Fazli",
    poetId: "nida-fazli",
    country: "India",
    era: "20th Century",
    year: "1980",
    language: "Hindi",
    themes: ["Light", "Hope", "Existence"],
    tags: ["hindi", "modern", "philosophical"],
    romanization: "Koi diya jale to roshni bhi hogi",
    translations: {
      english: "If a lamp is lit, there will be light too.",
      urdu: "کوئی دیا جلے تو روشنی بھی ہوگی",
      french: "Si une lampe est allumée, il y aura aussi de la lumière",
      arabic: "إذا أضيء مصباح، سيكون هناك ضوء أيضًا",
      persian: "اگر چراغی افروخته شود، روشنی نیز خواهد بود",
    },
    color: "from-red-500 to-rose-500",
  },
  {
    id: "hindi-2",
    text: "हर एक घर में दिया जलता नहीं कोई।",
    poet: "Ahmad Faraz",
    poetId: "ahmad-faraz",
    country: "India",
    era: "20th Century",
    year: "1985",
    language: "Hindi",
    themes: ["Light", "Home", "Absence"],
    tags: ["hindi", "modern", "poetic"],
    romanization: "Har ek ghar mein diya jalta nahi koi",
    translations: {
      english: "Not every house has a lamp burning.",
      urdu: "ہر ایک گھر میں دیا جلتا نہیں کوئی",
      french: "Ce n'est pas dans chaque maison qu'une lampe brûle",
      arabic: "ليس في كل بيت يضيء مصباح",
      persian: "در هر خانه‌ای چراغی نمی‌سوزد",
    },
    color: "from-purple-500 to-pink-500",
  },

  // Urdu Monostich
  {
    id: "urdu-1",
    text: "اب کے ہم بچھڑے تو شاید کبھی خوابوں میں ملیں",
    poet: "Joun Elia",
    poetId: "joun-elia",
    country: "Pakistan",
    era: "20th Century",
    year: "1990",
    language: "Urdu",
    themes: ["Separation", "Dreams", "Longing"],
    tags: ["urdu", "modern", "sad"],
    romanization: "Ab ke hum bichhde to shayad kabhi khwabon mein milein",
    translations: {
      english: "If we part now, perhaps we'll meet in dreams someday",
      hindi: "अब के हम बिछड़े तो शायद कभी ख्वाबों में मिलें",
      french:
        "Si nous nous séparons maintenant, peut-être nous retrouverons-nous un jour dans nos rêves",
      arabic: "إذا افترقنا الآن، ربما نلتقي يومًا ما في الأحلام",
      persian: "اگر اکنون جدا شویم، شاید روزی در خواب‌ها به هم رسیم",
    },
    color: "from-cyan-500 to-teal-500",
  },
  {
    id: "urdu-2",
    text: "ہم سے پہلی سی محبت میرے محبوب نہ مانگ",
    poet: "Faiz Ahmed Faiz",
    poetId: "faiz-ahmed-faiz",
    country: "Pakistan",
    era: "20th Century",
    year: "1950",
    language: "Urdu",
    themes: ["Love", "Change", "Memory"],
    tags: ["urdu", "classic", "love"],
    romanization: "Hum se pehli si mohabbat mere mehboob na maang",
    translations: {
      english: "Do not ask me for that same love again, my beloved",
      hindi: "हम से पहली सी मोहब्बत मेरे महबूब न माँग",
      french: "Ne me demande pas cet amour d'antan, mon aimé",
      arabic: "لا تطلب مني ذلك الحب القديم مرة أخرى، يا حبيبي",
      persian: "از من آن عشق نخستین مخواه ای معشوق من",
    },
    color: "from-indigo-500 to-purple-500",
  },

  // Arabic Monostich
  {
    id: "arabic-1",
    text: "وما نيل المطالب بالتمني",
    poet: "Al-Mutanabbi",
    poetId: "al-mutanabbi",
    country: "Iraq",
    era: "10th Century",
    year: "950",
    language: "Arabic",
    themes: ["Ambition", "Action", "Wisdom"],
    tags: ["arabic", "classical", "wisdom"],
    romanization: "Wa ma nail al-matalib bil-tamanni",
    translations: {
      english: "Goals are not achieved by mere wishes",
      hindi: "मंज़िलें सिर्फ ख्वाहिशों से नहीं मिलतीं",
      urdu: "منزلیں محض خواہشوں سے نہیں ملتیں",
      french: "Les objectifs ne s'atteignent pas par de simples souhaits",
      persian: "مقاصد با آرزوهای صرف به دست نمی‌آیند",
    },
    color: "from-emerald-500 to-green-500",
  },
  {
    id: "arabic-2",
    text: "إذا الشعب يوما أراد الحياة",
    poet: "Abul-Qasim El Chebbi",
    poetId: "el-chebbi",
    country: "Tunisia",
    era: "20th Century",
    year: "1930",
    language: "Arabic",
    themes: ["Freedom", "Life", "Revolution"],
    tags: ["arabic", "modern", "freedom"],
    romanization: "Idha al-sha'b yawman arada al-hayat",
    translations: {
      english: "If the people want life someday",
      hindi: "अगर एक दिन लोग जीना चाहें",
      urdu: "اگر ایک دن لوگ جینا چاہیں",
      french: "Si le peuple veut la vie un jour",
      persian: "اگر روزی مردم زندگی خواهند",
    },
    color: "from-orange-500 to-red-500",
  },

  // Persian Monostich
  {
    id: "persian-1",
    text: "عمریست تا به گوش دلم می‌رسد این راز",
    poet: "Hafez",
    poetId: "hafez",
    country: "Iran",
    era: "14th Century",
    year: "1370",
    language: "Persian",
    themes: ["Mystery", "Heart", "Time"],
    tags: ["persian", "classical", "mystical"],
    romanization: "Omrist ta be gush-e delam mi-rasad in raz",
    translations: {
      english: "For an age, this secret reaches my heart's ear",
      hindi: "सदियों से यह रहस्य मेरे दिल के कान तक पहुँचता है",
      urdu: "عرصے سے یہ راز میرے دل کے کان تک پہنچتا ہے",
      french: "Depuis un âge, ce secret parvient à l'oreille de mon cœur",
      arabic: "منذ عهد، يصل هذا السر إلى أذن قلبي",
    },
    color: "from-pink-500 to-rose-500",
  },
  {
    id: "persian-2",
    text: "تا چند اسیر رنگ و بویِ دامِ جهان باشیم",
    poet: "Rumi",
    poetId: "rumi",
    country: "Persia",
    era: "13th Century",
    year: "1260",
    language: "Persian",
    themes: ["Freedom", "World", "Spirituality"],
    tags: ["persian", "sufi", "classical"],
    romanization: "Ta chand asir-e rang o buy-e dam-e jahan bashim",
    translations: {
      english:
        "How long will we be captive to the color and scent of the world's snare?",
      hindi: "कब तक हम दुनिया के जाल के रंग और खुशबू के कैदी रहेंगे?",
      urdu: "کب تک ہم دنیا کے جال کے رنگ اور خوشبو کے قیدی رہیں گے؟",
      french:
        "Combien de temps serons-nous captifs de la couleur et du parfum du piège du monde?",
      arabic: "كم من الوقت سنبقى أسرى لون ورائحة فخ العالم؟",
    },
    color: "from-violet-500 to-purple-500",
  },

  // French Monostich
  {
    id: "french-1",
    text: "Le temps n'efface rien, il ajoute seulement du silence.",
    poet: "Christian Bobin",
    poetId: "christian-bobin",
    country: "France",
    era: "20th Century",
    year: "1990",
    language: "French",
    themes: ["Time", "Memory", "Silence"],
    tags: ["french", "modern", "philosophical"],
    romanization: null,
    translations: {
      english: "Time erases nothing, it only adds silence.",
      hindi: "समय कुछ नहीं मिटाता, वह केवल खामोशी बढ़ाता है",
      urdu: "وقت کچھ نہیں مٹاتا، وہ صرف خاموشی بڑھاتا ہے",
      arabic: "الوقت لا يمحو شيئًا، بل يضيف صمتًا فقط",
      persian: "زمان هیچ چیز را محو نمی‌کند، تنها خاموشی می‌افزاید",
    },
    color: "from-sky-500 to-blue-500",
  },
  {
    id: "french-2",
    text: "L'enfer, c'est les autres.",
    poet: "Jean-Paul Sartre",
    poetId: "sartre",
    country: "France",
    era: "20th Century",
    year: "1944",
    language: "French",
    themes: ["Existence", "Others", "Philosophy"],
    tags: ["french", "existentialist", "famous"],
    romanization: null,
    translations: {
      english: "Hell is other people.",
      hindi: "नरक, दूसरे लोग हैं।",
      urdu: "جہنم، دوسرے لوگ ہیں۔",
      arabic: "الجحيم هو الآخرون.",
      persian: "جهنم، دیگران هستند.",
    },
    color: "from-gray-500 to-slate-500",
  },
];

// Helper function to get monostich by ID
export const getMonostichById = (id) => {
  return monostichData.find((m) => m.id === id);
};

// Helper function to get monostich by language
export const getMonostichByLanguage = (language) => {
  return monostichData.filter(
    (m) => m.language.toLowerCase() === language.toLowerCase(),
  );
};

// Helper function to get monostich by poet
export const getMonostichByPoet = (poetName) => {
  return monostichData.filter((m) =>
    m.poet.toLowerCase().includes(poetName.toLowerCase()),
  );
};

// Monostich Card Component
export const MonostichCard = ({ monostich, onClick }) => {
  const [showRomanization, setShowRomanization] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [saved, setSaved] = useState(false);

  const isRTL =
    monostich.language === "urdu" ||
    monostich.language === "arabic" ||
    monostich.language === "persian";

  return (
    <div
      onClick={onClick}
      className={`group bg-gradient-to-br ${monostich.color} rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer relative overflow-hidden`}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <FaQuoteLeft className="absolute top-3 left-3 text-white text-3xl" />
        <FaQuoteRight className="absolute bottom-3 right-3 text-white text-3xl" />
      </div>

      <div className="relative">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-bold text-white text-lg">{monostich.poet}</h3>
            <p className="text-white/80 text-xs">
              {monostich.country} · {monostich.era}
            </p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSaved(!saved);
            }}
            className={`p-2 rounded-full transition ${
              saved
                ? "bg-amber-500 text-white"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            <FaBookmark size={14} />
          </button>
        </div>

        {/* Main text */}
        <div className={`mb-4 ${isRTL ? "text-right" : "text-left"}`}>
          <p className="text-xl text-white font-serif leading-relaxed">
            {monostich.text}
          </p>
        </div>

        {/* Romanization toggle */}
        {monostich.romanization && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowRomanization(!showRomanization);
            }}
            className="flex items-center gap-1 text-xs text-white/80 hover:text-white mb-2"
          >
            <FaLanguage size={12} />
            {showRomanization ? "Hide" : "Show"} Romanization
            {showRomanization ? (
              <FaChevronUp size={10} />
            ) : (
              <FaChevronDown size={10} />
            )}
          </button>
        )}

        {/* Romanization text */}
        {showRomanization && monostich.romanization && (
          <div className="mb-3 text-xs text-white/90 italic border-l-2 border-white/50 pl-2">
            {monostich.romanization}
          </div>
        )}

        {/* Translation toggle */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowTranslation(!showTranslation);
          }}
          className="flex items-center gap-1 text-xs text-white/80 hover:text-white mb-2"
        >
          <FaRobot size={12} />
          {showTranslation ? "Hide" : "Show"} English Translation
          {showTranslation ? (
            <FaChevronUp size={10} />
          ) : (
            <FaChevronDown size={10} />
          )}
        </button>

        {/* Translation text */}
        {showTranslation && monostich.translations?.english && (
          <div className="mb-3 text-xs text-white/90 italic bg-white/10 p-2 rounded">
            "{monostich.translations.english}"
          </div>
        )}

        {/* Themes */}
        <div className="flex flex-wrap gap-1 mb-3">
          {monostich.themes.slice(0, 3).map((theme, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-0.5 bg-white/20 text-white rounded-full"
            >
              #{theme}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>{monostich.year}</span>
          <span>{monostich.language}</span>
        </div>
      </div>
    </div>
  );
};

// Main Monostich Component
const Monostich = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [selectedTheme, setSelectedTheme] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // Get unique languages and themes for filters
  const languages = ["all", ...new Set(monostichData.map((m) => m.language))];
  const themes = ["all", ...new Set(monostichData.flatMap((m) => m.themes))];

  // Filter monostich
  const filteredMonostich = monostichData.filter((item) => {
    const matchesSearch =
      item.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.poet.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.themes.some((t) =>
        t.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    const matchesLanguage =
      selectedLanguage === "all" || item.language === selectedLanguage;
    const matchesTheme =
      selectedTheme === "all" || item.themes.includes(selectedTheme);

    return matchesSearch && matchesLanguage && matchesTheme;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <FaFeather className="text-5xl text-amber-500 animate-float" />
            <FaStar className="text-yellow-400 absolute -top-2 -right-2 text-lg animate-pulse" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Monostich Poetry
          </span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Single-line poems that capture profound thoughts in a single breath
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search monostich by text, poet, or theme..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Language Filter */}
          <div className="relative min-w-[180px]">
            <FaLanguage className="absolute left-3 top-3 text-gray-400" />
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 appearance-none bg-white"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang === "all" ? "All Languages" : lang}
                </option>
              ))}
            </select>
          </div>

          {/* Theme Filter */}
          <div className="relative min-w-[180px]">
            <FaFilter className="absolute left-3 top-3 text-gray-400" />
            <select
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 appearance-none bg-white"
            >
              {themes.map((theme) => (
                <option key={theme} value={theme}>
                  {theme === "all" ? "All Themes" : theme}
                </option>
              ))}
            </select>
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center justify-center gap-2 px-4 py-2 bg-amber-50 text-amber-600 rounded-lg hover:bg-amber-100 transition"
          >
            <FaFilter /> {showFilters ? "Hide" : "Show"} Advanced
          </button>
        </div>

        {/* Active Filters */}
        {(selectedLanguage !== "all" ||
          selectedTheme !== "all" ||
          searchTerm) && (
          <div className="flex items-center gap-2 mt-4 flex-wrap">
            <span className="text-sm text-gray-500">Active filters:</span>
            {selectedLanguage !== "all" && (
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm flex items-center gap-1">
                <FaLanguage className="text-xs" /> {selectedLanguage}
                <button onClick={() => setSelectedLanguage("all")}>
                  <FaTimes className="text-xs hover:text-amber-900" />
                </button>
              </span>
            )}
            {selectedTheme !== "all" && (
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm flex items-center gap-1">
                <FaFilter className="text-xs" /> {selectedTheme}
                <button onClick={() => setSelectedTheme("all")}>
                  <FaTimes className="text-xs hover:text-amber-900" />
                </button>
              </span>
            )}
            {searchTerm && (
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm flex items-center gap-1">
                <FaSearch className="text-xs" /> "{searchTerm}"
                <button onClick={() => setSearchTerm("")}>
                  <FaTimes className="text-xs hover:text-amber-900" />
                </button>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-sm text-gray-500">
          Showing{" "}
          <span className="font-semibold text-amber-600">
            {filteredMonostich.length}
          </span>{" "}
          of {monostichData.length} monostich
        </p>
      </div>

      {/* Monostich Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMonostich.map((item) => (
          <MonostichCard
            key={item.id}
            monostich={item}
            onClick={() => {
              /* Navigate to detail page */
            }}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredMonostich.length === 0 && (
        <div className="text-center py-16 bg-gray-50 rounded-2xl">
          <FaFeather className="text-5xl text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No monostich found
          </h3>
          <p className="text-gray-500">Try adjusting your search or filters</p>
        </div>
      )}

      {/* Stats Section */}
      <div className="mt-16 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Monostich by Language
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {languages.slice(1).map((lang) => {
            const count = monostichData.filter(
              (m) => m.language === lang,
            ).length;
            return (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`group text-center p-4 rounded-xl transition-all ${
                  selectedLanguage === lang
                    ? "bg-amber-500 text-white shadow-lg"
                    : "bg-white hover:shadow-md"
                }`}
              >
                <div
                  className={`text-2xl mb-2 ${
                    selectedLanguage === lang ? "text-white" : "text-amber-500"
                  }`}
                >
                  {lang === "English" && "🇬🇧"}
                  {lang === "Hindi" && "🇮🇳"}
                  {lang === "Urdu" && "🇵🇰"}
                  {lang === "Arabic" && "🇸🇦"}
                  {lang === "Persian" && "🇮🇷"}
                  {lang === "French" && "🇫🇷"}
                </div>
                <div
                  className={`font-semibold ${
                    selectedLanguage === lang
                      ? "text-white"
                      : "text-gray-800 group-hover:text-amber-600"
                  }`}
                >
                  {lang}
                </div>
                <div
                  className={`text-sm ${
                    selectedLanguage === lang
                      ? "text-white/80"
                      : "text-gray-500"
                  }`}
                >
                  {count} monostich
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Monostich;
