// src/public_app/features/notifications/DesktopNotificationsDropDown.jsx
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaBell,
  FaCheckCircle,
  FaTimes,
  FaFeather,
  FaHeart,
  FaUserPlus,
  FaInfoCircle,
} from "react-icons/fa";
import { useTheme } from "../../../theme";

// Sample notification data - replace with real data from your backend
const sampleNotifications = [
  {
    id: 1,
    type: "poem",
    message: "New poem from William Shakespeare",
    description: "Sonnet 154 has been added to the collection",
    time: "5 min ago",
    read: false,
    icon: FaFeather,
    iconColor: "text-amber-500",
    link: "/poem/154",
  },
  {
    id: 2,
    type: "like",
    message: "Your poem 'Sonnet 18' got 50 likes",
    description: "Congratulations! Your poem is trending",
    time: "1 hour ago",
    read: false,
    icon: FaHeart,
    iconColor: "text-rose-500",
    link: "/poem/18",
  },
  {
    id: 3,
    type: "poet",
    message: "Faiz Ahmed Faiz published new ghazal",
    description: "New ghazal added to his collection",
    time: "3 hours ago",
    read: true,
    icon: FaFeather,
    iconColor: "text-emerald-500",
    link: "/poems-types/gazal/faiz/urdu",
  },
  {
    id: 4,
    type: "event",
    message: "Weekly poetry contest starts tomorrow",
    description: "Theme: 'Nature's Beauty' - Submit your entries",
    time: "1 day ago",
    read: true,
    icon: FaInfoCircle,
    iconColor: "text-purple-500",
    link: "/contests",
  },
  {
    id: 5,
    type: "follow",
    message: "John Keats started following you",
    description: "You have a new follower",
    time: "2 days ago",
    read: true,
    icon: FaUserPlus,
    iconColor: "text-blue-500",
    link: "/poet/john-keats",
  },
];

const DesktopNotificationsDropDown = ({
  notifications = sampleNotifications,
  onNotificationClick,
  onMarkAllRead,
  position = "right",
  maxHeight = "max-h-96",
  width = "w-80",
  showCount = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localNotifications, setLocalNotifications] = useState(notifications);
  const notificationRef = useRef(null);
  const { theme } = useTheme();

  const unreadCount = localNotifications.filter((n) => !n.read).length;

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const markAsRead = (id) => {
    setLocalNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)),
    );
    if (onNotificationClick) onNotificationClick(id);
  };

  const markAllAsRead = () => {
    setLocalNotifications((prev) =>
      prev.map((notif) => ({ ...notif, read: true })),
    );
    if (onMarkAllRead) onMarkAllRead();
  };

  const clearAll = () => {
    setLocalNotifications([]);
  };

  const positionClasses = {
    right: "right-0",
    left: "left-0",
    center: "left-1/2 transform -translate-x-1/2",
  };

  return (
    <div className="relative" ref={notificationRef}>
      {/* Notification Bell Button */}
      <button
        onClick={toggleDropdown}
        className={`p-2 ${theme.text.accent} ${theme.background.cardHover} rounded-full transition-all relative group`}
        aria-label="Notifications"
      >
        <FaBell size={18} />
        {showCount && unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full animate-pulse">
            {unreadCount}
          </span>
        )}
        <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          Notifications
        </span>
      </button>

      {/* Notifications Dropdown */}
      {isOpen && (
        <div
          className={`absolute ${positionClasses[position]} mt-2 ${width} ${theme.background.card} rounded-2xl shadow-xl border ${theme.border.accent} py-2 z-50`}
        >
          {/* Header */}
          <div
            className={`px-4 py-2 text-sm font-semibold ${theme.text.accent} border-b ${theme.border.accent} flex justify-between items-center`}
          >
            <div className="flex items-center gap-2">
              <FaBell className={theme.icon.primary} />
              <span>Notifications</span>
            </div>
            <div className="flex items-center gap-2">
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className={`text-xs ${theme.text.accent} hover:underline`}
                >
                  Mark all read
                </button>
              )}
              {localNotifications.length > 0 && (
                <button
                  onClick={clearAll}
                  className={`text-xs ${theme.text.tertiary} hover:${theme.text.primary}`}
                  title="Clear all"
                >
                  <FaTimes size={12} />
                </button>
              )}
            </div>
          </div>

          {/* Notifications List */}
          {localNotifications.length === 0 ? (
            <div className={`px-4 py-8 text-center ${theme.text.tertiary}`}>
              <FaCheckCircle
                className={`mx-auto text-3xl ${theme.icon.success} mb-2`}
              />
              <p className="text-sm">All caught up!</p>
              <p className="text-xs mt-1">No new notifications</p>
            </div>
          ) : (
            <div className={`${maxHeight} overflow-y-auto`}>
              {localNotifications.map((notif) => {
                const Icon = notif.icon;
                return (
                  <Link
                    key={notif.id}
                    to={notif.link || "#"}
                    onClick={() => markAsRead(notif.id)}
                    className={`block px-4 py-3 ${theme.background.cardHover} cursor-pointer transition ${
                      !notif.read ? theme.background.secondary : ""
                    }`}
                  >
                    <div className="flex gap-3">
                      {/* Icon */}
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full ${theme.background.secondary} flex items-center justify-center ${notif.iconColor}`}
                      >
                        <Icon size={16} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <p
                          className={`text-sm font-medium ${theme.text.primary}`}
                        >
                          {notif.message}
                        </p>
                        {notif.description && (
                          <p
                            className={`text-xs ${theme.text.tertiary} mt-0.5 line-clamp-1`}
                          >
                            {notif.description}
                          </p>
                        )}
                        <p className={`text-[10px] ${theme.text.light} mt-1`}>
                          {notif.time}
                        </p>
                      </div>

                      {/* Unread indicator */}
                      {!notif.read && (
                        <div
                          className={`w-2 h-2 ${theme.text.accent.replace("text", "bg")} rounded-full mt-1`}
                        ></div>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          {/* Footer */}
          {localNotifications.length > 0 && (
            <div
              className={`px-4 py-2 text-center border-t ${theme.border.accent}`}
            >
              <Link
                to="/notifications"
                className={`text-sm ${theme.text.accent} hover:underline`}
                onClick={() => setIsOpen(false)}
              >
                View all notifications
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DesktopNotificationsDropDown;
