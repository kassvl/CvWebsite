import { motion, useScroll, useTransform } from 'framer-motion'
import { Container } from '../layout/Container'
import { useRef } from 'react'

const projects = [
  {
    id: 1,
    title: 'Renecore-GreenFleet',
    category: 'Machine Learning Platform',
    description:
      'Renecore‑GreenFleet is a professional platform developed for real‑time monitoring and machine learning‑powered 7‑day forecasting of wind and solar energy sites. It provides power generation, revenue, and CO₂ savings predictions using modern ML models.',
    github: 'https://github.com/kassvl/Rxxxxx-GreenFleet',
    image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b0?q=80&w=2560&auto=format&fit=crop' // Placeholder luxury tech image
  },
]

export const ProjectsSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.9, 1]);

  return (
    <section id="projects" className="relative py-32 md:py-48 bg-black overflow-hidden">
      {/* Luxury Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.03),transparent_50%)] pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          style={{ opacity, scale }}
          ref={targetRef}
          className="mb-24 text-center"
        >
          <span className="text-yellow-500/80 uppercase tracking-[0.3em] text-xs md:text-sm font-medium mb-4 block">
            Selected Works
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
            Case Studies
          </h2>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative grid md:grid-cols-2 gap-12 items-center"
    >
      {/* Image Area */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg border border-white/10">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10" />
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          src={project.image} 
          alt={project.title} 
          className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
      </div>

      {/* Content Area */}
      <div className="space-y-8 text-left md:pl-10">
        <div className="space-y-4">
          <span className="text-yellow-500/60 text-sm tracking-widest uppercase">{project.category}</span>
          <h3 className="text-4xl md:text-5xl font-bold text-white group-hover:text-yellow-500 transition-colors duration-300" style={{ fontFamily: "var(--font-heading)" }}>
            {project.title}
          </h3>
        </div>
        
        <p className="text-lg text-neutral-400 leading-relaxed font-light">
          {project.description}
        </p>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm uppercase tracking-widest text-white hover:text-yellow-500 transition-colors duration-300 group-link"
          >
            <span className="border-b border-white/30 pb-1 group-link-hover:border-yellow-500">View Project</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 transition-transform">
              <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  )
}
