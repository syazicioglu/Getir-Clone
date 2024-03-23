import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function Category() {
  const [accordionSelected, setAccordionSelected] = useState(null);

  function handleAccordionSelected(e) {
    if (accordionSelected === e) {
      setAccordionSelected(null);
    } else {
      setAccordionSelected(e);
    }
  }
  return (
    <>
      <div className="page-categories pb-10 bg-[#fafafa]">
        <div className="container px-6 lg:px-4 xl:px-2 mx-auto flex gap-x-4 max-h-screen">
          <div className="pt-8">
            <h2 className=" font-semibold text-sm text-[#3e3e3e] pb-2">
              Kategoriler
            </h2>
            <div className="accordion-wrapper py-2 h-auto rounded-lg shadow-sm w-60 bg-[#ffffff] max-h-[calc(100vh-190px)] overflow-y-scroll no-scrollbar">
              <Accordion
                selected={accordionSelected}
                handleSelected={handleAccordionSelected}
              />
            </div>
          </div>
          <div className="flex-grow pt-8 overflow-y-scroll no-scrollbar max-h-[calc(100vh-110px)]">
            <nav className="pb-2 font-semibold text-sm text-[#3e3e3e]">
              <ol className="flex gap-x-2">
                <li>
                  <a href="#">Home</a>
                </li>
                <li className="flex">
                  <span className="my-auto">
                    <IoIosArrowForward size={12} className="text-[#a2a2a2]" />
                  </span>
                </li>
                <li>
                  <a href="#">Data</a>
                </li>
              </ol>
            </nav>
            <div className="products-wrapper rounded-md ">
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
          <div className="hidden pt-8 lg:block">
            <h2 className="text-sm font-semibold text-[#3e3e3e] pb-2">
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
      <div className="flex flex-col p-2 text-center bg-[#ffffff] relative">
        <img
          alt="product-img"
          className="w-28 h-28 mx-auto"
          src="https://market-product-images-cdn.getirapi.com/product/692f800a-7aee-4bd8-860b-693976430a59.jpg"
        />
        <h2 className="price text font-semibold text-[#5d3ebc]">$12,99</h2>
        <h1 className="product-name font-semibold">Mandalina</h1>
        <span className="text-xs">kilo</span>
        <a className="absolute top-0 right-20">a</a>
      </div>
    </>
  );
}

function Accordion({ selected, handleSelected }) {
  const dizi = Array.from({ length: 15 }, (_, index) => index + 1);
  return (
    <>
      <div className="accordion-body w-full ">
        {dizi.map((eleman, index) => (
          <AccordionCategory
            id={index}
            selected={selected}
            handleSelected={handleSelected}
          />
        ))}
      </div>
    </>
  );
}

function AccordionCategory({ id, selected, handleSelected }) {
  return (
    <>
      <div
        className={`acc-header flex flex-row px-3 py-1 hover:bg-[#f3f0fe] ${
          selected === id ? "bg-[#f3f0fe]" : ""
        }`}
        onClick={() => handleSelected(id)}
      >
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
        <span
          className={`icon-wrapper my-auto ${
            selected === id ? "selected" : ""
          }`}
        >
          <IoIosArrowDown className={selected === id ? "rotate" : ""} />
        </span>
      </div>

      <div className={selected === id ? "acc-panel show" : "acc-panel"}>
        <AccordionSubCategory />
      </div>
    </>
  );
}

function AccordionSubCategory() {
  return (
    <>
      <div className="flex flex-row pl-11 px-3 py-1 bg-[#fbfbfb] hover:bg-[#ffffffa6]">
        <div className="flex flex-grow">
          <span className="my-auto ml-4 font-medium text-[#525252]">
            Su ve içecek
          </span>
        </div>
        <span className="my-auto">
          {true ? (
            <IoIosArrowForward size={15} className="right-arrow" />
          ) : null}
        </span>
      </div>
    </>
  );
}
