import {} from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import '../index.css'

const testimonials = [
  {
    name: "Leslie Alexander",
    title: "UX/UI Designer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
    quote:
      "Booking with this agency was the best decision! Seamless process and unforgettable experiences.",
  },
  {
    name: "Michael Foster",
    title: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
    quote:
      "They took care of everything — flights, hotels, even hidden gems! Truly professional service.",
  },
  {
    name: "Amina Yusuf",
    title: "Travel Blogger",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
    quote:
      "I've traveled extensively, and I can boldly say this is one of the most reliable agencies out there.",
  },
  {
    name: "Samuel Ojo",
    title: "Photographer",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328d6d0c?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
    quote:
      "They understand the art of travel — it's not just the destination, it's the experience.",
  },
  {
    name: "Grace Eze",
    title: "Corporate Executive",
    image:
      "https://images.unsplash.com/photo-1614286533098-3f0c5d8533c3?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
    quote:
      "Safe, organized, and truly stress-free. I recommend them to anyone seeking real value.",
  },
];

export function Testimonal() {
  return (
    <div className="mb-10 px-4 max-sm:px-2 max-md:px-4 max-sm:mb-8 max-md:mb-9">
      <h1 className="font-bold text-center text-2xl max-sm:text-lg max-md:text-xl mb-2 max-sm:mb-1 max-md:mb-2 max-sm:font-extrabold max-md:font-bold">
        Testimonials
      </h1>
      <p className="text-center text-gray-600 text-sm mb-6 max-sm:text-xs max-md:text-sm max-sm:mb-4 max-md:mb-5 max-sm:px-2 max-md:px-3 max-sm:leading-relaxed max-md:leading-relaxed">
        Hear from our happy travelers who've journeyed with us across the globe.
      </p>

      <Carousel className="w-full max-w-6xl mx-auto max-sm:max-w-sm max-md:max-w-2xl">
        <CarouselContent className="-ml-2 gap-4 md:-ml-4 max-sm:-ml-1 max-sm:gap-2 max-md:-ml-2 max-md:gap-3">
          {testimonials.map((t, i) => {
            const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

            return (
              <CarouselItem key={i} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 max-sm:pl-1 max-sm:basis-full max-md:pl-2 max-md:basis-1/2">
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-5 max-sm:p-4 max-md:p-4 max-sm:rounded-xl max-md:rounded-2xl max-sm:shadow-sm max-md:shadow-md max-sm:hover:shadow-md max-md:hover:shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-4 max-sm:gap-3 max-md:gap-3 max-sm:mb-3 max-md:mb-4">
                    <img
                      src={t.image}
                      alt={`${t.name}'s Avatar`}
                      className="w-12 h-12 rounded-full object-cover max-sm:w-10 max-sm:h-10 max-md:w-11 max-md:h-11"
                    />
                    <div className="max-sm:flex-1 max-md:flex-1">
                      <h2 className="text-gray-900 font-semibold text-sm max-sm:text-xs max-md:text-sm max-sm:font-bold max-md:font-semibold">
                        {t.name}
                      </h2>
                      <p className="text-gray-500 text-xs max-sm:text-xs max-md:text-xs max-sm:font-medium max-md:font-normal">
                        {t.title}
                      </p>
                      <div className="flex mt-1 max-sm:mt-0.5 max-md:mt-1">
                        {[...Array(5)].map((_, j) => (
                          <span key={j} className="text-yellow-400 text-lg max-sm:text-sm max-md:text-base">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm italic leading-relaxed max-sm:text-xs max-md:text-sm max-sm:leading-relaxed max-md:leading-relaxed max-sm:font-normal max-md:font-normal">
                    "{t.quote}"
                  </p>
                </motion.div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="max-sm:hidden max-md:left-2" />
        <CarouselNext className="max-sm:hidden max-md:right-2" />
      </Carousel>
    </div>
  );
}
