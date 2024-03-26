import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import productData from "../json/product.json";
import { useNavigate } from "react-router-dom";
import { logoSepet } from "../URLs";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import { BiTrash } from "react-icons/bi";

export default function Category({ categoryName }) {
  const selectedCategory = productData.categories.find(
    (category) => category.normalizedName === categoryName
  );

  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  const [subSelected, setSubSelected] = useState(0);

  const [cart, setCart] = useState([]);

  function addItem(e) {
    if (!cart.includes(e)) {
      setCart((prevCart) => [...prevCart, e]);
    }
  }

  function removeItem(itemToRemove) {
    setCart((prevArray) => prevArray.filter((item) => item !== itemToRemove));
  }

  const slidesData = [
    {
      id: 1,
      image:
        "https://banner-marketing-cdn.getir.com/images/a1f8afe7-7f4f-4616-9f98-1e7e731778c4.jpg",
    },
    {
      id: 2,
      image:
        "https://banner-marketing-cdn.getir.com/images/86d7cfc1-d214-4068-9d7c-5f2e04e3c661.jpg",
    },
    {
      id: 3,
      image:
        "https://banner-marketing-cdn.getir.com/images/85609363-5e25-425d-aa5c-0828288efc4f.jpeg",
    },
    {
      id: 4,
      image:
        "https://banner-marketing-cdn.getir.com/images/3d24e2c2-1a7d-4754-96f2-6477b3c5d787.jpg",
    },
    {
      id: 5,
      image:
        "https://banner-marketing-cdn.getir.com/images/d42aa759-7fc8-44ae-844d-f11b5a32f14f.jpg",
    },
    {
      id: 6,
      image:
        "https://banner-marketing-cdn.getir.com/images/7879daef-7041-4a75-80dd-ef6ee9b77e26.jpeg",
    },
    {
      id: 7,
      image:
        "https://banner-marketing-cdn.getir.com/images/63f3b0a7-2e52-40f9-9cd4-79aa4ae97af4.jpg",
    },
  ];

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute left-[-15px] top-[40%] z-1 text-[#5d3ebc]"
        onClick={onClick}
      >
        <IoIosArrowBack />
      </button>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute right-[-15px] top-[40%] z-1 text-[#5d3ebc]"
        onClick={onClick}
      >
        <IoIosArrowForward />
      </button>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="page-categories md:pb-10 bg-[#fafafa]">
        <div className="container md:px-6 lg:px-4 xl:px-2 mx-auto">
          <div className="hidden md:block pt-6 px-2">
            <Slider {...settings}>
              {slidesData.map((slide) => (
                <div key={slide.id} className="px-2 cursor-pointer">
                  <img
                    src={slide.image}
                    alt={`Slide ${slide.id}`}
                    className="rounded w-full"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className=" flex flex-col md:flex-row md:gap-x-4 md:max-h-screen">
            {isSmallScreen ? (
              <CategoriesScrollY
                selectedCategory={selectedCategory}
                setSubSelected={setSubSelected}
                subSelected={subSelected}
              />
            ) : (
              <div className="pt-8">
                <h2 className=" font-semibold text-sm text-[#3e3e3e] pb-2">
                  Kategoriler
                </h2>
                <div className="accordion-wrapper py-2 h-auto rounded-lg shadow-sm w-60 bg-[#ffffff] max-h-[calc(100vh-190px)] overflow-y-scroll no-scrollbar">
                  <Accordion
                    selectedCategory={selectedCategory}
                    setSubSelected={setSubSelected}
                    subSelected={subSelected}
                  />
                </div>
              </div>
            )}
            <div className="flex-grow md:pt-8 overflow-y-scroll no-scrollbar">
              {selectedCategory.subCategories.map((subCategory, index) => (
                <ProductWrapper
                  key={subCategory.id}
                  mainCategoryName={selectedCategory.name}
                  subCategory={subCategory}
                  isFirst={index === 0 ? true : false}
                  addItem={addItem}
                />
              ))}
            </div>
            <div className="hidden pt-8 lg:block">
              <h2 className="text-sm font-semibold text-[#3e3e3e] pb-2">
                Sepetim
              </h2>
              <div className="w-[300px] h-[330px] rounded-lg border-2 border-[#FFD300] bg-white overflow-auto">
                <Cart
                  cart={cart}
                  setCart={setCart}
                  addItem={addItem}
                  removeItem={removeItem}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Cart({ cart, setCart, addItem, removeItem }) {
  const getCartProducts = () => {
    const cartProducts = [];
    cart.forEach((productId) => {
      const product = productData.categories
        .flatMap((category) => category.subCategories)
        .flatMap((subCategory) => subCategory.products)
        .find((product) => product.id === productId);
      if (product) {
        cartProducts.push(product);
      }
    });
    return cartProducts;
  };

  return (
    <>
      {cart ? (
        <div className="p-5">
          <ol>
            {getCartProducts().map((product) => (
              <li key={product.id}>
                <div className="flex py-2 border-b">
                  <div className="flex-grow">
                    <p className="text-sm">
                      {product.name.length > 20
                        ? `${product.name.substring(0, 20)}...`
                        : product.name}
                    </p>
                    <p className="text-sm text-[#7849f7] font-semibold">
                      ₺{product.price}
                    </p>
                  </div>
                  <div className="flex">
                    <div
                      onClick={() => removeItem(product.id)}
                      className="bg-white border shadow-md text-center flex justify-center rounded-l-lg w-8 h-8 text-xl text-[#5d3ebc] cursor-pointer"
                    >
                      <div className="my-auto">
                        <BiTrash size={20} />
                      </div>
                    </div>
                    <div className="bg-[#5d3ebc] border shadow-md flex justify-center items-center w-8 h-8 text-white cursor-pointer">
                      <span>1</span>
                    </div>
                    <div className="bg-white border shadow-md text-center rounded-r-lg w-8 h-8 text-xl text-[#5d3ebc] cursor-pointer">
                      +
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      ) : (
        <div className="p-2 text-center">
          <div className="flex py-12 items-center justify-center">
            <img alt="" className="w-[86px] h-[103px]" src={logoSepet} />
          </div>
          <h2 className="font-semibold text-[#5d3ebc]">cartin şu an boş</h2>
          <p className="#697488 pt-2">Sipariş vermek için cartine ürün ekle</p>
        </div>
      )}
    </>
  );
}

function CategoriesScrollY({ selectedCategory, subSelected, setSubSelected }) {
  const navigate = useNavigate();

  function handleCatClick(e) {
    navigate(`/kategori/${e}`);
  }

  return (
    <>
      <div className=" w-full bg-[#7849f7]  overflow-x-scroll whitespace-nowrap">
        {productData.categories.map((category) => (
          <div
            onClick={() => handleCatClick(category.normalizedName)}
            key={category.id}
            className={
              category.id === selectedCategory.id
                ? "border-b-2 border-[#FFD300] inline-block cursor-pointer"
                : "inline-block cursor-pointer"
            }
          >
            <div className="text-white text-sm px-2 py-3 ">{category.name}</div>
          </div>
        ))}
      </div>
      <div className="w-full p-2 bg-white overflow-x-auto whitespace-nowrap text-[14px]/[16px] text-[#5d3ebc]">
        {selectedCategory.subCategories.map((subCategory, index) => (
          <div className="inline-block px-1">
            <div
              className={`rounded border border-opacity-30 border-[#5d3ebc] px-2 py-1 cursor-pointer ${
                subSelected === index ? "bg-[#5d3ebc] text-white" : ""
              }`}
            >
              {subCategory.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function ProductWrapper({ subCategory, isFirst, mainCategoryName, addItem }) {
  return (
    <>
      {isFirst ? (
        <nav className="pb-2 pl-4 md:pl-0 pt-2 md:pt-0 font-semibold text-sm text-[#3e3e3e] bg-[#ffffff] md:bg-[#fafafa]">
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
              <a className="cursor-pointer">{subCategory.name}</a>
            </li>
          </ol>
        </nav>
      ) : (
        <h2 className="font-semibold pl-4 md:pl-0 pt-2 md:pt-0 text-sm text-[#3e3e3e] py-1 bg-[#ffffff] md:bg-[#fafafa]">
          {subCategory.name}
        </h2>
      )}

      <div className="products-wrapper rounded-md border-b md:border-none">
        <div className="products-body grid grid-cols-3 xl:grid-cols-4 md:divide-x md:divide-y divide-gray-100">
          {subCategory.products.map((product) => (
            <Product key={product.id} product={product} addItem={addItem} />
          ))}
        </div>
      </div>
    </>
  );
}

function Product({ product, addItem }) {
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
        <div
          onClick={() => addItem(product.id)}
          className="absolute top-3 right-3 bg-white border shadow-md rounded-lg w-8 h-8 text-xl text-[#5d3ebc] cursor-pointer"
        >
          +
        </div>
      </div>
    </>
  );
}

function Accordion({ selectedCategory, subSelected, setSubSelected }) {
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
            setSubSelected={setSubSelected}
            subSelected={subSelected}
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
  subSelected,
  setSubSelected,
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
