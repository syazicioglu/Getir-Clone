import { TbWorld } from "react-icons/tb";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import {
  logoGetirBuyukLink,
  logoGetirCarsiLink,
  logoGetirLink,
  logoGetirSuLink,
  logoGetirYemekLink,
} from "../URLs";

export default function Navbar() {
  return (
    <>
      <div className="navbar md:sticky top-0 z-50 px-2 md:px-4 xl:px-0">
        <div className="container h-10 md:h-11 mx-auto items-center justify-between flex">
          <div className="flex cursor-pointer">
            <div className="priority rounded-t-md px-3 md:px-5 h-10 mt-1 items-center flex">
              <img
                className="h-[14px] md:h-4 priority-img"
                alt=""
                src={logoGetirLink}
              />
            </div>
            <div className="rounded-t-md px-3 md:px-5 mx-px h-10 mt-1 items-center flex">
              <img
                className="h-[14px] md:h-4"
                alt=""
                src={logoGetirYemekLink}
              />
            </div>
            <div className="rounded-t-md px-3 md:px-5  mt-1 items-center flex">
              <img
                className="h-[14px] md:h-4"
                alt=""
                src={logoGetirBuyukLink}
              />
            </div>
            <div className="rounded-t-md px-3 md:px-5 mx-px h-10 mt-1 items-center flex">
              <img className="h-[14px] md:h-4" alt="" src={logoGetirSuLink} />
            </div>
            <div className="rounded-t-md px-3 md:px-5 h-10 mt-1 items-center flex">
              <img
                className="h-[14px] md:h-4"
                alt=""
                src={logoGetirCarsiLink}
              />
            </div>
          </div>
          <div className="navIcon flex h-full ">
            <a
              href="#"
              className="hidden md:flex items-center px-4 h-full font-normal gap-x-3"
            >
              <TbWorld size={20} />
              <span className="hidden lg:flex">Türkçe (TR)</span>
            </a>
            <a
              href="#"
              className="hidden md:flex items-center px-4 h-full font-semibold gap-x-3"
            >
              <BsFillPersonFill size={20} />
              <span className="hidden lg:flex">Giriş Yap</span>
            </a>
            <a
              href="#"
              className="hidden md:flex items-center px-4 h-full font-semibold gap-x-3"
            >
              <BsFillPersonPlusFill size={20} />
              <span className="hidden lg:flex">Kayıt Ol</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
