import "../styling/item.css";

interface Proyecto {
  proyectType: React.ReactNode;
  title: string;
  subtitle: string;
  proyectDescription: string;
  altImg1: string;
  techBtn1: string;
  altImg2?: string;
  techBtn2?: string;
  pageLink: string;
  pageIcon: React.ReactNode;
  gitLink: string;
  gitIcon: React.ReactNode;
}

export function Item({
  proyectType,
  title,
  subtitle,
  proyectDescription,
  altImg1,
  techBtn1,
  altImg2,
  techBtn2,
  pageLink,
  pageIcon,
  gitLink,
  gitIcon,
}: Proyecto) {
  return (
    <div className="container">
      <div className="proyectType">{proyectType}</div>
      <div className="itemInfo">
        <p className="title itemTitle">{title}</p>
        <p className="subtitle itemSubtitle">{subtitle}</p>
        <p className="proyectDescription">{proyectDescription}</p>
        <div className="techBtn">
          <button className="stack">
            <img alt={altImg1} src={techBtn1} className='stackUsed'></img>
            {altImg1}
          </button>
          <button className="stack">
            <img alt={altImg2} src={techBtn2} className='stackUsed'></img>
            {altImg2}
          </button>
        </div>
        <div className="linksBtn">
          <a href={pageLink} className="pageLink">
            <button >{pageIcon}</button>
          </a>
          <a href={gitLink} className="gitLink">
            <button >{gitIcon}</button>
          </a>
        </div>
      </div>
    </div>
  );
}
