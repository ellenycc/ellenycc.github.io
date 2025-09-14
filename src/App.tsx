import Navbar from "./components/Navbar";
import Header from "./pages/Header";
import About from "./pages/About";
import Project from "./pages/Project";
import Toolkit from "./pages/Toolkit";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="px-12 md:px-24 lg:px-56 mx-auto">
      <Navbar />
      <Header />
      <About />
      <Toolkit />
      <Project />
      <Contact />
      <footer>
        <span className="block text-sm text-center my-8">
          Designed and developed by Ellen Chan
        </span>
      </footer>
    </div>
  );
}

export default App;
