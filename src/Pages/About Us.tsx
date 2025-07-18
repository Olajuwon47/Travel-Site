import {  } from 'react';
import Team from '../Pages/Team.tsx';

export default function About() {
  return (
    <>
    <section className="bg-white text-gray-800 px-10 py-16 max-md:px-6 max-sm:px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 max-sm:text-2xl max-md:text-3xl">About ExploreMore Travels</h1>
        <p className="text-lg text-gray-600 max-sm:text-base">
          Crafting journeys that stir the soul, ignite wonder, and make the world feel a little smaller.
        </p>
      </div>

      {/* Image & Story */}
      <div className="grid grid-cols-2 gap-10 items-center max-md:grid-cols-1">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
          alt="Travel Adventure"
          className="rounded-2xl shadow-lg w-full h-50 object-cover max-sm:h-64 max-md:h-80"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4 max-sm:text-xl">Our Story</h2>
          <p className="text-gray-700 text-base leading-relaxed max-sm:text-sm">
            Founded on the belief that travel should be enriching, affordable, and accessible, ExploreMore started as a humble dream — a desire to connect people with places.
            Over the years, we've grown into a global community of dreamers, adventurers, and seekers of hidden gems.
            Whether you're scaling the Alps or strolling through Santorini, we are here to make every trip seamless and unforgettable.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mt-20 grid grid-cols-2 gap-10 items-center max-md:grid-cols-1">
        <div>
          <h2 className="text-2xl font-semibold mb-4 max-sm:text-xl">Our Mission</h2>
          <p className="text-gray-700 text-base leading-relaxed max-sm:text-sm">
            To empower every individual to travel with confidence, curiosity, and connection. Through personalized service, curated experiences, and responsible tourism,
            we strive to make the world more accessible — one trip at a time.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1511732351165-5e4b902af0c2?auto=format&fit=crop&w=800&q=80"
          alt="Mission Travel"
          className="rounded-2xl shadow-lg w-full h-50 object-cover max-sm:h-64 max-md:h-80"
        />
      </div>

      {/* Vision Section */}
      <div className="mt-20 grid grid-cols-2 gap-10 items-center max-md:grid-cols-1">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80"
          alt="Vision"
          className="rounded-2xl shadow-lg w-full h-50 object-cover max-sm:h-64 max-md:h-80"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4 max-sm:text-xl">Our Vision</h2>
          <p className="text-gray-700 text-base leading-relaxed max-sm:text-sm">
            To be Africa's most trusted travel brand — inspiring people to explore more, live boldly, and forge unforgettable memories.
            We envision a world where travel is not a luxury, but a universal right.
          </p>
        </div>
      </div>

        {/* Core Values */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold text-center mb-10 max-sm:text-xl">Our Core Values</h2>
        <div className="grid grid-cols-3 gap-8 text-center max-md:grid-cols-2 max-sm:grid-cols-1">
          <div>
            <h4 className="text-lg font-semibold mb-2">Integrity</h4>
            <p className="text-sm text-gray-600">We uphold honesty and transparency in all we do.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Innovation</h4>
            <p className="text-sm text-gray-600">We embrace new ideas to craft better journeys.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Customer-Centric</h4>
            <p className="text-sm text-gray-600">Your experience drives our every decision.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-24 text-center">
        <h3 className="text-xl font-semibold mb-4 max-sm:text-lg">Ready to start your next journey?</h3>
        <a
          href="/destinations"
          className="inline-block bg-lime-600 mt-10 hover:bg-lime-500 text-white px-6 py-3 rounded-full font-medium transition max-sm:px-4 max-sm:py-2"
        >
          Explore Destinations
        </a>
      </div>
    </section>
     <Team/>
  </>
  );
}
