import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Download, ChevronUp } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative py-36 overflow-hidden border-t border-white/05">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#FF3D7F]/12 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#9B59D4]/08 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center flex flex-col items-center">

        {/* Shield badge */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          className="relative mb-10"
        >
          <div className="w-28 h-28 rounded-3xl glass-pink flex items-center justify-center glow-pink">
            <Shield className="w-14 h-14 text-[#FF3D7F]" />
          </div>
          {/* Orbiting dot */}
          <motion.div
            className="absolute inset-[-16px] rounded-full border border-[#FF3D7F]/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#FF3D7F] glow-pink" />
          </motion.div>
        </motion.div>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tight leading-[1.0]"
        >
          Built For<br />
          <span className="neon-text">Real Emergencies</span>
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
          className="text-lg sm:text-xl text-white/50 max-w-2xl mb-14 leading-relaxed"
        >
          Raksha Setu was engineered to work when modern internet apps fail.
          No cloud. No server. No compromise. Just a bridge of protection you carry in your pocket.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.26 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 px-10 py-4 bg-[#FF3D7F] text-white rounded-xl font-bold text-base uppercase tracking-wide glow-pink transition-all"
          >
            <Download className="w-5 h-5" />
            Get Raksha Setu
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 px-10 py-4 glass border border-white/12 text-white/70 hover:text-white rounded-xl font-bold text-base uppercase tracking-wide transition-all hover:border-white/22"
          >
            <ChevronUp className="w-5 h-5" />
            Back to Top
          </motion.button>
        </motion.div>

        {/* Bottom stat strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="flex flex-wrap justify-center gap-8 mb-16 py-8 border-y border-white/07 w-full max-w-3xl"
        >
          {[
            { val: '0',    label: 'Cloud Servers' },
            { val: '100%', label: 'Offline Core' },
            { val: '3',    label: 'Trigger Types' },
            { val: '2G',   label: 'Min Signal' },
            { val: '<3s',  label: 'Alert Speed' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-black neon-text">{s.val}</div>
              <div className="text-xs text-white/35 font-medium mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Footer */}
        <div className="text-sm text-white/25 font-mono">
          © {new Date().getFullYear()} Raksha Setu &nbsp;·&nbsp; Offline First Emergency Architecture &nbsp;·&nbsp; Privacy First
        </div>
      </div>
    </section>
  );
}
