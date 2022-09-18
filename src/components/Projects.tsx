import "../styles/projects.css";
import { SectionLayout } from "./layout/SectionLayout";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

const exampleProjects = [
  {
    title: "Pomodoro Timer",
    desc: "A productivity tool to help create healthy study habits.",
    tools: ["React.js", "Chakra UI"],
  },
  {
    title: "Game of Life",
    desc: "A recreation of John Conway's popular simulation game, the  Game of Life.",
    tools: ["React.js", "Tailwind CSS"],
  },
  {
    title: "Mood Board",
    desc: "A quick way to record the quality of your day and reflect on yourself.",
    tools: ["React.js", "Tailwind CSS"],
  },
];
export function Projects({ className }: { className?: string }): JSX.Element {
  return (
    <SectionLayout title={"creations"}>
      <div className={`projects ${className}`}>
        <div className="cards">
          {exampleProjects.map((proj) => {
            return <Card {...proj}></Card>;
          })}
        </div>
      </div>
    </SectionLayout>
  );
}

interface ICard {
  title: string;
  desc?: string;
  tools: string[];
  children?: React.ReactNode;
}
function Card({ title, desc, tools, children }: ICard): JSX.Element {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <div className="card-icons">
          <GitHubIcon></GitHubIcon>
          <LanguageIcon></LanguageIcon>
        </div>
      </div>
      <div className="card-content">
        <p>{desc}</p>
        {children}
      </div>
      <div className="card-tags">
        {tools.map((tool) => {
          return <span className="card-tag">{tool}</span>;
        })}
      </div>
    </div>
  );
}
