import React from 'react';
import { motion } from 'framer-motion';
import { Satellite, Radio, Cpu, CloudOff, Signal } from 'lucide-react';

const pillars = [
  {
    icon: Satellite,
    title: 'GPS via Satellites',
    color: '#FF3D7F',
    stat: '30+',
    statLabel: 'Satellites Used',
    points: [
      'GPS chip receives signals directly from orbiting satellites',
      'No Wi-Fi triangulation needed — pure hardware fix',
      'Works in remote hills, basements, disaster zones',
      'Accuracy within 4–10 metres anywhere on Earth',
    ],
  },
  {
    icon: Radio,
    title: 'SMS via Cellular',
    color: '#9B59D4',
    stat: '2G',
    statLabel: 'Minimum Signal',
    points: [
      'SMS rides the fundamental Voice / Cellular band',
      'Older and more penetrating than data networks',
      'Survives when 4G/5G data is congested or dead',
      'One bar of signal is all Raksha Setu needs',
    ],
  },
  {
    icon: Cpu,
    title: 'Triggers Are Local',
    color: '#FF3D7F',
    stat: '0',
    statLabel: 'Server Pings',
    points: [
      'Power button detection runs on your phone CPU',
      'Volume combinations processed by BroadcastReceiver',
      'Voice keyword matched on-device in real time',
      'No network round-trip — response is instant',
    ],
  },
];

export function OfflineSection() {
  return (
    <section className="py-28 relative z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(255,61,127,0.04),transparent)] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-red-500/25 mb-6">
            <CloudOff className="w-4 h-4 text-red-400" />
            <span className="text-xs font-bold tracking-widest uppercase text-red-400">Zero Cloud Dependency</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
            Works Without <span className="text-red-400" style={{ textShadow: '0 0 16px rgba(239,68,68,0.5)' }}>Internet</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Three independently offline-capable systems working together. Any one of them alone can save a life.
          </p>
        </motion.div>

        {/* Key statement banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="glass-pink rounded-2xl px-8 py-6 text-center">
            <Signal className="w-8 h-8 text-[#FF3D7F] mx-auto mb-3" />
            <p className="text-xl md:text-2xl font-bold text-white leading-snug">
              "If there is even a{' '}
              <span className="neon-text">single bar of signal</span>,<br className="hidden sm:block" />
              Raksha Setu will send the SOS."
            </p>
          </div>
        </motion.div>

        {/* 3-col pillars */}
        <div className="w-full grid md:grid-cols-3 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl p-7 border flex flex-col gap-6 transition-all"
                style={{
                  border: `1px solid ${p.color}22`,
                  background: `linear-gradient(145deg, ${p.color}06, transparent 60%)`,
                }}
              >
                {/* Top: icon + stat */}
                <div className="flex items-start justify-between">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: `${p.color}15`, border: `1px solid ${p.color}30` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: p.color }} />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black" style={{ color: p.color }}>{p.stat}</div>
                    <div className="text-[10px] text-white/35 font-semibold mt-0.5">{p.statLabel}</div>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-xl font-bold text-white">{p.title}</h3>
                  <div className="h-0.5 w-8 rounded-full mt-2" style={{ background: p.color }} />
                </div>

                {/* Points */}
                <ul className="space-y-3 flex-1">
                  {p.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-white/55">
                      <div
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: p.color }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { val: '0',    label: 'Cloud Servers' },
            { val: '100%', label: 'Offline Core' },
            { val: '3',    label: 'Trigger Types' },
            { val: '<1s',  label: 'SOS Fire Time' },
          ].map((s) => (
            <div key={s.label} className="glass rounded-xl p-5 text-center border border-white/06">
              <div className="text-3xl font-black neon-text mb-1">{s.val}</div>
              <div className="text-xs text-white/40 font-medium">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
