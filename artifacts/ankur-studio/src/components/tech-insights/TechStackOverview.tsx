import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiTypescript, SiVite, SiTailwindcss, SiIonic, SiAndroid, SiOpenjdk } from 'react-icons/si';
import { Layers, ArrowDown } from 'lucide-react';

const layers = [
  {
    id: 'frontend',
    badge: '01',
    title: 'Frontend Layer',
    subtitle: 'What you see and interact with',
    description: 'Built with modern React and TypeScript for a blazing-fast, type-safe UI that compiles into a web bundle — ready to be packaged as a native mobile app.',
    color: '#FF3D7F',
    techs: [
      { icon: SiReact,       name: 'React',       role: 'Component UI',    color: '#61DAFB' },
      { icon: SiTypescript,  name: 'TypeScript',  role: 'Type Safety',     color: '#3178C6' },
      { icon: SiVite,        name: 'Vite',        role: 'Build Tool',      color: '#646CFF' },
      { icon: SiTailwindcss, name: 'Tailwind',    role: 'Styling Engine',  color: '#06B6D4' },
    ],
  },
  {
    id: 'bridge',
    badge: '02',
    title: 'Capacitor Bridge',
    subtitle: 'The glue between web and native',
    description: 'Capacitor wraps the web bundle into a native .apk and exposes a plugin API that lets JavaScript directly call native Java code — no React Native required, no compromise on performance.',
    color: '#9B59D4',
    techs: [
      { icon: SiIonic, name: 'Capacitor', role: 'Native Wrapper', color: '#53B9EA' },
    ],
    highlight: true,
    highlights: [
      'Packages React app into native .apk / .aab',
      'Exposes Plugin API for Java calls from JavaScript',
      'Handles permissions lifecycle on Android',
      'Runs native services even when UI is closed',
    ],
  },
  {
    id: 'native',
    badge: '03',
    title: 'Android Native Layer',
    subtitle: 'Raw hardware access with Java',
    description: 'Safety-critical operations — background GPS, silent SMS dispatch, continuous voice listening — run as native Java Services directly interfacing with the Android OS, unaffected by app state.',
    color: '#FF3D7F',
    techs: [
      { icon: SiOpenjdk, name: 'Java',    role: 'Core Logic',           color: '#f89820' },
      { icon: SiAndroid, name: 'Android', role: 'Services & Receivers', color: '#3DDC84' },
    ],
  },
];

const cardVariants: any = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] } }),
};

export function TechStackOverview() {
  return (
    <section id="tech-stack" className="py-28 relative z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(255,61,127,0.04),transparent)] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-pink mb-6">
            <Layers className="w-3.5 h-3.5 text-[#FF3D7F]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#FF3D7F]">Architecture Overview</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
            The <span className="neon-text">Tech Stack</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            A modern hybrid architecture — web speed on top, Android hardware power underneath.
          </p>
        </motion.div>

        <div className="w-full space-y-6">
          {layers.map((layer, idx) => (
            <React.Fragment key={layer.id}>
              <motion.div
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden"
                style={{ border: `1px solid ${layer.color}22` }}
              >
                {/* Top accent bar */}
                <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${layer.color}, transparent)` }} />

                <div className="p-8" style={{ background: `linear-gradient(135deg, ${layer.color}06, transparent 60%)` }}>
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">

                    {/* Left: info */}
                    <div className="lg:w-[42%] shrink-0">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-black tracking-widest" style={{ color: layer.color }}>
                          {layer.badge}
                        </span>
                        <div className="h-px flex-1" style={{ background: `${layer.color}30` }} />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">{layer.title}</h3>
                      <p className="text-sm font-semibold mb-3" style={{ color: layer.color }}>{layer.subtitle}</p>
                      <p className="text-sm text-white/50 leading-relaxed">{layer.description}</p>

                      {/* Bullet highlights for bridge layer */}
                      {layer.highlights && (
                        <ul className="mt-5 space-y-2">
                          {layer.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-2 text-sm text-white/60">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: layer.color }} />
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Right: tech cards */}
                    <div className={`flex-1 grid gap-4 ${
                      layer.techs.length === 1
                        ? 'grid-cols-1 max-w-xs'
                        : layer.techs.length === 2
                        ? 'grid-cols-2'
                        : 'grid-cols-2 md:grid-cols-4'
                    }`}>
                      {layer.techs.map((tech) => {
                        const Icon = tech.icon;
                        return (
                          <motion.div
                            key={tech.name}
                            whileHover={{ y: -4, scale: 1.02 }}
                            className="glass rounded-xl p-5 flex flex-col items-center justify-center gap-3 text-center group cursor-default border border-white/06 hover:border-white/14 transition-all"
                          >
                            <div
                              className="w-12 h-12 rounded-xl flex items-center justify-center transition-all group-hover:scale-110"
                              style={{ background: `${tech.color}14`, border: `1px solid ${tech.color}25` }}
                            >
                              <Icon className="w-6 h-6" style={{ color: tech.color }} />
                            </div>
                            <div>
                              <div className="font-bold text-white text-sm">{tech.name}</div>
                              <div className="text-xs text-white/40 mt-0.5">{tech.role}</div>
                            </div>
                          </motion.div>
                        );
                      })}

                      {/* If bridge layer, add context box alongside icon */}
                      {layer.id === 'bridge' && (
                        <div className="glass rounded-xl p-5 flex flex-col justify-center gap-2 border border-white/06">
                          <div className="text-xs font-bold text-[#9B59D4] uppercase tracking-widest mb-1">Bridge Flow</div>
                          {['React → Capacitor Plugin', 'Plugin → Java Method', 'Java → Android OS'].map((step, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-white/50">
                              <span className="w-4 h-4 rounded-full bg-[#9B59D4]/20 flex items-center justify-center text-[9px] font-bold text-[#9B59D4]">{i + 1}</span>
                              {step}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Animated connector */}
              {idx < layers.length - 1 && (
                <div className="flex justify-center py-1">
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    className="flex flex-col items-center gap-1"
                  >
                    <div className="w-px h-5 bg-gradient-to-b from-[#FF3D7F] to-[#9B59D4]" />
                    <ArrowDown className="w-4 h-4 text-[#9B59D4]" />
                  </motion.div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
