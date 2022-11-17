import "../styles/intro.css";
export function Intro(): JSX.Element {
  return (
    <div className="intro hidden">
      <div className="intro-header">
        <h1 className="title-gt">&gt;</h1>
        <h1 className="title">
          hey, im <strong>eric</strong>
        </h1>
      </div>
      <div className="intro-content">
        I like to learn and create stuff along the way.
      </div>
    </div>
  );
}
