import { useState } from 'react';
import logo from '/FinleyLogo.svg';
import { FaBars, FaInstagram } from 'react-icons/fa6';
import { GiCarWheel } from 'react-icons/gi';
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
                <h3>Finley Harrison</h3>
            </div>

            <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                <li><a href="/"><Link onClick={handleClose} activeClass="active" to="home" spy={true} smooth={true} duration={500}>Home</Link></a></li>
                <li><a href="/"><Link onClick={handleClose} activeClass="active" to="about" spy={true} smooth={true} duration={500}>About</Link></a></li>
                <li><a href="/"><Link onClick={handleClose} activeClass="active" to="projects" spy={true} smooth={true} duration={500}>Projects</Link></a></li>
                <li><a href="/"><Link onClick={handleClose} activeClass="active" to="experience" spy={true} smooth={true} duration={500}>Experience</Link></a></li>
                <li><a href="/"><Link onClick={handleClose} activeClass="active" to="contact" spy={true} smooth={true} duration={500}>Contact</Link></a></li>

                <div className='mobile-menu'>
                    <div className="social-icons">
                        <FaInstagram className='icon' />
                        <GiCarWheel className='icon' />
                    </div>
                </div>

            </ul>

            <div className="hamburger" onClick={handleNav} >
                {nav ? (<FaTimes size={20} style={{ color: '#ffffff' }} />) : (<FaBars style={{ color: '#ffffff' }} size={20} />)}
            </div>
        </nav>
    )
}
export default Navbar;