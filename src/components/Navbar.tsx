import { useState, useEffect } from 'react';
import logo from '/FinleyLogo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll'; 
import { Link as RouterLink, useLocation } from 'react-router-dom'; 
import { motion, AnimatePresence } from "framer-motion"; 

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const isHomePage = location.pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            // Changed from > 20 to > 0 so it instantly anchors states correctly at the absolute top
            setScrolled(window.scrollY > 0);
        };

        const handleResize = () => {
            if (window.innerWidth >= 768) {
                document.body.style.overflow = 'unset';
                setNav(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleNav = () => {
        if (!nav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        setNav(!nav);
    };

    const handleClose = () => {
        document.body.style.overflow = 'unset';
        setNav(false);
    };

    const navLinks = [
        { name: 'Home', to: 'home', isRoute: false },
        { name: 'About', to: 'about', isRoute: false },
        { name: 'Experience', to: 'experience', isRoute: false },
        { name: 'Projects', to: 'projects', isRoute: false },
        { name: 'Gallery', to: '/gallery', isRoute: true }, 
        { name: 'Contact', to: 'contact', isRoute: false },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 25 },
        show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } }
    };

    return (
        <>
            {/* Main Header Bar */}
            <nav className={`fixed w-full top-0 z-50 transition-all duration-300 px-6 py-4 border-b ${
                scrolled 
                    ? 'backdrop-blur-lg bg-slate-900/85 border-white/5 shadow-lg' 
                    : 'bg-transparent border-transparent' /* Added continuous border layout definition */
            }`}>
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-3">
                        <RouterLink to="/" onClick={handleClose} className="flex items-center space-x-2 z-50">
                            <motion.img 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ 
                                rotate: 360, 
                                scale: 1.1,
                                transition: { type: "spring", stiffness: 200, damping: 10 } 
                            }}
                            src={logo} alt="Logo" className="h-9 w-9 cursor-pointer" 
                        />
                            
                            <motion.h3
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className='font-bold text-xl text-white tracking-tight'
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
                                        className="text-gray-300 hover:text-blue-400 cursor-pointer transition-colors font-medium text-xs font-mono uppercase tracking-widest"
                                    >
                                        {link.name}
                                    </RouterLink>
                                ) : isHomePage ? (
                                    <ScrollLink
                                        to={link.to}
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        offset={-80}
                                        activeClass="text-blue-400 font-bold"
                                        className="text-gray-300 hover:text-blue-400 cursor-pointer transition-colors font-medium text-xs font-mono uppercase tracking-widest"
                                    >
                                        {link.name}
                                    </ScrollLink>
                                ) : (
                                    <RouterLink
                                        to={`/#${link.to}`}
                                        className="text-gray-300 hover:text-blue-400 cursor-pointer transition-colors font-medium text-xs font-mono uppercase tracking-widest"
                                    >
                                        {link.name}
                                    </RouterLink>
                                )}
                            </motion.li>
                        ))}
                    </ul>

                    {/* Hamburger Icon */}
                    <button 
                        onClick={handleNav}
                        className="md:hidden text-white z-50 focus:outline-none p-2 -mr-2 bg-white/5 rounded-full border border-white/5 hover:bg-white/10 transition-colors"
                        aria-label="Toggle navigation menu"
                    >
                        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {nav && (
                    <motion.div 
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 28, stiffness: 220 }}
                        className="fixed top-0 right-0 h-screen w-full sm:w-[440px] bg-slate-950/98 backdrop-blur-2xl flex flex-col justify-start pl-12 pr-6 pt-32 z-40 shadow-2xl border-l border-white/5"
                        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
                    >
                        {/* Interactive List Wrapper */}
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                            className="flex flex-col space-y-5 w-full"
                        >
                            {navLinks.map((link) => (
                                <motion.div 
                                    variants={itemVariants} 
                                    key={link.to} 
                                    className="w-full border-b border-white/[0.03] pb-3"
                                >
                                    {link.isRoute ? (
                                        <RouterLink
                                            to={link.to}
                                            onClick={handleClose}
                                            className="text-3xl text-slate-100 font-semibold hover:text-blue-400 transition-colors tracking-tight block"
                                        >
                                            {link.name}
                                        </RouterLink>
                                    ) : isHomePage ? (
                                        <ScrollLink
                                            to={link.to}
                                            spy={true}
                                            smooth={true}
                                            duration={500}
                                            offset={-80}
                                            onClick={handleClose}
                                            activeClass="text-blue-400 font-bold border-l-2 border-blue-400 pl-3 -ml-3"
                                            className="text-3xl text-slate-100 font-semibold hover:text-blue-400 transition-colors cursor-pointer tracking-tight block"
                                        >
                                            {link.name}
                                        </ScrollLink>
                                    ) : (
                                        <RouterLink
                                            key={link.to}
                                            to={`/#${link.to}`}
                                            onClick={handleClose}
                                            className="text-3xl text-slate-100 font-semibold hover:text-blue-400 transition-colors tracking-tight block"
                                        >
                                            {link.name}
                                        </RouterLink>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Navbar;