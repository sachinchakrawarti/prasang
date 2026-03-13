import { useState } from "react";
import { poetryTags } from "../../../data/tags/poetry_tags";
import { literaryTerms } from "../../../data/tags/literary_terms";
import { erasMovements } from "../../../data/tags/eras_movements";
import { emotionsMoods } from "../../../data/tags/emotions_moods";
import TagCloud from "../components/TagCloud";

const TagsIndexPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const allTags = [
    ...poetryTags,
    ...literaryTerms,
    ...erasMovements,
    ...emotionsMoods,
  ];

  const filteredTags = allTags.filter(
    (tag) =>
      tag.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tag.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">
        <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
          Literary Tags & Terms
        </span>
      </h1>

      <p className="text-gray-600 mb-8">
        Explore poetry forms, literary devices, eras, and emotions
      </p>

      {/* Search */}
      <div className="mb-12">
        <input
          type="text"
          placeholder="Search tags..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>

      {/* Tag Sections */}
      <div className="space-y-12">
        <TagCloud tags={poetryTags} title="Poetry Forms" />
        <TagCloud tags={literaryTerms} title="Literary Devices" />
        <TagCloud tags={erasMovements} title="Eras & Movements" />
        <TagCloud tags={emotionsMoods} title="Emotions & Moods" />
      </div>
    </div>
  );
};

export default TagsIndexPage;
