import "../styling/tech.css";

export function Tech() {
  return (
    <>
      <h1 className="title">Tecnologías</h1>
      <section className="technologies">
        <div className="html">
          <img
            className="techImg"
            alt="html"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
          />
        </div>
        <div className="css">
          <img
            className="techImg"
            alt="css"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
          />
        </div>
        <div className="tailwind">
          <img
            className="techImg"
            alt="tailwind"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          />
        </div>
        <div className="javascript">
          <img
            className="techImg"
            alt="javascript"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          />
        </div>
        <div className="react">
          <img
            className="techImg"
            alt="react"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          />
        </div>
        <div className="typescript">
          <img
            className="techImg"
            alt="typescript"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
          />
        </div>
        <div className="sql">
          <img
            className="techImg"
            alt="sql"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
          />
        </div>
      </section>
    </>
  );
}
