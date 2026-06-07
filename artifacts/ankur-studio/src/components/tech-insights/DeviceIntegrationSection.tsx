import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Power, Volume2, Mic, MapPin, MessageSquare, Cpu, Zap } from 'lucide-react';

const leftItems = [
  { icon: Power,   title: 'Power Button',  desc: 'AccessibilityService intercepts 5 rapid presses — even on the lock screen — and fires the SOS pipeline.', color: '#FF3D7F' },
  { icon: Volume2, title: 'Volume Buttons', desc: 'Long-press combination on both volume keys is captured by a BroadcastReceiver and triggers silent SOS mode.', color: '#FF3D7F' },
  { icon: Mic,     title: 'Microphone',    desc: 'Continuous audio buffer parsing via SpeechRecognizer in a ForegroundService. Keyword "emergency help" fires SOS.', color: '#9B59D4' },
];

const rightItems = [
  { icon: MapPin,       title: 'GPS Hardware Chip',  desc: 'FusedLocationProviderClient wakes the physical GPS chip directly, bypassing software geolocation entirely.', color: '#3B9EFF' },
  { icon: MessageSquare,title: 'Cellular Radio',     desc: 'SMS is routed over the Voice/Cellular band via SmsManager — independent of data and Wi-Fi availability.', color: '#9B59D4' },
  { icon: Cpu,          title: 'System CPU',         desc: 'Java Services with FOREGROUND_SERVICE permission run indefinitely. Android OS cannot reclaim their resources.', color: '#FF3D7F' },
];

function HardwareCard({ icon, title, desc, color, align }: {
  icon: React.ReactNode; title: string; desc: string; color: string; align: 'left' | 'right';
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'left' ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="glass rounded-xl p-5 border border-white/07 hover:border-white/14 transition-all flex gap-4"
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
        style={{ background: `${color}15`, border: `1px solid ${color}28` }}
      >
        <div style={{ color }}>{icon}</div>
      </div>
      <div>
        <div className="font-bold text-white text-sm mb-1">{title}</div>
        <p className="text-xs text-white/45 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

export function DeviceIntegrationSection() {
  return (
    <section className="py-28 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-pink mb-6">
            <Zap className="w-3.5 h-3.5 text-[#FF3D7F]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#FF3D7F]">Hardware Integration</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
            Direct Device <span className="neon-text">Control</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Raksha Setu interfaces with physical hardware, not software APIs. No middleman, no delay.
          </p>
        </motion.div>

        <div className="w-full flex flex-col lg:flex-row items-start gap-8">

          {/* Left items */}
          <div className="flex-1 space-y-4">
            <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-5 pl-1">Input Triggers</p>
            {leftItems.map((item) => {
              const Icon = item.icon;
              return (
                <HardwareCard
                  key={item.title}
                  icon={<Icon className="w-5 h-5" />}
                  title={item.title}
                  desc={item.desc}
                  color={item.color}
                  align="left"
                />
              );
            })}
          </div>

          {/* Centre phone */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="shrink-0 flex flex-col items-center gap-4"
          >
            {/* Phone body */}
            <div className="relative w-52 h-[430px] rounded-[2.5rem] border-2 border-white/15 bg-black/80 shadow-[0_0_60px_rgba(255,61,127,0.12)] overflow-hidden">
              {/* Side buttons */}
              <div className="absolute right-[-6px] top-28 w-1.5 h-12 bg-white/10 rounded-r-full" />
              <div className="absolute left-[-6px] top-24 w-1.5 h-8 bg-white/10 rounded-l-full" />
              <div className="absolute left-[-6px] top-36 w-1.5 h-8 bg-white/10 rounded-l-full" />

              {/* Screen */}
              <div className="absolute inset-2 rounded-[2rem] bg-gradient-to-b from-zinc-950 to-black flex flex-col items-center justify-center gap-3 overflow-hidden">
                {/* Notch */}
                <div className="absolute top-3 w-20 h-4 bg-black rounded-full z-10" />

                {/* Animated ring */}
                <motion.div
                  className="w-24 h-24 rounded-full border-2 border-[#FF3D7F]/40 flex items-center justify-center"
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="w-16 h-16 rounded-full bg-[#FF3D7F]/10 border border-[#FF3D7F]/30 flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-[#FF3D7F]/80" />
                  </div>
                </motion.div>

                {/* Intercept label */}
                <div className="text-[10px] font-black tracking-widest text-[#FF3D7F]/70 uppercase">System Intercept</div>

                {/* Hardware chips list */}
                <div className="space-y-1.5 px-4 w-full mt-2">
                  {[
                    { label: 'GPS Chip', ok: true },
                    { label: 'Cellular Radio', ok: true },
                    { label: 'CPU Services', ok: true },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2 bg-white/04 rounded-lg px-3 py-1.5">
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-[#FF3D7F]"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <span className="text-[10px] text-white/50 flex-1">{item.label}</span>
                      <span className="text-[9px] text-green-400 font-bold">ON</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Home indicator */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center">
                <div className="w-20 h-1 bg-white/12 rounded-full" />
              </div>
            </div>

            <div className="text-xs font-mono text-white/25 text-center">Android Device</div>
          </motion.div>

          {/* Right items */}
          <div className="flex-1 space-y-4">
            <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-5 pl-1">Output Hardware</p>
            {rightItems.map((item) => {
              const Icon = item.icon;
              return (
                <HardwareCard
                  key={item.title}
                  icon={<Icon className="w-5 h-5" />}
                  title={item.title}
                  desc={item.desc}
                  color={item.color}
                  align="right"
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
