import NavBar from "./components/NavBar/NavBar";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Works from "./components/works/works";
import Contact from "./components/Contact/contact";
function App() {
  return (
    <div className="App">
     <NavBar/>
     <Intro/>
     <Skills/>
     <Works/>
     <Contact/>
    </div>
  );
}

export default App;
