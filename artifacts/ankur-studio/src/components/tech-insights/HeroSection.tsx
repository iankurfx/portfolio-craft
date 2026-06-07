import React from 'react';
import { motion } from 'framer-motion';
import { Shield, MapPin, MessageSquare, Mic, Radio, ChevronDown } from 'lucide-react';

const floatingCards = [
  { icon: MapPin,        label: 'GPS Tracking',      sub: 'Satellite precision',  color: '#FF3D7F', top: '8%',  left: '-5%'  },
  { icon: MessageSquare, label: 'Offline SMS',        sub: 'No internet needed',   color: '#9B59D4', top: '30%', right: '-5%' },
  { icon: Mic,           label: 'Voice Trigger',      sub: 'Continuous listening', color: '#9B59D4', top: '62%', left: '-5%'  },
  { icon: Radio,         label: 'Emergency Alerts',   sub: 'Instant dispatch',     color: '#FF3D7F', top: '80%', right: '-5%' },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-8 pb-20">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,61,127,0.08),transparent)] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pink mb-8"
            >
              <Shield className="w-3.5 h-3.5 text-[#FF3D7F]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#FF3D7F]">
                Privacy First &nbsp;·&nbsp; Offline Capable &nbsp;·&nbsp; Real-Time SOS
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] mb-6 tracking-tight">
              Inside<br />
              <span className="neon-text">Raksha Setu</span>
            </h1>

            <p className="text-lg sm:text-xl font-semibold text-white/80 mb-4 leading-snug">
              The technology powering offline emergency protection.
            </p>

            <p className="text-base text-white/50 leading-relaxed mb-10 max-w-lg">
              Engineered to work when the internet fails. SOS alerts via GPS satellites and standard SMS — no servers, no cloud, no single point of failure. A bridge of protection in your pocket.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3.5 bg-[#FF3D7F] text-white rounded-xl font-bold tracking-wide text-sm uppercase glow-pink transition-all"
                onClick={() => document.getElementById('tech-stack')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Architecture
              </motion.button>
              <motion.a
                href="https://github.com/iankurfx/RAKSHA-SETU-APP"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block px-8 py-3.5 glass rounded-xl font-bold tracking-wide text-sm uppercase text-white/70 hover:text-white transition-all border border-white/10 hover:border-white/20 text-center"
              >
                GitHub
              </motion.a>
            </div>

            {/* Stats row */}
            <div className="mt-12 flex gap-8 pt-8 border-t border-white/08">
              {[
                { val: '0', label: 'Servers Required' },
                { val: '100%', label: 'Offline Capable' },
                { val: '2G', label: 'Minimum Signal' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-black neon-text">{stat.val}</div>
                  <div className="text-xs text-white/40 font-medium mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Phone mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center h-[560px]"
          >
            {/* Ambient glow rings */}
            {[320, 420, 520].map((size, i) => (
              <motion.div
                key={size}
                className="absolute rounded-full border border-[#FF3D7F]/15"
                style={{ width: size, height: size }}
                animate={{ scale: [1, 1.04, 1], opacity: [0.4, 0.15, 0.4] }}
                transition={{ duration: 3.5 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
              />
            ))}

            {/* Phone body */}
            <div className="relative w-60 h-[480px] rounded-[2.5rem] border-2 border-white/12 bg-black/70 backdrop-blur-xl shadow-[0_0_80px_rgba(255,61,127,0.15)] z-10 flex flex-col overflow-hidden">
              {/* Notch */}
              <div className="flex justify-center pt-4">
                <div className="w-24 h-5 bg-white/08 rounded-full" />
              </div>

              {/* Screen content */}
              <div className="flex-1 flex flex-col items-center justify-center gap-5 px-4">
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative w-28 h-28 flex items-center justify-center"
                >
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#FF3D7F]/50 animate-spin" style={{ animationDuration: '8s' }} />
                  <div className="w-20 h-20 rounded-full bg-[#FF3D7F]/10 border border-[#FF3D7F]/30 flex items-center justify-center glow-pink">
                    <Shield className="w-9 h-9 text-[#FF3D7F]" />
                  </div>
                </motion.div>

                <div className="text-center">
                  <div className="text-xs font-bold tracking-widest text-[#FF3D7F] uppercase mb-1">Raksha Setu</div>
                  <div className="text-[10px] text-white/30 font-medium">Protection Active</div>
                </div>

                {/* Mini status rows */}
                {[
                  { label: 'GPS', active: true },
                  { label: 'SMS Ready', active: true },
                  { label: 'Voice ON', active: true },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-2 bg-white/04 rounded-lg px-4 py-2 w-full">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-[#FF3D7F]"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="text-[11px] text-white/60 font-medium flex-1">{s.label}</span>
                    <span className="text-[10px] text-green-400 font-bold">ACTIVE</span>
                  </div>
                ))}
              </div>

              {/* Home indicator */}
              <div className="flex justify-center pb-4">
                <div className="w-28 h-1 bg-white/15 rounded-full" />
              </div>
            </div>

            {/* Floating cards */}
            {floatingCards.map((card, i) => {
              const Icon = card.icon;
              const style: React.CSSProperties = {
                position: 'absolute',
                top: card.top,
                ...(card.left ? { left: card.left } : { right: card.right }),
              };
              return (
                <motion.div
                  key={card.label}
                  style={style}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 }}
                  className="glass px-4 py-3 rounded-2xl flex items-center gap-3 z-20 min-w-[160px]"
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${card.color}18`, border: `1px solid ${card.color}30` }}>
                    <Icon className="w-4 h-4" style={{ color: card.color }} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white leading-tight">{card.label}</div>
                    <div className="text-[10px] text-white/40 mt-0.5">{card.sub}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/25 z-10"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
