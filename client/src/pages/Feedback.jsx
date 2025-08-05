import React from 'react'

function Feedback() {
  return (
    
    <>
    <form class="max-w-md mx-auto mt-20 p-6 bg-white border rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-6">Feedback Form</h2>
    <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="name">
      Name:
    </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name"/>
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="email">
      Email:
    </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email"/>
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="feedback">
      Feedback:
    </label>
        <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="feedback" rows="5" placeholder="Enter your feedback"></textarea>
    </div>
    <button class="bg-stone-500 hover:border-l-amber-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer" type="submit">
    Submit
  </button>
</form>

</>
  )
}

export default Feedback