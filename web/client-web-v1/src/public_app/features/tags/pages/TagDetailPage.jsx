import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { poetryTags } from "../../../data/tags/poetry_tags";
import { literaryTerms } from "../../../data/tags/literary_terms";
import { erasMovements } from "../../../data/tags/eras_movements";
import { emotionsMoods } from "../../../data/tags/emotions_moods";
import { poemsData } from "../../../data/poems/poems_data";

const TagDetailPage = () => {
  const { tagId } = useParams();
  const [tag, setTag] = useState(null);
  const [poems, setPoems] = useState([]);

  useEffect(() => {
    // Find tag from all collections
    const allTags = [
      ...poetryTags,
      ...literaryTerms,
      ...erasMovements,
      ...emotionsMoods,
    ];
    const foundTag = allTags.find((t) => t.id === tagId);
    setTag(foundTag);

    // Find poems with this tag
    if (foundTag) {
      const taggedPoems = poemsData.filter((poem) =>
        poem.tags.includes(foundTag.name.toLowerCase()),
      );
      setPoems(taggedPoems);
    }
  }, [tagId]);

  if (!tag) return <div>Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Tag Header */}
      <div className="bg-gradient-to-r from-amber-500 to-yellow-500 rounded-3xl p-8 mb-8 text-white">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-6xl">{tag.icon}</span>
          <div>
            <h1 className="text-4xl font-bold mb-2">{tag.name}</h1>
            <p className="text-amber-100">{tag.type}</p>
          </div>
        </div>
        <p className="text-lg max-w-2xl">{tag.description}</p>
      </div>

      {/* Poems with this tag */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Poems tagged "{tag.name}"</h2>
        {poems.length === 0 ? (
          <p className="text-gray-500">No poems found with this tag.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {poems.map((poem) => (
              <Link
                key={poem.id}
                to={`/poem/${poem.id}`}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
              >
                <h3 className="font-bold text-lg mb-2">{poem.title}</h3>
                <p className="text-amber-600 text-sm mb-3">{poem.poet}</p>
                <p className="text-gray-600 italic line-clamp-2">
                  "{poem.excerpt}"
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Related Tags */}
      <div className="mt-12">
        <h3 className="text-lg font-bold mb-4">Related Tags</h3>
        <div className="flex flex-wrap gap-2">
          {/* Add related tags logic here */}
        </div>
      </div>
    </div>
  );
};

export default TagDetailPage;
