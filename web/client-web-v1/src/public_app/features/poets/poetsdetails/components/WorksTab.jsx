// src/public_app/features/poets/poetsdetails/components/WorksTab.jsx
const WorksTab = ({ works }) => {
  return (
    <div className="space-y-4">
      {works.map((work, idx) => (
        <div
          key={idx}
          className="border border-gray-100 rounded-xl p-4 hover:shadow-md transition"
        >
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-bold text-gray-800">{work.title}</h4>
            <span className="text-xs px-2 py-1 bg-amber-100 text-amber-700 rounded-full">
              {work.type}
            </span>
          </div>
          {work.year && (
            <p className="text-sm text-gray-500 mb-2">Year: {work.year}</p>
          )}
          <p className="text-gray-600 text-sm">{work.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WorksTab;
