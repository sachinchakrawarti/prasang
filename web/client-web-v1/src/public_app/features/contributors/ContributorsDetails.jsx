// src/public_app/features/contributors/ContributorsDetails.jsx
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaGlobe,
  FaLanguage,
  FaGraduationCap,
  FaBookOpen,
  FaQuoteLeft,
  FaQuoteRight,
  FaStar,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUserGraduate,
  FaPenFancy,
  FaAward,
  FaUniversity,
  FaBookmark,
  FaShare,
  FaEnvelope,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { contributorsData } from "../../data/contributors/ContributorsData";

const ContributorsDetails = () => {
  const { id } = useParams();
  const [contributor, setContributor] = useState(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const found = contributorsData.find((c) => c.id === id);
    setContributor(found);
  }, [id]);

  if (!contributor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Contributor Not Found
          </h2>
          <p className="text-gray-600 mb-4">
            The contributor you're looking for doesn't exist.
          </p>
          <Link
            to="/contributors"
            className="text-amber-600 hover:text-amber-700"
          >
            ← Back to Contributors
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <Link
        to="/contributors"
        className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-6 group"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition" />
        Back to Contributors
      </Link>

      {/* Hero Section */}
      <div
        className={`bg-gradient-to-r ${contributor.color} rounded-3xl p-8 mb-8 text-white relative overflow-hidden`}
      >
        <div className="absolute inset-0 opacity-10">
          <FaGraduationCap className="absolute top-5 right-5 text-8xl rotate-12" />
          <FaBookOpen className="absolute bottom-5 left-5 text-8xl -rotate-12" />
        </div>

        <div className="relative flex flex-col md:flex-row gap-6 items-start md:items-center">
          {/* Profile Image */}
          <div className="w-28 h-28 rounded-2xl border-4 border-white shadow-xl overflow-hidden">
            <img
              src={contributor.image}
              alt={contributor.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  contributor.name,
                )}&background=amber&color=fff&size=112`;
              }}
            />
          </div>

          {/* Basic Info */}
          <div className="flex-1">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="text-4xl font-bold mb-2">{contributor.name}</h1>
                <p className="text-amber-100 text-lg mb-2">
                  {contributor.fullName}
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                    <FaUserGraduate size={12} /> {contributor.role}
                  </span>
                  <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                    <FaGlobe size={12} /> {contributor.country}
                  </span>
                  <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                    <FaCalendarAlt size={12} /> {contributor.era}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSaved(!saved)}
                className={`p-3 rounded-xl transition ${
                  saved
                    ? "bg-amber-500 text-white"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                <FaBookmark size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Personal Info */}
        <div className="lg:col-span-1 space-y-6">
          {/* Personal Details Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FaMapMarkerAlt className="text-amber-500" /> Personal Details
            </h3>
            <div className="space-y-3">
              {contributor.born && (
                <div>
                  <p className="text-xs text-gray-500">Born</p>
                  <p className="text-gray-700">{contributor.born}</p>
                  {contributor.birthplace && (
                    <p className="text-sm text-gray-500">
                      {contributor.birthplace}
                    </p>
                  )}
                </div>
              )}
              {contributor.died && (
                <div>
                  <p className="text-xs text-gray-500">Died</p>
                  <p className="text-gray-700">{contributor.died}</p>
                </div>
              )}
              <div>
                <p className="text-xs text-gray-500">Education</p>
                {contributor.education.map((edu, idx) => (
                  <p key={idx} className="text-gray-700 text-sm">
                    {edu}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Languages Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FaLanguage className="text-amber-500" /> Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {contributor.languages.map((lang, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Affiliations Card */}
          {contributor.affiliations && (
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaUniversity className="text-amber-500" /> Affiliations
              </h3>
              <ul className="space-y-2">
                {contributor.affiliations.map((aff, idx) => (
                  <li
                    key={idx}
                    className="text-gray-700 text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                    {aff}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Credentials Card */}
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              Credentials
            </h3>
            <p className="text-gray-700 text-sm">{contributor.credentials}</p>
          </div>
        </div>

        {/* Right Column - Detailed Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Biography */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Biography</h3>
            <p className="text-gray-700 leading-relaxed">
              {contributor.longBio || contributor.bio}
            </p>
          </div>

          {/* Notable Works */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FaBookOpen className="text-amber-500" /> Notable Works
            </h3>
            <div className="space-y-4">
              {contributor.notableWorks.map((work, idx) => (
                <div
                  key={idx}
                  className="border-b border-amber-100 pb-4 last:border-0 last:pb-0"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-800">
                      {work.title}
                    </h4>
                    <span className="text-xs px-2 py-1 bg-amber-100 text-amber-700 rounded-full">
                      {work.type}
                    </span>
                  </div>
                  {work.year && (
                    <p className="text-sm text-gray-500 mb-1">
                      Year: {work.year}
                    </p>
                  )}
                  <p className="text-sm text-gray-600">{work.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Areas of Expertise
            </h3>
            <div className="flex flex-wrap gap-2">
              {contributor.expertise.map((exp, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm"
                >
                  {exp}
                </span>
              ))}
            </div>
          </div>

          {/* Awards */}
          {contributor.awards && contributor.awards.length > 0 && (
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaAward className="text-amber-500" /> Awards & Recognition
              </h3>
              <div className="space-y-4">
                {contributor.awards.map((award, idx) => (
                  <div key={idx} className="flex gap-3">
                    <FaStar className="text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {award.name}
                      </h4>
                      {award.year && (
                        <p className="text-sm text-gray-500">{award.year}</p>
                      )}
                      {award.description && (
                        <p className="text-sm text-gray-600">
                          {award.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quotes */}
          {contributor.quotes && contributor.quotes.length > 0 && (
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaQuoteLeft className="text-amber-500" /> Notable Quotes
              </h3>
              <div className="space-y-4">
                {contributor.quotes.map((quote, idx) => (
                  <div key={idx} className="relative">
                    <FaQuoteLeft className="text-amber-300 absolute -left-2 -top-2 text-xl opacity-50" />
                    <p className="text-gray-700 italic pl-4">"{quote.text}"</p>
                    {quote.source && (
                      <p className="text-sm text-amber-600 mt-1 text-right">
                        — {quote.source}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stats Summary */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Contributions Summary
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-amber-50 rounded-xl">
                <div className="text-3xl font-bold text-amber-600">
                  {contributor.contributions}
                </div>
                <div className="text-sm text-gray-600">Contributions</div>
              </div>
              <div className="text-center p-4 bg-amber-50 rounded-xl">
                <div className="text-3xl font-bold text-amber-600">
                  {contributor.publications}
                </div>
                <div className="text-sm text-gray-600">Publications</div>
              </div>
              <div className="text-center p-4 bg-amber-50 rounded-xl">
                <div className="text-3xl font-bold text-amber-600">
                  {contributor.languages.length}
                </div>
                <div className="text-sm text-gray-600">Languages</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Contributors Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          More {contributor.role}s
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contributorsData
            .filter(
              (c) =>
                c.roleType === contributor.roleType && c.id !== contributor.id,
            )
            .slice(0, 3)
            .map((related) => (
              <Link
                key={related.id}
                to={`/contributor/${related.id}`}
                className="group bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          related.name,
                        )}&background=amber&color=fff&size=48`;
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 group-hover:text-amber-600 transition">
                      {related.name}
                    </h3>
                    <p className="text-xs text-gray-500">{related.country}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ContributorsDetails;
