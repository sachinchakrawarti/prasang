// src/public_app/features/poets/poetsdetails/components/TabNavigation.jsx
const TabNavigation = ({
  activeTab = "biography",
  onTabChange = () => {},
  tabs = [],
}) => {
  if (!tabs || tabs.length === 0) {
    return null;
  }

  return (
    <div className="flex border-b">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`flex-1 px-4 py-3 font-medium capitalize transition
            ${
              activeTab === tab
                ? "text-amber-600 border-b-2 border-amber-600 bg-amber-50/50"
                : "text-gray-600 hover:text-amber-600 hover:bg-amber-50/30"
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
