export default function Categories() {
  return (
    <>
      <div className="categories py-6 shadow-etbis bg-[#f0f1f3] md:bg-white">
        <div className="container mx-auto">
          <h6 className="font-semibold md:text-sm pl-6 xl:pl-0 pb-2">
            Kategoriler
          </h6>
          <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-10 px-6 xl:px-0  gap-3 text-[#3e3e3e]">
            <Card
              img={
                "https://market-product-images-cdn.getirapi.com/category/f9b26950-a462-49b2-9536-e8a383194182.png"
              }
            >
              Su & İçecek
            </Card>
            <Card
              img={
                "https://market-product-images-cdn.getirapi.com/category/13a7fc68-fc66-45fb-abf3-a9dfb299cfda.png"
              }
            >
              Meyve & Sebze
            </Card>
            <Card
              img={
                "	https://market-product-images-cdn.getirapi.com/category/12234b89-0519-41d1-baf3-b70728620247.png"
              }
            >
              Süt Ürünleri
            </Card>
            <Card
              img={
                "https://market-product-images-cdn.getirapi.com/category/d3b6744b-1ebd-409f-8073-4cf17b97a8c7.png"
              }
            >
              Fırından
            </Card>
            <Card
              img={
                "https://market-product-images-cdn.getirapi.com/category/8443c38b-cc06-4997-a50d-92c4b3df9817.png"
              }
            >
              Atıştırmalık
            </Card>
            <Card
              img={
                "https://market-product-images-cdn.getirapi.com/category/5d0c050c-fbc5-46db-b4dc-5f840759746d.png"
              }
            >
              Dondurma
            </Card>
            <Card
              img={
                "https://market-product-images-cdn.getirapi.com/category/eb1f6a52-7efc-46d9-9712-33bfc3b37038.png"
              }
            >
              Temel Gıda
            </Card>
            <Card
              img={
                "https://market-product-images-cdn.getirapi.com/category/0f60725b-6743-4add-a3d4-98be568a53f7.png"
              }
            >
              Kahvaltılık
            </Card>
            <Card
              img={
                "https://market-product-images-cdn.getirapi.com/category/57f537f7-9973-4f94-87ef-47785c7d3f5b.png"
              }
            >
              Yiyecek
            </Card>
            <Card
              img={
                "https://market-product-images-cdn.getirapi.com/category/318d0c01-3251-4ddb-b19e-c87c4c800fea.png"
              }
            >
              Fit & Form
            </Card>
            <Card
              img={
                "https://market-product-images-cdn.getirapi.com/category/eca31bbc-2a24-4c63-aa10-5671121f6589.png"
              }
            >
              Kişisel Bakım
            </Card>
            <Card
              img={
                "https://market-product-images-cdn.getirapi.com/category/7a5243a7-2474-4f76-b656-43be6ea78702.png"
              }
            >
              Ev Bakım
            </Card>
            <Card
              img={
                "	https://market-product-images-cdn.getirapi.com/category/9f5cc306-280d-403a-8f8d-8d6fc0b0f5f8.png"
              }
            >
              Ev & Yaşam
            </Card>
            <Card
              img={
                "https://market-product-images-cdn.getirapi.com/category/79427f37-be1c-44dc-beaf-ed1e5e9a8562.png"
              }
            >
              Evcil Hayvan
            </Card>
            <Card
              img={
                "https://market-product-images-cdn.getirapi.com/category/c1c26b96-eb94-4fac-af51-777e26085826.png"
              }
            >
              Bebek
            </Card>
            <Card
              img={
                "https://market-product-images-cdn.getirapi.com/category/b429f164-16ca-40a7-acb1-0fce8b4d8838.png"
              }
            >
              Cinsel Sağlık
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

function Card({ img, children }) {
  return (
    <>
      <div className="primary-card rounded hover:text-[#5d3ebc] hover:bg-[#f3f0fe] transition-all">
        <a href="/kategori" className="flex flex-col">
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
