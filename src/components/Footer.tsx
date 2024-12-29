import { FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-bar">
        <a href="https://github.com/not-finley" target="_blank" rel="noopener noreferrer">
            <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/finley-harrison-163b16291/" target="_blank" rel="noopener noreferrer">
            <CiLinkedin />
        </a>
      </div>
    </footer>
  )
}

export default Footer