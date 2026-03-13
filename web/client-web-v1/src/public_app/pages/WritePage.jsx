import { useState } from "react";
import { FaPenFancy, FaTags, FaSave, FaEye } from "react-icons/fa";

const WritePage = () => {
  const [poemData, setPoemData] = useState({
    title: "",
    content: "",
    category: "",
    tags: "",
  });

  const categories = [
    "Love",
    "Nature",
    "Sad",
    "Inspirational",
    "Spiritual",
    "Humorous",
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-3">
          <FaPenFancy className="text-indigo-600" /> Write a New Poem
        </h1>
        <p className="text-gray-500 mb-8">
          Share your thoughts, feelings, and creativity with the world
        </p>

        <form className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Poem Title
            </label>
            <input
              type="text"
              value={poemData.title}
              onChange={(e) =>
                setPoemData({ ...poemData, title: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
              placeholder="Give your poem a beautiful title"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Category
            </label>
            <select
              value={poemData.category}
              onChange={(e) =>
                setPoemData({ ...poemData, category: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Poem Content */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Your Poem
            </label>
            <textarea
              rows="12"
              value={poemData.content}
              onChange={(e) =>
                setPoemData({ ...poemData, content: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 font-serif"
              placeholder="Write your poem here... Each line, each word, each pause..."
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
              <FaTags /> Tags (comma separated)
            </label>
            <input
              type="text"
              value={poemData.tags}
              onChange={(e) =>
                setPoemData({ ...poemData, tags: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
              placeholder="e.g., love, nature, heartbreak, hope"
            />
          </div>

          {/* Tips */}
          <div className="bg-indigo-50 rounded-lg p-4">
            <h3 className="font-semibold text-indigo-800 mb-2">
              ✨ Writing Tips
            </h3>
            <ul className="text-sm text-indigo-700 space-y-1">
              <li>• Read your poem aloud to check the flow</li>
              <li>• Use imagery to paint pictures with words</li>
              <li>• Don't be afraid to revise and edit</li>
              <li>• Be authentic - write from the heart</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="flex-1 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center gap-2">
              <FaSave /> Publish Poem
            </button>
            <button className="flex-1 border-2 border-gray-300 text-gray-600 py-3 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2">
              <FaEye /> Preview
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WritePage;
