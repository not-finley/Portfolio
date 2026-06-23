import { useState, useEffect } from 'react';
import logo from '/FinleyLogo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll'; 
import { Link as RouterLink, useLocation } from 'react-router-dom'; // Added useLocation
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation(); // Keeps track of what page we are currently on

    const isHomePage = location.pathname === "/";

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
        { name: 'Home', to: 'home', isRoute: false },
        { name: 'About', to: 'about', isRoute: false },
        { name: 'Projects', to: 'projects', isRoute: false },
        { name: 'Experience', to: 'experience', isRoute: false },
        { name: 'Gallery', to: '/gallery', isRoute: true }, 
        { name: 'Contact', to: 'contact', isRoute: false },
    ];

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 px-6 py-4 ${
            scrolled ? 'backdrop-blur-lg bg-blue-900/80 shadow-lg' : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center space-x-3">
                    <RouterLink to="/" onClick={handleClose} className="flex items-center space-x-2">
                        <motion.img 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            src={logo} alt="Logo" className="h-10 w-10 cursor-pointer" 
                        />
                        
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className='font-bold text-2xl text-white tracking-tight'
                        >
                            Finley Harrison
                        </motion.h3>
                    </RouterLink>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link, index) => (
                        <motion.li 
                            key={link.to}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {link.isRoute ? (
                                <RouterLink
                                    to={link.to}
                                    className="text-gray-200 hover:text-blue-400 cursor-pointer transition-colors font-medium text-sm uppercase tracking-widest"
                                >
                                    {link.name}
                                </RouterLink>
                            ) : isHomePage ? (
                                // On the home page: Use smooth scrolling link
                                <ScrollLink
                                    to={link.to}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    activeClass="text-blue-400 font-bold"
                                    className="text-gray-200 hover:text-blue-400 cursor-pointer transition-colors font-medium text-sm uppercase tracking-widest"
                                >
                                    {link.name}
                                </ScrollLink>
                            ) : (
                                // On the gallery page: Route them home to that specific section anchor hash
                                <RouterLink
                                    to={`/#${link.to}`}
                                    className="text-gray-200 hover:text-blue-400 cursor-pointer transition-colors font-medium text-sm uppercase tracking-widest"
                                >
                                    {link.name}
                                </RouterLink>
                            )}
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
                        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
                    >
                        {navLinks.map((link) => (
                            link.isRoute ? (
                                <RouterLink
                                    key={link.to}
                                    to={link.to}
                                    onClick={handleClose}
                                    className="text-2xl text-white font-semibold hover:text-blue-400 transition-colors"
                                >
                                    {link.name}
                                </RouterLink>
                            ) : isHomePage ? (
                                <ScrollLink
                                    key={link.to}
                                    to={link.to}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    onClick={handleClose}
                                    className="text-2xl text-white font-semibold hover:text-blue-400 transition-colors cursor-pointer"
                                >
                                    {link.name}
                                </ScrollLink>
                            ) : (
                                <RouterLink
                                    key={link.to}
                                    to={`/#${link.to}`}
                                    onClick={handleClose}
                                    className="text-2xl text-white font-semibold hover:text-blue-400 transition-colors"
                                >
                                    {link.name}
                                </RouterLink>
                            )
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;