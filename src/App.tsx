import { useEffect, useRef } from "react";
import { Intro } from "./pages/Intro";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Present } from "./pages/Present";
import "./App.css";

function App() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });
    const hidden = document.querySelectorAll(".hidden");
    hidden.forEach((e) => observer.observe(e));
  }, []);
  return (
    <div className="App" ref={ref}>
      <Intro></Intro>
      <About></About>
      <Projects></Projects>
      <Present></Present>
    </div>
  );
}

export default App;
