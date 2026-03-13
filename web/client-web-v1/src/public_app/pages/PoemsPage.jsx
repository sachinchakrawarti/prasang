import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFeather, FaHeart, FaSearch, FaFilter, FaSort } from "react-icons/fa";

const PoemsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "All",
    "Love",
    "Nature",
    "Sad",
    "Inspirational",
    "Spiritual",
  ];

  const poems = [
    {
      id: 1,
      title: "The Silent Echo",
      poet: "Amara Khan",
      category: "Love",
      likes: 234,
      excerpt: "In whispers of the wind, I hear your name...",
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "Midnight Thoughts",
      poet: "Ravi Sharma",
      category: "Sad",
      likes: 189,
      excerpt: "When darkness falls, my thoughts take flight...",
      date: "2024-01-20",
    },
    {
      id: 3,
      title: "Spring Morning",
      poet: "Priya Patel",
      category: "Nature",
      likes: 312,
      excerpt: "Dew drops on petals, a new day begins...",
      date: "2024-01-25",
    },
    {
      id: 4,
      title: "Rising Sun",
      poet: "Arjun Mehta",
      category: "Inspirational",
      likes: 156,
      excerpt: "Each dawn brings hope anew...",
      date: "2024-02-01",
    },
    {
      id: 5,
      title: "Ocean Deep",
      poet: "Neha Singh",
      category: "Love",
      likes: 278,
      excerpt: "Your love runs deeper than the sea...",
      date: "2024-02-05",
    },
    {
      id: 6,
      title: "Mountain High",
      poet: "Vikram Rathore",
      category: "Nature",
      likes: 145,
      excerpt: "Peaks that touch the sky...",
      date: "2024-02-10",
    },
    {
      id: 7,
      title: "Divine Light",
      poet: "Anita Desai",
      category: "Spiritual",
      likes: 201,
      excerpt: "In silence, I find you...",
      date: "2024-02-15",
    },
    {
      id: 8,
      title: "Broken Dreams",
      poet: "Karan Malhotra",
      category: "Sad",
      likes: 167,
      excerpt: "Shattered pieces on the floor...",
      date: "2024-02-20",
    },
    {
      id: 9,
      title: "New Beginning",
      poet: "Simran Kaur",
      category: "Inspirational",
      likes: 223,
      excerpt: "Every end is a start...",
      date: "2024-02-25",
    },
  ];

  const filteredPoems = poems.filter((poem) => {
    const matchesSearch =
      poem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      poem.poet.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      poem.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Poems</h1>
        <p className="text-gray-600">
          Discover beautiful poetry from talented writers
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search poems or poets..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2">
            <FaFilter className="text-gray-400 self-center" />
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              {categories.slice(1).map((cat) => (
                <option key={cat} value={cat.toLowerCase()}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div className="flex gap-2">
            <FaSort className="text-gray-400 self-center" />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200">
              <option>Latest</option>
              <option>Most Liked</option>
              <option>Most Read</option>
            </select>
          </div>
        </div>

        {/* Category Chips */}
        <div className="flex flex-wrap gap-2 mt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setSelectedCategory(cat === "All" ? "all" : cat.toLowerCase())
              }
              className={`px-3 py-1 rounded-full text-sm transition ${
                (cat === "All" && selectedCategory === "all") ||
                selectedCategory === cat.toLowerCase()
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Poems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPoems.map((poem) => (
          <div
            key={poem.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition group"
          >
            <div className="flex items-center gap-2 mb-3">
              <FaFeather className="text-amber-500" />
              <h3 className="font-semibold text-lg group-hover:text-indigo-600 transition">
                {poem.title}
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-2">By {poem.poet}</p>
            <div className="mb-3">
              <span className="inline-block px-2 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-full">
                {poem.category}
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-4 italic">
              "{poem.excerpt}"
            </p>
            <div className="flex items-center justify-between">
              <span className="text-rose-500 flex items-center gap-1">
                <FaHeart /> {poem.likes}
              </span>
              <Link
                to={`/poem/${poem.id}`}
                className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
              >
                Read Full Poem →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredPoems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No poems found matching your search.
          </p>
        </div>
      )}
    </div>
  );
};

export default PoemsPage;
