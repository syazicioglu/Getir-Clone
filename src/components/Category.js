import { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import productData from "../json/product.json";
import { useNavigate } from "react-router-dom";
import { logoSepet } from "../URLs";

export default function Category({ categoryName }) {
  const selectedCategory = productData.categories.find(
    (category) => category.normalizedName === categoryName
  );

  const subCategoryRefs = useRef([]);

  const scrollToSubCategory = (index) => {
    if (subCategoryRefs.current[index]) {
      subCategoryRefs.current[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="page-categories pb-10 bg-[#fafafa]">
        <div className="container px-6 lg:px-4 xl:px-2 mx-auto flex gap-x-4 max-h-screen">
          <div className="pt-8">
            <h2 className=" font-semibold text-sm text-[#3e3e3e] pb-2">
              Kategoriler
            </h2>
            <div className="accordion-wrapper py-2 h-auto rounded-lg shadow-sm w-60 bg-[#ffffff] max-h-[calc(100vh-190px)] overflow-y-scroll no-scrollbar">
              <Accordion selectedCategory={selectedCategory} />
            </div>
          </div>
          <div className="flex-grow pt-8 overflow-y-scroll no-scrollbar max-h-[calc(100vh-110px)]">
            {selectedCategory.subCategories.map((subCategory, index) => (
              <ProductWrapper
                key={subCategory.id}
                mainCategoryName={selectedCategory.name}
                subCategory={subCategory}
                isFirst={index === 0 ? true : false}
                ref={(element) => (subCategoryRefs.current[index] = element)}
              />
            ))}
          </div>
          <div className="hidden pt-8 lg:block">
            <h2 className="text-sm font-semibold text-[#3e3e3e] pb-2">
              Sepetim
            </h2>
            <div className="w-[300px] h-[330px] rounded-lg border-2 border-[#FFD300] bg-white">
              <div className="p-2 text-center">
                <div className="flex py-12 items-center justify-center">
                  <img className="w-[86px] h-[103px]" src={logoSepet} />
                </div>
                <h2 className="font-semibold text-[#5d3ebc]">
                  Sepetin şu an boş
                </h2>
                <p className="#697488 pt-2">
                  Sipariş vermek için sepetine ürün ekle
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ProductWrapper({ subCategory, isFirst, mainCategoryName, ref }) {
  return (
    <>
      {isFirst ? (
        <nav className="pb-2 font-semibold text-sm text-[#3e3e3e]">
          <ol className="flex gap-x-2">
            <li>
              <a className="cursor-pointer">{mainCategoryName}</a>
            </li>
            <li className="flex">
              <span className="my-auto">
                <IoIosArrowForward size={12} className="text-[#a2a2a2]" />
              </span>
            </li>
            <li>
              <a ref={ref} className="cursor-pointer">
                {subCategory.name}
              </a>
            </li>
          </ol>
        </nav>
      ) : (
        <h2 ref={ref} className="font-semibold text-sm text-[#3e3e3e] py-1">
          {subCategory.name}
        </h2>
      )}

      <div className="products-wrapper rounded-md ">
        <div className="products-body grid grid-cols-3 xl:grid-cols-4 divide-x divide-y divide-gray-100">
          {subCategory.products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

function Product({ product }) {
  return (
    <>
      <div className="flex flex-col p-2 text-center bg-[#ffffff] relative">
        <img
          alt="product-img"
          className="w-28 h-28 mx-auto"
          src="https://market-product-images-cdn.getirapi.com/product/692f800a-7aee-4bd8-860b-693976430a59.jpg"
        />
        <h2 className="price text font-semibold text-[#5d3ebc]">
          ${product.price}
        </h2>
        <h1 className="product-name font-semibold">{product.name}</h1>
        <span className="text-xs">kilo</span>
        <div className="absolute top-3 right-3 bg-whit border shadow-md rounded-lg w-8 h-8 text-xl text-[#5d3ebc] cursor-pointer">
          +
        </div>
      </div>
    </>
  );
}

function Accordion({ selectedCategory }) {
  const [accordionSelected, setAccordionSelected] = useState(
    selectedCategory.id
  );
  return (
    <>
      <div className="accordion-body w-full ">
        {productData.categories.map((category) => (
          <AccordionCategory
            id={category.id}
            name={category.name}
            normalizedName={category.normalizedName}
            img={category.img}
            accordionSelected={accordionSelected}
            setAccordionSelected={setAccordionSelected}
            subCategories={category.subCategories}
          />
        ))}
      </div>
    </>
  );
}

function AccordionCategory({
  id,
  img,
  normalizedName,
  accordionSelected,
  setAccordionSelected,
  name,
  subCategories,
}) {
  const navigate = useNavigate();
  function handleAccordionSelected(e) {
    if (accordionSelected === e) {
      setAccordionSelected(null);
    } else {
      setAccordionSelected(e);
      navigate(`/kategori/${normalizedName}`);
    }
  }
  const [subSelected, setSubSelected] = useState(0);

  return (
    <>
      <div
        className={`acc-header flex flex-row px-3 py-1 hover:bg-[#f3f0fe] cursor-pointer ${
          accordionSelected === id ? "bg-[#f3f0fe]" : ""
        }`}
        onClick={() => handleAccordionSelected(id)}
      >
        <div className="rounded block border w-[31px] h-[31px] overflow-hidden">
          <img className="w-[30px]  h-[30px]" src={img} alt="Content" />
        </div>
        <div className="flex flex-grow">
          <span className="my-auto ml-4 font-medium text-[#191919]">
            {name}
          </span>
        </div>
        <span
          className={`icon-wrapper my-auto ${
            accordionSelected === id ? "selected" : ""
          }`}
        >
          <IoIosArrowDown
            className={accordionSelected === id ? "rotate" : ""}
          />
        </span>
      </div>

      <div
        className={accordionSelected === id ? "acc-panel show" : "acc-panel"}
      >
        {subCategories.map((subCategory, index) => (
          <AccordionSubCategory
            key={subCategory.id}
            name={subCategory.name}
            isSelected={subSelected === index}
            onClick={() => {
              setSubSelected(index);
            }}
          />
        ))}
      </div>
    </>
  );
}

function AccordionSubCategory({ name, isSelected, onClick }) {
  return (
    <>
      <div
        onClick={onClick}
        className="flex flex-row pl-11 px-3 py-1 bg-[#fbfbfb] hover:bg-[#ffffffa6] cursor-pointer"
      >
        <div className="flex flex-grow">
          <span className="my-auto ml-4 font-medium text-[#525252]">
            {name}
          </span>
        </div>
        <span className="my-auto">
          {isSelected ? (
            <IoIosArrowForward size={15} className="right-arrow" />
          ) : null}
        </span>
      </div>
    </>
  );
}
