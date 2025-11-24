import { motion } from 'framer-motion'
import { useState } from 'react'
import { Container } from '../layout/Container'

export const CoWorkSection = () => {
  const [message, setMessage] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return
    const subject = encodeURIComponent('Luxury Co‑Work Request')
    const body = encodeURIComponent(`Merhaba Kadirhan,\n\n${message.trim()}\n`)
    window.open(`mailto:kadirhanemrememis@gmail.com?subject=${subject}&body=${body}`, '_blank')
    setMessage('')
  }

  return (
    <section id="cowork" className="relative py-32 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      
      {/* Decorative Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center space-y-12"
        >
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
              Let's Create <span className="text-yellow-500 italic">Legacy</span>
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light">
              Open for select consulting opportunities and high-impact collaborations.
            </p>
          </div>

          <form onSubmit={submit} className="max-w-xl mx-auto space-y-8">
            <div className="relative group">
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your vision..."
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-lg text-white placeholder-white/20 outline-none focus:border-yellow-500/50 focus:bg-white/10 transition-all duration-300 resize-none"
              />
              <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-yellow-500 transition-all duration-500 group-focus-within:w-full" />
            </div>

            <button
              type="submit"
              className="group relative px-10 py-4 bg-white text-black font-bold text-sm uppercase tracking-widest overflow-hidden rounded-full hover:bg-yellow-500 transition-colors duration-300"
            >
              <span className="relative z-10">Initiate Contact</span>
            </button>
          </form>
        </motion.div>
      </Container>
    </section>
  )
}
