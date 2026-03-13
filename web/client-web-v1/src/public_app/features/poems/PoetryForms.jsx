// src/public_app/components/PoetryTags.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function PoetryTags() {
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

  return (
    <div className="flex flex-wrap gap-2 mb-7">
      {forms.map((form, index) => (
        <Link key={index} to={form.path}>
          <button className="px-3 py-1.5 rounded-full border border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100 hover:border-amber-300 transition-colors text-sm font-medium cursor-pointer">
            {form.label}
          </button>
        </Link>
      ))}
    </div>
  );
}
