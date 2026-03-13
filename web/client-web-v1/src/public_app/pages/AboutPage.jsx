// src/public_app/pages/AboutPage.jsx
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaBook,
  FaUsers,
  FaGlobe,
  FaQuoteLeft,
  FaEnvelope,
  FaFeather,
  FaLeaf,
  FaStar,
  FaPenFancy,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const AboutPage = () => {
  const team = [
    {
      name: "Rahul Verma",
      role: "Founder & Editor",
      bio: "Poet and writer with 10 years of experience. His work has been published in over 20 literary journals.",
      social: { twitter: "#", instagram: "#" },
    },
    {
      name: "Sneha Reddy",
      role: "Community Manager",
      bio: "Building connections between poets worldwide. She organizes monthly poetry readings and workshops.",
      social: { twitter: "#", instagram: "#" },
    },
    {
      name: "Amit Kumar",
      role: "Technical Lead",
      bio: "Making poetry accessible through technology. He believes in the perfect blend of art and code.",
      social: { twitter: "#", instagram: "#" },
    },
    {
      name: "Meera Joshi",
      role: "Content Curator",
      bio: "Discovering and featuring the best poetry from around the world. She's read over 10,000 poems!",
      social: { twitter: "#", instagram: "#" },
    },
    {
      name: "Arjun Singh",
      role: "Poetry Editor",
      bio: "Helping poets refine their craft. He's mentored over 50 emerging poets.",
      social: { twitter: "#", instagram: "#" },
    },
    {
      name: "Zara Khan",
      role: "Social Media Manager",
      bio: "Sharing poetry with the world one post at a time. She runs our Instagram poetry series.",
      social: { twitter: "#", instagram: "#" },
    },
  ];

  const milestones = [
    { year: "2020", event: "Prasang founded as a personal poetry blog" },
    { year: "2021", event: "Reached 100 poets in our community" },
    { year: "2022", event: "Launched mobile app and reached 1,000 poems" },
    { year: "2023", event: "Expanded to 50 countries and 10 languages" },
    { year: "2024", event: "Celebrating 10,000 poems and 2,500 poets" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-white rounded-3xl overflow-hidden shadow-2xl shadow-amber-200/50">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300 rounded-full translate-x-1/2 translate-y-1/2"></div>
          <FaFeather className="absolute top-10 right-10 text-6xl text-white/20 rotate-12" />
          <FaFeather className="absolute bottom-10 left-10 text-6xl text-white/20 -rotate-12" />
        </div>

        <div className="relative px-8 py-16 md:py-20 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <FaLeaf className="text-6xl text-white animate-float" />
              <FaStar className="text-yellow-200 absolute -top-2 -right-2 text-xl animate-pulse" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">
            About <span className="text-amber-900">Prasang</span>
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto">
            A sanctuary for poets and poetry lovers to connect, share, and
            inspire
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition border border-amber-100">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl flex items-center justify-center mb-6">
            <span className="text-3xl">🎯</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Prasang was born from a simple idea: to create a space where poetry
            thrives. We believe that poetry is for everyone, and every voice
            deserves to be heard. Our platform brings together poets from all
            walks of life, from seasoned writers to those putting pen to paper
            for the first time.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition border border-amber-100">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl flex items-center justify-center mb-6">
            <span className="text-3xl">✨</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            We envision a world where poetry is celebrated and accessible to
            all. Through technology and community, we're building the largest
            collection of contemporary poetry, connecting readers with the
            perfect poem for every moment.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white rounded-2xl shadow-lg p-8 border border-amber-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 mb-4">
              Have questions or suggestions? We'd love to hear from you. Reach
              out to us anytime.
            </p>
            <div className="space-y-3">
              <p className="flex items-center gap-3 text-gray-600">
                <FaEnvelope className="text-amber-500" /> hello@prasang.com
              </p>
              <p className="flex items-center gap-3 text-gray-600">
                <FaTwitter className="text-amber-500" /> @prasang_poetry
              </p>
              <p className="flex items-center gap-3 text-gray-600">
                <FaInstagram className="text-amber-500" /> @prasang.poetry
              </p>
            </div>
          </div>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-200"
            />
            <textarea
              rows="4"
              placeholder="Your message"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-200"
            />
            <button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-6 py-3 rounded-lg hover:from-amber-600 hover:to-yellow-600 transition shadow-md hover:shadow-lg">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer Note */}
      <div className="text-center text-gray-500 text-sm">
        <p>© 2024 Prasang Poetry Platform. All rights reserved.</p>
        <p className="mt-2">
          Made with <FaHeart className="inline text-rose-500" /> for poetry
          lovers everywhere
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
