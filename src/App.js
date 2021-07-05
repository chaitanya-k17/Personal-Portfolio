import './App.css';
// import './Style.css';
import 'boxicons'
import { BrowserRouter as Router } from "react-router-dom";
import Headers from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Landing from "./Components/LandingPage/LandingPage"
import About from "./Components/About/About"
import Skills from "./Components/Skills/Skills"
import Resume from "./Components/Resume/Resume"
import Contact from "./Components/Contact/Contact"
import Gallery from './Components/Gallery/gallery';
import { useState } from 'react';
 

function App() {

  const [isLoading, setisLoading] = useState(false);

  return (


    <div className="App">
      {
        isLoading ?
          <>
            <div className="Loader">
              <i class='bx bx-loader-circle  loaderspin'  ></i>
            </div>
          </>
          :
          <>
            <Router>
              <>
                <Headers />
                <main id="main">
                  < Landing />
                  < About />
                  < Skills />
                  < Resume />
                  < Gallery />
                  < Contact />
                </main>
              </>
            </Router>
            <Footer />
          </>
      }


    </div>

  );
}

export default App;
