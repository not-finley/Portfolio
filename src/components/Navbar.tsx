import { useState, useEffect } from 'react';
import logo from '/FinleyLogo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Add a scroll listener to change navbar background on scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNav = () => setNav(!nav);
    const handleClose = () => setNav(false);

    const navLinks = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Projects', to: 'projects' },
        { name: 'Experience', to: 'experience' },
        { name: 'Artwork', to: 'artwork' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 px-6 py-4 ${
            scrolled ? 'backdrop-blur-lg bg-blue-900/80 shadow-lg' : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center space-x-3">
                    <motion.img 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        src={logo} alt="Logo" className="h-10 w-10" 
                    />
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className='font-bold text-2xl text-white tracking-tight'
                    >
                        Finley Harrison
                    </motion.h3>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8">
                    {navLinks.map((link, index) => (
                        <motion.li 
                            key={link.to}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                to={link.to}
                                spy={true}
                                smooth={true}
                                duration={500}
                                activeClass="text-blue-400 font-bold"
                                className="text-gray-200 hover:text-blue-400 cursor-pointer transition-colors font-medium text-sm uppercase tracking-widest"
                            >
                                {link.name}
                            </Link>
                        </motion.li>
                    ))}
                </ul>

                {/* Hamburger Icon */}
                <div className="md:hidden text-white z-50 cursor-pointer" onClick={handleNav}>
                    {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {nav && (
                    <motion.div 
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-screen w-[75%] bg-blue-950/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 z-40"
                        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }} // Safe Area for mobile
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={handleClose}
                                className="text-2xl text-white font-semibold hover:text-blue-400 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;