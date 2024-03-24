import categoriesData from "../json/product.json";

export default function CategoriesHome() {
  return (
    <>
      <div className="home-categories py-6 shadow-etbis bg-[#f0f1f3] md:bg-white">
        <div className="container mx-auto">
          <h6 className="font-semibold md:text-sm pl-6 xl:pl-0 pb-2">
            Kategoriler
          </h6>
          <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-10 px-6 xl:px-0  gap-3 text-[#3e3e3e]">
            {categoriesData.categories.map((category) => (
              <Card img={category.img} link={category.normalizedName}>
                {category.name}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function Card({ img, children, link }) {
  return (
    <>
      <div className="primary-card rounded hover:text-[#5d3ebc] hover:bg-[#f3f0fe] transition-all">
        <a href={`/kategori/${link}`} className="flex flex-col">
          <div className="rounded-lg block border w-[48px]  h-[48px] mx-auto overflow-hidden mt-2">
            <img className="w-[46px]  h-[46px]" src={img} alt="Content" />
          </div>
          <span className="font-semibold text-center mt-2 mb-3">
            {children}
          </span>
        </a>
      </div>
    </>
  );
}
