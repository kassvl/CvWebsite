import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { Icon } from '../ui/Icon';

export const AboutSection = () => {
  return (
    <section className="relative py-32 bg-neutral-950 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column: Image & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
              {/* Placeholder for Profile Image - keeping it abstract/tech focused if no real image provided yet */}
              <div className="aspect-[4/5] bg-gradient-to-br from-neutral-800 to-black relative group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507668011477-4157dad149ef?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                   <div>
                      <h3 className="text-white text-2xl font-bold">Kadirhan Emre Memiş</h3>
                      <p className="text-yellow-500/80 text-sm uppercase tracking-widest mt-1">Lead Software Architect</p>
                   </div>
                </div>
              </div>
            </div>
            
            {/* Floating Tech Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-10 top-10 bg-black/80 border border-white/10 backdrop-blur-md p-4 rounded-xl shadow-2xl hidden md:block"
            >
              <Icon name="code" className="w-8 h-8 text-yellow-500 mb-2" />
              <div className="text-xs text-neutral-400 uppercase tracking-wider">Cloud Native</div>
              <div className="text-white font-bold">Expert</div>
            </motion.div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <span className="text-yellow-500/80 uppercase tracking-[0.3em] text-xs font-medium">Who I Am</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                Engineering Scalable <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">Digital Ecosystems.</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-neutral-400 font-light leading-relaxed">
              <p>
                I don't just write code; I architect living, breathing systems. With over 8 years of deep-dive experience in 
                <span className="text-white font-normal"> Cloud Engineering</span> and <span className="text-white font-normal">High-Scale Software Architecture</span>, 
                I specialize in turning complex algorithmic challenges into seamless, user-centric digital experiences.
              </p>
              <p>
                My philosophy is rooted in the belief that the best code is invisible—it just works, reliably and efficiently. 
                Whether it's designing microservices that handle millions of requests or leading agile teams towards technical excellence, 
                I bring a <span className="text-white font-normal">"milyon dolarlık"</span> (million-dollar) mindset to every project.
              </p>
            </div>

            {/* Key Competencies Grid */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
               <div>
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    Cloud Architecture
                  </h4>
                  <p className="text-sm text-neutral-500">AWS, Docker, Kubernetes, Serverless</p>
               </div>
               <div>
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    Backend Systems
                  </h4>
                  <p className="text-sm text-neutral-500">Python, Node.js, Go, Microservices</p>
               </div>
               <div>
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    DevOps & CI/CD
                  </h4>
                  <p className="text-sm text-neutral-500">Automated Pipelines, Infrastructure as Code</p>
               </div>
               <div>
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    Technical Leadership
                  </h4>
                  <p className="text-sm text-neutral-500">Team Mentoring, System Design, Agile</p>
               </div>
            </div>

            <div className="pt-8">
              <a 
                href="/CV_KadirhanEmreMemis.pdf" 
                download 
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-yellow-500 transition-colors duration-300"
              >
                <Icon name="download" className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
