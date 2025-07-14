import {} from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react'; // optional: use heroicons or any

export default function Footer() {
  return (
    <footer className="bg-sky-900 text-white py-10 px-6 max-sm:px-4 max-md:px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1">
        {/* Company */}
        <div>
          <h2 className="text-xl font-semibold mb-4">ExploreMore Travels</h2>
          <p className="text-sm max-w-xs">
            Helping you explore the world with ease, comfort, and affordability. Your next destination is just a click away.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
            <li><a href="/destinations" className="hover:text-yellow-400">Destinations</a></li>
            <li><a href="/bookings" className="hover:text-yellow-400">Book a Trip</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/faq" className="hover:text-yellow-400">FAQs</a></li>
            <li><a href="/policy" className="hover:text-yellow-400">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-yellow-400">Terms & Conditions</a></li>
            <li><a href="/support" className="hover:text-yellow-400">Customer Support</a></li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Stay Connected</h3>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded bg-white text-black text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black py-2 rounded hover:bg-yellow-300 transition"
            >
              Subscribe
            </button>
          </form>
          <div className="flex space-x-4 mt-4">
            <a href="#"><Facebook size={20} className="hover:text-yellow-400" /></a>
            <a href="#"><Twitter size={20} className="hover:text-yellow-400" /></a>
            <a href="#"><Instagram size={20} className="hover:text-yellow-400" /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-300 mt-10 border-t border-gray-600 pt-4">
        &copy; {new Date().getFullYear()} ExploreMore Travels. All rights reserved.
      </div>
    </footer>
  );
}
