import "../styling/nav.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-scroll";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function NavLinks() {
    function closeMenu() {
      setTimeout(() => {
        setIsOpen(false);
      }, 100);
    }

    return (
      <div className="bar">
        <Link
          to="header"
          smooth={true}
          duration={1500}
          className="link"
          onClick={closeMenu}
        >
          Inicio
        </Link>
        <Link
          to="info"
          smooth={true}
          duration={1500}
          className="link"
          onClick={closeMenu}
        >
          Sobre mí
        </Link>
        <Link
          to="technologies"
          className="link"
          smooth={true}
          duration={1500}
          onClick={closeMenu}
        >
          Tecnologías
        </Link>
        <Link
          to="/proyects"
          className="link"
          smooth={true}
          duration={1500}
          onClick={closeMenu}
        >
          Proyectos
        </Link>
        <Link
          to="/education"
          className="link"
          smooth={true}
          duration={1500}
          onClick={closeMenu}
        >
          Formación
        </Link>
        <Link
          to="/links"
          className="link"
          smooth={true}
          duration={1500}
          onClick={closeMenu}
        >
          Contacto
        </Link>
      </div>
    );
  }

  return (
    <>
      <nav className="header flex ">
        <div className="deskBar w-full">
          <NavLinks></NavLinks>
        </div>
        <button className="btnToggle" onClick={toggleMenu}>
          {isOpen ? (
            <IoCloseSharp></IoCloseSharp>
          ) : (
            <RxHamburgerMenu></RxHamburgerMenu>
          )}
        </button>
      </nav>
      {isOpen && (
        <div className="movileBar">
          <NavLinks></NavLinks>
        </div>
      )}
    </>
  );
}
