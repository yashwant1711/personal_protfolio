import "./App.css";
import Firstsection from "./components/Firstsection";
import Aboutme from "./components/Aboutme";
import Technologies from "./components/Technologies";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="main">
      <Firstsection />
      <Aboutme />
      <Technologies />
      <Project />
      <Contact/>
    </div>
  );
}

export default App;
