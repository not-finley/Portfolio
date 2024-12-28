import './Styles/home.css'

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
        <div id="home" className="home">
            <div className="container">
                <img 
                    src="FinleyLogo.svg"
                    className='w-1/2 max-w-96 lg:max-w-lg'
                />
                <div>
                    <h1 className="text-5xl font-bold text-white mb-4">Hi, I'm Finley</h1>
                    <p className="text-lg text-gray-400 mb-8 max-w-lg">
                        A passionate Software Developer based in Waterloo, Ontario. I love building creative solutions and bringing ideas to life.
                    </p>
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