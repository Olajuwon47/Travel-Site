import {} from 'react'

export default function Example() {
  return (
    <>
     
        <div className="text-center mt-25 px-4 max-sm:px-2 max-md:px-4 max-sm:mt-20 max-md:mt-22">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl max-sm:text-3xl max-md:text-4xl max-sm:font-bold max-md:font-semibold max-sm:tracking-normal max-md:tracking-tight">
            Explore the world with comfort, safety & style ✈️
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 max-sm:text-sm max-md:text-base max-sm:mt-6 max-md:mt-7 max-sm:font-normal max-md:font-medium max-sm:px-2 max-md:px-3">
            Whether you're dreaming of a weekend escape or planning a once-in-a-lifetime journey, our tailored travel packages are designed to deliver unforgettable experiences — from flights and hotels to visas and insurance.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 max-sm:mt-8 max-md:mt-9 max-sm:gap-x-4 max-md:gap-x-5">
            <a
              href="#destinations"
              className="rounded-md bg-lime-500 px-3.5 mb-8 py-2.5 text-sm font-semibold text-black shadow-xs hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600 max-sm:px-3 max-sm:py-2 max-sm:text-xs max-md:text-sm max-sm:mb-6 max-md:mb-7 max-sm:rounded max-md:rounded-md max-sm:font-bold max-md:font-semibold max-sm:shadow-sm max-md:shadow-sm"
            >
              Start Your Journey
            </a>
          </div>
        </div>
     

      {/* Decorative background blur (optional) */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] max-sm:top-[calc(100%-8rem)] max-md:top-[calc(100%-10rem)] max-sm:blur-2xl max-md:blur-3xl"
      />
    </>
  )
}
