import { Link } from "react-router-dom";

const LiteratureWord = ({ word, category }) => {
  return (
    <Link
      to={`/literature/${category}/${word.id}`}
      className="group block p-4 bg-gradient-to-br from-amber-50 to-yellow-50 
        rounded-xl hover:shadow-lg transition border border-amber-100"
    >
      <div className="text-2xl mb-2">{word.icon}</div>
      <h4 className="font-bold text-gray-800 group-hover:text-amber-600 transition">
        {word.name}
      </h4>
      <p className="text-xs text-gray-500 mt-1">{word.type}</p>
      <p className="text-sm text-gray-600 mt-2 line-clamp-2">
        {word.description}
      </p>
      <span className="text-xs text-amber-600 mt-3 inline-block">
        {word.count} poems →
      </span>
    </Link>
  );
};

export default LiteratureWord;
