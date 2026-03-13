import { Link } from "react-router-dom";

const Tag = ({ tag, size = "md", interactive = true }) => {
  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-2 text-base",
  };

  const tagContent = (
    <span
      className={`${sizeClasses[size]} rounded-full inline-flex items-center gap-1 
        bg-amber-100 text-amber-700 hover:bg-amber-200 transition`}
    >
      {tag.icon && <span>{tag.icon}</span>}
      <span>{tag.name}</span>
      {tag.count && <span className="text-xs opacity-75">({tag.count})</span>}
    </span>
  );

  if (interactive) {
    return <Link to={`/tags/${tag.id}`}>{tagContent}</Link>;
  }

  return tagContent;
};

export default Tag;
