// src/public_app/components/PoetryTags.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../theme";

export default function PoetryTags() {
  const { theme, themeName } = useTheme();

  const forms = [
    { label: "Monostich", slug: "monostich", path: "/monostich" },
    { label: "Couplet", slug: "couplet", path: "/couplets" },
    { label: "Triplet (Tercet)", slug: "tercet", path: "/forms/tercet" },
    { label: "Quatrain", slug: "quatrain", path: "/forms/quatrain" },
    { label: "Quintain (Cinquain)", slug: "cinquain", path: "/forms/cinquain" },
    { label: "Sestet", slug: "sestet", path: "/forms/sestet" },
    { label: "Septet", slug: "septet", path: "/forms/septet" },
    { label: "Octave", slug: "octave", path: "/forms/octave" },
    { label: "Sonnet", slug: "sonnet", path: "/poems-types/sonnet" },
  ];

  // Theme-based helper functions
  const getTagStyles = () => {
    switch (themeName) {
      case "forest":
        return {
          border: "border-green-200",
          bg: "bg-green-50",
          text: "text-green-700",
          hoverBg: "hover:bg-green-100",
          hoverBorder: "hover:border-green-300",
        };
      case "lavender":
        return {
          border: "border-purple-200",
          bg: "bg-purple-50",
          text: "text-purple-700",
          hoverBg: "hover:bg-purple-100",
          hoverBorder: "hover:border-purple-300",
        };
      case "rose":
        return {
          border: "border-rose-200",
          bg: "bg-rose-50",
          text: "text-rose-700",
          hoverBg: "hover:bg-rose-100",
          hoverBorder: "hover:border-rose-300",
        };
      case "sepia":
        return {
          border: "border-amber-300",
          bg: "bg-amber-100",
          text: "text-amber-800",
          hoverBg: "hover:bg-amber-200",
          hoverBorder: "hover:border-amber-400",
        };
      case "dark":
        return {
          border: "border-gray-700",
          bg: "bg-gray-800",
          text: "text-gray-300",
          hoverBg: "hover:bg-gray-700",
          hoverBorder: "hover:border-gray-600",
        };
      default: // light
        return {
          border: "border-amber-200",
          bg: "bg-amber-50",
          text: "text-amber-700",
          hoverBg: "hover:bg-amber-100",
          hoverBorder: "hover:border-amber-300",
        };
    }
  };

  const tagStyles = getTagStyles();

  return (
    <div className="flex flex-wrap gap-2 mb-7">
      {forms.map((form, index) => (
        <Link key={index} to={form.path}>
          <button
            className={`px-3 py-1.5 rounded-full border ${tagStyles.border} ${tagStyles.bg} ${tagStyles.text} ${tagStyles.hoverBg} ${tagStyles.hoverBorder} transition-colors text-sm font-medium cursor-pointer`}
          >
            {form.label}
          </button>
        </Link>
      ))}
    </div>
  );
}
