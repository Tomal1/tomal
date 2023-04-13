import Home from "./Sections/Home";
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
      </div>
      <Contact/>
      <Footer/>
    </main>

  );
}

export default App;
