// src/public_app/features/poemstypes/components/sonnets/poets/SonnetDetailPage.jsx
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaBookmark,
  FaQuoteLeft,
  FaQuoteRight,
  FaFeather,
  FaStar,
  FaCalendarAlt,
  FaHeart,
  FaShare,
  FaCopy,
  FaEnvelope,
  FaBookOpen,
} from "react-icons/fa";
import { shakespeareSonnets } from "./WilliamShakespeareSonnetsData";

const SonnetDetailPage = () => {
  const { sonnetId } = useParams();
  const navigate = useNavigate();
  const [sonnet, setSonnet] = useState(null);
  const [saved, setSaved] = useState(false);
  const [prevSonnet, setPrevSonnet] = useState(null);
  const [nextSonnet, setNextSonnet] = useState(null);
  const [relatedSonnets, setRelatedSonnets] = useState([]);
  const [shareMessage, setShareMessage] = useState(null);

  useEffect(() => {
    const currentSonnet = shakespeareSonnets.find(
      (s) => s.id === parseInt(sonnetId),
    );
    setSonnet(currentSonnet);

    if (currentSonnet) {
      const prev = shakespeareSonnets.find(
        (s) => s.id === currentSonnet.id - 1,
      );
      const next = shakespeareSonnets.find(
        (s) => s.id === currentSonnet.id + 1,
      );
      setPrevSonnet(prev);
      setNextSonnet(next);

      // Find related sonnets (same theme or nearby numbers)
      const related = shakespeareSonnets
        .filter(
          (s) =>
            s.id !== currentSonnet.id &&
            (s.theme === currentSonnet.theme ||
              Math.abs(s.id - currentSonnet.id) <= 3),
        )
        .slice(0, 4);
      setRelatedSonnets(related);
    }
  }, [sonnetId]);

  const handleShare = async () => {
    const shareData = {
      title: sonnet.title,
      text: `${sonnet.title} by William Shakespeare\n\n${sonnet.firstLine}\n\nRead the complete sonnet at:`,
      url: `${window.location.origin}/sonnets/william-shakespeare/${sonnet.id}`,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err.name !== "AbortError") {
          copyToClipboard();
        }
      }
    } else {
      showShareOptions();
    }
  };

  const copyToClipboard = () => {
    const url = `${window.location.origin}/sonnets/william-shakespeare/${sonnet.id}`;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setShareMessage("Link copied to clipboard!");
        setTimeout(() => setShareMessage(null), 2000);
      })
      .catch(() => {
        prompt("Copy this link to share:", url);
      });
  };

  const showShareOptions = () => {
    const url = `${window.location.origin}/sonnets/william-shakespeare/${sonnet.id}`;
    const emailBody = `${sonnet.title} by William Shakespeare\n\n${sonnet.firstLine}\n\nRead the complete sonnet: ${url}`;

    if (
      window.confirm(
        `Share "${sonnet.title}"\n\n• Click OK to copy link\n• Cancel to email`,
      )
    ) {
      copyToClipboard();
    } else {
      window.location.href = `mailto:?subject=${encodeURIComponent(sonnet.title)}&body=${encodeURIComponent(emailBody)}`;
    }
  };

  if (!sonnet) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Sonnet Not Found
          </h2>
          <p className="text-gray-600 mb-4">
            The sonnet you're looking for doesn't exist.
          </p>
          <Link
            to="/sonnets/william-shakespeare"
            className="text-amber-600 hover:text-amber-700"
          >
            ← Back to Shakespeare's Sonnets
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Navigation Bar */}
      <div className="flex items-center justify-between mb-6">
        <Link
          to="/sonnets/william-shakespeare"
          className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition" />
          Back to Sonnets
        </Link>

        <div className="flex items-center gap-3">
          {prevSonnet && (
            <button
              onClick={() =>
                navigate(`/sonnets/william-shakespeare/${prevSonnet.id}`)
              }
              className="p-2 text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition"
              title={`Previous: Sonnet ${prevSonnet.number}`}
            >
              <FaArrowLeft />
            </button>
          )}
          <span className="text-sm text-gray-500">
            Sonnet {sonnet.number} of 154
          </span>
          {nextSonnet && (
            <button
              onClick={() =>
                navigate(`/sonnets/william-shakespeare/${nextSonnet.id}`)
              }
              className="p-2 text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition"
              title={`Next: Sonnet ${nextSonnet.number}`}
            >
              <FaArrowRight />
            </button>
          )}
        </div>
      </div>

      {/* Main Sonnet Card */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-amber-100 mb-8">
        {/* Header with Gradient */}
        <div
          className={`h-32 bg-gradient-to-r ${
            sonnet.theme === "Procreation"
              ? "from-rose-500 to-pink-500"
              : sonnet.theme === "Time"
                ? "from-blue-500 to-indigo-500"
                : sonnet.theme === "Time & Beauty"
                  ? "from-purple-500 to-violet-500"
                  : sonnet.theme === "Immortality"
                    ? "from-amber-500 to-orange-500"
                    : sonnet.theme === "Love"
                      ? "from-red-500 to-rose-500"
                      : "from-emerald-500 to-teal-500"
          } relative`}
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <FaFeather className="absolute top-3 right-3 text-6xl rotate-12" />
            <FaFeather className="absolute bottom-3 left-3 text-6xl -rotate-12" />
          </div>

          {/* Sonnet Number Badge */}
          <div className="absolute top-4 left-6">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-bold">
              Sonnet {sonnet.number}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="absolute top-4 right-6 flex gap-2">
            {/* Share Button */}
            <div className="relative">
              <button
                onClick={handleShare}
                className="p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition"
                title="Share this sonnet"
              >
                <FaShare size={18} />
              </button>
              {shareMessage && (
                <span className="absolute top-full right-0 mt-2 bg-gray-800 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap z-10">
                  {shareMessage}
                </span>
              )}
            </div>

            {/* Save Button */}
            <button
              onClick={() => setSaved(!saved)}
              className={`p-3 rounded-full transition ${
                saved
                  ? "bg-amber-500 text-white"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
              title={saved ? "Saved" : "Save sonnet"}
            >
              <FaBookmark size={18} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
            {sonnet.title}
          </h1>

          {/* First Line Highlight */}
          <div className="text-center mb-8">
            <p className="text-xl text-amber-600 italic border-b border-amber-200 pb-4 inline-block">
              {sonnet.firstLine}
            </p>
          </div>

          {/* Complete Sonnet Text */}
          <div className="relative">
            <FaQuoteLeft className="absolute -top-4 -left-2 text-amber-200 text-4xl" />
            <div className="px-8 md:px-12">
              <pre className="font-serif text-gray-700 whitespace-pre-line text-center leading-relaxed text-lg">
                {sonnet.fullText}
              </pre>
            </div>
            <FaQuoteRight className="absolute -bottom-4 -right-2 text-amber-200 text-4xl" />
          </div>

          {/* Theme and Year */}
          <div className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-gray-100">
            <span className="flex items-center gap-1 text-sm bg-amber-100 text-amber-700 px-3 py-1 rounded-full">
              <FaStar className="text-xs" /> {sonnet.theme}
            </span>
            <span className="flex items-center gap-1 text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              <FaCalendarAlt className="text-xs" /> {sonnet.year}
            </span>
          </div>
        </div>
      </div>

      {/* Related Sonnets Section */}
      {relatedSonnets.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <FaBookOpen className="text-amber-500" />
            Related Sonnets You Might Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedSonnets.map((related) => (
              <div
                key={related.id}
                onClick={() =>
                  navigate(`/sonnets/william-shakespeare/${related.id}`)
                }
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-amber-100 cursor-pointer"
              >
                {/* Card Header with Number */}
                <div
                  className={`h-14 bg-gradient-to-r ${
                    related.theme === "Procreation"
                      ? "from-rose-500 to-pink-500"
                      : related.theme === "Time"
                        ? "from-blue-500 to-indigo-500"
                        : related.theme === "Time & Beauty"
                          ? "from-purple-500 to-violet-500"
                          : "from-amber-500 to-orange-500"
                  } relative rounded-t-xl p-2`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-white font-bold text-sm">
                      Sonnet {related.number}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-3">
                  <h3 className="font-bold text-gray-800 mb-1 group-hover:text-amber-600 transition text-sm line-clamp-1">
                    {related.title}
                  </h3>
                  <p className="text-amber-600 text-xs italic mb-2 line-clamp-1">
                    {related.firstLine}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full">
                      {related.theme}
                    </span>
                    <span className="text-xs text-gray-400">
                      {related.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Navigation Footer */}
      <div className="mt-8 flex justify-between items-center">
        {prevSonnet ? (
          <button
            onClick={() =>
              navigate(`/sonnets/william-shakespeare/${prevSonnet.id}`)
            }
            className="group flex items-center gap-2 text-gray-600 hover:text-amber-600 transition"
          >
            <FaArrowUp className="rotate-[-90deg] group-hover:-translate-x-1 transition" />
            <div className="text-left">
              <p className="text-xs text-gray-400">Previous</p>
              <p className="font-medium">Sonnet {prevSonnet.number}</p>
            </div>
          </button>
        ) : (
          <div></div>
        )}

        <Link
          to="/sonnets/william-shakespeare"
          className="text-amber-600 hover:text-amber-700 text-sm font-medium"
        >
          View all sonnets
        </Link>

        {nextSonnet ? (
          <button
            onClick={() =>
              navigate(`/sonnets/william-shakespeare/${nextSonnet.id}`)
            }
            className="group flex items-center gap-2 text-gray-600 hover:text-amber-600 transition"
          >
            <div className="text-right">
              <p className="text-xs text-gray-400">Next</p>
              <p className="font-medium">Sonnet {nextSonnet.number}</p>
            </div>
            <FaArrowUp className="rotate-90 group-hover:translate-x-1 transition" />
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default SonnetDetailPage;
