import { FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { SiBuymeacoffee } from "react-icons/si"; 
import { motion } from "motion/react"

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div
        initial={{
          opacity: 0,
          scaleX: 0
        }}
        animate={{ 
            opacity: 1, // Fix: Opacity should be 1, not 100 in Framer Motion
            scaleX: 1
        }}
        transition={{
            delay: 1.5,
            duration: 1,
            ease: 'backInOut'
        }}
        className="contact-bar">
        
        {/* GitHub */}
        <motion.a
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: [1.4, 1] }}
          transition={{ delay: 2, duration: .3, ease:"backInOut" }}
          href="https://github.com/not-finley" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub">
            <FaGithub />
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: [1.4, 1] }}
          transition={{ delay: 2.1, duration: .3, ease:"backInOut" }} // Staggered slightly
          href="https://www.linkedin.com/in/finley-harrison-163b16291/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn">
            <CiLinkedin />
        </motion.a>

        {/* Buy Me A Coffee - The "Supporter" Link */}
        <motion.a
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: [1.4, 1] }}
          transition={{ delay: 2.2, duration: .3, ease:"backInOut" }} // Staggered slightly
          href="https://buymeacoffee.com/notfinley" 
          target="_blank" 
          rel="noopener noreferrer"
          className="coffee-link" // Add a class if you want to color it emerald!
          aria-label="Support my projects">
            <SiBuymeacoffee />
        </motion.a>
      </motion.div>
    </footer>
  )
}

export default Footer