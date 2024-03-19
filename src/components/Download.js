export default function Download() {
  return (
    <div className="Download my-11 md:px-4 relative">
      <div className="Dcontainer mx-auto md:items-center md:rounded-lg flex justify-between bg-none md:bg-[url('https://cdn.getir.com/getirweb-images/common/illustration/doodle.png')]">
        <div className="text-white p-4 md:p-12 ">
          <h2 className=" text-3xl font-bold mb-3">Getir'i indir!</h2>
          <p className="font-semibold">
            İstediğiniz ürünleri dakikalar içinde kapınıza <br />
            getirelim.
          </p>
          <div className="grid md:flex gap-y-2 gap-x-2 mt-3 md:mt-8">
            <a href="#">
              <img
                alt=""
                src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
              />
            </a>
            <a href="#">
              <img
                alt=""
                src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
              />
            </a>
            <a href="#">
              <img
                alt=""
                src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
              />
            </a>
          </div>
        </div>
        <div className="hidden md:flex mt-6">
          <img
            alt=""
            src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"
            style={{ width: "605px", height: "288px" }}
          />
        </div>
      </div>
    </div>
  );
}
