import React from "react";

export default function Campain() {
  return (
    <>
      <div className="campain bg-[#fafafa] pb-16 pt-4 md:pt-8 px-4 xl:px-0">
        <div className="container mx-auto grid grid-row-3 md:grid-cols-3 gap-y-4 md:gap-x-4 ">
          <div className="shadow-3xl col-span-1 flex flex-col  md:rounded-lg bg-white px-4 pb-10 pt-14">
            <img
              src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg"
              className="mx-auto"
              width={150}
              height={150}
              alt=""
            />
            <h2 className="font-semibold text-lg text-[#5d3ebc] text-center pt-4">
              Her siparişine bir kampanya
            </h2>
            <p className="text-[#697488] text-center pt-2">
              Getir’de vereceğin her siparişe uygun bir kampanya bulabilirsin.
            </p>
          </div>
          <div className="shadow-3xl col-span-1 flex flex-col  md:rounded-lg bg-white px-4 pb-10 pt-14">
            <img
              src="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg"
              className="mx-auto"
              width={150}
              height={150}
              alt=""
            />
            <h2 className="font-semibold text-lg text-[#5d3ebc] text-center pt-4">
              Dakikalar içinde kapında
            </h2>
            <p className="text-[#697488] text-center pt-2">
              Getir’le siparişin dakikalar içinde kapına gelir.
            </p>
          </div>
          <div className="shadow-3xl  col-span-1 flex flex-col  md:rounded-lg bg-white px-4 pb-10 pt-14">
            <img
              src="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg"
              className="mx-auto"
              width={150}
              height={150}
              alt=""
            />
            <h2 className="font-semibold text-lg text-[#5d3ebc] text-center pt-4">
              Binlerce çeşit mutluluk
            </h2>
            <p className="text-[#697488] text-center pt-2">
              Getir’de binlerce çeşit arasından seçimini yapabilirsin.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
