import { FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { SiBuymeacoffee } from "react-icons/si"; 
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-950/40 border-t border-white/5 backdrop-blur-md overflow-hidden">
      <motion.div
        initial={{
          opacity: 0,
          y: 50, 
        }}
        animate={{ 
          opacity: 1, 
          y: 0,   
        }}
        transition={{
          delay: 1,
          duration: 0.8,
          ease: 'easeOut'
        }}
        className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        {/* Dynamic Branding Text */}
        <p className="text-sm text-slate-400 font-medium tracking-wide">
          © {new Date().getFullYear()} Finley Harrison.
        </p>
        
        {/* Social Icons Container */}
        <div className="flex items-center gap-6 text-2xl text-slate-300">
          
          {/* GitHub */}
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.4, ease: "backOut" }}
            whileHover={{ scale: 1.2, y: -4 }}
            className="hover:text-white transition-colors"
            href="https://github.com/not-finley" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub">
              <FaGithub />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.4, ease: "backOut" }} // Staggered slightly
            whileHover={{ scale: 1.2, y: -4 }}
            className="hover:text-blue-400 transition-colors"
            href="https://www.linkedin.com/in/finley-harrison-163b16291/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn">
              <CiLinkedin />
          </motion.a>

          {/* Buy Me A Coffee */}
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, duration: 0.4, ease: "backOut" }} // Staggered slightly
            whileHover={{ scale: 1.2, y: -4 }}
            className="hover:text-emerald-400 transition-colors"
            href="https://buymeacoffee.com/notfinley" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Support my projects">
              <SiBuymeacoffee />
          </motion.a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;