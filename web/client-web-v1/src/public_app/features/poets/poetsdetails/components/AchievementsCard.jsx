// src/public_app/features/poets/poetsdetails/components/AchievementsCard.jsx
import { FaStar, FaAward } from "react-icons/fa";

const AchievementsCard = ({ achievements = [] }) => {
  if (!achievements || achievements.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
          <FaAward className="text-amber-500" /> Notable Achievements
        </h3>
        <p className="text-gray-500 text-sm">No achievements listed</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
        <FaAward className="text-amber-500" /> Notable Achievements
      </h3>
      <ul className="space-y-3">
        {achievements.map((achievement, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <FaStar className="text-amber-500 text-sm mt-1 flex-shrink-0" />
            <span className="text-gray-700 text-sm">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AchievementsCard;
