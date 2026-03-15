// src/public_app/features/auth/Profile.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaCalendarAlt,
  FaFeather,
  FaHeart,
  FaBookOpen,
  FaUsers,
  FaEdit,
  FaCog,
  FaSignOutAlt,
  FaQuoteLeft,
  FaStar,
  FaEye,
  FaComment,
  FaShare,
  FaGlobe,
  FaMapMarkerAlt,
  FaLink,
  FaTwitter,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { useTheme } from "../../../theme";
import { useAuth } from "../../../context/AuthContext";

const Profile = () => {
  const { themeName } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("poems");

  // Theme-based styling
  const getBgColor = () => {
    switch (themeName) {
      case "forest":
        return "bg-green-50 dark:bg-green-900/20";
      case "lavender":
        return "bg-purple-50 dark:bg-purple-900/20";
      case "rose":
        return "bg-rose-50 dark:bg-rose-900/20";
      case "sepia":
        return "bg-amber-50 dark:bg-amber-900/20";
      case "dark":
        return "bg-gray-900";
      default:
        return "bg-gray-50 dark:bg-gray-900";
    }
  };

  const getCardBg = () => {
    switch (themeName) {
      case "forest":
        return "bg-white dark:bg-green-900/20";
      case "lavender":
        return "bg-white dark:bg-purple-900/20";
      case "rose":
        return "bg-white dark:bg-rose-900/20";
      case "sepia":
        return "bg-white dark:bg-amber-900/20";
      case "dark":
        return "bg-gray-800";
      default:
        return "bg-white dark:bg-gray-800";
    }
  };

  const getTextPrimary = () => {
    switch (themeName) {
      case "forest":
        return "text-green-900 dark:text-green-100";
      case "lavender":
        return "text-purple-900 dark:text-purple-100";
      case "rose":
        return "text-rose-900 dark:text-rose-100";
      case "sepia":
        return "text-amber-900 dark:text-amber-100";
      case "dark":
        return "text-white";
      default:
        return "text-gray-900 dark:text-white";
    }
  };

  const getTextSecondary = () => {
    switch (themeName) {
      case "forest":
        return "text-green-700 dark:text-green-300";
      case "lavender":
        return "text-purple-700 dark:text-purple-300";
      case "rose":
        return "text-rose-700 dark:text-rose-300";
      case "sepia":
        return "text-amber-700 dark:text-amber-300";
      case "dark":
        return "text-gray-300";
      default:
        return "text-gray-600 dark:text-gray-300";
    }
  };

  const getTextTertiary = () => {
    switch (themeName) {
      case "forest":
        return "text-green-600 dark:text-green-400";
      case "lavender":
        return "text-purple-600 dark:text-purple-400";
      case "rose":
        return "text-rose-600 dark:text-rose-400";
      case "sepia":
        return "text-amber-600 dark:text-amber-400";
      case "dark":
        return "text-gray-400";
      default:
        return "text-gray-500 dark:text-gray-400";
    }
  };

  const getBorderColor = () => {
    switch (themeName) {
      case "forest":
        return "border-green-200 dark:border-green-800";
      case "lavender":
        return "border-purple-200 dark:border-purple-800";
      case "rose":
        return "border-rose-200 dark:border-rose-800";
      case "sepia":
        return "border-amber-200 dark:border-amber-800";
      case "dark":
        return "border-gray-700";
      default:
        return "border-gray-200 dark:border-gray-700";
    }
  };

  const getIconColor = () => {
    switch (themeName) {
      case "forest":
        return "text-green-500 dark:text-green-400";
      case "lavender":
        return "text-purple-500 dark:text-purple-400";
      case "rose":
        return "text-rose-500 dark:text-rose-400";
      case "sepia":
        return "text-amber-500 dark:text-amber-400";
      case "dark":
        return "text-gray-400";
      default:
        return "text-amber-500 dark:text-amber-400";
    }
  };

  const getButtonBg = () => {
    switch (themeName) {
      case "forest":
        return "bg-green-600 hover:bg-green-700";
      case "lavender":
        return "bg-purple-600 hover:bg-purple-700";
      case "rose":
        return "bg-rose-600 hover:bg-rose-700";
      case "sepia":
        return "bg-amber-600 hover:bg-amber-700";
      case "dark":
        return "bg-gray-700 hover:bg-gray-600";
      default:
        return "bg-amber-600 hover:bg-amber-700";
    }
  };

  const getTabActiveColor = () => {
    switch (themeName) {
      case "forest":
        return "text-green-600 dark:text-green-400 border-green-600";
      case "lavender":
        return "text-purple-600 dark:text-purple-400 border-purple-600";
      case "rose":
        return "text-rose-600 dark:text-rose-400 border-rose-600";
      case "sepia":
        return "text-amber-600 dark:text-amber-400 border-amber-600";
      case "dark":
        return "text-gray-300 border-gray-300";
      default:
        return "text-amber-600 dark:text-amber-400 border-amber-600";
    }
  };

  const bgColor = getBgColor();
  const cardBg = getCardBg();
  const textPrimary = getTextPrimary();
  const textSecondary = getTextSecondary();
  const textTertiary = getTextTertiary();
  const borderColor = getBorderColor();
  const iconColor = getIconColor();
  const buttonBg = getButtonBg();
  const tabActiveColor = getTabActiveColor();

  // Sample user poems data
  const userPoems = [
    {
      id: 1,
      title: "Whispers of Dawn",
      excerpt: "The morning light breaks through the haze...",
      likes: 124,
      comments: 23,
      views: 1342,
      date: "2024-03-15",
      type: "Poem",
    },
    {
      id: 2,
      title: "Midnight Thoughts",
      excerpt: "In the silence of the night, I find my voice...",
      likes: 89,
      comments: 15,
      views: 987,
      date: "2024-03-10",
      type: "Ghazal",
    },
    {
      id: 3,
      title: "Spring's Promise",
      excerpt: "Petals dance in the gentle breeze...",
      likes: 156,
      comments: 31,
      views: 2103,
      date: "2024-03-05",
      type: "Poem",
    },
  ];

  // Sample liked poems
  const likedPoems = [
    {
      id: 101,
      title: "Eternal Love",
      author: "Faiz Ahmed Faiz",
      likes: 456,
      date: "2024-03-12",
    },
    {
      id: 102,
      title: "The Road Not Taken",
      author: "Robert Frost",
      likes: 789,
      date: "2024-03-08",
    },
  ];

  // Sample followers/following
  const followers = [
    {
      id: 1,
      name: "PoetryLover123",
      avatar:
        "https://ui-avatars.com/api/?name=Poetry+Lover&background=amber&color=fff",
    },
    {
      id: 2,
      name: "VerseMaster",
      avatar:
        "https://ui-avatars.com/api/?name=Verse+Master&background=purple&color=fff",
    },
    {
      id: 3,
      name: "RhymeQueen",
      avatar:
        "https://ui-avatars.com/api/?name=Rhyme+Queen&background=green&color=fff",
    },
  ];

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // If no user, redirect or show message
  if (!user) {
    return (
      <div
        className={`min-h-screen ${bgColor} flex items-center justify-center`}
      >
        <div
          className={`${cardBg} rounded-2xl shadow-xl p-8 text-center max-w-md`}
        >
          <FaUser className={`text-5xl ${iconColor} mx-auto mb-4`} />
          <h2 className={`text-2xl font-bold ${textPrimary} mb-2`}>
            Not Logged In
          </h2>
          <p className={`${textSecondary} mb-6`}>
            Please login to view your profile
          </p>
          <Link
            to="/login"
            className={`inline-block ${buttonBg} text-white px-6 py-3 rounded-lg font-medium`}
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${bgColor} py-8`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div
          className={`${cardBg} rounded-2xl shadow-xl p-6 mb-8 border ${borderColor}`}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Avatar */}
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-amber-500"
              />
              <button
                className="absolute bottom-0 right-0 p-1 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition"
                onClick={() => {
                  /* Edit avatar */
                }}
              >
                <FaEdit size={12} />
              </button>
            </div>

            {/* User Info */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1
                    className={`text-2xl md:text-3xl font-bold ${textPrimary}`}
                  >
                    {user.name}
                  </h1>
                  <p className={`text-sm ${textSecondary}`}>@{user.username}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    className={`p-2 ${textSecondary} hover:${iconColor} ${cardBg} rounded-lg border ${borderColor}`}
                    onClick={() => {
                      /* Edit profile */
                    }}
                  >
                    <FaEdit size={18} />
                  </button>
                  <Link
                    to="/settings"
                    className={`p-2 ${textSecondary} hover:${iconColor} ${cardBg} rounded-lg border ${borderColor}`}
                  >
                    <FaCog size={18} />
                  </Link>
                  <button
                    onClick={handleLogout}
                    className={`p-2 ${textSecondary} hover:text-red-600 ${cardBg} rounded-lg border ${borderColor}`}
                  >
                    <FaSignOutAlt size={18} />
                  </button>
                </div>
              </div>

              {/* Bio */}
              <p className={`${textSecondary} mt-3 max-w-2xl`}>
                {user.bio || "Poetry enthusiast sharing words and emotions."}
              </p>

              {/* User Meta */}
              <div className="flex flex-wrap gap-4 mt-4 text-sm">
                <span className={`flex items-center gap-1 ${textTertiary}`}>
                  <FaEnvelope className={iconColor} size={14} />
                  {user.email}
                </span>
                <span className={`flex items-center gap-1 ${textTertiary}`}>
                  <FaCalendarAlt className={iconColor} size={14} />
                  Joined {new Date(user.joinDate).toLocaleDateString()}
                </span>
                <span className={`flex items-center gap-1 ${textTertiary}`}>
                  <FaMapMarkerAlt className={iconColor} size={14} />
                  New York, USA
                </span>
                <span className={`flex items-center gap-1 ${textTertiary}`}>
                  <FaLink className={iconColor} size={14} />
                  <a href="#" className="hover:underline">
                    prasang.com/johndoe
                  </a>
                </span>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mt-4">
                <a href="#" className={`${textSecondary} hover:${iconColor}`}>
                  <FaTwitter size={18} />
                </a>
                <a href="#" className={`${textSecondary} hover:${iconColor}`}>
                  <FaInstagram size={18} />
                </a>
                <a href="#" className={`${textSecondary} hover:${iconColor}`}>
                  <FaGithub size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mt-6 pt-6 border-t ${borderColor}">
            <div className="text-center">
              <p className={`text-2xl font-bold ${textPrimary}`}>
                {user.stats?.poems || 24}
              </p>
              <p className={`text-xs ${textSecondary}`}>Poems</p>
            </div>
            <div className="text-center">
              <p className={`text-2xl font-bold ${textPrimary}`}>
                {user.stats?.followers || 156}
              </p>
              <p className={`text-xs ${textSecondary}`}>Followers</p>
            </div>
            <div className="text-center">
              <p className={`text-2xl font-bold ${textPrimary}`}>
                {user.stats?.following || 89}
              </p>
              <p className={`text-xs ${textSecondary}`}>Following</p>
            </div>
            <div className="text-center">
              <p className={`text-2xl font-bold ${textPrimary}`}>12.4k</p>
              <p className={`text-xs ${textSecondary}`}>Total Views</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div
          className={`${cardBg} rounded-2xl shadow-xl border ${borderColor} overflow-hidden`}
        >
          <div className="flex border-b ${borderColor} overflow-x-auto">
            {[
              { id: "poems", label: "My Poems", icon: FaFeather },
              { id: "liked", label: "Liked Poems", icon: FaHeart },
              { id: "followers", label: "Followers", icon: FaUsers },
              { id: "following", label: "Following", icon: FaUsers },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition whitespace-nowrap ${
                  activeTab === tab.id
                    ? `${tabActiveColor} border-b-2`
                    : `${textSecondary} hover:${textPrimary}`
                }`}
              >
                <tab.icon
                  className={activeTab === tab.id ? iconColor : ""}
                  size={16}
                />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* My Poems Tab */}
            {activeTab === "poems" && (
              <div className="space-y-4">
                {userPoems.map((poem) => (
                  <div
                    key={poem.id}
                    className={`p-4 ${cardBg} rounded-xl border ${borderColor} hover:shadow-md transition`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className={`font-semibold ${textPrimary}`}>
                            {poem.title}
                          </h3>
                          <span
                            className={`text-xs px-2 py-0.5 ${iconColor} bg-opacity-10 rounded-full`}
                          >
                            {poem.type}
                          </span>
                        </div>
                        <p className={`text-sm ${textSecondary} mb-2`}>
                          {poem.excerpt}
                        </p>
                        <p className={`text-xs ${textTertiary}`}>{poem.date}</p>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <span
                          className={`flex items-center gap-1 ${textSecondary}`}
                        >
                          <FaHeart className="text-rose-500" size={14} />{" "}
                          {poem.likes}
                        </span>
                        <span
                          className={`flex items-center gap-1 ${textSecondary}`}
                        >
                          <FaComment className="text-blue-500" size={14} />{" "}
                          {poem.comments}
                        </span>
                        <span
                          className={`flex items-center gap-1 ${textSecondary}`}
                        >
                          <FaEye className="text-green-500" size={14} />{" "}
                          {poem.views}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  className={`w-full mt-4 py-2 border-2 ${borderColor} rounded-xl ${textSecondary} hover:${textPrimary} transition`}
                >
                  Load More Poems
                </button>
              </div>
            )}

            {/* Liked Poems Tab */}
            {activeTab === "liked" && (
              <div className="space-y-4">
                {likedPoems.map((poem) => (
                  <div
                    key={poem.id}
                    className={`p-4 ${cardBg} rounded-xl border ${borderColor} hover:shadow-md transition`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className={`font-semibold ${textPrimary}`}>
                          {poem.title}
                        </h3>
                        <p className={`text-sm ${textSecondary}`}>
                          by {poem.author}
                        </p>
                        <p className={`text-xs ${textTertiary} mt-1`}>
                          {poem.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex items-center gap-1 ${textSecondary}`}
                        >
                          <FaHeart className="text-rose-500" size={14} />{" "}
                          {poem.likes}
                        </span>
                        <FaShare
                          className={`${textTertiary} cursor-pointer hover:${iconColor}`}
                          size={16}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Followers Tab */}
            {activeTab === "followers" && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {followers.map((follower) => (
                  <div
                    key={follower.id}
                    className={`p-4 ${cardBg} rounded-xl border ${borderColor} text-center hover:shadow-md transition`}
                  >
                    <img
                      src={follower.avatar}
                      alt={follower.name}
                      className="w-16 h-16 rounded-full mx-auto mb-2"
                    />
                    <p className={`font-medium ${textPrimary}`}>
                      {follower.name}
                    </p>
                    <button
                      className={`mt-2 text-xs ${iconColor} hover:underline`}
                    >
                      Follow Back
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Following Tab */}
            {activeTab === "following" && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {followers.map((follower) => (
                  <div
                    key={follower.id}
                    className={`p-4 ${cardBg} rounded-xl border ${borderColor} text-center hover:shadow-md transition`}
                  >
                    <img
                      src={follower.avatar}
                      alt={follower.name}
                      className="w-16 h-16 rounded-full mx-auto mb-2"
                    />
                    <p className={`font-medium ${textPrimary}`}>
                      {follower.name}
                    </p>
                    <button
                      className={`mt-2 text-xs text-rose-500 hover:underline`}
                    >
                      Unfollow
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer Note */}
        <div className={`mt-8 text-center ${textTertiary} text-sm`}>
          <p>
            Member since{" "}
            {new Date(user.joinDate).toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
