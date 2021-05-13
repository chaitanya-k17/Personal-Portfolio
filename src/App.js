import './App.css';
import './Style.css';
import 'boxicons'

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
      <Headers />
        <main id="main">
            <Landing />
            <About />
            <Skills />
            <Resume />
            <Contact />

        </main>
      <Footer />

    </div>
  );
}

export default App;
