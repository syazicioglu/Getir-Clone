import Download from "./components/Download";
import Navbar from "./components/Navbar";
import BGCarousel from "./components/BGCarousel";
import Campain from "./components/Campain";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kategori" element={<CategoryPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
