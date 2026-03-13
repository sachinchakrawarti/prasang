// src/public_app/features/poets/poetslist/components/EmptyState.jsx
import { FaUserGraduate } from "react-icons/fa";

const EmptyState = ({
  title = "No poets found",
  message = "Try adjusting your search or filters",
}) => {
  return (
    <div className="text-center py-16 bg-gray-50 rounded-2xl">
      <FaUserGraduate className="text-5xl text-gray-400 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-700 mb-2">{title}</h3>
      <p className="text-gray-500">{message}</p>
    </div>
  );
};

export default EmptyState;
