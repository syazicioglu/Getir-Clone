export default function Download() {
  return (
    <>
      <div className="download md:py-6 md:px-4 bg-[#fafafa]">
        <div className="container  overflow-hidden md:mx-auto md:items-center md:rounded-lg flex justify-between bg-none md:bg-[url('https://cdn.getir.com/getirweb-images/common/illustration/doodle.png')]">
          <div className="text-white p-4 md:p-12 flex-grow min-w-[600px]">
            <h2 className=" text-3xl font-bold pb-3">Getir'i indir!</h2>
            <p className="font-semibold">
              İstediğiniz ürünleri dakikalar içinde kapınıza <br />
              getirelim.
            </p>
            <div className="grid md:flex gap-y-2 gap-x-2 mt-3 md:pt-7">
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
          <div className="hidden md:flex flex-shrink-0 md:pt-8">
            <img
              className="w-[605px] h-auto"
              alt=""
              src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}
