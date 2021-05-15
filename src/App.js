import './App.css';
import './Style.css';
import 'boxicons'
import { BrowserRouter as Router } from "react-router-dom";
import Headers from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Landing from "./Components/LandingPage/LandingPage"
import About from "./Components/About/About"
import Skills from "./Components/Skills/Skills"
import Resume from "./Components/Resume/Resume"
import Contact from "./Components/Contact/Contact"



function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Headers />
          <main id="main">
            < Landing />
              <About />
              <Skills />
            <Resume />
            < Contact />
          </main>
        </>
      </Router>
      <Footer />

    </div>
  );
}

export default App;
