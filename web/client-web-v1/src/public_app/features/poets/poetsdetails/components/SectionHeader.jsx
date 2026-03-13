// src/public_app/features/poets/poetslist/components/SectionHeader.jsx
const SectionHeader = ({
  title,
  subtitle,
  gradient = "from-amber-600 to-yellow-600",
}) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        <span
          className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
        >
          {title}
        </span>
      </h1>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
