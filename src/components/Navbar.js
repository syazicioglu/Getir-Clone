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
import LoginModal from "../modals/LoginModal";
import Modal from "../modals/Modal";
import RegisterModal from "../modals/RegisterModal";
import { useState } from "react";

export default function Navbar({ modalOpen, setModalOpen }) {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };
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
          <div className="nav-icon flex h-full ">
            <button className="hidden md:flex items-center px-4 h-full font-normal gap-x-3">
              <TbWorld size={20} />
              <span className="hidden lg:flex">Türkçe (TR)</span>
            </button>
            <button
              onClick={() => openModal(<LoginModal />)}
              className="hidden md:flex items-center px-4 h-full font-semibold gap-x-3"
            >
              <BsFillPersonFill size={20} />
              <span className="hidden lg:flex">Giriş Yap</span>
            </button>
            <button
              onClick={() => openModal(<RegisterModal />)}
              className="hidden md:flex items-center px-4 h-full font-semibold gap-x-3"
            >
              <BsFillPersonPlusFill size={20} />
              <span className="hidden lg:flex">Kayıt Ol</span>
            </button>
          </div>
        </div>
      </div>
      <div className="media-only flex items-center justify-center md:hidden bg-[#5d3ebc] h-16 w-full">
        <img className="priority-img h-[22px]" alt="" src={logoGetirLink} />
      </div>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        {modalContent}
      </Modal>
    </>
  );
}
