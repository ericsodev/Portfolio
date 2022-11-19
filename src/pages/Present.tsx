import { SectionLayout } from "./layout/SectionLayout";
import "../styles/present.css";

export function Present(): JSX.Element {
  return (
    <SectionLayout title={"present"} id="present">
      <div className="present hidden">
        <div className="present-section">
          <h3 className="present-section-title">/ currently learning /</h3>
          <ul className="present-section-content">
            <li>React-Query</li>
            <li>Deployment on Digital Ocean</li>
            <li>Firebase</li>
          </ul>
        </div>
        <div className="present-section">
          <h3 className="present-section-title">/ current projects /</h3>
          <ul className="present-section-content">
            <li>Personalized Todo App</li>
          </ul>
        </div>
      </div>
    </SectionLayout>
  );
}
