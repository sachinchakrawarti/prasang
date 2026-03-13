// src/public_app/features/poets/poetsdetails/components/BiographyTab.jsx
import { FaPenFancy } from "react-icons/fa";

const BiographyTab = ({ poet }) => {
  return (
    <div className="space-y-4">
      <p className="text-gray-700 leading-relaxed">
        {poet.longBio || poet.bio}
      </p>

      <div className="mt-6 p-4 bg-amber-50 rounded-xl">
        <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <FaPenFancy className="text-amber-500" /> Writing Style
        </h4>
        <p className="text-gray-600 text-sm">{poet.writingStyle}</p>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 mb-2">Themes</h4>
        <div className="flex flex-wrap gap-2">
          {poet.themes.map((theme, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm"
            >
              {theme}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BiographyTab;
