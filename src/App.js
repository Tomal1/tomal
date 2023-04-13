import Home from "./Sections/Home";
import About from "./Sections/About";
import Experience from "./Sections/Experince";
import Nav from "./Components/Nav";
import Work from "./Sections/Work";
import ContactBar from "./Components/ContactBar";
import Contact from "./Sections/Contact";
import Footer from "./Components/Footer";
import './App.css';

function App() {
  return (
    <main className="main">
      <Nav/>
      <div className="app_section_container">
        <Home/>
        <About/>
        <Experience/>
        <Work/>
        <Contact/>
      </div>
      <ContactBar/>
      <Footer/>
    </main>

  );
}

export default App;
