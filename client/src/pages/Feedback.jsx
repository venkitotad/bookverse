import React from 'react';

// The "Modern Clarity" Palette:
// Primary Text: #1D2D50 (Deep Indigo)
// Accent: #FF9A00 (Vibrant Orange)
// Subtle Background: #F0F4F8 (Cool Light Gray)
// White: #FFFFFF

function Feedback() {
  return (
    // Changed: Matched the structure and styling of the Contact page
    <div className="isolate bg-[#F0F4F8] px-6 py-24 sm:py-32 lg:px-8 pt-28 sm:pt-32">
      {/* Decorative background shape from Contact page */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[72.25rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#FF9A00] to-[#1D2D50] opacity-10 sm:left-[calc(50%-40rem)] sm:w-[144.375rem]"
        />
      </div>

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
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
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
              className="mt-2.5 block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2.5 text-[#1D2D50] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 sm:text-sm"
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
              className="mt-2.5 block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2.5 text-[#1D2D50] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 sm:text-sm"
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
              className="mt-2.5 block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2.5 text-[#1D2D50] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 sm:text-sm"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-[#FF9A00] px-3.5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  );
}

export default Feedback;
