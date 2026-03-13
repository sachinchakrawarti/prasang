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
import { poemsData } from "../../data/poems/poems_data";

const PoemsDetails = () => {
  const { id } = useParams();
  const [poem, setPoem] = useState(null);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [relatedPoems, setRelatedPoems] = useState([]);

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

  if (!poem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Poem Not Found
          </h2>
          <p className="text-gray-600 mb-4">
            The poem you're looking for doesn't exist.
          </p>
          <Link to="/poems" className="text-amber-600 hover:text-amber-700">
            ← Back to Poems
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <Link
        to="/poems"
        className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-6 group"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition" />
        Back to Poems
      </Link>

      {/* Main Poem Card */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8">
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
        <div className="px-8 py-4 border-b border-gray-100 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1 text-gray-600">
              <FaCalendarAlt className="text-amber-500" /> {poem.date}
            </span>
            <span className="flex items-center gap-1 text-gray-600">
              <FaLanguage className="text-amber-500" /> {poem.language}
            </span>
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs">
              {poem.category}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLiked(!liked)}
              className={`flex items-center gap-1 px-3 py-1 rounded-full transition ${
                liked
                  ? "text-rose-500 bg-rose-50"
                  : "text-gray-500 hover:text-rose-500 hover:bg-rose-50"
              }`}
            >
              <FaHeart /> {poem.likes + (liked ? 1 : 0)}
            </button>
            <span className="flex items-center gap-1 text-gray-500">
              <FaEye /> {poem.reads}
            </span>
            <span className="flex items-center gap-1 text-gray-500">
              <FaComment /> {poem.comments}
            </span>
            <button className="p-2 text-gray-500 hover:text-amber-500 hover:bg-amber-50 rounded-full transition">
              <FaShare />
            </button>
            <button
              onClick={() => setSaved(!saved)}
              className={`p-2 rounded-full transition ${
                saved
                  ? "text-amber-500 bg-amber-50"
                  : "text-gray-500 hover:text-amber-500 hover:bg-amber-50"
              }`}
            >
              <FaBookmark />
            </button>
          </div>
        </div>

        {/* Poem Content */}
        <div className="p-8">
          <div className="relative">
            <FaQuoteLeft className="absolute -top-4 -left-2 text-amber-200 text-4xl" />
            <div className="px-8">
              {poem.content.split("\n").map((line, idx) => (
                <p
                  key={idx}
                  className="text-gray-700 text-lg mb-2 font-serif leading-relaxed"
                >
                  {line}
                </p>
              ))}
            </div>
            <FaQuoteRight className="absolute -bottom-4 -right-2 text-amber-200 text-4xl" />
          </div>
        </div>

        {/* Tags */}
        <div className="px-8 pb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <FaTags /> Tags:
          </div>
          <div className="flex flex-wrap gap-2">
            {poem.tags.map((tag, idx) => (
              <Link
                key={idx}
                to={`/poems?tag=${tag}`}
                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-amber-100 hover:text-amber-700 transition"
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
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            More Poems You Might Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPoems.map((related) => (
              <Link
                key={related.id}
                to={`/poem/${related.id}`}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <div className="h-32 overflow-hidden">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 group-hover:text-amber-600 transition mb-1">
                    {related.title}
                  </h3>
                  <p className="text-sm text-gray-500">{related.poet}</p>
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
