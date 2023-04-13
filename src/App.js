import Home from "./Sections/Home";
import About from "./Sections/About";
import Nav from "./Components/Nav";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import './App.css';

function App() {
  return (
    <main className="main">
      <Nav/>
      <div className="app_section_container">
        <Home/>
        <About/>
      </div>
      <Contact/>
      <Footer/>
    </main>

  );
}

export default App;
