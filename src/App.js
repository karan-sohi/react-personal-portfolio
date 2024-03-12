import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import AllProjects from "./components/AllProjects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <AboutMe></AboutMe>
              <Projects></Projects>
              <ContactMe></ContactMe>
            </>
          }
        />
        <Route path="/projects" element={<AllProjects></AllProjects>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
