// src/public_app/features/poets/poetsdetails/components/InfoCard.jsx
import { FaMapMarkerAlt } from "react-icons/fa";

const InfoCard = ({ poet }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
        <span className="text-amber-500">📋</span> Personal Details
      </h3>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500">Born</p>
          <p className="text-gray-800">{poet.born}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Died</p>
          <p className="text-gray-800">{poet.died}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Birthplace</p>
          <p className="text-gray-800 flex items-center gap-1">
            <FaMapMarkerAlt className="text-amber-500 text-sm" />
            {poet.birthplace}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Period</p>
          <p className="text-gray-800">{poet.period}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
