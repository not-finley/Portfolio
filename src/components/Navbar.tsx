import { useState } from 'react';
import logo from '/FinleyLogo.svg';
import { FaBars, } from 'react-icons/fa6';
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import { motion } from "motion/react"
import './Styles/Navbar.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [slide, setSlide] = useState(false)

    const handleNav = () => {
        setNav(!nav)
        setSlide(!slide)
    }

    const handleClose = () => {
        setNav(!nav)
    }

    return (
        <nav className='navbar'>
            <div className="logo">
                <motion.img 
                    initial={{
                        opacity: 0,
                        x: -40
                    }}
                    animate={{ 
                        opacity: 100,
                        x: 0
                    }}
                    transition={{
                        delay: 1,
                        duration: 2,
                        ease: "backInOut"
                    }}
                    src={logo} alt="Logo" className="h-10 w-10" 
                />
                <motion.h3
                initial={{
                    opacity: 0,
                    y: 40
                }}
                animate={{ 
                    opacity: 100,
                    y: 0
                }}
                transition={{
                    delay: 1.5,
                    duration: 1,
                    ease: "backInOut"
                }} 
                className='font-extrabold text-3xl text-yellow-300'>Finley Harrison</motion.h3>
            </div>

            <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link
                    href='#home' 
                    to="home" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    activeClass="active" 
                    onClick={handleClose}
                    >
                    Home
                    </Link>
                </li>
                <li>
                    <Link 
                    href='#about' 
                    to="about" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    activeClass="active" 
                    onClick={handleClose}
                    >
                    About
                    </Link>
                </li>
                <li>
                    <Link 
                    href='#projects' 
                    to="projects" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    activeClass="active" 
                    onClick={handleClose}
                    >
                    Projects
                    </Link>
                </li>
                <li>
                    <Link
                    href='#experience'
                    to="experience" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    activeClass="active" 
                    onClick={handleClose}
                    >
                    Experience
                    </Link>
                </li>
                <li>
                    <Link
                    href='#artwork'
                    to="artwork" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    activeClass="active" 
                    onClick={handleClose}
                    >
                    Artwork
                    </Link>
                </li>
                <li>
                    <Link
                    href='#contact' 
                    to="contact" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    activeClass="active" 
                    onClick={handleClose}
                    >
                    Contact
                    </Link>
                </li>

            </ul>

            <div className="hamburger" onClick={handleNav} >
                {nav ? (<FaTimes size={20} style={{ color: '#ffffff' }} />) : (<FaBars style={{ color: '#ffffff' }} size={20} />)}
            </div>
        </nav>
    )
}
export default Navbar;