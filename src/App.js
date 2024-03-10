import "./App.css";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <ContactMe></ContactMe>
    </div>
  );
}

export default App;
