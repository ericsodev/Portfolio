import "../styles/about.css";
import { SectionLayout } from "./layout/SectionLayout";

export function About(): JSX.Element {
  return (
    <SectionLayout title={"about me"}>
      <div className="about hidden">
        <p>
          I am currently a second year studying Computer Science at the
          University of Toronto
        </p>
      </div>
    </SectionLayout>
  );
}
