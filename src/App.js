import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LandingPage from "./pages/LandingPage";
import InfoPage from "./pages/InforPage";
import ShopPage from "./pages/ShopPage";
import TosPage from "./pages/TosPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/tos" element={<TosPage />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
