import "../styling/proyects.css";
import "../styling/about.css";
import { FaCartShopping } from "react-icons/fa6";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoIosApps } from "react-icons/io";
import { Item } from "./item";
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export function Proyectos() {
  return (
    <section className="proyects">
      <hr className="hrProyects" />
      <h1 className="title proyectsTitle">Proyectos</h1>
      <div className="item1">
        <Item
          proyectType={<FaCartShopping size={80}></FaCartShopping>}
          title="Nasty Food Store"
          subtitle="Comida de un restaurante"
          proyectDescription="Muestra de los productos destacados del lugar y una sección de menú en donde se detallan todos los productos disponibles."
          altImg1="HTML"
          techBtn1="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
          altImg2="JavaScript"
          techBtn2="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          pageLink="https://nasty-food.netlify.app/"
          pageIcon={<FaLink size={20}></FaLink>}
          gitLink="https://github.com/MilagrosSerrano/Nasty-Food-Store"
          gitIcon={<FaGithub size={20}></FaGithub>}
        ></Item>
      </div> 
      <div className="item2">
        <Item
        proyectType={<IoGameControllerOutline size={80}></IoGameControllerOutline>}
        title="TA-TE-TI"
        subtitle="Minijuego"
        proyectDescription="Juego de dos jugadores apto para todo público en el que se buscan formar 3 figuras iguales en línea vertical u horizontal para ser el ganador de la partida."
        altImg1="HTML"
        techBtn1="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
        altImg2="JavaScript"
        techBtn2="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        pageLink="https://ta-te-ti-game.netlify.app/"
        pageIcon={<FaLink size={20}></FaLink>}
        gitLink="https://github.com/MilagrosSerrano/TA-TE-TI"
        gitIcon={<FaGithub size={20}></FaGithub>}
        ></Item>
      </div>
      <div className="item3">
        <Item
          proyectType={<IoIosApps size={80}></IoIosApps>}
          title="Metas App"
          subtitle="Aplicación de metas"
          proyectDescription="Podrás crear metas 100% personalizadas, en las que puedes ver de manera gráfica tus objetivos y que de esta manera sean más fáciles de cumplir y de visualizar el progreso."
          altImg1="JavaScript"
          techBtn1="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          altImg2="React"
          techBtn2="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          pageLink="https://app-metas.netlify.app/"
          pageIcon={<FaLink size={20}></FaLink>}
          gitLink="https://github.com/MilagrosSerrano/Metas-App"
          gitIcon={<FaGithub size={20}></FaGithub>}
        ></Item>
      </div>
     
      <hr className="hr" />
    </section>
  );
}
