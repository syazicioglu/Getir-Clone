import Download from "./components/Download";
import Navbar from "./components/Navbar";
import BGCarousel from "./components/BGCarousel";
import Campain from "./components/Campain";
import Footer from "./components/Footer";
import Categories from "./components/Categories";

function App() {
  return (
    <div>
      <Navbar />
      <BGCarousel />
      <Categories />
      <Download />
      <Campain />
      <Footer />
    </div>
  );
}

export default App;
