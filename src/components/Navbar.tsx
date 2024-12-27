import logo from '/FinleyLogo.svg';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 bg-opacity-90 text-white p-4 flex justify-between items-center fixed w-full top-0">
            <div className="flex items-center space-x-4">
                <a href="/" className="flex items-center space-x-4" >
                    <img src={logo} alt="Logo" className="h-10 w-10" />
                    <h1 className="text-lg font-bold test-white">Finley H</h1>
                </a>
            </div>
            <ul className="flex space-x-6">
                <li><a href="#home" className="hover:text-gray-400">Home</a></li>
                <li><a href="#about" className="hover:text-gray-400">About</a></li>
                <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
                <li><a href="#experience" className="hover:text-gray-400">Experience</a></li>
                <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;