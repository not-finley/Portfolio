
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import PastExperience from './pages/PastExperience';
import Footer from './components/Footer';
import Artwork from './pages/Artwork';

function App() {
return (
    <div className="flex flex-col min-h-screen object-center">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <PastExperience />
        <Artwork />
        <Contact />
        <Footer />
    </div>
);
}

export default App
