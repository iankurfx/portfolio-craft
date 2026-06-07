import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiTypescript, SiVite, SiTailwindcss,
  SiIonic, SiAndroid, SiOpenjdk, SiGooglemaps,
} from 'react-icons/si';

const techs = [
  { icon: SiReact,       name: 'React',               role: 'UI Framework',          color: '#61DAFB', layer: 'Frontend' },
  { icon: SiTypescript,  name: 'TypeScript',           role: 'Type Safety',           color: '#3178C6', layer: 'Frontend' },
  { icon: SiVite,        name: 'Vite',                 role: 'Build Tooling',         color: '#646CFF', layer: 'Frontend' },
  { icon: SiTailwindcss, name: 'Tailwind CSS',         role: 'Utility Styling',       color: '#06B6D4', layer: 'Frontend' },
  { icon: SiIonic,       name: 'Capacitor',            role: 'Native Bridge',         color: '#53B9EA', layer: 'Bridge'   },
  { icon: SiAndroid,     name: 'Android API',          role: 'OS Services',           color: '#3DDC84', layer: 'Native'   },
  { icon: SiOpenjdk,     name: 'Java',                 role: 'Native Services',       color: '#f89820', layer: 'Native'   },
  { icon: SiGooglemaps,  name: 'Google Play Services', role: 'Fused Location API',    color: '#4285F4', layer: 'Native'   },
];

const layerColors: Record<string, string> = {
  Frontend: '#FF3D7F',
  Bridge:   '#9B59D4',
  Native:   '#3DDC84',
};

export function TechGridSection() {
  return (
    <section className="py-28 relative z-10 bg-black/30">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
            The Complete <span className="neon-text-purple">Stack</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Every technology, chosen deliberately. Nothing bloated, nothing missing.
          </p>
        </motion.div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {techs.map((tech, idx) => {
            const Icon = tech.icon;
            const lc = layerColors[tech.layer];
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="glass rounded-2xl p-6 flex flex-col items-center gap-4 text-center border border-white/07 hover:border-white/15 transition-all cursor-default group"
              >
                {/* Layer badge */}
                <div
                  className="self-end text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full"
                  style={{ background: `${lc}18`, color: lc }}
                >
                  {tech.layer}
                </div>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110"
                  style={{ background: `${tech.color}12`, border: `1px solid ${tech.color}25` }}
                >
                  <Icon className="w-7 h-7" style={{ color: tech.color }} />
                </div>

                {/* Name + role */}
                <div>
                  <div className="font-bold text-white text-sm">{tech.name}</div>
                  <div className="text-xs text-white/40 mt-0.5">{tech.role}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
