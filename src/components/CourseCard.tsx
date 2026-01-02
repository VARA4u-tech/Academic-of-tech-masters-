import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Course } from "@/data/courses";
import { useCart } from "@/hooks/use-cart";

interface CourseCardProps {
  course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  const { addToCart } = useCart();

  return (
    <div
      key={course.id}
      className="bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 z-10">
          <span className="px-3 py-1 bg-background/70 backdrop-blur-md text-xs font-semibold uppercase tracking-wider rounded-md border border-border/50">
            {course.category}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-4 h-4",
                i < course.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-300"
              )}
            />
          ))}
        </div>

        <Link to={`/course/${course.slug}`}>
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {course.title}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
          {course.description}
        </p>

        <div className="mt-auto pt-4 border-t border-border/50 flex flex-col gap-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-primary tracking-tight">{course.price}</span>
            <span className="text-sm text-muted-foreground line-through">{course.originalPrice}</span>
          </div>
          <button
            onClick={() => addToCart({ id: course.id, title: course.title, price: parseInt(course.price.replace(/[^\d]/g, '')), image: course.image })}
            className="btn-primary w-full group/btn"
          >
            Enroll in Course
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};