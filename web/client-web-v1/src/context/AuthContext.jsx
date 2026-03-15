// src/context/AuthContext.jsx
import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for saved user on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("prasang_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // Dummy users
  const dummyUsers = [
    {
      id: 1,
      email: "user@example.com",
      password: "password123",
      name: "John Doe",
      username: "johndoe",
      avatar:
        "https://ui-avatars.com/api/?name=John+Doe&background=amber&color=fff",
      bio: "Poetry enthusiast | Love reading and writing ghazals",
      joinDate: "2024-01-15",
      stats: {
        poems: 24,
        followers: 156,
        following: 89,
      },
    },
    {
      id: 2,
      email: "poet@example.com",
      password: "poet123",
      name: "Jane Smith",
      username: "janesmith",
      avatar:
        "https://ui-avatars.com/api/?name=Jane+Smith&background=purple&color=fff",
      bio: "Published poet | Writing since 2010",
      joinDate: "2023-08-20",
      stats: {
        poems: 67,
        followers: 1234,
        following: 234,
      },
    },
  ];

  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      // Simulate API call
      setTimeout(() => {
        const user = dummyUsers.find(
          (u) => u.email === email && u.password === password,
        );

        if (user) {
          const { password, ...userWithoutPassword } = user;
          setUser(userWithoutPassword);
          localStorage.setItem(
            "prasang_user",
            JSON.stringify(userWithoutPassword),
          );
          resolve({ success: true, user: userWithoutPassword });
        } else {
          reject({ success: false, message: "Invalid email or password" });
        }
      }, 1000);
    });
  };

  const signup = (userData) => {
    return new Promise((resolve, reject) => {
      // Simulate API call
      setTimeout(() => {
        // Check if user already exists
        const exists = dummyUsers.some((u) => u.email === userData.email);

        if (exists) {
          reject({ success: false, message: "User already exists" });
        } else {
          const newUser = {
            id: dummyUsers.length + 1,
            ...userData,
            avatar: `https://ui-avatars.com/api/?name=${userData.name.replace(" ", "+")}&background=amber&color=fff`,
            joinDate: new Date().toISOString().split("T")[0],
            stats: {
              poems: 0,
              followers: 0,
              following: 0,
            },
          };
          const { password, ...userWithoutPassword } = newUser;
          setUser(userWithoutPassword);
          localStorage.setItem(
            "prasang_user",
            JSON.stringify(userWithoutPassword),
          );
          resolve({ success: true, user: userWithoutPassword });
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("prasang_user");
  };

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
