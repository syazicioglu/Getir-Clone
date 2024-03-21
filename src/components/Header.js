import { logoGetirLink } from "../URLs";

function Header() {
  return (
    <>
      <div className="header hidden md:block bg-[#5d3ebc]">
        <div className="container md:px-6 xl:px-0 mx-auto flex h-[75px] w-full">
          <img
            className="priority-img my-auto h-[22px] md:h-[27px]"
            alt=""
            src={logoGetirLink}
          />
        </div>
      </div>
    </>
  );
}

export default Header;
