import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import logo from "../assets/antto-logo-b.png"
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-red";

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <img src={logo} alt="logo" className="w-14 h-full text-black" />

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              page="Inicio"
             
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Habilidades"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Proyectos"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
           
            <Link
              page="Contacto"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2 "
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <HiOutlineMenu className="w-10 h-6 text-white "/>
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-red w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <HiOutlineX className="w-10 h-6 text-black"/>
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <Link
                page="Inicio"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Habilidades"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Proyectos"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
             
              <Link
                page="Contacto"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
