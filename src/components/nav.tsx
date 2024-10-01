import "../styling/nav.css";

export function NavBar() {
  return (
    <div className="navBar">
        <ul>
          <li >
            <a href="#"></a>Inicio
          </li>
          <li>
            <a href="./about"></a>Sobre mí
          </li>
          <li>
            <a href="./tech"></a>Tecnologías
          </li>
          <li>
            <a href="./proyects"></a>Proyectos
          </li>
          <li>
            <a href="./education"></a>Formación
          </li>
          <li>
            <a href="./links"></a>Contacto
          </li>
        </ul>
    </div>
  );
}
