// src/public_app/features/prose/Prose.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBook,
  FaUser,
  FaGlobe,
  FaLanguage,
  FaSearch,
  FaFilter,
  FaStar,
  FaHeart,
  FaEye,
  FaComment,
  FaClock,
  FaQuoteLeft,
  FaBookmark,
  FaTimes,
  FaFeather,
  FaScroll,
  FaHistory,
  FaTheaterMasks,
} from "react-icons/fa";

// Prose Data
const proseData = [
  // Novels
  {
    id: 1,
    title: "Midnight's Children",
    author: "Salman Rushdie",
    authorId: 101,
    country: "India",
    language: "English",
    genre: "Novel",
    subGenre: "Magical Realism",
    year: "1981",
    era: "Modern",
    description:
      "A postcolonial novel that explores India's transition from British colonial rule to independence through the life of Saleem Sinai, born at the exact moment of India's independence.",
    excerpt:
      "I was born in the city of Bombay... on the stroke of midnight, August 15, 1947.",
    coverImage:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400",
    likes: 3456,
    reads: 12345,
    comments: 234,
    tags: ["magical realism", "postcolonial", "india", "historical"],
  },
  {
    id: 2,
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    authorId: 102,
    country: "Colombia",
    language: "Spanish",
    genre: "Novel",
    subGenre: "Magical Realism",
    year: "1967",
    era: "Modern",
    description:
      "The multi-generational story of the Buendía family in the fictional town of Macondo, blending magical elements with historical events.",
    excerpt:
      "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
    coverImage:
      "https://images.unsplash.com/photo-1497633762265-9d4b9a7d9a8b?w=400",
    likes: 5678,
    reads: 23456,
    comments: 456,
    tags: ["magical realism", "family saga", "colombia", "classic"],
  },
  {
    id: 3,
    title: "The Remains of the Day",
    author: "Kazuo Ishiguro",
    authorId: 103,
    country: "Japan/UK",
    language: "English",
    genre: "Novel",
    subGenre: "Historical Fiction",
    year: "1989",
    era: "Modern",
    description:
      "The story of Stevens, an English butler, reflecting on his life and service in the years between World War I and World War II.",
    excerpt:
      "It seems increasingly likely that I really will undertake the expedition that has been preoccupying my imagination now for some days.",
    coverImage:
      "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=400",
    likes: 2890,
    reads: 9876,
    comments: 167,
    tags: ["historical", "british", "reflective", "booker prize"],
  },

  // Short Stories
  {
    id: 4,
    title: "The Lottery",
    author: "Shirley Jackson",
    authorId: 104,
    country: "USA",
    language: "English",
    genre: "Short Story",
    subGenre: "Horror",
    year: "1948",
    era: "Mid-century",
    description:
      "A chilling tale of a small town's annual ritual that takes a horrifying turn.",
    excerpt:
      "The morning of June 27th was clear and sunny, with the fresh warmth of a full-summer day.",
    coverImage:
      "https://images.unsplash.com/photo-1513001900722-370f803f498d?w=400",
    likes: 2345,
    reads: 15678,
    comments: 189,
    tags: ["horror", "american", "controversial", "classic"],
  },
  {
    id: 5,
    title: "The Dead",
    author: "James Joyce",
    authorId: 105,
    country: "Ireland",
    language: "English",
    genre: "Short Story",
    subGenre: "Literary Fiction",
    year: "1914",
    era: "Modernist",
    description:
      "The final story in Dubliners, exploring themes of mortality, love, and Irish identity.",
    excerpt: "Lily, the caretaker's daughter, was literally run off her feet.",
    coverImage:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400",
    likes: 1987,
    reads: 8765,
    comments: 145,
    tags: ["irish", "modernist", "literary", "dublin"],
  },

  // Essays
  {
    id: 6,
    title: "Self-Reliance",
    author: "Ralph Waldo Emerson",
    authorId: 106,
    country: "USA",
    language: "English",
    genre: "Essay",
    subGenre: "Philosophical",
    year: "1841",
    era: "Transcendentalist",
    description:
      "A foundational text of American transcendentalism advocating for individualism and self-trust.",
    excerpt:
      "Ne te quaesiveris extra. 'Do not seek yourself outside yourself.'",
    coverImage:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400",
    likes: 1567,
    reads: 6543,
    comments: 98,
    tags: ["philosophy", "american", "transcendentalism", "individualism"],
  },
  {
    id: 7,
    title: "Notes of a Native Son",
    author: "James Baldwin",
    authorId: 107,
    country: "USA",
    language: "English",
    genre: "Essay",
    subGenre: "Memoir/Cultural Criticism",
    year: "1955",
    era: "Modern",
    description:
      "A collection of essays exploring race, identity, and society in mid-century America.",
    excerpt:
      "I was icily determined—more determined, really, than I then knew—never to make my peace with the ghetto.",
    coverImage:
      "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=400",
    likes: 2456,
    reads: 8765,
    comments: 167,
    tags: ["race", "american", "memoir", "social criticism"],
  },

  // Drama/Plays
  {
    id: 8,
    title: "Hamlet",
    author: "William Shakespeare",
    authorId: 1,
    country: "England",
    language: "English",
    genre: "Drama",
    subGenre: "Tragedy",
    year: "1600",
    era: "Elizabethan",
    description:
      "The tragedy of Prince Hamlet's revenge for his father's murder.",
    excerpt: "To be, or not to be, that is the question.",
    coverImage:
      "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=400",
    likes: 9876,
    reads: 34567,
    comments: 678,
    tags: ["shakespeare", "tragedy", "classic", "drama"],
  },
  {
    id: 9,
    title: "A Doll's House",
    author: "Henrik Ibsen",
    authorId: 108,
    country: "Norway",
    language: "Norwegian",
    genre: "Drama",
    subGenre: "Realism",
    year: "1879",
    era: "Victorian",
    description:
      "A revolutionary play about Nora's awakening to her oppressed position in marriage.",
    excerpt:
      "I believe that before all else I am a human being, just as you are.",
    coverImage:
      "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?w=400",
    likes: 3456,
    reads: 12345,
    comments: 234,
    tags: ["feminism", "scandinavian", "realism", "classic"],
  },

  // Biography/Memoir
  {
    id: 10,
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    authorId: 109,
    country: "Netherlands",
    language: "Dutch",
    genre: "Memoir",
    subGenre: "Diary",
    year: "1947",
    era: "WWII",
    description:
      "The diary of Anne Frank during her time hiding from the Nazis in Amsterdam.",
    excerpt:
      "I hope I will be able to confide everything to you, as I have never been able to confide in anyone.",
    coverImage:
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400",
    likes: 5678,
    reads: 23456,
    comments: 345,
    tags: ["holocaust", "diary", "history", "inspiring"],
  },
];

// Genres for filtering
const genres = [
  { id: "all", name: "All Prose" },
  { id: "novel", name: "Novels" },
  { id: "short-story", name: "Short Stories" },
  { id: "essay", name: "Essays" },
  { id: "drama", name: "Drama/Plays" },
  { id: "memoir", name: "Memoirs" },
  { id: "biography", name: "Biographies" },
];

const Prose = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [selectedEra, setSelectedEra] = useState("all");
  const [savedItems, setSavedItems] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // Get unique languages
  const languages = ["all", ...new Set(proseData.map((item) => item.language))];

  // Get unique eras
  const eras = ["all", ...new Set(proseData.map((item) => item.era))];

  // Filter prose items
  const filteredProse = proseData.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    const matchesGenre =
      selectedGenre === "all" ||
      item.genre.toLowerCase().includes(selectedGenre.toLowerCase()) ||
      item.subGenre?.toLowerCase().includes(selectedGenre.toLowerCase());

    const matchesLanguage =
      selectedLanguage === "all" || item.language === selectedLanguage;

    const matchesEra = selectedEra === "all" || item.era === selectedEra;

    return matchesSearch && matchesGenre && matchesLanguage && matchesEra;
  });

  const toggleSave = (id) => {
    setSavedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Prose Collection
          </span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore novels, short stories, essays, and plays from around the world
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search by title, author, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Genre Filter */}
          <div className="relative min-w-[180px]">
            <FaBook className="absolute left-3 top-3 text-gray-400" />
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 appearance-none bg-white"
            >
              {genres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              ))}
            </select>
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

          {/* Era Filter */}
          <div className="relative min-w-[180px]">
            <FaHistory className="absolute left-3 top-3 text-gray-400" />
            <select
              value={selectedEra}
              onChange={(e) => setSelectedEra(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 appearance-none bg-white"
            >
              {eras.map((era) => (
                <option key={era} value={era}>
                  {era === "all" ? "All Eras" : era}
                </option>
              ))}
            </select>
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-600 rounded-lg hover:bg-amber-100 transition"
          >
            <FaFilter /> {showFilters ? "Hide" : "Show"} Filters
          </button>
        </div>

        {/* Active Filters */}
        {(selectedGenre !== "all" ||
          selectedLanguage !== "all" ||
          selectedEra !== "all") && (
          <div className="flex items-center gap-2 mt-4 flex-wrap">
            <span className="text-sm text-gray-500">Active filters:</span>
            {selectedGenre !== "all" && (
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm flex items-center gap-1">
                <FaBook className="text-xs" />{" "}
                {genres.find((g) => g.id === selectedGenre)?.name}
                <button onClick={() => setSelectedGenre("all")}>
                  <FaTimes className="text-xs hover:text-amber-900" />
                </button>
              </span>
            )}
            {selectedLanguage !== "all" && (
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm flex items-center gap-1">
                <FaLanguage className="text-xs" /> {selectedLanguage}
                <button onClick={() => setSelectedLanguage("all")}>
                  <FaTimes className="text-xs hover:text-amber-900" />
                </button>
              </span>
            )}
            {selectedEra !== "all" && (
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm flex items-center gap-1">
                <FaHistory className="text-xs" /> {selectedEra}
                <button onClick={() => setSelectedEra("all")}>
                  <FaTimes className="text-xs hover:text-amber-900" />
                </button>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="mb-6 flex justify-between items-center">
        <p className="text-sm text-gray-500">
          Showing {filteredProse.length} of {proseData.length} works
        </p>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm bg-amber-50 text-amber-600 rounded-full hover:bg-amber-100 transition">
            Latest
          </button>
          <button className="px-3 py-1 text-sm bg-amber-50 text-amber-600 rounded-full hover:bg-amber-100 transition">
            Popular
          </button>
        </div>
      </div>

      {/* Prose Grid */}
      {filteredProse.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-2xl">
          <FaScroll className="text-5xl text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No works found
          </h3>
          <p className="text-gray-500">Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProse.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
            >
              {/* Cover Image */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={item.coverImage}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 flex gap-2">
                  <button
                    onClick={() => toggleSave(item.id)}
                    className={`p-2 rounded-full transition ${
                      savedItems.includes(item.id)
                        ? "bg-amber-500 text-white"
                        : "bg-white/80 text-gray-600 hover:bg-white"
                    }`}
                  >
                    <FaBookmark size={14} />
                  </button>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="px-3 py-1 bg-amber-600 text-white text-xs rounded-full">
                    {item.genre}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title and Author */}
                <div className="mb-3">
                  <h2 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-amber-600 transition">
                    {item.title}
                  </h2>
                  <Link
                    to={`/author/${item.authorId}`}
                    className="flex items-center gap-1 text-amber-600 text-sm hover:underline"
                  >
                    <FaUser size={12} /> {item.author}
                  </Link>
                </div>

                {/* Meta Info */}
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <FaGlobe className="text-amber-500" /> {item.country}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <FaLanguage className="text-amber-500" /> {item.language}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <FaClock className="text-amber-500" /> {item.year}
                  </span>
                </div>

                {/* Subgenre/Tags */}
                <div className="mb-3">
                  <span className="px-2 py-1 bg-amber-50 text-amber-700 rounded text-xs">
                    {item.subGenre}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Excerpt */}
                <div className="bg-amber-50 rounded-lg p-3 mb-4">
                  <FaQuoteLeft className="text-amber-300 text-xs mb-1" />
                  <p className="text-xs text-gray-600 italic line-clamp-2">
                    "{item.excerpt}"
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs hover:bg-amber-100 hover:text-amber-700 transition cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-400 rounded text-xs">
                      +{item.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="flex items-center gap-1 text-rose-500">
                      <FaHeart /> {item.likes}
                    </span>
                    <span className="flex items-center gap-1 text-blue-500">
                      <FaEye /> {item.reads}
                    </span>
                    <span className="flex items-center gap-1 text-green-500">
                      <FaComment /> {item.comments}
                    </span>
                  </div>
                  <Link
                    to={`/prose/${item.id}`}
                    className="text-amber-600 hover:text-amber-700 text-sm font-medium flex items-center gap-1"
                  >
                    Read More <span className="text-lg">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Genres Section */}
      <div className="mt-16 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Explore by Genre
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {genres.slice(1).map((genre) => {
            const count = proseData.filter(
              (item) =>
                item.genre.toLowerCase() === genre.name.toLowerCase() ||
                item.subGenre?.toLowerCase().includes(genre.name.toLowerCase()),
            ).length;

            return (
              <button
                key={genre.id}
                onClick={() => setSelectedGenre(genre.id)}
                className="group p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition hover:-translate-y-1 text-center"
              >
                {genre.id === "novel" && (
                  <FaBook className="text-2xl text-amber-500 mx-auto mb-2" />
                )}
                {genre.id === "short-story" && (
                  <FaScroll className="text-2xl text-amber-500 mx-auto mb-2" />
                )}
                {genre.id === "essay" && (
                  <FaFeather className="text-2xl text-amber-500 mx-auto mb-2" />
                )}
                {genre.id === "drama" && (
                  <FaTheaterMasks className="text-2xl text-amber-500 mx-auto mb-2" />
                )}
                {genre.id === "memoir" && (
                  <FaHistory className="text-2xl text-amber-500 mx-auto mb-2" />
                )}
                <h3 className="font-semibold text-gray-800 group-hover:text-amber-600 transition">
                  {genre.name}
                </h3>
                <p className="text-sm text-gray-500">{count} works</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Author */}
      <div className="mt-8 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl p-8 text-white">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
            <FaUser className="text-4xl" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Featured Author</h3>
            <p className="text-amber-100 mb-3">Salman Rushdie</p>
            <p className="text-sm text-amber-100 max-w-2xl">
              Winner of the Booker Prize and author of Midnight's Children, one
              of the most celebrated novels of the 20th century.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prose;
