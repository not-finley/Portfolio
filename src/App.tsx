import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import PastExperience from './pages/PastExperience';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';

// Simple helper component to listen for hash fragments (like #projects) and scroll them into view
const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Remove the '#' character to search for the element ID matching your navbar links
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small timeout allows the DOM to render fully before snapping viewport positioning
      }
    } else {
      // If there's no hash (like clicking home or changing pages), scroll back to the absolute top
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return null;
};

const MainPortfolio = () => {
  return (
    <>
      <Home />
      <About />
      <PastExperience />
      <Projects />
      <Contact />
    </>
  );
};

function App() {
  return (
    <Router>
      {/* Listened to instantly across page redirection pipelines */}
      <ScrollToHash />
      
      <div className="flex flex-col min-h-screen bg-blue-950">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MainPortfolio />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;