import { useRef } from "react";
import { ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { coursesData } from "@/data/courses";
import { useCart } from "@/hooks/use-cart";
import { CourseCard } from './CourseCard';

export const CoursesSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.9; // Scroll by 90% of the container width
      container.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="courses" className="py-12 sm:py-16 md:py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-0 sm:px-6">
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left mb-8 md:mb-12 px-4 sm:px-0"
        >
          <div className="max-w-xl">
            <h2 className="section-heading">
              Professional Training Programs
            </h2>
            <p className="section-subheading mt-4">
              Choose the Right Course for Your Career and Master New Skills
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 bg-card rounded-full shadow-md items-center justify-center flex border hover:bg-background transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 bg-card rounded-full shadow-md items-center justify-center flex border hover:bg-background transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-8 px-4 sm:px-0"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {coursesData.map((course) => (
              <div
                key={course.id}
                className="flex-shrink-0 w-[85%] sm:w-[320px] md:w-[350px]"
                style={{ scrollSnapAlign: "start" }}
              >
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
