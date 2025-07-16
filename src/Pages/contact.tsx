'use client'

import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [agreed, setAgreed] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!agreed) {
      alert('Please agree to the privacy policy 🔒.')
      return
    }

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields ✍️.')
      return
    }

    // Simulate submission success
    setShowModal(true)
    setFormData({ name: '', email: '', message: '' })
    setAgreed(false)
  }

  return (
    <div className="bg-lime-50 px-4 py-16 max-sm:px-3 max-sm:py-12 max-md:px-5 max-md:py-20 sm:py-32 lg:px-8">
      <h2 className="text-2xl font-bold text-black mb-4 text-center max-sm:text-xl">
        Let’s Connect 🤝
      </h2>
      <p className="text-gray-700 text-center mb-8 max-sm:text-sm">
        Have a question, idea, or just want to chat? Fill out the form below, and we’ll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="mx-auto max-w-xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="max-sm:col-span-1">
            <label htmlFor="name" className="block text-sm font-semibold text-black max-sm:text-xs">
              First name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md px-3.5 py-2 text-black shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-gray-300 max-sm:px-2 max-sm:py-1.5 max-sm:text-sm"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-black max-sm:text-xs">
              Email 📧
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md px-3.5 py-2 text-black shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-gray-300 max-sm:px-2 max-sm:py-1.5 max-sm:text-sm"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-black max-sm:text-xs">
              Message ✍️
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md px-3.5 py-2 text-black shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-gray-300 max-sm:px-2 max-sm:py-1.5 max-sm:text-sm"
            />
          </div>

          <div className="flex items-center sm:col-span-2 max-sm:items-start max-sm:flex-col">
            <input
              type="checkbox"
              id="agree"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="h-4 w-4 rounded bg-lime-200 text-green-600 focus:ring-2 focus:ring-gray-300"
            />
            <label
              htmlFor="agree"
              className="ml-3 text-sm text-black max-sm:ml-0 max-sm:mt-2 max-sm:text-xs"
            >
              By selecting this, you agree to our{' '}
              <Link to="/law" className="font-semibold underline text-black">
                privacy policy 🔒
              </Link>.
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-md bg-lime-700 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-lime-100 focus:ring-2 focus:ring-green-600 max-sm:py-2 max-sm:text-sm"
        >
          Let’s talk
        </button>

        <p className="mt-4 text-sm text-gray-500 text-center max-sm:text-xs">
          📬 Our team will respond within 1–2 business days.
        </p>
      </form>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md text-center shadow-lg max-sm:p-4 max-md:max-w-sm">
            <h2 className="text-xl font-semibold text-green-700 mb-2">Thank You! 🙏</h2>
            <p className="text-gray-700 mb-4">
              We’ve received your message. Our team is reviewing it and will be in touch soon.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* 📍 Agency Contact Info */}
      <div className="mt-16 border-t border-gray-200 pt-10 text-center max-sm:pt-8">
        <h3 className="text-lg font-bold text-black max-sm:text-base">Jaywon Travels</h3>
        <p className="text-gray-600 text-sm mt-2 max-sm:text-xs">
          📍 12 Unity Street, Ikeja, Lagos, Nigeria
        </p>
        <p className="text-gray-600 text-sm mt-1 max-sm:text-xs">
          📞 +234 812 345 6789 &nbsp; | &nbsp; ✉️ contact@jaywontravels.com
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="https://twitter.com" target="_blank" className="text-cyan-600 underline text-sm max-sm:text-xs">Twitter</a>
          <a href="https://instagram.com" target="_blank" className="text-cyan-600 underline text-sm max-sm:text-xs">Instagram</a>
          <a href="https://facebook.com" target="_blank" className="text-cyan-600 underline text-sm max-sm:text-xs">Facebook</a>
        </div>
      </div>
    </div>
  )
}
