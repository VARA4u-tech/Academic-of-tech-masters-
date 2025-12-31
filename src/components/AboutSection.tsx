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
            className="relative perspective-1000 order-2 lg:order-1 flex items-center justify-center"
          >
            <motion.div
              style={{ rotateX, rotateY }}
              className="relative preserve-3d"
            >
              {/* Main Circle Container */}
              <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px]">
                {/* Outer decorative ring */}
                <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
                
                {/* Large background circle */}
                <div className="absolute inset-4 rounded-full bg-primary/10" />
                
                {/* Main image circle */}
                <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                  <img
                    src="/src/assets/about-student.jpg"
                    alt="Student learning IT"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating decorative circles */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 right-8 w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent/80 shadow-lg"
                />
                
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-8 -left-4 w-8 h-8 md:w-10 md:h-10 rounded-full border-4 border-primary"
                />
                
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/3 -right-6 w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary shadow-md"
                />
                
                <motion.div
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-2 right-1/4 w-10 h-10 md:w-14 md:h-14 rounded-full border-4 border-accent/60"
                />

                {/* Arc decorations */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380">
                  <motion.path
                    d="M 60 190 A 130 130 0 0 1 190 60"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  <motion.path
                    d="M 320 190 A 130 130 0 0 1 190 320"
                    fill="none"
                    stroke="hsl(var(--accent))"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.7 }}
                  />
                </svg>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-background/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-border whitespace-nowrap"
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
