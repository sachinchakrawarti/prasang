// src/public_app/features/dashboard/Dashboard.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaFeather,
  FaHeart,
  FaBookOpen,
  FaEye,
  FaComment,
  FaStar,
  FaChartLine,
  FaUsers,
  FaClock,
  FaCalendarAlt,
  FaPlus,
  FaEdit,
  FaTrash,
  FaShare,
  FaDownload,
  FaBell,
  FaCog,
  FaUserCircle,
  FaQuoteLeft,
  FaChartBar,
  FaFire,
  FaRocket,
  FaAward,
  FaMedal,
} from "react-icons/fa";
import { useTheme } from "../../../theme";
import { useAuth } from "../../../context/AuthContext";

const Dashboard = () => {
  const { themeName } = useTheme();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [timeRange, setTimeRange] = useState("week");

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

  const getGradient = () => {
    switch (themeName) {
      case "forest":
        return "from-green-500 to-emerald-600";
      case "lavender":
        return "from-purple-500 to-pink-600";
      case "rose":
        return "from-rose-500 to-pink-600";
      case "sepia":
        return "from-amber-500 to-yellow-600";
      case "dark":
        return "from-gray-700 to-gray-900";
      default:
        return "from-amber-500 to-yellow-500";
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
  const gradient = getGradient();

  // Sample dashboard data
  const stats = {
    totalPoems: 24,
    totalViews: 12453,
    totalLikes: 3456,
    totalComments: 567,
    totalFollowers: 156,
    totalFollowing: 89,
    poemsThisMonth: 5,
    viewsThisWeek: 1234,
    engagementRate: "78%",
    ranking: 42,
  };

  const recentPoems = [
    {
      id: 1,
      title: "Whispers of Dawn",
      date: "2024-03-15",
      views: 1243,
      likes: 124,
      comments: 23,
      status: "published",
    },
    {
      id: 2,
      title: "Midnight Thoughts",
      date: "2024-03-10",
      views: 987,
      likes: 89,
      comments: 15,
      status: "published",
    },
    {
      id: 3,
      title: "Spring's Promise",
      date: "2024-03-05",
      views: 2103,
      likes: 156,
      comments: 31,
      status: "published",
    },
    {
      id: 4,
      title: "Autumn Leaves",
      date: "2024-02-28",
      views: 876,
      likes: 67,
      comments: 12,
      status: "draft",
    },
  ];

  const topPerformingPoems = [
    {
      id: 3,
      title: "Spring's Promise",
      views: 2103,
      likes: 156,
      engagement: 92,
    },
    {
      id: 1,
      title: "Whispers of Dawn",
      views: 1243,
      likes: 124,
      engagement: 88,
    },
    {
      id: 2,
      title: "Midnight Thoughts",
      views: 987,
      likes: 89,
      engagement: 76,
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: "like",
      message: "Your poem 'Whispers of Dawn' received 10 new likes",
      time: "2 hours ago",
      icon: FaHeart,
      iconColor: "text-rose-500",
    },
    {
      id: 2,
      type: "comment",
      message: "John Doe commented on your poem 'Midnight Thoughts'",
      time: "5 hours ago",
      icon: FaComment,
      iconColor: "text-blue-500",
    },
    {
      id: 3,
      type: "follower",
      message: "PoetryLover123 started following you",
      time: "1 day ago",
      icon: FaUsers,
      iconColor: "text-green-500",
    },
    {
      id: 4,
      type: "feature",
      message: "Your poem 'Spring's Promise' was featured in 'Poem of the Day'",
      time: "2 days ago",
      icon: FaStar,
      iconColor: "text-yellow-500",
    },
  ];

  const achievements = [
    {
      id: 1,
      title: "First Poem",
      description: "Published your first poem",
      date: "2024-01-15",
      icon: FaFeather,
      completed: true,
    },
    {
      id: 2,
      title: "1000 Views",
      description: "Reached 1000 total views",
      date: "2024-02-20",
      icon: FaEye,
      completed: true,
    },
    {
      id: 3,
      title: "100 Likes",
      description: "Received 100 likes on your poems",
      date: "2024-03-01",
      icon: FaHeart,
      completed: true,
    },
    {
      id: 4,
      title: "Featured Poet",
      description: "Get featured on the homepage",
      date: null,
      icon: FaStar,
      completed: false,
    },
    {
      id: 5,
      title: "10 Poems",
      description: "Publish 10 poems",
      date: null,
      icon: FaBookOpen,
      completed: stats.totalPoems >= 10,
    },
  ];

  // If no user, redirect or show message
  if (!user) {
    return (
      <div
        className={`min-h-screen ${bgColor} flex items-center justify-center`}
      >
        <div
          className={`${cardBg} rounded-2xl shadow-xl p-8 text-center max-w-md`}
        >
          <FaUserCircle className={`text-5xl ${iconColor} mx-auto mb-4`} />
          <h2 className={`text-2xl font-bold ${textPrimary} mb-2`}>
            Not Logged In
          </h2>
          <p className={`${textSecondary} mb-6`}>
            Please login to view your dashboard
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
        {/* Header */}
        <div className="mb-8">
          <h1 className={`text-3xl font-bold ${textPrimary} mb-2`}>
            Welcome back, {user?.name?.split(" ")[0]}! 👋
          </h1>
          <p className={textSecondary}>
            Here's what's happening with your poetry journey
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Link
            to="/poems/new"
            className={`flex items-center gap-2 ${buttonBg} text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition`}
          >
            <FaPlus size={16} />
            Write New Poem
          </Link>
          <button
            className={`flex items-center gap-2 border-2 ${borderColor} ${textSecondary} hover:${textPrimary} px-4 py-2 rounded-lg transition`}
          >
            <FaDownload size={16} />
            Export Data
          </button>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className={`px-4 py-2 rounded-lg border-2 ${borderColor} bg-transparent ${textPrimary} focus:outline-none focus:ring-2 focus:ring-amber-500`}
          >
            <option value="day">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
            <option value="all">All Time</option>
          </select>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className={`${cardBg} rounded-xl p-4 border ${borderColor}`}>
            <div className="flex items-center gap-3 mb-2">
              <div className={`p-2 ${getIconColor()} bg-opacity-10 rounded-lg`}>
                <FaFeather className={iconColor} />
              </div>
              <span className={`text-sm ${textSecondary}`}>Total Poems</span>
            </div>
            <p className={`text-2xl font-bold ${textPrimary}`}>
              {stats.totalPoems}
            </p>
            <p className={`text-xs ${textTertiary}`}>
              +{stats.poemsThisMonth} this month
            </p>
          </div>

          <div className={`${cardBg} rounded-xl p-4 border ${borderColor}`}>
            <div className="flex items-center gap-3 mb-2">
              <div className={`p-2 ${getIconColor()} bg-opacity-10 rounded-lg`}>
                <FaEye className={iconColor} />
              </div>
              <span className={`text-sm ${textSecondary}`}>Total Views</span>
            </div>
            <p className={`text-2xl font-bold ${textPrimary}`}>
              {stats.totalViews.toLocaleString()}
            </p>
            <p className={`text-xs ${textTertiary}`}>
              +{stats.viewsThisWeek} this week
            </p>
          </div>

          <div className={`${cardBg} rounded-xl p-4 border ${borderColor}`}>
            <div className="flex items-center gap-3 mb-2">
              <div className={`p-2 ${getIconColor()} bg-opacity-10 rounded-lg`}>
                <FaHeart className="text-rose-500" />
              </div>
              <span className={`text-sm ${textSecondary}`}>Total Likes</span>
            </div>
            <p className={`text-2xl font-bold ${textPrimary}`}>
              {stats.totalLikes.toLocaleString()}
            </p>
            <p className={`text-xs ${textTertiary}`}>
              {stats.engagementRate} engagement rate
            </p>
          </div>

          <div className={`${cardBg} rounded-xl p-4 border ${borderColor}`}>
            <div className="flex items-center gap-3 mb-2">
              <div className={`p-2 ${getIconColor()} bg-opacity-10 rounded-lg`}>
                <FaUsers className="text-blue-500" />
              </div>
              <span className={`text-sm ${textSecondary}`}>Followers</span>
            </div>
            <p className={`text-2xl font-bold ${textPrimary}`}>
              {stats.totalFollowers}
            </p>
            <p className={`text-xs ${textTertiary}`}>
              Following {stats.totalFollowing}
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Recent Poems */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Poems Card */}
            <div
              className={`${cardBg} rounded-2xl shadow-lg p-6 border ${borderColor}`}
            >
              <div className="flex justify-between items-center mb-4">
                <h2
                  className={`text-xl font-bold ${textPrimary} flex items-center gap-2`}
                >
                  <FaBookOpen className={iconColor} /> Recent Poems
                </h2>
                <Link
                  to="/my-poems"
                  className={`text-sm ${iconColor} hover:underline`}
                >
                  View All →
                </Link>
              </div>

              <div className="space-y-4">
                {recentPoems.map((poem) => (
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
                          {poem.status === "draft" && (
                            <span
                              className={`text-xs px-2 py-0.5 bg-gray-200 dark:bg-gray-700 ${textTertiary} rounded-full`}
                            >
                              Draft
                            </span>
                          )}
                        </div>
                        <p className={`text-xs ${textTertiary} mb-2`}>
                          {poem.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <span
                          className={`flex items-center gap-1 ${textSecondary}`}
                        >
                          <FaEye className="text-green-500" size={14} />{" "}
                          {poem.views}
                        </span>
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
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <button
                        className={`p-1 ${textSecondary} hover:${iconColor} transition`}
                      >
                        <FaEdit size={14} />
                      </button>
                      <button
                        className={`p-1 ${textSecondary} hover:text-red-500 transition`}
                      >
                        <FaTrash size={14} />
                      </button>
                      <button
                        className={`p-1 ${textSecondary} hover:${iconColor} transition`}
                      >
                        <FaShare size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Performing Poems */}
            <div
              className={`${cardBg} rounded-2xl shadow-lg p-6 border ${borderColor}`}
            >
              <h2
                className={`text-xl font-bold ${textPrimary} mb-4 flex items-center gap-2`}
              >
                <FaFire className="text-orange-500" /> Top Performing
              </h2>
              <div className="space-y-4">
                {topPerformingPoems.map((poem, index) => (
                  <div key={poem.id} className="flex items-center gap-4">
                    <div
                      className={`w-8 h-8 rounded-full ${index === 0 ? "bg-yellow-500" : index === 1 ? "bg-gray-400" : "bg-amber-600"} flex items-center justify-center text-white font-bold`}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className={`font-medium ${textPrimary}`}>
                        {poem.title}
                      </p>
                      <div className="flex gap-3 mt-1">
                        <span className={`text-xs ${textTertiary}`}>
                          {poem.views} views
                        </span>
                        <span className={`text-xs ${textTertiary}`}>
                          {poem.likes} likes
                        </span>
                      </div>
                    </div>
                    <div className={`text-sm font-semibold ${iconColor}`}>
                      {poem.engagement}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Activity & Achievements */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <div
              className={`${cardBg} rounded-2xl shadow-lg p-6 border ${borderColor}`}
            >
              <h2
                className={`text-xl font-bold ${textPrimary} mb-4 flex items-center gap-2`}
              >
                <FaClock className={iconColor} /> Recent Activity
              </h2>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div className={`p-2 ${cardBg} rounded-full`}>
                      <activity.icon className={activity.iconColor} size={14} />
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm ${textSecondary}`}>
                        {activity.message}
                      </p>
                      <p className={`text-xs ${textTertiary} mt-1`}>
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className={`w-full mt-4 text-sm ${iconColor} hover:underline text-center`}
              >
                View All Activity
              </button>
            </div>

            {/* Achievements */}
            <div
              className={`${cardBg} rounded-2xl shadow-lg p-6 border ${borderColor}`}
            >
              <h2
                className={`text-xl font-bold ${textPrimary} mb-4 flex items-center gap-2`}
              >
                <FaAward className={iconColor} /> Achievements
              </h2>
              <div className="space-y-3">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`flex items-center gap-3 p-2 rounded-lg ${
                      achievement.completed
                        ? "bg-green-50 dark:bg-green-900/20"
                        : "opacity-50"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-full ${
                        achievement.completed
                          ? "bg-green-500"
                          : "bg-gray-300 dark:bg-gray-700"
                      }`}
                    >
                      <achievement.icon className="text-white" size={12} />
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${textPrimary}`}>
                        {achievement.title}
                      </p>
                      <p className={`text-xs ${textTertiary}`}>
                        {achievement.description}
                      </p>
                    </div>
                    {achievement.completed && achievement.date && (
                      <span className={`text-xs ${iconColor}`}>
                        {new Date(achievement.date).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div
              className={`${cardBg} rounded-2xl shadow-lg p-6 border ${borderColor}`}
            >
              <h2
                className={`text-xl font-bold ${textPrimary} mb-4 flex items-center gap-2`}
              >
                <FaChartBar className={iconColor} /> Quick Stats
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${textSecondary}`}>
                    Reading Time
                  </span>
                  <span className={`font-medium ${textPrimary}`}>
                    2.5 hours
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${textSecondary}`}>
                    Avg. Likes/Poem
                  </span>
                  <span className={`font-medium ${textPrimary}`}>144</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${textSecondary}`}>
                    Avg. Views/Poem
                  </span>
                  <span className={`font-medium ${textPrimary}`}>518</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${textSecondary}`}>
                    Global Rank
                  </span>
                  <span className={`font-medium ${iconColor}`}>
                    #{stats.ranking}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Growth Chart Placeholder */}
        <div
          className={`mt-8 ${cardBg} rounded-2xl shadow-lg p-6 border ${borderColor}`}
        >
          <h2
            className={`text-xl font-bold ${textPrimary} mb-4 flex items-center gap-2`}
          >
            <FaChartLine className={iconColor} /> Performance Overview
          </h2>
          <div className="h-64 flex items-center justify-center border-2 border-dashed ${borderColor} rounded-xl">
            <p className={textTertiary}>Chart visualization would go here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
