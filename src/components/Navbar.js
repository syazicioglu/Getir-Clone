import { TbWorld } from "react-icons/tb";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { HiGift } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
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
import { useNavigate } from "react-router-dom";
import userData from "../json/profiles.json";

export default function Navbar({ modalOpen, setModalOpen, user, setUser }) {
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
              <a href={user ? "/kategori/su-icecek" : "/"}>
                <img
                  className="h-[14px] md:h-4 priority-img"
                  alt=""
                  src={logoGetirLink}
                />
              </a>
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
          {user ? (
            <NavbarRightLogin user={user} setUser={setUser} />
          ) : (
            <NavbarRightGuest
              openModal={openModal}
              user={user}
              setUser={setUser}
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
            />
          )}
        </div>
      </div>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        user={user}
        setUser={setUser}
      >
        {modalContent}
      </Modal>
    </>
  );
}

function NavbarRightLogin({ user, setUser }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const currentUser = userData.profiles.find((profil) => profil.phone === user);

  function handleLogoutButton() {
    setUser("");
    console.log("Çıkış yapıldı!");
    setIsOpen(false);
    navigate("/");
  }

  return (
    <>
      <div className="nav-icon flex h-full ">
        <button
          onClick={() => setUser("safasfasg")}
          className="hidden md:flex items-center px-4 h-full font-normal gap-x-3"
        >
          <TbWorld size={20} />
          <span className="hidden lg:flex">Türkçe (TR)</span>
        </button>
        <button className="hidden md:flex items-center px-4 h-full gap-x-3">
          <HiGift size={20} />
          <span className="hidden lg:flex">Kampanyalar</span>
        </button>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="hidden md:flex items-center px-4 h-full gap-x-3"
          >
            <IoPerson size={18} />
            <span className="hidden lg:flex">Profil</span>
            <span
              className={`nav-icon-wrapper my-auto ${isOpen ? "selected" : ""}`}
            >
              <IoIosArrowDown className={isOpen ? "rotate" : ""} />
            </span>
          </button>
          {isOpen && (
            <div className="hidden md:flex absolute right-0 top-[40px] w-56 origin-top-right bg-white">
              <div className="flex flex-col w-full">
                <div
                  onClick={() => navigate("/hesap")}
                  className="bg-[#f3f0fe] p-4 flex cursor-pointer"
                >
                  <div className="text-[#dbdbff] p-1 bg-white rounded">
                    <IoPerson size={30} />
                  </div>
                  <div className="px-2 flex flex-col">
                    <span className="text-sm text-black">
                      {currentUser.name} {currentUser.surname}
                    </span>
                    <span className="text-xs text-gray-400">
                      +90{currentUser.phone}
                    </span>
                  </div>
                </div>
                <div className="dropdown-body py-1">
                  <div>
                    <button
                      onClick={() => navigate("/hesap/#")}
                      className="block px-4 py-2 w-full text-start hover:bg-[#f3f0fe] group"
                    >
                      <span className="text-[#191919] group-hover:text-[#7849f7]">
                        Adreslerim
                      </span>
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => navigate("/hesap/#")}
                      className="block px-4 py-2 w-full text-start hover:bg-[#f3f0fe] group"
                    >
                      <span className="text-[#191919] group-hover:text-[#7849f7]">
                        Geçmiş Siparişlerim
                      </span>
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => navigate("/hesap/#")}
                      className="block px-4 py-2 w-full text-start hover:bg-[#f3f0fe] group"
                    >
                      <span className="text-[#191919] group-hover:text-[#7849f7]">
                        Ödeme Yöntemlerim
                      </span>
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => navigate("/hesap/#")}
                      className="block px-4 py-2 w-full text-start hover:bg-[#f3f0fe] group"
                    >
                      <span className="text-[#191919] group-hover:text-[#7849f7]">
                        Fatura Bilgileri
                      </span>
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => navigate("/hesap/#")}
                      className="block px-4 py-2 w-full text-start hover:bg-[#f3f0fe] group"
                    >
                      <span className="text-[#191919] group-hover:text-[#7849f7]">
                        İletişim Tercihlerim
                      </span>
                    </button>
                  </div>
                </div>
                <div className="border-t">
                  <div className="py-1.5">
                    <button
                      onClick={handleLogoutButton}
                      className="block w-full text-start px-4 py-2 text-sm hover:bg-[#f3f0fe] group"
                    >
                      <span className="text-[#191919] group-hover:text-[#7849f7]">
                        Çıkış Yap
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function NavbarRightGuest({
  openModal,
  user,
  setUser,
  modalOpen,
  setModalOpen,
}) {
  return (
    <>
      <div className="nav-icon flex h-full ">
        <button className="hidden md:flex items-center px-4 h-full font-normal gap-x-3">
          <TbWorld size={20} />
          <span className="hidden lg:flex">Türkçe (TR)</span>
        </button>
        <button
          onClick={() =>
            openModal(
              <LoginModal
                user={user}
                setUser={setUser}
                open={modalOpen}
                onClose={() => setModalOpen(false)}
              />
            )
          }
          className="hidden md:flex items-center px-4 h-full font-semibold gap-x-3"
        >
          <BsFillPersonFill size={20} />
          <span className="hidden lg:flex">Giriş Yap</span>
        </button>
        <button
          onClick={() =>
            openModal(
              <RegisterModal
                user={user}
                setUser={setUser}
                open={modalOpen}
                onClose={() => setModalOpen(false)}
              />
            )
          }
          className="hidden md:flex items-center px-4 h-full font-semibold gap-x-3"
        >
          <BsFillPersonPlusFill size={20} />
          <span className="hidden lg:flex">Kayıt Ol</span>
        </button>
      </div>
    </>
  );
}
