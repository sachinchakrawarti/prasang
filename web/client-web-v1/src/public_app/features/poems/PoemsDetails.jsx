// src/public_app/features/poems/PoemsDetails.jsx
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaHeart,
  FaEye,
  FaComment,
  FaShare,
  FaBookmark,
  FaArrowLeft,
  FaUser,
  FaCalendarAlt,
  FaLanguage,
  FaTags,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";
import { useTheme } from "../../../theme";
import { poemsData } from "../../data/poems/poems_data";

const PoemsDetails = () => {
  const { id } = useParams();
  const [poem, setPoem] = useState(null);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [relatedPoems, setRelatedPoems] = useState([]);
  const { theme, themeName } = useTheme();

  useEffect(() => {
    const foundPoem = poemsData.find((p) => p.id === parseInt(id));
    setPoem(foundPoem);

    if (foundPoem) {
      // Find related poems by same poet or category
      const related = poemsData
        .filter(
          (p) =>
            p.id !== foundPoem.id &&
            (p.poetId === foundPoem.poetId ||
              p.category === foundPoem.category),
        )
        .slice(0, 3);
      setRelatedPoems(related);
    }
  }, [id]);

  // Theme-based helper functions
  const getHeaderGradient = () => {
    switch (themeName) {
      case "forest":
        return "from-green-500 to-emerald-500";
      case "lavender":
        return "from-purple-500 to-pink-500";
      case "rose":
        return "from-rose-500 to-pink-500";
      case "sepia":
        return "from-amber-600 to-yellow-600";
      case "dark":
        return "from-gray-700 to-gray-800";
      default:
        return "from-amber-500 to-yellow-500";
    }
  };

  const getCategoryBadgeClass = () => {
    switch (themeName) {
      case "forest":
        return "bg-green-100 text-green-700";
      case "lavender":
        return "bg-purple-100 text-purple-700";
      case "rose":
        return "bg-rose-100 text-rose-700";
      case "sepia":
        return "bg-amber-100 text-amber-700";
      case "dark":
        return "bg-gray-700 text-gray-200";
      default:
        return "bg-amber-100 text-amber-700";
    }
  };

  const getQuoteIconColor = () => {
    switch (themeName) {
      case "forest":
        return "text-green-200";
      case "lavender":
        return "text-purple-200";
      case "rose":
        return "text-rose-200";
      case "sepia":
        return "text-amber-300";
      case "dark":
        return "text-gray-600";
      default:
        return "text-amber-200";
    }
  };

  const getTagClass = () => {
    switch (themeName) {
      case "forest":
        return "bg-green-50 text-green-700 hover:bg-green-100 hover:text-green-800";
      case "lavender":
        return "bg-purple-50 text-purple-700 hover:bg-purple-100 hover:text-purple-800";
      case "rose":
        return "bg-rose-50 text-rose-700 hover:bg-rose-100 hover:text-rose-800";
      case "sepia":
        return "bg-amber-100 text-amber-700 hover:bg-amber-200 hover:text-amber-800";
      case "dark":
        return "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-gray-200";
      default:
        return "bg-gray-100 text-gray-600 hover:bg-amber-100 hover:text-amber-700";
    }
  };

  const getRelatedCardClass = () => {
    switch (themeName) {
      case "forest":
        return "group-hover:text-green-600";
      case "lavender":
        return "group-hover:text-purple-600";
      case "rose":
        return "group-hover:text-rose-600";
      case "sepia":
        return "group-hover:text-amber-700";
      case "dark":
        return "group-hover:text-gray-300";
      default:
        return "group-hover:text-amber-600";
    }
  };

  if (!poem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className={`text-2xl font-bold ${theme.text.primary} mb-2`}>
            Poem Not Found
          </h2>
          <p className={`${theme.text.secondary} mb-4`}>
            The poem you're looking for doesn't exist.
          </p>
          <Link to="/poems" className={theme.link.primary}>
            ← Back to Poems
          </Link>
        </div>
      </div>
    );
  }

  const headerGradient = getHeaderGradient();
  const categoryBadgeClass = getCategoryBadgeClass();
  const quoteIconColor = getQuoteIconColor();
  const tagClass = getTagClass();
  const relatedCardHoverClass = getRelatedCardClass();

  return (
    <div
      className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${theme.background.primary}`}
    >
      {/* Back Button */}
      <Link
        to="/poems"
        className={`inline-flex items-center gap-2 ${theme.link.primary} mb-6 group`}
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition" />
        Back to Poems
      </Link>

      {/* Main Poem Card */}
      <div
        className={`${theme.background.card} rounded-3xl shadow-xl overflow-hidden mb-8 border ${theme.border.card}`}
      >
        {/* Poem Header Image */}
        <div className="h-64 md:h-96 relative">
          <img
            src={poem.image}
            alt={poem.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              {poem.title}
            </h1>
            <Link
              to={`/poet/${poem.poetId}`}
              className="flex items-center gap-2 text-amber-300 hover:text-amber-200 transition"
            >
              <FaUser /> {poem.poet}
            </Link>
          </div>
        </div>

        {/* Poem Meta Info */}
        <div
          className={`px-8 py-4 border-b ${theme.border.light} flex flex-wrap items-center justify-between gap-4`}
        >
          <div className="flex items-center gap-4 text-sm">
            <span className={`flex items-center gap-1 ${theme.text.secondary}`}>
              <FaCalendarAlt className={theme.icon.primary} /> {poem.date}
            </span>
            <span className={`flex items-center gap-1 ${theme.text.secondary}`}>
              <FaLanguage className={theme.icon.primary} /> {poem.language}
            </span>
            <span
              className={`px-3 py-1 ${categoryBadgeClass} rounded-full text-xs`}
            >
              {poem.category}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLiked(!liked)}
              className={`flex items-center gap-1 px-3 py-1 rounded-full transition ${
                liked
                  ? "text-rose-500 bg-rose-50"
                  : `${theme.text.tertiary} hover:text-rose-500 hover:bg-rose-50`
              }`}
            >
              <FaHeart /> {poem.likes + (liked ? 1 : 0)}
            </button>
            <span className={`flex items-center gap-1 ${theme.text.tertiary}`}>
              <FaEye /> {poem.reads}
            </span>
            <span className={`flex items-center gap-1 ${theme.text.tertiary}`}>
              <FaComment /> {poem.comments}
            </span>
            <button
              className={`p-2 ${theme.text.tertiary} hover:${theme.text.accent} hover:bg-amber-50 rounded-full transition`}
            >
              <FaShare />
            </button>
            <button
              onClick={() => setSaved(!saved)}
              className={`p-2 rounded-full transition ${
                saved
                  ? `${theme.text.accent} ${theme.background.secondary}`
                  : `${theme.text.tertiary} hover:${theme.text.accent} hover:bg-amber-50`
              }`}
            >
              <FaBookmark />
            </button>
          </div>
        </div>

        {/* Poem Content */}
        <div className="p-8">
          <div className="relative">
            <FaQuoteLeft
              className={`absolute -top-4 -left-2 ${quoteIconColor} text-4xl`}
            />
            <div className="px-8">
              {poem.content.split("\n").map((line, idx) => (
                <p
                  key={idx}
                  className={`${theme.text.primary} text-lg mb-2 font-serif leading-relaxed`}
                >
                  {line}
                </p>
              ))}
            </div>
            <FaQuoteRight
              className={`absolute -bottom-4 -right-2 ${quoteIconColor} text-4xl`}
            />
          </div>
        </div>

        {/* Tags */}
        <div className="px-8 pb-8">
          <div
            className={`flex items-center gap-2 text-sm ${theme.text.tertiary} mb-2`}
          >
            <FaTags /> Tags:
          </div>
          <div className="flex flex-wrap gap-2">
            {poem.tags.map((tag, idx) => (
              <Link
                key={idx}
                to={`/poems?tag=${tag}`}
                className={`px-3 py-1 ${tagClass} rounded-full text-sm transition`}
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Related Poems */}
      {relatedPoems.length > 0 && (
        <div className="mt-12">
          <h2 className={`text-2xl font-bold ${theme.text.primary} mb-6`}>
            More Poems You Might Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPoems.map((related) => (
              <Link
                key={related.id}
                to={`/poem/${related.id}`}
                className={`group ${theme.background.card} rounded-xl shadow-md overflow-hidden hover:shadow-xl transition border ${theme.border.card}`}
              >
                <div className="h-32 overflow-hidden">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition"
                  />
                </div>
                <div className="p-4">
                  <h3
                    className={`font-bold ${theme.text.primary} ${relatedCardHoverClass} transition mb-1`}
                  >
                    {related.title}
                  </h3>
                  <p className={`text-sm ${theme.text.tertiary}`}>
                    {related.poet}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PoemsDetails;
