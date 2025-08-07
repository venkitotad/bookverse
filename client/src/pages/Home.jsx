import React from "react";
import { Link } from "react-router-dom";
import hero from '../assets/hero.jpg'
function Home() {
  return (
    
    <>
    
    {/* <div classNameName="min-h-screen bg-gradient-to-b flex items-center justify-center px-4">
      <div classNameName="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl shadow-lg p-10 max-w-2xl w-full text-center">
        <h1 classNameName="text-4xl font-bold mb-4">
          Welcome to BookVerse 📚
        </h1>
        <p classNameName="text-gray-700 text-lg mb-6">
          Discover, read, and share your favorite books with the world. A
          digital library at your fingertips.
        </p>

        <div classNameName="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mt-6">
          <Link
            to="/register"
            classNameName="px-6 py-3 rounded-xl text-white bg-stone-700 hover:bg-stone-800 transition-all"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            classNameName="px-6 py-3 rounded-xl text-stone-700 border border-stone-700 hover:bg-purple-50 transition-all"
          >
            Learn More
          </Link>
        </div>
      </div>
      
      
    </div> */}
    
    
    <div className="flex flex-wrap my-8">
    <div className="w-full sm:w-8/12 mb-10">
      <div className="container mx-auto h-full sm:p-10">
        <nav className="flex px-4 justify-between items-center">
          <div className="text-4xl font-bold">
            Bookverse<span className="text-orange-400">.</span>
          </div>
          <div>
            <img src="https://image.flaticon.com/icons/svg/497/497348.svg" alt="" className="w-8"/>
          </div>
        </nav>
        <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
          <div className="w-full">
            <h1 className="text-4xl lg:text-6xl font-bold">Discover your<span className="text-orange-700"> next</span> favorite book with BookVerse.</h1>
            <div className="w-20 h-2 bg-stone-700 my-4"></div>
            <p className="text-xl mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maiores neque eaque ea odit placeat, tenetur illum distinctio nulla voluptatum a corrupti beatae tempora aperiam quia id aliquam possimus aut.</p>
            <Link to='/about'>
            <button className="bg-transparent text-black text-2xl font-medium px-4 py-2 rounded shadow border-2 cursor-pointer">Learn More</button>
            </Link>
          </div>
        </header>
      </div>
    </div>
    <img src={hero} width={400}/>
  </div>
    
    </>
    
  );
}

export default Home;
