import React from 'react';
function Feedback() {
  return (
    // Changed: Matched the structure and styling of the Contact page
    <div className="isolate bg-[#fff] px-6 py-24 sm:py-32 lg:px-8 pt-28 sm:pt-32">
      {/* Decorative background shape from Contact page */}

      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-[#1D2D50] sm:text-5xl">
          Share Your Feedback
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          We value your thoughts on how we can improve BookVerse.
        </p>
      </div>

      {/* Form */}
      <form action="#" method="#" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold leading-6 text-[#1D2D50]">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              className="mt-2.5 block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2.5 text-[#1D2D50] placeholder:text-gray-400 focus:outline-none sm:text-sm"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-[#1D2D50]">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="mt-2.5 block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2.5 text-[#1D2D50] placeholder:text-gray-400 focus:outline-none sm:text-sm"
            />
          </div>

          {/* Feedback Textarea */}
          <div className="sm:col-span-2">
            <label htmlFor="feedback" className="block text-sm font-semibold leading-6 text-[#1D2D50]">
              Feedback
            </label>
            <textarea
              id="feedback"
              name="feedback"
              rows={4}
              className="mt-2.5 block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2.5 text-[#1D2D50] placeholder:text-gray-400 focus:outline-none  sm:text-sm"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-700 px-3.5 py-3 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline-offset-2 transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  );
}

export default Feedback;
