import { logoGetirLink } from "../URLs";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import productData from "../json/product.json";

function Header() {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  return isSmallScreen ? <SmallScreenHeader /> : <BigScreenHeader />;
}

function SmallScreenHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {searchOpen ? (
        <div className="flex justify-between bg-[#5d3ebc] p-4 h-16 w-full">
          <div className="my-auto h-10 flex-grow rounded-lg bg-[#f5f5f5] relative">
            <div className="text-[#5d3ebc] left-4 top-3 absolute">
              <FiSearch />
            </div>
            <input
              className="absolute left-10 top-2 bg-[#f5f5f5] focus:outline-none"
              placeholder="Ürün ara"
            ></input>
            <div className="absolute right-0 top-0  rounded-r-lg bg-white h-10">
              <button className=" flex flex-row py-1.5 pl-3 px-3"></button>
            </div>
          </div>
          <div
            onClick={() => setSearchOpen(false)}
            className="cursor-pointer my-auto text-white"
          >
            <IoCloseOutline size={30} />
          </div>
        </div>
      ) : (
        <div className="flex justify-between bg-[#5d3ebc] p-4 h-16 w-full">
          <div className="my-auto">
            <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>

          <img
            className="priority-img h-[22px] my-auto"
            alt=""
            src={logoGetirLink}
          />
          <div
            onClick={() => setSearchOpen(true)}
            className="flex my-auto text-white cursor-pointer"
          >
            <FiSearch size={20} />
          </div>
        </div>
      )}
    </>
  );
}

function BigScreenHeader() {
  const [searchOpen, setSearchOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  function getProductsFromJsonData(productData, searchTerm = "") {
    // Tüm ürünleri birleştir
    const allProducts = productData.categories.flatMap((category) =>
      category.subCategories.flatMap((subCategory) => subCategory.products)
    );

    // Arama terimine göre filtrele
    const filteredProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredProducts;
  }

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchTerm.length >= 2) {
      setSearchOpen(true); // Arama çubuğu her zaman açılsın
      setSearchResults(getProductsFromJsonData(productData, searchTerm));
    } else {
      setSearchOpen(false); // Arama çubuğu kapatılsın
      setSearchResults([]); // Sonuçları temizle
    }
  }, [searchTerm]); // searchTerm değiştiğinde useEffect yeniden çalışacak

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
  };

  return (
    <>
      <div className="header bg-[#5d3ebc]">
        <div className="container flex justify-between lg:grid lg:grid-cols-11 md:px-6 xl:px-0 mx-auto h-[75px]">
          <div className="col-span-3 flex">
            <img
              className="priority-img my-auto h-[22px] md:h-[27px]"
              alt=""
              src={logoGetirLink}
            />
          </div>
          <div className="col-span-5 flex">
            <div
              className={`my-auto h-10 w-[360px] lg:w-[500px] bg-[#f5f5f5] relative ${
                searchOpen ? "rounded-t-lg" : "rounded-lg"
              }`}
            >
              <div
                onClick={() => setSearchOpen(!searchOpen)}
                className="w-full relative"
              >
                <div className="text-[#5d3ebc] left-4 top-3 absolute">
                  <FiSearch />
                </div>
                <input
                  className="absolute left-10 top-2  bg-[#f5f5f5] focus:outline-none w-3/4 "
                  placeholder="Ürün ara"
                  value={searchTerm}
                  onChange={handleInputChange}
                ></input>
                <div className="absolute right-0 top-0  rounded-r-lg bg-white h-10">
                  <button className=" flex flex-row py-1.5 pl-3 px-3">
                    <img
                      alt=""
                      className="h-[24px] w-[18px] my-auto p-px"
                      src="https://cdn.getir.com/address-emojies/House.svg"
                    />
                    <div className="hidden lg:block text-sm font-semibold p-0.5 text-center text-[#6f6f6f] pl-2">
                      Ev
                    </div>
                    <div className="p-1">
                      <IoIosArrowForward size={19} className="right-arrow" />
                    </div>
                  </button>
                </div>
              </div>
              {searchOpen && (
                <div className="absolute rounded-b-lg top-10 left-0 z-10 bg-white w-full max-h-96 overflow-auto">
                  {searchResults.length < 1 ? (
                    <div className=" p-4">
                      <div>Arama yapın...</div>
                    </div>
                  ) : (
                    <ol>
                      {searchResults.map((product) => (
                        <SearchLiEl key={product.id} product={product} />
                      ))}
                    </ol>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SearchLiEl({ product }) {
  return (
    <>
      <li>
        <div className="flex gap-x-2 px-2 py-1.5 border-b">
          <div className="w-8 h-8 rounded border">
            <img
              alt=""
              className="p-1"
              src="https://cdn.getir.com/product/61deca79fd9207643644529e_8f8ddaf1-cf45-4382-b990-038509149ccd.jpeg"
            />
          </div>
          <div className="flex flex-grow">
            <div className="my-auto">
              {product.name}
              <span className=" text-gray-500 ml-2">1L</span>
            </div>
          </div>
          <div className="text-[#5d3ebc] text-center flex">
            <div className="my-auto font-semibold text-sm">₺76,99</div>
          </div>
          <div className="flex">
            <div className="bg-white my-auto border shadow-md rounded-lg w-7 h-7 text-center text-xl text-[#5d3ebc] cursor-pointer">
              +
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

function HamburgerMenu({ isOpen, setIsOpen }) {
  return (
    <>
      <div>
        <button className="text-xl text-white" onClick={() => setIsOpen(true)}>
          <GiHamburgerMenu size={20} />
        </button>
        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-full z-50 bg-[#e2e2e2]">
            <button
              className="absolute top-0 right-0 p-5 text-white text-3xl "
              onClick={() => setIsOpen(false)}
            >
              x
            </button>
            <div className="flex flex-col h-full">
              <a href="#home" className="mb-4" onClick={() => setIsOpen(false)}>
                Ana Sayfa
              </a>
              <a
                href="#about"
                className="mb-4"
                onClick={() => setIsOpen(false)}
              >
                Hakkımızda
              </a>
              <a
                href="#contact"
                className="mb-4"
                onClick={() => setIsOpen(false)}
              >
                İletişim
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
