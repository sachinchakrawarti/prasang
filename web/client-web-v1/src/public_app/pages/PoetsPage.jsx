import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaBook,
  FaHeart,
  FaSearch,
  FaMapMarkerAlt,
} from "react-icons/fa";

const PoetsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const poets = [
    {
      id: 1,
      name: "Amara Khan",
      poems: 45,
      followers: 1234,
      likes: 3456,
      location: "Mumbai",
      bio: "Writing poetry since 2015. Love exploring emotions through words.",
    },
    {
      id: 2,
      name: "Ravi Sharma",
      poems: 32,
      followers: 892,
      likes: 2341,
      location: "Delhi",
      bio: "Poet, dreamer, nature lover. Finding magic in ordinary moments.",
    },
    {
      id: 3,
      name: "Priya Patel",
      poems: 28,
      followers: 756,
      likes: 1892,
      location: "Bangalore",
      bio: "Writing to heal, to feel, to express. Words are my sanctuary.",
    },
    {
      id: 4,
      name: "Arjun Mehta",
      poems: 51,
      followers: 2103,
      likes: 5678,
      location: "Pune",
      bio: "Spreading positivity through verses. Poetry is my meditation.",
    },
    {
      id: 5,
      name: "Neha Singh",
      poems: 19,
      followers: 445,
      likes: 1123,
      location: "Chennai",
      bio: "New voice in poetry. Writing about love, life and everything in between.",
    },
    {
      id: 6,
      name: "Vikram Rathore",
      poems: 37,
      followers: 1567,
      likes: 4231,
      location: "Jaipur",
      bio: "Rajasthani poet. Writing about desert, love and traditions.",
    },
  ];

  const filteredPoets = poets.filter(
    (poet) =>
      poet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      poet.location.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Poets</h1>
        <p className="text-gray-600">
          Connect with talented poets from around the world
        </p>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="relative">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search poets by name or location..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Poets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPoets.map((poet) => (
          <div
            key={poet.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {poet.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{poet.name}</h3>
                <p className="text-gray-500 text-sm flex items-center gap-1">
                  <FaMapMarkerAlt className="text-gray-400" /> {poet.location}
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {poet.bio}
            </p>

            <div className="grid grid-cols-3 gap-2 mb-4 text-center">
              <div>
                <div className="font-semibold text-indigo-600">
                  {poet.poems}
                </div>
                <div className="text-xs text-gray-500">Poems</div>
              </div>
              <div>
                <div className="font-semibold text-indigo-600">
                  {poet.followers}
                </div>
                <div className="text-xs text-gray-500">Followers</div>
              </div>
              <div>
                <div className="font-semibold text-indigo-600">
                  {poet.likes}
                </div>
                <div className="text-xs text-gray-500">Likes</div>
              </div>
            </div>

            <div className="flex gap-2">
              <Link
                to={`/poet/${poet.id}`}
                className="flex-1 text-center bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                View Profile
              </Link>
              <button className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition">
                Follow
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PoetsPage;
