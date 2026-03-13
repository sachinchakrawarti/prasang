// src/public_app/features/poets/poetsdetails/components/LegacySection.jsx
const LegacySection = ({ legacy }) => {
  return (
    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6">
      <h3 className="font-bold text-lg text-gray-800 mb-3">Legacy</h3>
      <p className="text-gray-700 leading-relaxed">{legacy}</p>
    </div>
  );
};

export default LegacySection;
