import { useParams } from "react-router-dom";
import Category from "../components/Category";
import Header from "../components/Header";

function CategoryPage() {
  const params = useParams();
  const categoryName = params.categoryName;

  return (
    <>
      <Header />
      <Category categoryName={categoryName} />
    </>
  );
}

export default CategoryPage;
