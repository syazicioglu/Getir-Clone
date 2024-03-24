import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";

import { useState } from "react";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState("");
  return (
    <>
      <Navbar
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        user={user}
        setUser={setUser}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              user={user}
              setUser={setUser}
            />
          }
        />
        <Route
          path="/kategori/:categoryName"
          element={<CategoryPage user={user} setUser={setUser} />}
        />
        <Route
          path="/hesap"
          element={<ProfilePage user={user} setUser={setUser} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
