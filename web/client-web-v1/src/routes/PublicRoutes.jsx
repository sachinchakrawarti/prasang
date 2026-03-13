// src/public_app/routes/PublicRoutes.jsx
import { Routes, Route } from "react-router-dom";
import PublicLayout from "../public_app/layout/PublicLayout";

import HomePage from "../public_app/features/home/Homepage";
import PoemsList from "../public_app/features/poems/PoemsList";
import PoemsDetails from "../public_app/features/poems/PoemsDetails";

import PoetsList from "../public_app/features/poets/poetslist/PoetsList";
import PoetsDetails from "../public_app/features/poets/poetsdetails/PoetsDetails";

import AboutPage from "../public_app/pages/AboutPage";
import WritePage from "../public_app/pages/WritePage";

import PoemsTypes from "../public_app/features/poemstypes/PoemsTypes";
import Prose from "../public_app/features/prose/Prose";

import Settings from "../public_app/layout/navbar/components/Settings";
import TestPage from "../public_app/pages/TestPage";
import TestPageDetails from "../public_app/pages/TestPageDetails";
import Contributors from "../public_app/features/contributors/Contributors";
import ContributorsDetails from "../public_app/features/contributors/ContributorsDetails";

// poem type components
import Gazal from "../public_app/features/poemstypes/components/gazal/Gazal";
import Sonnets from "../public_app/features/poemstypes/components/sonnets/Sonnets";

// Couplet components
import CoupletsPage from "../public_app/features/poems/CoupletsPage";
import CoupletDetailPage from "../public_app/features/poems/CoupletDetailPage";
import Monostich from "../public_app/features/poems/monostich/Monostich";

// sonnet poet pages
import WilliamShakespeare from "../public_app/features/poemstypes/components/sonnets/poets/WilliamShakespeare";
import JohnKeats from "../public_app/features/poemstypes/components/sonnets/poets/JohnKeats";
import ElizabethBarrettBrowning from "../public_app/features/poemstypes/components/sonnets/poets/ElizabethBarrettBrowning";
import Petrarch from "../public_app/features/poemstypes/components/sonnets/poets/Petrarch";
import DanteAlighieri from "../public_app/features/poemstypes/components/sonnets/poets/DanteAlighieri";

import SonnetDetailPage from "../public_app/features/poemstypes/components/sonnets/poets/SonnetDetailPage";
import Faiz from "../public_app/features/poemstypes/components/gazal/poets/Faiz";

const PublicRoutes = () => {
  console.log("PublicRoutes rendering");

  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<HomePage />} />

        {/* Poems routes */}
        <Route path="poems" element={<PoemsList />} />
        <Route path="poems/popular" element={<PoemsList />} />
        <Route path="poems/new" element={<PoemsList />} />
        <Route path="poems/classics" element={<PoemsList />} />
        <Route path="poems/categories" element={<PoemsList />} />
        <Route path="poem/:id" element={<PoemsDetails />} />

        {/* Couplets routes - NEW */}
        <Route path="couplets" element={<CoupletsPage />} />
        <Route path="couplet/:id" element={<CoupletDetailPage />} />
        <Route path="monostich" element={<Monostich />} />

        {/* Poets routes */}
        <Route path="poets" element={<PoetsList />} />
        <Route path="poets/featured" element={<PoetsList />} />
        <Route path="poets/new" element={<PoetsList />} />
        <Route path="poets/interviews" element={<PoetsList />} />
        <Route path="poet/:id" element={<PoetsDetails />} />

        {/* Settings */}
        <Route path="settings" element={<Settings />} />

        {/* Contributors routes */}
        <Route path="contributors" element={<Contributors />} />
        <Route path="contributor/:id" element={<ContributorsDetails />} />

        {/* Prose */}
        <Route path="prose" element={<Prose />} />

        {/* Poetry Types */}
        <Route path="poemstypes" element={<PoemsTypes />} />

        {/* Individual poem type pages */}
        <Route path="poems-types/ghazal" element={<Gazal />} />
        <Route path="poems-types/sonnet" element={<Sonnets />} />
        <Route path="poems-types/gazal/faiz/:lang" element={<Faiz />} />

        {/* Sonnet poet pages */}
        <Route
          path="sonnets/william-shakespeare"
          element={<WilliamShakespeare />}
        />
        <Route path="sonnets/john-keats" element={<JohnKeats />} />
        <Route
          path="sonnets/elizabeth-browning"
          element={<ElizabethBarrettBrowning />}
        />
        <Route path="sonnets/petrarch" element={<Petrarch />} />
        <Route path="sonnets/dante" element={<DanteAlighieri />} />
        <Route
          path="sonnets/william-shakespeare/:sonnetId"
          element={<SonnetDetailPage />}
        />

        {/* Other pages */}
        <Route path="about" element={<AboutPage />} />
        <Route path="write" element={<WritePage />} />

        {/* Test pages */}
        <Route path="testpage" element={<TestPage />} />
        <Route path="testpage/poem/:id" element={<TestPageDetails />} />

        {/* 404 */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
