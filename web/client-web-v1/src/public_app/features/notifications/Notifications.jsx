// src/public_app/features/notifications/Notifications.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBell,
  FaCheckCircle,
  FaFeather,
  FaHeart,
  FaUserPlus,
  FaInfoCircle,
  FaArrowLeft,
  FaCheck,
  FaTrash,
  FaFilter,
} from "react-icons/fa";
import { useTheme } from "../../../theme";

// Sample data - replace with real data from your backend
const sampleNotifications = [
  {
    id: 1,
    type: "poem",
    title: "New poem from William Shakespeare",
    message: "Sonnet 154 has been added to the collection",
    description: "A new sonnet has been added to Shakespeare's collection.",
    time: "2024-03-15T10:30:00Z",
    read: false,
    icon: FaFeather,
    iconColor: "text-amber-500",
    link: "/poem/154",
  },
  {
    id: 2,
    type: "like",
    title: "Your poem 'Sonnet 18' got 50 likes",
    message: "Congratulations! Your poem is trending",
    description: "Your poem has reached 50 likes. Keep up the great work!",
    time: "2024-03-15T09:15:00Z",
    read: false,
    icon: FaHeart,
    iconColor: "text-rose-500",
    link: "/poem/18",
  },
  {
    id: 3,
    type: "poet",
    title: "Faiz Ahmed Faiz published new ghazal",
    message: "New ghazal added to his collection",
    description: "A new ghazal has been published by Faiz Ahmed Faiz.",
    time: "2024-03-14T16:45:00Z",
    read: true,
    icon: FaFeather,
    iconColor: "text-emerald-500",
    link: "/poems-types/gazal/faiz/urdu",
  },
  {
    id: 4,
    type: "event",
    title: "Weekly poetry contest starts tomorrow",
    message: "Theme: 'Nature's Beauty' - Submit your entries",
    description: "Get ready to showcase your poetry. Winners get featured!",
    time: "2024-03-14T11:20:00Z",
    read: true,
    icon: FaInfoCircle,
    iconColor: "text-purple-500",
    link: "/contests",
  },
  {
    id: 5,
    type: "follow",
    title: "John Keats started following you",
    message: "You have a new follower",
    description: "John Keats is now following your work.",
    time: "2024-03-13T08:00:00Z",
    read: true,
    icon: FaUserPlus,
    iconColor: "text-blue-500",
    link: "/poet/john-keats",
  },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(sampleNotifications);
  const [filter, setFilter] = useState("all");
  const { theme } = useTheme();

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)),
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  const deleteAllRead = () => {
    setNotifications((prev) => prev.filter((notif) => !notif.read));
  };

  const filteredNotifications = notifications.filter((notif) => {
    if (filter === "unread") return !notif.read;
    if (filter === "read") return notif.read;
    return true;
  });

  const unreadCount = notifications.filter((n) => !n.read).length;

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins} min ago`;
    if (diffHours < 24) return `${diffHours} hour ago`;
    if (diffDays < 7) return `${diffDays} day ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className={`max-w-4xl mx-auto px-4 py-8 ${theme.background.primary}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className={`p-2 ${theme.text.accent} ${theme.background.cardHover} rounded-full transition`}
          >
            <FaArrowLeft size={20} />
          </Link>
          <h1 className={`text-3xl font-bold ${theme.text.primary}`}>
            Notifications
          </h1>
        </div>
        <div className="flex gap-2">
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className={`px-4 py-2 ${theme.button.secondary} rounded-lg text-sm font-medium flex items-center gap-2`}
            >
              <FaCheck size={14} />
              Mark all read
            </button>
          )}
          <button
            onClick={deleteAllRead}
            className={`px-4 py-2 ${theme.button.ghost} rounded-lg text-sm font-medium flex items-center gap-2`}
          >
            <FaTrash size={14} />
            Clear read
          </button>
        </div>
      </div>

      {/* Filters */}
      <div
        className={`flex gap-2 mb-6 p-2 ${theme.background.card} rounded-xl border ${theme.border.card}`}
      >
        <button
          onClick={() => setFilter("all")}
          className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition ${
            filter === "all"
              ? `${theme.button.primary}`
              : `${theme.text.secondary} ${theme.background.cardHover}`
          }`}
        >
          All ({notifications.length})
        </button>
        <button
          onClick={() => setFilter("unread")}
          className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition ${
            filter === "unread"
              ? `${theme.button.primary}`
              : `${theme.text.secondary} ${theme.background.cardHover}`
          }`}
        >
          Unread ({unreadCount})
        </button>
        <button
          onClick={() => setFilter("read")}
          className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition ${
            filter === "read"
              ? `${theme.button.primary}`
              : `${theme.text.secondary} ${theme.background.cardHover}`
          }`}
        >
          Read ({notifications.length - unreadCount})
        </button>
      </div>

      {/* Stats */}
      <div
        className={`grid grid-cols-3 gap-4 mb-6 ${theme.background.card} rounded-xl p-4 border ${theme.border.card}`}
      >
        <div className="text-center">
          <div className={`text-2xl font-bold ${theme.text.accent}`}>
            {notifications.length}
          </div>
          <div className={`text-xs ${theme.text.tertiary}`}>Total</div>
        </div>
        <div className="text-center">
          <div
            className={`text-2xl font-bold text-green-600 dark:text-green-400`}
          >
            {unreadCount}
          </div>
          <div className={`text-xs ${theme.text.tertiary}`}>Unread</div>
        </div>
        <div className="text-center">
          <div className={`text-2xl font-bold ${theme.text.primary}`}>
            {notifications.length - unreadCount}
          </div>
          <div className={`text-xs ${theme.text.tertiary}`}>Read</div>
        </div>
      </div>

      {/* Notifications List */}
      <div className={`space-y-3`}>
        {filteredNotifications.length === 0 ? (
          <div
            className={`text-center py-16 ${theme.background.card} rounded-2xl border ${theme.border.card}`}
          >
            <FaCheckCircle
              className={`text-5xl ${theme.icon.success} mx-auto mb-4`}
            />
            <h3 className={`text-xl font-semibold ${theme.text.primary} mb-2`}>
              {filter === "all"
                ? "No notifications"
                : filter === "unread"
                  ? "No unread notifications"
                  : "No read notifications"}
            </h3>
            <p className={theme.text.tertiary}>
              {filter === "all"
                ? "You're all caught up!"
                : filter === "unread"
                  ? "Check back later for updates"
                  : "Read notifications will appear here"}
            </p>
          </div>
        ) : (
          filteredNotifications.map((notif) => {
            const Icon = notif.icon;
            return (
              <div
                key={notif.id}
                className={`group ${theme.background.card} rounded-xl border ${theme.border.card} hover:shadow-md transition overflow-hidden ${
                  !notif.read ? `border-l-4 border-l-amber-500` : ""
                }`}
              >
                <div className="p-4">
                  <div className="flex gap-4">
                    {/* Icon */}
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-full ${theme.background.secondary} flex items-center justify-center ${notif.iconColor}`}
                    >
                      <Icon size={20} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className={`font-semibold ${theme.text.primary}`}>
                          {notif.title}
                        </h3>
                        <span className={`text-xs ${theme.text.light}`}>
                          {formatTime(notif.time)}
                        </span>
                      </div>
                      <p className={`text-sm ${theme.text.secondary} mb-2`}>
                        {notif.message}
                      </p>
                      {notif.description && (
                        <p className={`text-sm ${theme.text.tertiary} mb-3`}>
                          {notif.description}
                        </p>
                      )}

                      {/* Actions */}
                      <div className="flex gap-3">
                        {notif.link && (
                          <Link
                            to={notif.link}
                            className={`text-xs ${theme.text.accent} hover:underline font-medium`}
                          >
                            View Details →
                          </Link>
                        )}
                        {!notif.read && (
                          <button
                            onClick={() => markAsRead(notif.id)}
                            className={`text-xs ${theme.text.tertiary} hover:${theme.text.primary} transition`}
                          >
                            Mark as read
                          </button>
                        )}
                        <button
                          onClick={() => deleteNotification(notif.id)}
                          className={`text-xs text-rose-500 hover:text-rose-600 dark:text-rose-400 dark:hover:text-rose-300 transition`}
                        >
                          Delete
                        </button>
                      </div>
                    </div>

                    {/* Unread indicator dot (only if not read and not already indicated by border) */}
                    {!notif.read && (
                      <div
                        className={`w-2 h-2 ${theme.text.accent.replace("text", "bg")} rounded-full mt-2`}
                      ></div>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Notifications;
