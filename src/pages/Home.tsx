import './Styles/home.css'
import { motion } from "motion/react"

// const Home = () => {
// return (
//     <div id="home" className="bg-gray-100 min-h-screen flex flex-col justify-center items-center text-center lg:flex-row">
//          <img 
//             src="FinleyLogo.svg"
//             className='w-1/2 max-w-96'
//         />
//         <div>
//             <h1 className="text-5xl font-bold text-gray-800 mb-4">Hi, I'm Finley</h1>
//             <p className="text-lg text-gray-600 mb-8 max-w-lg">
//                 A passionate Software Developer based in Waterloo, Ontario. I love building creative solutions and bringing ideas to life.
//             </p>
//             <div className="space-x-4">
//                 {/* <Link to="/about">
//                     <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-300">
//                         Learn About Me
//                     </button>
//                 </Link>
//                 <Link to="/projects">
//                     <button className="bg-secondary text-white px-6 py-2 rounded-lg hover:bg-black">
//                         See My Work
//                     </button>
//                 </Link> */}
//             </div>
//         </div>
//     </div>
// );
// }



const Home = () => {
    return (
        <div
        id="home" className="home">
            <div className="container place-content-center">
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
                        delay: .5,
                        duration: .75,
                        ease: "backInOut"
                    }}
                    src="FinleyLogo.svg"
                    alt="logo"
                    className='w-1/2 max-w-96 lg:max-w-lg'
                />
                <div>
                    <motion.h1 
                    initial={{
                        opacity: 0,
                        y: 40
                    }}
                    animate={{ 
                        opacity: 100,
                        y: 0
                    }}
                    transition={{
                        delay: .1,
                        duration: .75,
                        ease: 'backInOut'
                    }}
                    className="text-5xl font-bold text-white mb-4"
                    >
                        Hi, I'm Finley
                    </motion.h1>
                    <motion.p
                    initial={{
                        opacity: 0,
                        y: 40
                    }}
                    animate={{ 
                        opacity: 100,
                        y: 0
                    }}
                    transition={{
                        delay: .7,
                        duration: .75,
                        ease: 'backInOut'
                    }}
                    className="text-lg text-gray-300 mb-8 max-w-lg"
                    >
                        A passionate Software Developer based in Waterloo, Ontario. I love building creative solutions and bringing ideas to life.
                    </motion.p>
                    <div className="space-x-4">
                        {/* <Link to="/about">
                            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-300">
                                Learn About Me
                            </button>
                        </Link>
                        <Link to="/projects">
                            <button className="bg-secondary text-white px-6 py-2 rounded-lg hover:bg-black">
                                See My Work
                            </button>
                        </Link> */}
                    </div>
                </div>
            </div>      
        </div>
    )
}

export default Home