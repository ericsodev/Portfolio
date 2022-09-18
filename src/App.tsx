import { useEffect } from "react";
import { Intro } from "./components/Intro";
import "./App.css";
import { About } from "./components/About";
import { Projects } from "./components/Projects";

function App() {
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
    <div className="App">
      <Intro></Intro>
      <About></About>
      <Projects></Projects>
    </div>
  );
}

export default App;
