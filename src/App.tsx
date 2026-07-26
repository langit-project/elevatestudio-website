import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import PortfolioPage from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import ComponentsPage from "./pages/Components";

export default function App() {
  return (
    <div className="font-body text-primary-black scroll-smooth">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
        <Route path="/components" element={<ComponentsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
