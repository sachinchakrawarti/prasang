// src/public_app/features/poets/poetsdetails/PoetsDetails.jsx
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { poetsData } from "../../../data/poetsdata/poets_data_eng";
import PoetHeader from "./components/PoetHeader";
import InfoCard from "./components/InfoCard";
import AchievementsCard from "./components/AchievementsCard";
import TabNavigation from "./components/TabNavigation";
import BiographyTab from "./components/BiographyTab";
import WorksTab from "./components/WorksTab";
import QuotesTab from "./components/QuotesTab";
import LegacySection from "./components/LegacySection";

const PoetsDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("biography");

  const poet = poetsData.find((p) => p.id === parseInt(id));

  if (!poet) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Poet Not Found
          </h2>
          <p className="text-gray-600 mb-4">
            The poet you're looking for doesn't exist.
          </p>
          <Link to="/poets" className="text-amber-600 hover:text-amber-700">
            ← Back to Poets
          </Link>
        </div>
      </div>
    );
  }

  const tabs = ["biography", "works", "quotes"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <Link
        to="/poets"
        className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-6 group"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition" />
        Back to Poets
      </Link>

      {/* Poet Header */}
      <PoetHeader poet={poet} />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Info and Achievements */}
        <div className="lg:col-span-1">
          <InfoCard poet={poet} />
          <AchievementsCard achievements={poet.notableAchievements} />
        </div>

        {/* Right Column - Tabs and Legacy */}
        <div className="lg:col-span-2">
          {/* Tabs Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
            <TabNavigation
              activeTab={activeTab}
              onTabChange={setActiveTab}
              tabs={tabs}
            />

            <div className="p-6">
              {activeTab === "biography" && <BiographyTab poet={poet} />}
              {activeTab === "works" && <WorksTab works={poet.famousWorks} />}
              {activeTab === "quotes" && (
                <QuotesTab quotes={poet.famousQuotes} poetName={poet.name} />
              )}
            </div>
          </div>

          {/* Legacy Section */}
          <LegacySection legacy={poet.legacy} />
        </div>
      </div>
    </div>
  );
};

export default PoetsDetails;
