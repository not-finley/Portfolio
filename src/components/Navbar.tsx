import { useState } from 'react';
import logo from '/FinleyLogo.svg';
import { FaBars, } from 'react-icons/fa6';
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
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
            <div className={slide ? 'logo slide-right' : 'logo'}>
                <img src={logo} alt="Logo" className="h-10 w-10" />
                <h3 className='font-extrabold text-3xl text-yellow-300'>Finley Harrison</h3>
            </div>

            <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link 
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