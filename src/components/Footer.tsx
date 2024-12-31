import { FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
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
            opacity: 100,
            scaleX: 1
        }}
        transition={{
            delay: 1.7,
            duration: 1,
            ease: 'backInOut'
        }}
        className="contact-bar">
        <motion.a
          initial={{
            opacity: 0,
            scale:0
          }}
          animate={{ 
              opacity: 100,
              scale: [1.4, 1]
          }}
          transition={{
              delay: 2,
              duration: .3,
              ease:"backInOut"
          }}
          href="https://github.com/not-finley" target="_blank" rel="noopener noreferrer">
            <FaGithub />
        </motion.a>
        <motion.a
          initial={{
            opacity: 0,
            scale:0
          }}
          animate={{ 
              opacity: 100,
              scale: [1.4, 1]
          }}
          transition={{
              delay: 2,
              duration: .3,
              ease:"backInOut"
          }}
          href="https://www.linkedin.com/in/finley-harrison-163b16291/" target="_blank" rel="noopener noreferrer">
            <CiLinkedin />
        </motion.a>
      </motion.div>
    </footer>
  )
}

export default Footer