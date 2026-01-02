import { motion } from "framer-motion";

const reasons = [
    {
        title: "Our Mission",
        description: "Empowering students with real-world IT skills and expert mentorship to bridge the gap between academics and industry.",
        image: "/Why Choose us-1.jpg",
    },
    {
        title: "Our Vision",
        description: "To become the most trusted IT training institute by transforming passionate learners into job-ready tech leaders.",
        image: "/Why Choose us-2.jpg",
    },
    {
        title: "Why Choose Us",
        description: "Cutting-edge courses, flexible learning, and 100% placement-focused support—all in one place.",
        image: "/Why Choose us-3.jpg",
    },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-heading">The TechVarsity Difference</h2>
          <p className="section-subheading mt-4">
            We're more than just a training center. We're a career launchpad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`flex flex-col items-center text-center ${index > 0 ? 'md:border-l md:border-border/70 md:pl-8' : ''} ${index < reasons.length - 1 ? 'md:pr-8' : ''}`}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-[260px] h-[260px] sm:w-[280px] sm:h-[280px] rounded-full overflow-hidden border-8 border-card shadow-lg mb-8 relative group"
              >
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors" />
              </motion.div>

              <h3 className="text-xl font-bold uppercase tracking-wider text-foreground mb-4">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
