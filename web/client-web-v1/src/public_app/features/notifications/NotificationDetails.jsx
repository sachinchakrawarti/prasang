// src/public_app/features/notifications/NotificationDetails.jsx
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaBell,
  FaFeather,
  FaHeart,
  FaUserPlus,
  FaInfoCircle,
  FaTrash,
  FaCheck,
  FaCalendarAlt,
  FaLink,
} from "react-icons/fa";
import { useTheme } from "../../../theme";

// Sample data - replace with real data from your backend
const notificationsData = [
  {
    id: 1,
    type: "poem",
    title: "New poem from William Shakespeare",
    message: "Sonnet 154 has been added to the collection",
    description:
      "A new sonnet has been added to Shakespeare's collection. This sonnet explores themes of love and time, continuing the legacy of the previous 153 sonnets.",
    time: "2024-03-15T10:30:00Z",
    read: false,
    icon: FaFeather,
    iconColor: "text-amber-500",
    link: "/poem/154",
    relatedId: "154",
    relatedType: "poem",
    from: "William Shakespeare",
    priority: "medium",
  },
  // ... other notifications
];

const NotificationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [notification, setNotification] = useState(null);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const found = notificationsData.find((n) => n.id === parseInt(id));
      setNotification(found);
      setLoading(false);
    }, 500);
  }, [id]);

  const markAsRead = () => {
    if (notification && !notification.read) {
      // API call to mark as read
      setNotification({ ...notification, read: true });
    }
  };

  const deleteNotification = () => {
    // API call to delete
    navigate("/notifications");
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${theme.background.primary}`}
      >
        <div className="text-center">
          <div
            className={`w-16 h-16 border-4 ${theme.border.accent} border-t-amber-500 rounded-full animate-spin mx-auto mb-4`}
          ></div>
          <p className={theme.text.secondary}>Loading notification...</p>
        </div>
      </div>
    );
  }

  if (!notification) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${theme.background.primary}`}
      >
        <div className="text-center">
          <FaBell className={`text-5xl ${theme.icon.secondary} mx-auto mb-4`} />
          <h2 className={`text-2xl font-bold ${theme.text.primary} mb-2`}>
            Notification Not Found
          </h2>
          <p className={`${theme.text.secondary} mb-6`}>
            The notification you're looking for doesn't exist.
          </p>
          <Link
            to="/notifications"
            className={`inline-flex items-center gap-2 ${theme.button.primary} px-6 py-2 rounded-lg`}
          >
            <FaArrowLeft size={14} />
            Back to Notifications
          </Link>
        </div>
      </div>
    );
  }

  const Icon = notification.icon;

  return (
    <div className={`max-w-3xl mx-auto px-4 py-8 ${theme.background.primary}`}>
      {/* Back button */}
      <Link
        to="/notifications"
        className={`inline-flex items-center gap-2 ${theme.text.accent} ${theme.background.cardHover} px-4 py-2 rounded-lg mb-6 transition`}
      >
        <FaArrowLeft size={16} />
        Back to Notifications
      </Link>

      {/* Main Card */}
      <div
        className={`${theme.background.card} rounded-2xl shadow-xl border ${theme.border.card} overflow-hidden`}
      >
        {/* Header with gradient */}
        <div
          className={`bg-gradient-to-r from-amber-500 to-yellow-500 p-6 text-white`}
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl">
              <Icon />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-1">{notification.title}</h1>
              <p className="text-amber-100 text-sm">{notification.message}</p>
            </div>
            {!notification.read && (
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">
                New
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Meta info */}
          <div
            className={`flex flex-wrap items-center gap-4 mb-6 pb-6 border-b ${theme.border.light}`}
          >
            <div className="flex items-center gap-2">
              <FaCalendarAlt className={theme.icon.primary} size={14} />
              <span className={`text-sm ${theme.text.secondary}`}>
                {formatDate(notification.time)}
              </span>
            </div>
            <div className={`w-px h-4 ${theme.border.light}`}></div>
            <div className="flex items-center gap-2">
              <span
                className={`text-xs px-2 py-1 rounded-full ${theme.background.secondary} ${theme.text.secondary}`}
              >
                {notification.type}
              </span>
            </div>
            <div className={`w-px h-4 ${theme.border.light}`}></div>
            <div className="flex items-center gap-2">
              <span className={`text-xs ${theme.text.tertiary}`}>
                Priority:{" "}
                <span className={`font-medium ${theme.text.primary}`}>
                  {notification.priority}
                </span>
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className={`text-lg font-semibold ${theme.text.primary} mb-3`}>
              Details
            </h2>
            <p className={`${theme.text.secondary} leading-relaxed`}>
              {notification.description}
            </p>
          </div>

          {/* Related info */}
          {notification.from && (
            <div
              className={`mb-8 p-4 ${theme.background.secondary} rounded-xl`}
            >
              <h3 className={`text-sm font-medium ${theme.text.primary} mb-2`}>
                From
              </h3>
              <p className={`text-lg ${theme.text.accent}`}>
                {notification.from}
              </p>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 pt-6 border-t ${theme.border.light}">
            {notification.link && (
              <Link
                to={notification.link}
                className={`flex items-center gap-2 ${theme.button.primary} px-6 py-2 rounded-lg text-sm font-medium`}
              >
                <FaLink size={14} />
                View Related Content
              </Link>
            )}
            {!notification.read && (
              <button
                onClick={markAsRead}
                className={`flex items-center gap-2 ${theme.button.secondary} px-6 py-2 rounded-lg text-sm font-medium`}
              >
                <FaCheck size={14} />
                Mark as Read
              </button>
            )}
            <button
              onClick={deleteNotification}
              className={`flex items-center gap-2 border-2 border-rose-500 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 px-6 py-2 rounded-lg text-sm font-medium ml-auto`}
            >
              <FaTrash size={14} />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationDetails;
