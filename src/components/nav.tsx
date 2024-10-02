import "../styling/nav.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <div className="bar">
      <NavLink to="/inicio">Inicio</NavLink>
      <NavLink to="/about">Sobre mí</NavLink>
      <NavLink to="/tech">Tecnologías</NavLink>
      <NavLink to="/proyects">Proyectos</NavLink>
      <NavLink to="/education">Formación</NavLink>
      <NavLink to="/links">Contacto</NavLink>
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
          className="btnToggle bg-dark-3 text-white p-3 "
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
