import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Skeleton } from "antd";
import Layout from "../components/layout/Layout";

// Lazy load pages
const LandingPage = lazy(() => import("../pages/LandingPage"));
const InfoPage = lazy(() => import("../pages/InforPage"));
const ShopPage = lazy(() => import("../pages/ShopPage"));
const TosPage = lazy(() => import("../pages/TosPage"));
const WeatherDashboard = lazy(() => import("../pages/Forecaster"));
const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Suspense
          fallback={
            <div style={{ padding: "200px" }}>
              <Skeleton active paragraph={{ rows: 15 }} />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/tos" element={<TosPage />} />
            <Route path="/forecaster" element={<WeatherDashboard />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}
export default AppRouter;
