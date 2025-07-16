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
    <div className="bg-gradient-to-r from-lime-400 to-lime-800 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-lg font-semibold text-white"
        >
          Trusted by the world's most innovative teams
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 
                     sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
        >
          {logos.map((logo, i) => (
            <motion.img
              key={i}
              variants={beatFade}
              src={logo.src}
              alt={logo.alt}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
