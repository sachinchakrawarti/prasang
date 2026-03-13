// src/public_app/features/poems/Couplet.jsx (update the export)
export const CoupletDetailPage = ({ coupletId }) => {
  const { id } = useParams();
  const couplet = getCoupletById(id || coupletId);

  if (!couplet) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center py-12 bg-red-50 rounded-2xl">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Couplet Not Found
          </h2>
          <p className="text-gray-600">
            The couplet you're looking for doesn't exist.
          </p>
          <Link
            to="/couplets"
            className="mt-4 inline-block text-amber-600 hover:text-amber-700"
          >
            ← Back to Couplets
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link
        to="/couplets"
        className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-6"
      >
        ← Back to Couplets
      </Link>
      <CoupletDisplay couplet={couplet} />
    </div>
  );
};
