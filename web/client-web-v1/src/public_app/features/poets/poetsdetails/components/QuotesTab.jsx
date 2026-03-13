// src/public_app/features/poets/poetsdetails/components/QuotesTab.jsx
import { FaQuoteLeft } from "react-icons/fa";

const QuotesTab = ({ quotes, poetName }) => {
  return (
    <div className="space-y-4">
      {quotes.map((quote, idx) => (
        <div
          key={idx}
          className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6"
        >
          <FaQuoteLeft className="text-amber-300 text-xl mb-2" />
          <p className="text-gray-700 text-lg italic mb-2">{quote}</p>
          <div className="flex justify-end">
            <span className="text-sm text-amber-600">— {poetName}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuotesTab;
