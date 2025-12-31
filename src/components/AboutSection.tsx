import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Factory, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const highlights = [
  {
    icon: Factory,
    title: "Industry-Focused Training",
    description: "Real-time tools & practical approach"
  },
  {
    icon: Users,
    title: "Expert Mentors",
    description: "Trainers with real industry experience"
  },
  {
    icon: Briefcase,
    title: "Career Support",
    description: "Resume, interviews & placements"
  }
];

export const AboutSection = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Visual */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative perspective-1000 order-2 lg:order-1"
          >
            <motion.div
              style={{ rotateX, rotateY }}
              className="relative preserve-3d"
            >
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/placeholder.svg"
                  alt="IT Training Institute"
                  className="w-full h-[300px] md:h-[400px] object-cover"
                />
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-border"
                >
                  <span className="text-xs md:text-sm font-semibold text-primary">10+ Years of Excellence</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 order-1 lg:order-2"
          >
            {/* Section Label */}
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wide">
              About Us
            </span>

            {/* Main Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground leading-tight">
              Building <span className="text-primary">Careers</span>, Not Just Courses
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg">
              We are a professional IT training institute focused on real-world skills, 
              industry-level projects, and career outcomes. Our mission is to make students 
              job-ready with confidence.
            </p>

            {/* Highlight Cards */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="group bg-card p-4 rounded-xl border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-accent/20 flex items-center justify-center mb-3 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h4 className="text-xs md:text-sm font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="pt-2"
            >
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Know More About Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
