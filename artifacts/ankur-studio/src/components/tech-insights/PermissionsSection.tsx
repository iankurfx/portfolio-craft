import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, MessageSquare, MapPin, Mic, PlaySquare, Locate } from 'lucide-react';

const permissions = [
  {
    id: 'SEND_SMS',
    icon: MessageSquare,
    color: '#FF3D7F',
    feature: 'Emergency Alerts',
    why: 'Dispatches SOS messages silently from a background service — no user action, no popup, no delay.',
    privacy: 'Only fires on explicit emergency trigger. Never sends promotional or tracking messages.',
  },
  {
    id: 'ACCESS_FINE_LOCATION',
    icon: MapPin,
    color: '#3B9EFF',
    feature: 'GPS Precision',
    why: 'Powers up the hardware GPS chip to obtain satellite-accurate coordinates (sub-10m) for the SOS message.',
    privacy: 'Location is formatted locally and sent only inside the SOS SMS. Nothing is uploaded to any server.',
  },
  {
    id: 'ACCESS_BACKGROUND_LOCATION',
    icon: Locate,
    color: '#3B9EFF',
    feature: 'Pocket-Mode GPS',
    why: 'Enables GPS access when the phone is locked in a pocket — critical because emergencies happen when you cannot interact with your screen.',
    privacy: 'Android shows a persistent notification whenever background location is active.',
  },
  {
    id: 'RECORD_AUDIO',
    icon: Mic,
    color: '#9B59D4',
    feature: 'Voice Trigger',
    why: 'Required exclusively for the Night Mode continuous listening loop that detects the "emergency help" keyword.',
    privacy: 'Audio is processed entirely on-device in real-time — never stored, never sent to any server.',
  },
  {
    id: 'FOREGROUND_SERVICE',
    icon: PlaySquare,
    color: '#22c55e',
    feature: 'Always-On Engine',
    why: 'Signals Android OS that this app is performing critical user-facing work. Prevents the OS from killing voice/GPS services to save battery.',
    privacy: 'Manifests as a persistent system notification, so you always know the service is running.',
  },
];

export function PermissionsSection() {
  return (
    <section className="py-28 relative z-10 bg-black/30">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 rounded-2xl glass-pink mx-auto mb-6 flex items-center justify-center">
            <ShieldAlert className="w-8 h-8 text-[#FF3D7F]" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
            Permission <span className="neon-text">Architecture</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Every permission is purposeful, documented, and isolated. Nothing more, nothing less.
          </p>
        </motion.div>

        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {permissions.map((perm, idx) => {
            const Icon = perm.icon;
            return (
              <motion.div
                key={perm.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 border border-white/07 hover:border-white/14 transition-all flex flex-col gap-5"
                style={{ '--perm-color': perm.color } as React.CSSProperties}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${perm.color}15`, border: `1px solid ${perm.color}30` }}
                  >
                    <Icon className="w-5.5 h-5.5" style={{ width: 22, height: 22, color: perm.color }} />
                  </div>
                  {/* Toggle visual */}
                  <div className="flex items-center gap-1.5 mt-1">
                    <div
                      className="w-10 h-5 rounded-full flex items-center px-0.5"
                      style={{ background: `${perm.color}30` }}
                    >
                      <motion.div
                        className="w-4 h-4 rounded-full ml-auto"
                        style={{ background: perm.color, boxShadow: `0 0 8px ${perm.color}80` }}
                        animate={{ x: [0, 1, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </div>
                  </div>
                </div>

                {/* Permission ID */}
                <div>
                  <div
                    className="text-[10px] font-black tracking-widest uppercase font-mono mb-1"
                    style={{ color: perm.color }}
                  >
                    {perm.feature}
                  </div>
                  <div className="text-xs font-mono text-white/40 break-all leading-snug">{perm.id}</div>
                </div>

                {/* Divider */}
                <div className="h-px w-full" style={{ background: `${perm.color}15` }} />

                {/* Why */}
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2">Why needed</div>
                  <p className="text-xs text-white/55 leading-relaxed">{perm.why}</p>
                </div>

                {/* Privacy note */}
                <div className="mt-auto pt-4 border-t border-white/05">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/25 mb-1.5">Privacy note</div>
                  <p className="text-[11px] text-white/40 leading-relaxed">{perm.privacy}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
