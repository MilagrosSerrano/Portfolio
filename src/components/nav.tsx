import "../styling/nav.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-scroll";

function NavLinks() {
  return (
    <div className="bar">
      <Link to="" smooth={true} 
      duration={1500} className="link">Inicio</Link>
      <Link to="info" smooth={true} 
      duration={1500} className="link">Sobre mí</Link>
      <Link to="/tech" className="link" smooth={true} 
      duration={1500}>Tecnologías</Link>
      <Link to="/proyects" className="link" smooth={true} 
      duration={1500}>Proyectos</Link>
      <Link to="/education" className="link" smooth={true} 
      duration={1500}>Formación</Link>
      <Link to="/links" className="link" smooth={true} 
      duration={1500}>Contacto</Link>
    </div>
  );
}

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="header flex ">
        <div className="deskBar w-full">
          <NavLinks></NavLinks>
        </div>
        <button
          className="btnToggle"
          onClick={toggleMenu}
        >
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
