import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline'

import Hero from '../Pages/Hero.tsx'
import { Testimonal } from '../Pages/Testimonal.tsx'
import Subscribe from '../Pages/Subscribe.tsx'
import Logo from '../Pages/Logo.tsx'

const features = [
  {
    name: 'Push to deploy',
    description:
      'Quickly publish your itinerary or travel updates with one click. Reliable for last-minute changes and seamless sync.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'All bookings are encrypted with top-grade SSL security. Your data and payment details are safe with us.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description:
      'No long waits. Our system manages booking flows efficiently so your travelers don’t face delays.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security',
    description:
      'We use industry-standard security protocols to protect your travel records, documents, and user data.',
    icon: FingerPrintIcon,
  },
]

export default function Example() {
  return (
    <>
      <Hero />
      <Logo />
      <Subscribe />

      <div className="bg-white py-24 sm:py-32 max-sm:py-14 max-md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 max-sm:px-4 max-md:px-5">
          <div className="mx-auto max-w-2xl text-center lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-lime-600 max-sm:text-sm">
              Travel Agency Solutions
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance max-sm:text-2xl max-md:text-3xl">
              Everything you need to launch your travel agency
            </p>
            <p className="mt-6 text-lg text-gray-700 max-sm:text-sm max-md:text-base">
              From seamless booking systems to secure data handling and dynamic itinerary tools —
              we provide the tech, so you can focus on the journey.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl max-sm:mt-10 max-md:mt-14">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 max-sm:gap-y-8 max-md:gap-y-12">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16 max-sm:pl-12 max-md:pl-14">
                  <dt className="text-base font-semibold text-gray-900 max-sm:text-sm max-md:text-base">
                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-lime-600 max-sm:size-8">
                      <feature.icon aria-hidden="true" className="size-6 text-white max-sm:size-4" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base text-gray-600 max-sm:text-sm max-md:text-base">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <Testimonal />
    </>
  )
}
