import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { useNavigate } from "react-router-dom";
import userData from "../json/profiles.json";

function Login({ user, setUser, onClose }) {
  const [selected, setSelected] = useState("TR");

  const navigate = useNavigate();

  const [phone, setPhone] = useState("");

  function handleLoginButton() {
    const findedProfile = userData.profiles.find(
      (profil) => profil.phone === phone
    );
    findedProfile ? setUser(`${findedProfile.phone}`) : setUser("5555555555");
    onClose();
    navigate("/kategori");
  }

  const ulkeKod = {
    TR: "+90",
    GB: "+44",
    US: "+1",
    NL: "+31",
    DE: "+49",
    FR: "+33",
    ES: "+34",
    IT: "+39",
  };
  return (
    <>
      <div>
        <div className=" w-full px-10 md:w-[400px]  md:rounded-lg bg-[#f5f5f5] md:bg-white py-5 md:mr-4 shadow-sm">
          <h1 className=" text-center font-semibold pb-2 md:pb-4 text-[#4c3398]">
            Giriş yap veya kayıt ol
          </h1>
          <div className="flex px-3 md:px-0 gap-x-2 ">
            <ReactFlagsSelect
              className="select-flag"
              countries={["TR", "US", "GB", "FR", "DE", "IT", "NL", "ES"]}
              customLabels={ulkeKod}
              selected={selected}
              onSelect={(code) => setSelected(code)}
            />
            <label className="flex-grow relative">
              <input
                required
                type="text"
                maxlength="10"
                className="h-14 px-4 border-2 border-gray-300 rounded w-full bg-[#f5f5f5] md:bg-white transition-colors focus:border-[#4c3398] text-sm focus:outline-none pt-3 peer"
                onChange={(e) => setPhone(e.target.value)}
              />
              <span className="absolute top-0 left-0 h-full px-4 flex items-center text-gray-500 peer-focus:h-8 peer-focus:text-xs peer-focus:text-[#5d3ebc] peer-valid:text-[#5d3ebc] peer-valid:h-8 peer-valid:text-xs transition-all">
                Telefon Numarası
              </span>
            </label>
          </div>
          <button
            onClick={() => handleLoginButton()}
            className="bg-[#ffd300] mt-3 h-12 flex items-center justify-center rounded-lg w-full md:text-sm font-semibold text-[#5d3ebc] hover:bg-[#7849f7] hover:text-[#ddf300] transition-colors"
          >
            Telefon numarası ile devam et
          </button>
          <span className="text-xs my-3">
            Kişisel verilerine dair Aydınlatma Metni için tıklayınız .
          </span>
          <span>
            Hesabınız yok mu?
            <button className="text-violet-600">Kayıt olun.</button>
          </span>
        </div>
      </div>
    </>
  );
}

export default Login;
