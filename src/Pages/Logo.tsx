// src/Pages/Logo.tsx

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const logos = [
  {
    src: "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg",
    alt: "Transistor",
  },
  {
    src: "https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg",
    alt: "Reform",
  },
  {
    src: "https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg",
    alt: "Tuple",
  },
  {
    src: "https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg",
    alt: "SavvyCal",
  },
  {
    src: "https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg",
    alt: "Statamic",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const beatFade: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1.05,
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

export default function Logo() {
  return (
    <div className="bg-gradient-to-r from-lime-400 to-lime-800 py-20 sm:py-32 max-sm:py-12 max-md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 max-sm:px-4 max-md:px-5">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-lg font-semibold text-white max-sm:text-base max-md:text-lg max-sm:font-bold max-md:font-semibold max-sm:mb-6 max-md:mb-8"
        >
          Trusted by the world's most innovative teams
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 
                     sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5
                     max-sm:mt-8 max-sm:max-w-sm max-sm:grid-cols-2 max-sm:gap-x-4 max-sm:gap-y-6
                     max-md:mt-9 max-md:max-w-md max-md:grid-cols-3 max-md:gap-x-6 max-md:gap-y-8"
        >
          {logos.map((logo, i) => (
            <motion.img
              key={i}
              variants={beatFade}
              src={logo.src}
              alt={logo.alt}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 
                         max-sm:col-span-1 max-sm:max-h-8 max-sm:w-full
                         max-md:col-span-1 max-md:max-h-10 max-md:w-full"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
