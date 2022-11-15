import "../styles/about.css";
import { SectionLayout } from "./layout/SectionLayout";

export function About(): JSX.Element {
  return (
    <SectionLayout title={"about me"}>
      <div className="about hidden">
        <p className="p-1">
          I am a second year <strong>Computer Science</strong> specialist at the
          University of Toronto. I have a strong interest in web development,
          linguistics in computer science, and visualization of physics
          simulations.
        </p>
        <br></br>
        <p className="p-2">
          In my free time, I enjoy building mechanical keyboards and configuring
          window managers.
        </p>
      </div>
    </SectionLayout>
  );
}
