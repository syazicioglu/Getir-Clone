export default function Category() {
  return (
    <>
      <div className="page-categories pt-8 pb-10 bg-[#fafafa]">
        <div className="container px-6 lg:px-4 xl:px-2 mx-auto flex gap-x-4 max-h-screen">
          <div className="">
            <h2 className="text-sm font-semibold text-[#191919] pb-2">
              Kategoriler
            </h2>
            <div className="accordion-wrapper py-2 h-auto rounded-lg shadow-sm w-60 bg-[#ffffffa6] max-h-[calc(100vh-190px)] overflow-y-scroll no-scrollbar">
              <div className="accordion-body w-full ">
                <AccordionElement />
                <AccordionElement />
                <AccordionElement />
                <AccordionElement />
                <AccordionElement />
                <AccordionElement />
                <AccordionElement />
                <AccordionElement />
                <AccordionElement />
                <AccordionElement />
                <AccordionElement />
                <AccordionElement />
                <AccordionElement />
                <AccordionElement />
                <AccordionElement />
                <AccordionElement />
                <AccordionElement />
                <AccordionElement />
                <AccordionElement />
                <AccordionElement />
                <AccordionElement />
                <AccordionElement />
                <AccordionElement />
                <AccordionElement />
                <AccordionElement />
                <AccordionElement />
                <AccordionElement />
                <AccordionElement />
              </div>
            </div>
          </div>
          <div className="flex-grow">
            <h2 className="text-sm font-semibold text-[#191919] pb-2">
              categoryname undefined
            </h2>
            <div className="products-wrapper rounded-md shadow-sm bg-[#ffffffa6] overflow-y-scroll no-scrollbar max-h-[calc(100vh-160px)]">
              <div className="products-body grid grid-cols-3 xl:grid-cols-4 divide-x divide-y divide-gray-100">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <h2 className="text-sm font-semibold text-[#191919] pb-2">
              Sepetim
            </h2>
            <div className="w-[300px] h-[330px] rounded bg-red-100"></div>
          </div>
        </div>
      </div>
    </>
  );
}

function Product() {
  return (
    <>
      <div className="flex flex-col p-2 text-center">
        <img
          alt="product-img"
          className="w-28 h-28 mx-auto"
          src="https://market-product-images-cdn.getirapi.com/product/692f800a-7aee-4bd8-860b-693976430a59.jpg"
        />
        <h2 className="price text font-semibold text-[#5d3ebc]">$12,99</h2>
        <h1 className="product-name font-semibold">Mandalina</h1>
        <span className="text-xs">kilo</span>
      </div>
    </>
  );
}

function AccordionElement() {
  return (
    <>
      <div className="flex flex-row px-3 py-1 hover:bg-[#f3f0fe]">
        <div className="rounded block border w-[31px] h-[31px] overflow-hidden">
          <img
            className="w-[30px]  h-[30px]"
            src="https://market-product-images-cdn.getirapi.com/category/f9b26950-a462-49b2-9536-e8a383194182.png"
            alt="Content"
          />
        </div>
        <div className="flex flex-grow">
          <span className="my-auto ml-4 font-medium text-[#191919]">
            Su ve içecek
          </span>
        </div>
        <span className="mr-3 my-auto">!</span>
      </div>
    </>
  );
}
