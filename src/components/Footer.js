import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

export default function Footer() {
  const [iconMouseEnter, setIconMouseEnter] = useState(null);
  const [accordion, setAccordion] = useState(1);

  function handleAccordion(e) {
    if (accordion === e) {
      setAccordion(0);
    } else {
      setAccordion(e);
    }
  }

  return (
    <>
      <footer className="footer md:shadow-sm">
        <nav className="pb-6 px-4 xl:px-0 shadow-sm md:shadow-none mb-px md:mb-0">
          <div className="container mx-auto flex flex-col md:flex-row p-1 md:p-0 justify-stretch md:pt-11 gap-y-6 md:gap-y-0">
            <div className="flex-grow">
              <div className="text-lg text-[#5d3ebc] pb-4">Getir'i indir!</div>
              <ol className="flex flex-col gap-y-4">
                <li>
                  <div className="">
                    <a href="#">
                      <img
                        alt=""
                        src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                      />
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a href="#">
                      <img
                        alt=""
                        src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                      />
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a href="#">
                      <img
                        alt=""
                        src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                      />
                    </a>
                  </div>
                </li>
              </ol>
            </div>
            <div className="flex-grow">
              <div
                className="text-lg text-[#5d3ebc] md:pb-4 flex justify-between"
                onClick={() => handleAccordion(1)}
              >
                <div>Getir'i keşfet</div>
                <div className="block md:hidden">{accordion === 1 ? 2 : 1}</div>
              </div>
              <ol
                className={`${
                  accordion === 1 ? "" : "hidden"
                } md:hidden flex flex-col gap-y-4 text-[14px]`}
              >
                <li>
                  <a href="#">Hakkımızda</a>
                </li>
                <li>
                  <a href="#">Kariyer</a>
                </li>
                <li>
                  <a href="#">Teknoloji Kariyerleri</a>
                </li>
                <li>
                  <a href="#">İletişim</a>
                </li>
                <li>
                  <a href="#">Sosyal Sorumluluk Projeleri</a>
                </li>
                <li>
                  <a href="#">Basın Bültenleri</a>
                </li>
              </ol>
              <ol
                className="hidden
                md:flex flex-col gap-y-4 text-[14px]"
              >
                <li>
                  <a href="#">Hakkımızda</a>
                </li>
                <li>
                  <a href="#">Kariyer</a>
                </li>
                <li>
                  <a href="#">Teknoloji Kariyerleri</a>
                </li>
                <li>
                  <a href="#">İletişim</a>
                </li>
                <li>
                  <a href="#">Sosyal Sorumluluk Projeleri</a>
                </li>
                <li>
                  <a href="#">Basın Bültenleri</a>
                </li>
              </ol>
            </div>
            <div className="flex-grow">
              <div
                className="text-lg text-[#5d3ebc] md:pb-4 flex justify-between"
                onClick={() => handleAccordion(2)}
              >
                <div>Yardıma mı ihtiyacın var?</div>
                <div className="block md:hidden">{accordion === 2 ? 2 : 1}</div>
              </div>
              <ol
                className={`${
                  accordion === 2 ? "" : "hidden"
                } md:hidden flex flex-col gap-y-4 text-[14px]`}
              >
                <li>
                  <a href="#">Sıkça Sorulan Sorular</a>
                </li>
                <li>
                  <a href="#">Kişisel Verilerin Korunması</a>
                </li>
                <li>
                  <a href="#">Gizlilik Politikası</a>
                </li>
                <li>
                  <a href="#">Kullanım Koşulları</a>
                </li>
                <li>
                  <a href="#">Çerez Politikası</a>
                </li>
                <li>
                  <a href="#">İşlem Rehberi</a>
                </li>
              </ol>
              <ol
                className="hidden
                 md:flex flex-col gap-y-4 text-[14px]"
              >
                <li>
                  <a href="#">Sıkça Sorulan Sorular</a>
                </li>
                <li>
                  <a href="#">Kişisel Verilerin Korunması</a>
                </li>
                <li>
                  <a href="#">Gizlilik Politikası</a>
                </li>
                <li>
                  <a href="#">Kullanım Koşulları</a>
                </li>
                <li>
                  <a href="#">Çerez Politikası</a>
                </li>
                <li>
                  <a href="#">İşlem Rehberi</a>
                </li>
              </ol>
            </div>
            <div className="flex-grow">
              <div
                className="text-lg text-[#5d3ebc] md:pb-4 flex justify-between"
                onClick={() => handleAccordion(3)}
              >
                <div>İş Ortağımız Ol</div>
                <div className="block md:hidden">{accordion === 3 ? 2 : 1}</div>
              </div>
              <ol
                className={`${
                  accordion === 3 ? "" : "hidden"
                } md:hidden flex flex-col gap-y-4 text-[14px]`}
              >
                <li>
                  <a href="#">Bayimiz Olun</a>
                </li>
                <li>
                  <a href="#">Deponu Kirala</a>
                </li>
                <li>
                  <a href="#">GetirYemek Restoranı Ol</a>
                </li>
                <li>
                  <a href="#">GetirÇarşı İşletmesi Ol</a>
                </li>
                <li>
                  <a href="#">Zincir Restoranlar</a>
                </li>
              </ol>
              <ol
                className="hidden
                 md:flex flex-col gap-y-4 text-[14px]"
              >
                <li>
                  <a href="#">Bayimiz Olun</a>
                </li>
                <li>
                  <a href="#">Deponu Kirala</a>
                </li>
                <li>
                  <a href="#">GetirYemek Restoranı Ol</a>
                </li>
                <li>
                  <a href="#">GetirÇarşı İşletmesi Ol</a>
                </li>
                <li>
                  <a href="#">Zincir Restoranlar</a>
                </li>
              </ol>
            </div>
            <div className="hidden xl:block">
              <div className="shadow-etbis rounded-lg p-3 inline-block ">
                <a href="#">
                  <img
                    className="width-[72px] h-[84px]"
                    alt=""
                    src="https://cdn.getir.com/getirweb-images/common/etbis.png"
                  />
                </a>
              </div>
            </div>
          </div>
        </nav>
        <article>
          <div className="container md:px-6 xl:px-0 md:border-t py-6 mx-auto flex flex-col md:flex-row bg-[#fafafa] md:bg-white items-center gap-y-3">
            <span className="text-gray-600 text-sm md:text-xs pr-3  my-auto">
              © 2024 Getir
            </span>
            <div className="block md:pl-3 my-auto">
              <ul class="md:list-disc text-sm md:text-xs text-violet-700">
                <li>
                  <a href="#">Bilgi Toplumu Hizmetleri</a>
                </li>
              </ul>
            </div>

            <div className="iconwrapper flex-grow">
              <div className="md:float-right">
                <ol className="flex flex-row gap-x-3">
                  <li>
                    <div
                      className="p-1 rounded-lg hover:bg-[#dbdbff] transition-all"
                      onMouseEnter={() => setIconMouseEnter("Facebook")}
                      onMouseLeave={() => setIconMouseEnter(null)}
                    >
                      <a href="#">
                        <div className="">
                          <FaFacebook
                            size={21}
                            color={
                              iconMouseEnter === "Facebook"
                                ? "#7849f7"
                                : "#697488"
                            }
                          />
                        </div>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div
                      className="p-1 rounded-lg hover:bg-[#dbdbff] transition-all "
                      onMouseEnter={() => setIconMouseEnter("Twitter")}
                      onMouseLeave={() => setIconMouseEnter(null)}
                    >
                      <a href="#">
                        <div className="">
                          <FaTwitter
                            size={21}
                            color={
                              iconMouseEnter === "Twitter"
                                ? "#7849f7"
                                : "#697488"
                            }
                          />
                        </div>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div
                      className="p-1 rounded-lg hover:bg-[#dbdbff] transition-all "
                      onMouseEnter={() => setIconMouseEnter("Instagram")}
                      onMouseLeave={() => setIconMouseEnter(null)}
                    >
                      <a href="#">
                        <div className="">
                          <FaInstagram
                            size={21}
                            color={
                              iconMouseEnter === "Instagram"
                                ? "#7849f7"
                                : "#697488"
                            }
                          />
                        </div>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div
                      className=" border hover:border-[#dbdbff] rounded-lg p-1 hover:bg-[#dbdbff] text-[#697488] hover:text-[#7849f7] transition-all"
                      onMouseEnter={() => setIconMouseEnter("Dunya")}
                      onMouseLeave={() => setIconMouseEnter(null)}
                    >
                      <button className="flex justify-center gap-x-2 px-2">
                        <div className="">
                          <TbWorld
                            size={18}
                            color={
                              iconMouseEnter === "Dunya" ? "#7849f7" : "#697488"
                            }
                          />
                        </div>
                        <span className="flex md:hidden lg:flex text-xs font-[480]  my-auto">
                          Türkçe (TR)
                        </span>
                      </button>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </article>
      </footer>
    </>
  );
}
