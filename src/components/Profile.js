export default function Profile() {
  return (
    <>
      <div className="page-profile bg-[#fafafa]">
        <div className="container grid grid-cols-1 md:grid-cols-4 py-8 px-6 lg:px-4 xl:px-2 mx-auto">
          <div className="col-span-1 order-2 md:order-1 p-2">
            <div className="py-3">
              <div className="rounded-lg shadow-sm bg-white">
                <div className="px-6">
                  <ol>
                    <li>
                      <div className="py-3.5 border-b border-[#f2f0f5] group">
                        <span className="text-[15px]/[20px]  font-semibold text-[#888888] group-hover:text-[#5d3ebc]">
                          Adreslerim
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="py-3.5 border-b border-[#f2f0f5] group">
                        <span className="text-[15px]/[20px]  font-semibold text-[#888888] group-hover:text-[#5d3ebc]">
                          Favori Ürünlerim
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="py-3.5 border-b border-[#f2f0f5] group">
                        <span className="text-[15px]/[20px]  font-semibold text-[#888888] group-hover:text-[#5d3ebc]">
                          Geçmiş Siparişlerim
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="py-3.5 border-b border-[#f2f0f5] group">
                        <span className="text-[15px]/[20px]  font-semibold text-[#888888] group-hover:text-[#5d3ebc]">
                          Ödeme Yöntemlerim
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="py-3.5 border-b border-[#f2f0f5] group">
                        <span className="text-[15px]/[20px]  font-semibold text-[#888888] group-hover:text-[#5d3ebc]">
                          Fatura Bilgileri
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="py-3.5 border-b border-[#f2f0f5] group">
                        <span className="text-[15px]/[20px]  font-semibold text-[#888888] group-hover:text-[#5d3ebc]">
                          İletişim Tercihlerim
                        </span>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 order-1 md:order-2  p-2  h-20">
            <div className="p-2 bg-black"></div>
          </div>
        </div>
      </div>
    </>
  );
}
