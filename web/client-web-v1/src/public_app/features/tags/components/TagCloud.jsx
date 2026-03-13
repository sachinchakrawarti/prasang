import { Link } from "react-router-dom";

const TagCloud = ({ tags, title }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link
            key={tag.id}
            to={`/tags/${tag.id}`}
            className="group relative"
            style={{
              fontSize: `${Math.max(0.8, Math.min(2, tag.count / 100))}rem`,
            }}
          >
            <span
              className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full 
              hover:bg-amber-100 transition inline-block"
            >
              {tag.icon} {tag.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TagCloud;
