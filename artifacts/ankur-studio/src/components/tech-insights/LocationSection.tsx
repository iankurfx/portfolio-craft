import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Satellite, Crosshair, Navigation } from 'lucide-react';

export function LocationSection() {
  return (
    <section className="py-28 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="w-full grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: explanation + code */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-pink mb-6">
              <Satellite className="w-3.5 h-3.5 text-[#FF3D7F]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#FF3D7F]">Hardware-Level GPS</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-5 tracking-tight leading-tight">
              Location Tracking<br />
              <span className="neon-text">That Never Lies</span>
            </h2>

            <p className="text-white/55 text-base leading-relaxed mb-6">
              Standard web geolocation APIs are slow, inaccurate in the background, and blocked when the screen locks. Raksha Setu bypasses all of that.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: Satellite,  title: 'Physical GPS Chip Activation', desc: 'PRIORITY_HIGH_ACCURACY forces the OS to power up the actual GPS hardware on the motherboard, not estimate from cell towers.' },
                { icon: Crosshair,  title: 'Satellite Fix — Not Estimation', desc: 'FusedLocationProviderClient acquires a direct satellite fix, giving sub-10 metre accuracy regardless of Wi-Fi or 4G.' },
                { icon: Navigation, title: 'Instant Maps URL Generation', desc: 'Coordinates are formatted into a clickable Google Maps link inside the SMS so the receiver can navigate directly.' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4 p-5 glass rounded-xl border border-white/06">
                    <div className="w-10 h-10 rounded-xl bg-[#FF3D7F]/10 border border-[#FF3D7F]/25 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#FF3D7F]" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm mb-1">{item.title}</div>
                      <div className="text-xs text-white/45 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="terminal-window">
              <div className="terminal-header">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="text-xs font-mono text-white/30 ml-2">SimpleSOSHelper.java</span>
                <div className="ml-auto flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#FF3D7F]" />
                  <span className="text-[10px] text-[#FF3D7F] font-bold">LIVE</span>
                </div>
              </div>
              <div className="p-5 overflow-x-auto">
                <pre className="text-sm font-mono leading-6">
<span className="text-[#c5a5e8]">FusedLocationProviderClient</span> <span className="text-white">client</span>
{'  '}<span className="text-white">= </span><span className="text-[#88b4f8]">LocationServices</span>
{'      '}<span className="text-white">.</span><span className="text-[#88b4f8]">getFusedLocationProviderClient</span><span className="text-white">(ctx);</span>
{'\n'}
<span className="text-[#c5a5e8]">Task</span><span className="text-white">{'<Location>'}</span> <span className="text-white">task</span>
{'  '}<span className="text-white">= client.</span><span className="text-[#88b4f8]">getCurrentLocation</span><span className="text-white">(</span>
{'      '}<span className="text-[#c5a5e8]">Priority</span><span className="text-white">.</span>
{'      '}<span className="text-[#a8d58a]">PRIORITY_HIGH_ACCURACY</span><span className="text-white">, null);</span>
{'\n'}
<span className="text-white">task.</span><span className="text-[#88b4f8]">addOnSuccessListener</span><span className="text-white">(loc </span><span className="text-[#6b8cba]">-&gt;</span><span className="text-white"> {'{'}</span>
{'  '}<span className="text-[#c5a5e8]">String</span> <span className="text-white">url = </span><span className="text-[#a8d58a]">"maps.google.com/?q="</span>
{'            '}<span className="text-white">+ loc.</span><span className="text-[#88b4f8]">getLatitude</span><span className="text-white">()</span>
{'            '}<span className="text-white">+ </span><span className="text-[#a8d58a]">","</span><span className="text-white"> + loc.</span><span className="text-[#88b4f8]">getLongitude</span><span className="text-white">();</span>
{'  '}<span className="text-white/40">// Dispatch in SMS body immediately</span>
<span className="text-white">{'}'});</span>
                </pre>
              </div>
            </div>
          </motion.div>

          {/* Right: animated GPS radar + stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Radar visual */}
            <div className="relative w-72 h-72 flex items-center justify-center">
              {/* Concentric rings */}
              {[280, 210, 140, 70].map((size, i) => (
                <div
                  key={size}
                  className="absolute rounded-full border border-[#FF3D7F]/15"
                  style={{ width: size, height: size }}
                />
              ))}
              {/* Cross lines */}
              <div className="absolute w-full h-px bg-[#FF3D7F]/10" />
              <div className="absolute h-full w-px bg-[#FF3D7F]/10" />

              {/* Sweep */}
              <motion.div
                className="absolute w-full h-full rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 70%, rgba(255,61,127,0.25) 100%)',
                  borderRadius: '50%',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
              />

              {/* Target blip */}
              <motion.div
                className="absolute w-3 h-3 rounded-full bg-[#FF3D7F]"
                style={{ top: '28%', left: '62%' }}
                animate={{ scale: [1, 1.8, 1], opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              >
                <div className="absolute inset-0 rounded-full bg-[#FF3D7F]/40 animate-ping" />
              </motion.div>

              {/* Secondary blip */}
              <motion.div
                className="absolute w-2 h-2 rounded-full bg-[#9B59D4]"
                style={{ top: '60%', left: '35%' }}
                animate={{ opacity: [0.8, 0.3, 0.8] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: 0.5 }}
              />

              {/* Centre */}
              <div className="relative z-10 w-10 h-10 rounded-full bg-[#FF3D7F]/15 border border-[#FF3D7F]/40 flex items-center justify-center">
                <Crosshair className="w-5 h-5 text-[#FF3D7F]" />
              </div>
            </div>

            {/* Coordinate display */}
            <motion.div
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="terminal-window w-full"
            >
              <div className="terminal-header">
                <div className="w-2 h-2 rounded-full bg-[#FF3D7F] animate-pulse" />
                <span className="text-xs font-mono text-white/30 ml-1">satellite.lock</span>
              </div>
              <div className="p-4 font-mono text-sm space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-white/40">LAT</span>
                  <span className="text-[#FF3D7F] font-bold">28.6139° N</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">LNG</span>
                  <span className="text-[#FF3D7F] font-bold">77.2090° E</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">ACCURACY</span>
                  <span className="text-green-400 font-bold">±4.2 m</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">METHOD</span>
                  <span className="text-white/70">GPS_HARDWARE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">INTERNET</span>
                  <span className="text-red-400 font-bold">NOT REQUIRED</span>
                </div>
              </div>
            </motion.div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {[
                { val: '±4m', label: 'GPS Accuracy', color: '#FF3D7F' },
                { val: '0G', label: 'Internet Used', color: '#FF3D7F' },
                { val: '30+', label: 'GPS Satellites', color: '#9B59D4' },
                { val: '<3s', label: 'Fix Time', color: '#9B59D4' },
              ].map((s) => (
                <div key={s.label} className="glass rounded-xl p-4 text-center border border-white/06">
                  <div className="text-2xl font-black mb-1" style={{ color: s.color }}>{s.val}</div>
                  <div className="text-[11px] text-white/40">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
