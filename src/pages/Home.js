import Download from "../components/Download";
import BGCarousel from "../components/BGCarousel";
import Campain from "../components/Campain";
import Categories from "../components/Categories";

export default function Home() {
  return (
    <>
      <BGCarousel />
      <Categories />
      <Download />
      <Campain />
    </>
  );
}
