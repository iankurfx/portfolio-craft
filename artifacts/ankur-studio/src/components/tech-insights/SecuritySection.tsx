import React from 'react';
import { motion } from 'framer-motion';
import { Lock, EyeOff, Database, ShieldCheck, CloudOff, Server } from 'lucide-react';

const stats = [
  { icon: EyeOff,    title: 'Zero Tracking',    desc: 'Raksha Setu has no analytics SDK, no crash reporter, no event logging. We have no idea who you are.',   color: '#FF3D7F' },
  { icon: Database,  title: 'On-Device Storage', desc: 'Emergency contacts are saved to the phone\'s local SQLite database. Never synced, never backed up to cloud.', color: '#9B59D4' },
  { icon: CloudOff,  title: 'No Cloud Backend',  desc: 'There is no server, no API, no database. The entire app engine lives inside the APK file on your device.',   color: '#FF3D7F' },
  { icon: Server,    title: 'No Data Collection', desc: 'Your location is only used inside the SOS SMS. It is never stored, never sent to any Raksha Setu endpoint.', color: '#9B59D4' },
];

export function SecuritySection() {
  return (
    <section className="py-28 relative z-10 bg-black/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="w-full grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-pink mb-6">
              <Lock className="w-3.5 h-3.5 text-[#FF3D7F]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#FF3D7F]">Privacy First</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
              No Servers.<br />
              No Tracking.<br />
              <span className="neon-text">No Compromise.</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-10">
              Most safety apps require you to trust a company with your real-time location 24/7. Raksha Setu trusts no one with your data — because it never leaves your device.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-xl p-5 border flex flex-col gap-4 hover:border-white/14 transition-all"
                    style={{ border: `1px solid ${s.color}18`, background: `${s.color}04` }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${s.color}15`, border: `1px solid ${s.color}28` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: s.color }} />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm mb-1.5">{s.title}</div>
                      <p className="text-xs text-white/45 leading-relaxed">{s.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Privacy vault visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Vault graphic */}
            <div className="relative flex items-center justify-center w-72 h-72">
              {/* Orbiting ring */}
              <motion.div
                className="absolute w-64 h-64 rounded-full border border-[#FF3D7F]/12"
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              >
                {[0, 90, 180, 270].map((deg) => (
                  <div
                    key={deg}
                    className="absolute w-7 h-7 rounded-xl bg-black border border-[#FF3D7F]/25 flex items-center justify-center"
                    style={{
                      top: deg === 0 ? '-14px' : deg === 180 ? 'calc(100% - 14px)' : '50%',
                      left: deg === 90 ? 'calc(100% - 14px)' : deg === 270 ? '-14px' : '50%',
                      transform: `translate(-50%, -50%)`,
                    }}
                  >
                    <Lock className="w-3 h-3 text-[#FF3D7F]/60" />
                  </div>
                ))}
              </motion.div>

              {/* Second orbit */}
              <motion.div
                className="absolute w-44 h-44 rounded-full border border-[#9B59D4]/12"
                animate={{ rotate: -360 }}
                transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
              >
                {[45, 225].map((deg) => (
                  <div
                    key={deg}
                    className="absolute w-6 h-6 rounded-lg bg-black border border-[#9B59D4]/25 flex items-center justify-center"
                    style={{
                      top: deg === 45 ? '-12px' : 'calc(100% - 12px)',
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                  >
                    <Lock className="w-2.5 h-2.5 text-[#9B59D4]/60" />
                  </div>
                ))}
              </motion.div>

              {/* Centre shield */}
              <motion.div
                className="relative z-10 w-32 h-32 glass-pink rounded-3xl flex items-center justify-center glow-pink"
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ShieldCheck className="w-16 h-16 text-[#FF3D7F]" />
              </motion.div>
            </div>

            {/* Privacy architecture label */}
            <div className="glass-pink rounded-2xl px-8 py-5 text-center w-full max-w-sm">
              <div className="text-xs font-black tracking-widest uppercase text-[#FF3D7F] mb-2">Privacy First Architecture</div>
              <p className="text-sm text-white/55 leading-relaxed">
                All data processing happens on-device. No telemetry, no analytics, no user accounts — ever.
              </p>
            </div>

            {/* Proof points */}
            <div className="grid grid-cols-3 gap-4 w-full">
              {[
                { val: '0', label: 'API Calls Made' },
                { val: '0', label: 'Data Uploaded' },
                { val: '∞', label: 'Privacy Kept' },
              ].map((s) => (
                <div key={s.label} className="glass rounded-xl p-4 text-center border border-white/06">
                  <div className="text-2xl font-black neon-text">{s.val}</div>
                  <div className="text-[11px] text-white/40 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
