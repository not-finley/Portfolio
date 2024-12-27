
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import PastExperience from './pages/PastExperience';
import Footer from './components/Footer';

function App() {
  return (
      <div className="flex flex-col min-h-screen object-center">
          {/* Navbar appears on all pages */}
          <Navbar />

          {/* Main Content */}
          <div>
            <Home />
            <About />
            <Projects />
            <PastExperience />
            <Contact />
          </div>

          {/* Footer appears on all pages */}
          <Footer />
      </div>
);
}

export default App
