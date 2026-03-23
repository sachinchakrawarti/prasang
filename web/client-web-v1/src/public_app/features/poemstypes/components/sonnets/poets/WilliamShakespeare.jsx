// src/public_app/features/poemstypes/components/sonnets/poets/WilliamShakespeare.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTts } from "tts-react";
import {
  FaArrowLeft,
  FaGlobe,
  FaCalendarAlt,
  FaBookmark,
  FaQuoteLeft,
  FaSearch,
  FaFeather,
  FaStar,
  FaFilter,
  FaBookOpen,
  FaShare,
  FaCopy,
  FaEnvelope,
  FaLink,
  FaBookReader,
  FaVolumeUp,
  FaPause,
  FaPlay,
  FaStop,
  FaSpinner,
} from "react-icons/fa";
import { useTheme } from "../../../../../../theme";
import { shakespeareSonnets, themes } from "./WilliamShakespeareSonnetsData";

const WilliamShakespeare = () => {
  const navigate = useNavigate();
  const { themeName } = useTheme();
  const [savedSonnets, setSavedSonnets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("all");
  const [shareMessage, setShareMessage] = useState(null);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  // TTS setup for each sonnet
  const ttsHooks = {};

  const filteredSonnets = shakespeareSonnets.filter((sonnet) => {
    const matchesSearch =
      sonnet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sonnet.firstLine.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sonnet.fullText.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTheme =
      selectedTheme === "all" || sonnet.theme === selectedTheme;

    return matchesSearch && matchesTheme;
  });

  const toggleSave = (id, e) => {
    e.stopPropagation();
    setSavedSonnets((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const handleSonnetClick = (sonnetId) => {
    navigate(`/sonnets/william-shakespeare/${sonnetId}`);
  };

  const handleReadFull = (sonnetId, e) => {
    e.stopPropagation();
    navigate(`/sonnets/william-shakespeare/${sonnetId}`);
  };

  // TTS Functions
  const handleTTS = (sonnet, e) => {
    e.stopPropagation();

    if (currentlyPlaying === sonnet.id) {
      // Stop current playback
      if (ttsHooks[sonnet.id]) {
        ttsHooks[sonnet.id].stop();
      }
      setCurrentlyPlaying(null);
    } else {
      // Stop any other playing sonnet
      if (currentlyPlaying && ttsHooks[currentlyPlaying]) {
        ttsHooks[currentlyPlaying].stop();
      }

      // Play this sonnet
      setCurrentlyPlaying(sonnet.id);

      // Initialize TTS for this sonnet if not already done
      if (!ttsHooks[sonnet.id]) {
        const TTSComponent = () => {
          const tts = useTts({
            children: sonnet.fullText,
            lang: "en-US",
            markTextAsSpoken: true,
            markColor: "#f59e0b",
            rate: 0.85, // Slightly slower for poetry
            autoPlay: true,
            onEnd: () => setCurrentlyPlaying(null),
            onError: (error) => {
              console.error("TTS Error:", error);
              setCurrentlyPlaying(null);
            },
          });
          ttsHooks[sonnet.id] = tts;
          return null;
        };
        // Render the component
        <TTSComponent />;
      } else {
        ttsHooks[sonnet.id].play();
      }
    }
  };

  const handlePause = (sonnetId, e) => {
    e.stopPropagation();
    if (ttsHooks[sonnetId]) {
      ttsHooks[sonnetId].pause();
    }
  };

  const handleResume = (sonnetId, e) => {
    e.stopPropagation();
    if (ttsHooks[sonnetId]) {
      ttsHooks[sonnetId].play();
    }
  };

  const handleStop = (sonnetId, e) => {
    e.stopPropagation();
    if (ttsHooks[sonnetId]) {
      ttsHooks[sonnetId].stop();
    }
    if (currentlyPlaying === sonnetId) {
      setCurrentlyPlaying(null);
    }
  };

  const handleShare = async (sonnet, e) => {
    e.stopPropagation();

    const shareData = {
      title: sonnet.title,
      text: `${sonnet.title} by William Shakespeare\n\n${sonnet.firstLine}\n\nRead the complete sonnet at:`,
      url: `${window.location.origin}/sonnets/william-shakespeare/${sonnet.id}`,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log("Shared successfully");
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Error sharing:", err);
          copyToClipboard(shareData.url, sonnet);
        }
      }
    } else {
      showShareOptions(sonnet);
    }
  };

  const copyToClipboard = (url, sonnet) => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setShareMessage({
          id: sonnet.id,
          text: "Link copied to clipboard!",
        });
        setTimeout(() => setShareMessage(null), 2000);
      })
      .catch(() => {
        prompt("Copy this link to share:", url);
      });
  };

  const showShareOptions = (sonnet) => {
    const url = `${window.location.origin}/sonnets/william-shakespeare/${sonnet.id}`;
    const emailBody = `${sonnet.title} by William Shakespeare\n\n${sonnet.firstLine}\n\nRead the complete sonnet: ${url}`;

    if (
      window.confirm(
        `Share "${sonnet.title}"\n\n• Click OK to copy link\n• Cancel to email`,
      )
    ) {
      copyToClipboard(url, sonnet);
    } else {
      window.location.href = `mailto:?subject=${encodeURIComponent(sonnet.title)}&body=${encodeURIComponent(emailBody)}`;
    }
  };

  // Theme-based styling for TTS buttons
  const getTTSButtonClass = () => {
    switch (themeName) {
      case "forest":
        return "bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400";
      case "lavender":
        return "bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-400";
      case "rose":
        return "bg-rose-100 text-rose-700 hover:bg-rose-200 dark:bg-rose-900/30 dark:text-rose-400";
      case "sepia":
        return "bg-amber-100 text-amber-700 hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-400";
      case "dark":
        return "bg-gray-700 text-gray-300 hover:bg-gray-600";
      default:
        return "bg-amber-100 text-amber-700 hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-400";
    }
  };

  const ttsButtonClass = getTTSButtonClass();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <Link
        to="/poems-types/sonnet"
        className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-6 group"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition" />
        Back to Sonnets
      </Link>

      {/* Poet Header */}
      <div className="bg-gradient-to-r from-rose-500 to-red-500 rounded-3xl p-8 mb-8 text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <FaFeather className="absolute top-5 right-5 text-8xl rotate-12" />
          <FaFeather className="absolute bottom-5 left-5 text-8xl -rotate-12" />
        </div>

        <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/William_Shakespeare_by_John_Taylor%2C_edited.jpg/960px-William_Shakespeare_by_John_Taylor%2C_edited.jpg"
              alt="William Shakespeare"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">William Shakespeare</h1>
            <p className="text-rose-100 mb-3">The Bard of Avon · 1564-1616</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                <FaGlobe /> England
              </span>
              <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                <FaCalendarAlt /> 154 Sonnets
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search sonnets by title, first line, or text..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Theme Filter */}
          <div className="relative min-w-[200px]">
            <FaFilter className="absolute left-3 top-3 text-gray-400" />
            <select
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 appearance-none bg-white"
            >
              {themes.map((theme) => (
                <option key={theme} value={theme}>
                  {theme === "all" ? "🎨 All Themes" : theme}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6 flex justify-between items-center">
        <p className="text-sm text-gray-500">
          Showing{" "}
          <span className="font-semibold text-amber-600">
            {filteredSonnets.length}
          </span>{" "}
          of {shakespeareSonnets.length} sonnets
        </p>
      </div>

      {/* Small Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredSonnets.map((sonnet) => {
          const isPlaying = currentlyPlaying === sonnet.id;
          const ttsHook = ttsHooks[sonnet.id];
          const isPaused = ttsHook?.state?.isPaused || false;

          return (
            <div
              key={sonnet.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-amber-100 cursor-pointer relative"
            >
              {/* Card Header with Number */}
              <div
                className={`h-16 bg-gradient-to-r ${
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
                } relative rounded-t-xl p-3`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <span className="bg-white/30 text-white px-2 py-0.5 rounded-full text-xs">
                      #{sonnet.number}
                    </span>
                    <span className="text-white font-bold text-sm">
                      Sonnet {sonnet.number}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {/* TTS Button */}
                    <button
                      onClick={(e) => handleTTS(sonnet, e)}
                      className={`p-1.5 rounded-full transition ${
                        isPlaying
                          ? ttsButtonClass
                          : "bg-white/20 text-white hover:bg-white/30"
                      }`}
                      title={isPlaying ? "Stop" : "Listen to sonnet"}
                    >
                      {isPlaying ? (
                        <FaStop size={10} />
                      ) : (
                        <FaVolumeUp size={10} />
                      )}
                    </button>

                    {/* Share Button */}
                    <button
                      onClick={(e) => handleShare(sonnet, e)}
                      className="p-1.5 rounded-full bg-white/20 text-white hover:bg-white/30 transition relative"
                      title="Share this sonnet"
                    >
                      <FaShare size={10} />
                      {shareMessage?.id === sonnet.id && (
                        <span className="absolute -bottom-8 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                          {shareMessage.text}
                        </span>
                      )}
                    </button>

                    {/* Save Button */}
                    <button
                      onClick={(e) => toggleSave(sonnet.id, e)}
                      className={`p-1.5 rounded-full transition ${
                        savedSonnets.includes(sonnet.id)
                          ? "bg-amber-500 text-white"
                          : "bg-white/20 text-white hover:bg-white/30"
                      }`}
                      title={
                        savedSonnets.includes(sonnet.id)
                          ? "Saved"
                          : "Save sonnet"
                      }
                    >
                      <FaBookmark size={10} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4">
                {/* Title */}
                <h3 className="font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition line-clamp-2 text-sm">
                  {sonnet.title}
                </h3>

                {/* First Line */}
                <p className="text-amber-600 text-xs italic mb-2 line-clamp-1">
                  {sonnet.firstLine}
                </p>

                {/* Excerpt - First two lines */}
                <div className="bg-amber-50 rounded-lg p-2 mb-3">
                  <p className="text-xs text-gray-600 italic line-clamp-2">
                    {sonnet.fullText.split("\n").slice(0, 2).join(" ")}...
                  </p>
                </div>

                {/* TTS Progress Indicator (when playing) */}
                {isPlaying && ttsHook && (
                  <div className="mb-2">
                    <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-yellow-500 transition-all duration-300"
                        style={{
                          width: ttsHook.state?.progress
                            ? `${ttsHook.state.progress}%`
                            : "50%",
                        }}
                      />
                    </div>
                    <p className="text-[10px] text-gray-400 mt-1 text-center">
                      {isPaused ? "Paused" : "Playing..."}
                    </p>
                  </div>
                )}

                {/* Theme Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full">
                    {sonnet.theme}
                  </span>
                  <span className="text-xs text-gray-400">{sonnet.year}</span>
                </div>

                {/* Read Full Button */}
                <button
                  onClick={(e) => handleReadFull(sonnet.id, e)}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 
                    text-white py-2 rounded-lg hover:from-amber-600 hover:to-yellow-600 
                    transition-all text-xs font-medium"
                >
                  <FaBookReader size={12} />
                  Read Full Sonnet
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredSonnets.length === 0 && (
        <div className="text-center py-16 bg-gray-50 rounded-2xl">
          <FaFeather className="text-5xl text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No sonnets found
          </h3>
          <p className="text-gray-500">Try adjusting your search or filter</p>
        </div>
      )}

      {/* About Section */}
      <div className="mt-12 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <FaFeather className="text-amber-500" /> About Shakespeare's Sonnets
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          Shakespeare's sonnets are a collection of 154 poems dealing with
          themes such as love, beauty, politics, mortality, and time. First
          published in 1609, they are among the most famous and widely-read
          poems in the English language.
        </p>
        <p className="text-gray-600 leading-relaxed">
          The first 17 sonnets, often called the "procreation sonnets,"
          encourage the young man to marry and have children. Click on any
          sonnet card above to read the complete text.
        </p>
      </div>
    </div>
  );
};

export default WilliamShakespeare;
