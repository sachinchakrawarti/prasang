import { Routes, Route } from "react-router-dom";
import TagsIndexPage from "../features/tags/pages/TagsIndexPage";
import TagDetailPage from "../features/tags/pages/TagDetailPage";

const TagRoutes = () => {
  return (
    <Routes>
      <Route index element={<TagsIndexPage />} />
      <Route path=":tagId" element={<TagDetailPage />} />
    </Routes>
  );
};

export default TagRoutes;
