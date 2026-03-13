// src/public_app/layout/navbar/components/Notification.jsx
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBell, FaCheckCircle, FaInfoCircle, FaHeart, FaUserPlus, FaFeather, FaTimes } from "react-icons/fa";

// Sample notification data - in real app, this would come from an API/context
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

const Notification = ({ 
  notifications = sampleNotifications,
  onNotificationClick,
  onMarkAllRead,
  position = "right",
  maxHeight = "max-h-96",
  width = "w-80",
  showCount = true,
  autoClose = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localNotifications, setLocalNotifications] = useState(notifications);
  const notificationRef = useRef(null);

  const unreadCount = localNotifications.filter((n) => !n.read).length;

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const markAsRead = (id) => {
    setLocalNotifications(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
    if (onNotificationClick) onNotificationClick(id);
  };

  const markAllAsRead = () => {
    setLocalNotifications(prev =>
      prev.map(notif => ({ ...notif, read: true }))
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
        className="p-2 text-amber-600 hover:bg-amber-100 rounded-full transition-all relative group"
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
        <div className={`absolute ${positionClasses[position]} mt-2 ${width} bg-white rounded-2xl shadow-xl border border-amber-200 py-2 z-50`}>
          {/* Header */}
          <div className="px-4 py-2 text-sm font-semibold text-amber-600 border-b border-amber-200 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FaBell className="text-amber-500" />
              <span>Notifications</span>
            </div>
            <div className="flex items-center gap-2">
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-xs text-amber-600 hover:text-amber-700 hover:underline"
                >
                  Mark all read
                </button>
              )}
              {localNotifications.length > 0 && (
                <button
                  onClick={clearAll}
                  className="text-xs text-gray-400 hover:text-gray-600"
                  title="Clear all"
                >
                  <FaTimes size={12} />
                </button>
              )}
            </div>
          </div>

          {/* Notifications List */}
          {localNotifications.length === 0 ? (
            <div className="px-4 py-8 text-center text-gray-500">
              <FaCheckCircle className="mx-auto text-3xl text-green-400 mb-2" />
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
                    className={`block px-4 py-3 hover:bg-amber-50 cursor-pointer transition ${
                      !notif.read ? "bg-amber-50/50" : ""
                    }`}
                  >
                    <div className="flex gap-3">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center ${notif.iconColor}`}>
                        <Icon size={16} />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-800">
                          {notif.message}
                        </p>
                        {notif.description && (
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                            {notif.description}
                          </p>
                        )}
                        <p className="text-[10px] text-gray-400 mt-1">
                          {notif.time}
                        </p>
                      </div>

                      {/* Unread indicator */}
                      {!notif.read && (
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-1"></div>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          {/* Footer */}
          {localNotifications.length > 0 && (
            <div className="px-4 py-2 text-center border-t border-amber-200">
              <Link
                to="/notifications"
                className="text-sm text-amber-600 hover:text-amber-700 hover:underline"
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

// Optional: Separate component for the notifications page
export const NotificationsPage = () => {
  const [allNotifications, setAllNotifications] = useState(sampleNotifications);

  const markAsRead = (id) => {
    setAllNotifications(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setAllNotifications(prev =>
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const deleteNotification = (id) => {
    setAllNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const unreadCount = allNotifications.filter(n => !n.read).length;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Notifications
          </span>
        </h1>
        {unreadCount > 0 && (
          <button
            onClick={markAllAsRead}
            className="text-amber-600 hover:text-amber-700 text-sm font-medium"
          >
            Mark all as read
          </button>
        )}
      </div>

      {/* Stats */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div className="flex items-center justify-around">
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-600">{allNotifications.length}</div>
            <div className="text-xs text-gray-500">Total</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{unreadCount}</div>
            <div className="text-xs text-gray-500">Unread</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-600">{allNotifications.length - unreadCount}</div>
            <div className="text-xs text-gray-500">Read</div>
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {allNotifications.length === 0 ? (
          <div className="text-center py-16">
            <FaCheckCircle className="text-5xl text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">All caught up!</h3>
            <p className="text-gray-500">You have no notifications at the moment</p>
          </div>
        ) : (
          <div className="divide-y divide-amber-100">
            {allNotifications.map((notif) => {
              const Icon = notif.icon;
              return (
                <div
                  key={notif.id}
                  className={`p-6 ${!notif.read ? 'bg-amber-50/30' : ''}`}
                >
                  <div className="flex gap-4">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center ${notif.iconColor}`}>
                      <Icon size={20} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-800">{notif.message}</h3>
                        <span className="text-xs text-gray-400">{notif.time}</span>
                      </div>
                      {notif.description && (
                        <p className="text-sm text-gray-600 mb-3">{notif.description}</p>
                      )}
                      <div className="flex gap-3">
                        {notif.link && (
                          <Link
                            to={notif.link}
                            className="text-xs text-amber-600 hover:text-amber-700 font-medium"
                          >
                            View Details →
                          </Link>
                        )}
                        {!notif.read && (
                          <button
                            onClick={() => markAsRead(notif.id)}
                            className="text-xs text-gray-500 hover:text-gray-700"
                          >
                            Mark as read
                          </button>
                        )}
                        <button
                          onClick={() => deleteNotification(notif.id)}
                          className="text-xs text-rose-500 hover:text-rose-700"
                        >
                          Delete
                        </button>
                      </div>
                    </div>

                    {/* Unread indicator */}
                    {!notif.read && (
                      <div className="w-3 h-3 bg-amber-500 rounded-full mt-2"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification;