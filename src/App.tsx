import { useEffect, useRef } from "react";
import { Intro } from "./components/Intro";
import "./App.css";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Current } from "./components/Present";

function App() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
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
      <Current></Current>
    </div>
  );
}

export default App;
