import React from "react";
import { Link } from "react-router-dom";
import hero from '../assets/hero.jpg'
function Home() {
  return (
    
    <>
    
    {/* <div className="min-h-screen bg-gradient-to-b flex items-center justify-center px-4">
      <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl shadow-lg p-10 max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to BookVerse 📚
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Discover, read, and share your favorite books with the world. A
          digital library at your fingertips.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mt-6">
          <Link
            to="/register"
            className="px-6 py-3 rounded-xl text-white bg-stone-700 hover:bg-stone-800 transition-all"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 rounded-xl text-stone-700 border border-stone-700 hover:bg-purple-50 transition-all"
          >
            Learn More
          </Link>
        </div>
      </div>
      
      
    </div> */}
    
    
    <div class="flex flex-wrap my-8">
    <div class="w-full sm:w-8/12 mb-10">
      <div class="container mx-auto h-full sm:p-10">
        <nav class="flex px-4 justify-between items-center">
          <div class="text-4xl font-bold">
            Bookverse<span class="text-orange-400">.</span>
          </div>
          <div>
            <img src="https://image.flaticon.com/icons/svg/497/497348.svg" alt="" class="w-8"/>
          </div>
        </nav>
        <header class="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
          <div class="w-full">
            <h1 class="text-4xl lg:text-6xl font-bold">Discover your<span class="text-orange-700"> next</span> favorite book with BookVerse.</h1>
            <div class="w-20 h-2 bg-stone-700 my-4"></div>
            <p class="text-xl mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maiores neque eaque ea odit placeat, tenetur illum distinctio nulla voluptatum a corrupti beatae tempora aperiam quia id aliquam possimus aut.</p>
            <Link to='/about'>
            <button class="bg-transparent text-black text-2xl font-medium px-4 py-2 rounded shadow border-2 cursor-pointer">Learn More</button>
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
