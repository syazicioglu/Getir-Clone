import Download from "./components/Download";
import Navbar from "./components/Navbar";
import BGCarousel from "./components/BGCarousel";
import Campain from "./components/Campain";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Category from "./pages/Category";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kategori" element={<Category />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
