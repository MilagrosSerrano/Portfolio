import profilePic from "../assets/profile.jpg";
import "../styling/intro.css";
import { FaLocationDot } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { CgNotes } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import miCV from "../assets/MilagrosSerrano1.pdf";

const Mail = "serranomilagros23@gmail.com";

export function Intro() {
  return (
    <section className="about -z-10">
      <img src={profilePic} alt="profile" />
      <div className="description">
        <p className="title">¡Hola, soy Milagros! 👋🏻</p>
        <p className="subTitle">Estudiante de Programación Full-Stack</p>
        <p className="location">
          {" "}
          <FaLocationDot /> Mar del Plata, Argentina.
        </p>
        <div className="btns">
          <button
            className="btnRedes mail bg-primary-2"
            onClick={() => (window.location.href = `mailto:${Mail}`)}
          >
            <TfiEmail /> {Mail}{" "}
          </button>
          <div className="links">
            <a href={miCV} download="MilagrosSerrano1.pdf">
              <button className="btnRedes p-2">
                <CgNotes className="cv" size={22} color="white" />
              </button>
            </a>
            <a href="https://github.com/MilagrosSerrano">
              <button className="btnRedes p-2">
                <FaGithub className="gitHub" size={22} color="white" />
              </button>
            </a>
            <a href="https://www.linkedin.com/in/milagros-serrano-4a49b7307/">
              <button className="btnRedes p-2">
                <FaLinkedin className="linkedin" size={22} color="white" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
