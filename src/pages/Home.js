import Download from "../components/Download";
import BGCarousel from "../components/BGCarousel";
import Campain from "../components/Campain";
import CategoriesHome from "../components/CategoriesHome";

export default function Home() {
  return (
    <>
      <BGCarousel />
      <CategoriesHome />
      <Download />
      <Campain />
    </>
  );
}
