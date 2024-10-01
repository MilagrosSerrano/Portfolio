import profilePic from "../assets/profile.jpg";
import "../styling/section.css";
import { FaLocationDot } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { CgNotes } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import miCV from "../assets/MilagrosSerrano1.pdf";

const Mail = "serranomilagros23@gmail.com";

export function AboutMe() {
  return (
    <section className="about">
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
          <a href={miCV} download="MilagrosSerrano1.pdf">
            <button className="btnRedes cv p-2">
              <CgNotes size={18} color="white" />
            </button>
          </a>
          <a href="https://github.com/MilagrosSerrano">
            <button className="btnRedes gitHub p-2">
              <FaGithub size={18} color="white" />
            </button>
          </a>
          <a href="https://www.linkedin.com/in/milagros-serrano-4a49b7307/">
            <button className="btnRedes linkedin p-2">
              <FaLinkedin size={18} color="white" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
