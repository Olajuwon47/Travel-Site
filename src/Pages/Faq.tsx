'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'What should I do if I have an issue during my trip?',
    answer:
      'If you encounter any issues during your trip—like flight delays, hotel miscommunication, or lost luggage—stay calm and reach out to our support team immediately using the emergency contact provided in your booking confirmation. We are available 24/7 to assist you and liaise with service providers on your behalf. For medical or safety emergencies, contact local authorities first, then inform us once you’re safe.',
  },
  {
    question: 'How do I cancel or reschedule my booking?',
    answer:
      'To cancel or reschedule a trip, log in to your account or contact our booking support line. Cancellation and rescheduling policies vary based on the airline, hotel, or tour operator, so we recommend checking the terms before confirming. We’ll guide you through the process and help minimize penalties where possible.',
  },
  {
    question: 'Do you offer travel insurance?',
    answer:
      'Yes, we strongly recommend travel insurance for all clients. We offer flexible travel insurance packages that cover medical emergencies, cancellations, delays, and lost belongings. Insurance can be added during booking or afterward—just contact us before your departure.',
  },
  {
    question: 'Can you help with visa applications?',
    answer:
      'Absolutely. For select destinations, we assist with tourist visa applications by providing necessary documentation like flight itineraries, hotel bookings, and travel letters. While we don’t issue visas ourselves, we guide you through embassy requirements and timelines.',
  },
  {
    question: 'What happens if I miss my flight?',
    answer:
      'If you miss your flight, contact our support team immediately. Depending on your ticket type and airline policy, we can help rebook your flight or advise on the best next steps. Some airlines offer grace periods or standby options—we’ll work swiftly to get you back on track.',
  },
  {
    question: 'Do you offer group or corporate travel packages?',
    answer:
      'Yes, we specialize in group, corporate, and educational tours. Whether it’s a family vacation, destination wedding, school trip, or business retreat, we can customize packages with bulk discounts, itinerary planning, and dedicated guides. Get in touch for a tailored quote.',
  },
  {
    question: 'How can I prepare for international travel?',
    answer:
      'International travel requires proper documentation, vaccinations, currency planning, and cultural awareness. Ensure your passport is valid for at least 6 months beyond your return date. We provide pre-departure checklists, travel tips, and destination-specific advice to help you travel smart and safe.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="pt-20 px-4 max-sm:px-3 max-md:px-6 max-w-4xl mx-auto">
      <h1 className="font-bold text-center text-2xl max-sm:text-lg mb-8">
        Get Answers to Frequently Asked Questions
      </h1>

      <div className="space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="rounded-lg border border-lime-400 bg-white px-4 py-2 shadow-sm transition-all duration-300 max-sm:text-sm max-md:text-base"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left px-2 py-3 font-medium text-lime-800 focus:outline-none"
            >
              <span>{item.question}</span>
              <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                ▼
              </span>
            </button>
            {openIndex === index && (
              <div className="px-3 py-2 bg-lime-50 text-gray-700 text-sm rounded-md max-sm:text-xs">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 🌐 Submit Your Question Form */}
      <div className="mt-16 bg-lime-50  mb-10 p-6 rounded-lg shadow-sm max-sm:p-4 max-md:px-6">
        <h2 className="text-xl font-bold text-lime-900 mb-4 max-sm:text-lg">
          Didn't find your question? Ask us directly!
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            const form = e.target as HTMLFormElement
            const name = (form.elements.namedItem('name') as HTMLInputElement).value
            const email = (form.elements.namedItem('email') as HTMLInputElement).value
            const question = (form.elements.namedItem('question') as HTMLTextAreaElement).value

            if (!name || !email || !question) {
              alert('Please fill in all fields ✍️')
              return
            }

            // Simulate form submission
            alert('Thanks for your question! Our team will get back to you shortly.')
            form.reset()
          }}
          className="grid grid-cols-1 gap-5"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-lime-800 max-sm:text-xs">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 block w-full rounded-md border border-lime-200 px-3.5 py-2 shadow-sm focus:ring-2 focus:ring-lime-400 max-sm:py-1.5 max-sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-lime-800 max-sm:text-xs">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
               required
              className="mt-1 block w-full rounded-md border border-lime-200 px-3.5 py-2 shadow-sm focus:ring-2 focus:ring-lime-400 max-sm:py-1.5 max-sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="question" className="block text-sm font-semibold text-lime-800 max-sm:text-xs">
              Message
            </label>
            <textarea
              name="question"
              id="question"
              rows={4}
              required
              className="mt-1 block w-full rounded-md border border-lime-200 px-3.5 py-2 shadow-sm focus:ring-2 focus:ring-lime-400 max-sm:py-1.5 max-sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-md bg-lime-300 px-4 py-2 text-white font-semibold shadow hover:bg-lime-800 transition max-sm:text-sm"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
