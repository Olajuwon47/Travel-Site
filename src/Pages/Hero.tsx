import {} from 'react'

export default function Example() {
  return (
    <>
      <div className="mx-auto max-w-2xl pb-40 py-32 sm:py-48 lg:py-56 max-sm:py-20 max-md:py-28 px-4 max-sm:px-3 max-md:px-6">
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl max-sm:text-3xl max-md:text-4xl">
            Explore the world with comfort, safety & style ✈️
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 max-sm:text-sm max-md:text-base">
            Whether you're dreaming of a weekend escape or planning a once-in-a-lifetime journey, our tailored travel packages are designed to deliver unforgettable experiences — from flights and hotels to visas and insurance.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#destinations"
              className="rounded-md bg-lime-500 px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600 max-sm:px-3 max-sm:py-2 max-sm:text-xs max-md:text-sm"
            >
              Start Your Journey
            </a>
          </div>
        </div>
      </div>

      {/* Decorative background blur (optional) */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      />
    </>
  )
}
