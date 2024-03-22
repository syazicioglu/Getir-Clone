import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import Modal from "./modals/Modal";
import LoginModal from "./modals/LoginModal";
import { useState } from "react";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Navbar modalOpen={modalOpen} setModalOpen={setModalOpen} />

      <Routes>
        <Route
          path="/"
          element={<Home modalOpen={modalOpen} setModalOpen={setModalOpen} />}
        />
        <Route path="/kategori" element={<CategoryPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
