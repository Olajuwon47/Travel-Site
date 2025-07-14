import {  } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Testimonal() {
  return (
    <>
    {/* Testimonials */}
      <div className="mt-8">
        <h1 className="font-bold text-center px-3 lg:px-0 flex items-center mb-6 justify-center max-sm:text-lg max-md:text-xl">
          Testimonial
        </h1>
        <p className="text-sm flex items-center mb-6 justify-center text-gray-700">
          Lorem ipsum dolor sit amet.
        </p>

        <Carousel className="#">
          <CarouselContent className="-ml-2 gap-3 md:-ml-4">
            {[...Array(5)].map((_, i) => {
              const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

              return (
                <CarouselItem key={i} className="pl-2 md:pl-4 max-w-sm">
                  <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                        alt="User Avatar"
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h2 className="text-lg font-semibold text-gray-900">
                          {i % 2 === 0 ? "Leslie Alexander" : "Michael Foster"}
                        </h2>
                        <p className="text-sm text-gray-500">
                          {i % 2 === 0 ? "UX/UI Designer" : "Frontend Developer"}
                        </p>
                        <div className="flex mt-1">
                          {[...Array(4)].map((_, j) => (
                            <span key={j} className="text-yellow-400 text-lg">&#9733;</span>
                          ))}
                          <span className="text-gray-300 text-lg">&#9733;</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic text-sm leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed auctor nulla in tortor fringilla congue. Phasellus
                      imperdiet pellentesque mollis.
                    </p>
                  </motion.div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
</>
  )
}
