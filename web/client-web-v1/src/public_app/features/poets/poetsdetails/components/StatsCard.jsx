// src/public_app/features/poets/poetslist/components/StatsCard.jsx
const StatsCard = ({ value, label }) => {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-amber-600">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
};

export default StatsCard;
