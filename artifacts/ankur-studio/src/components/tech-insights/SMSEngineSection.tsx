import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, WifiOff, Zap, CheckCircle2, XCircle, Activity } from 'lucide-react';

const flowSteps = [
  { num: '01', label: 'User Trigger',       sub: 'Power / Volume / Voice',     color: '#FF3D7F' },
  { num: '02', label: 'Background Service', sub: 'Android BroadcastReceiver',   color: '#c45fe8' },
  { num: '03', label: 'SmsManager',         sub: 'sendMultipartTextMessage()',  color: '#9B59D4', highlight: true },
  { num: '04', label: 'Contact Delivery',   sub: 'Arrives with GPS link',       color: '#FF3D7F' },
];

const comparison = [
  { feature: 'Internet Required',   sms: { val: 'No — 2G works', ok: true },  other: { val: 'Yes — Data/WiFi', ok: false } },
  { feature: 'Background Send',     sms: { val: 'Automatic & Silent', ok: true }, other: { val: 'User must click', ok: false } },
  { feature: 'Works Offline',       sms: { val: '100% Yes', ok: true },       other: { val: 'No', ok: false } },
  { feature: 'Delivery Speed',      sms: { val: 'Instant',  ok: true },       other: { val: 'Variable', ok: false } },
  { feature: 'Anti-Spam Block',     sms: { val: 'Never blocked', ok: true },  other: { val: 'Frequently blocked', ok: false } },
];

export function SMSEngineSection() {
  return (
    <section className="py-28 relative z-10 bg-black/30">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-pink mb-6">
            <WifiOff className="w-3.5 h-3.5 text-[#FF3D7F]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#FF3D7F]">Offline SMS Engine</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            SMS Over <span className="neon-text">Internet APIs</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
            The most critical safety decision in the app. Standard SMS is older, simpler, and far more reliable in an emergency.
          </p>
        </motion.div>

        <div className="w-full grid lg:grid-cols-2 gap-14">

          {/* Left: Why SMS + flow */}
          <div className="space-y-8">

            {/* Key insight card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl p-7 border border-[#FF3D7F]/25 bg-[#FF3D7F]/05"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#FF3D7F]/15 border border-[#FF3D7F]/30 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-[#FF3D7F]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Zero-Interaction Automation</h4>
                  <p className="text-sm text-white/55 leading-relaxed">
                    WhatsApp and Telegram strictly prohibit third-party apps from sending messages without the user pressing a Send button — a hard anti-spam policy. In an emergency, you cannot afford to unlock your phone. Android's native <code className="text-[#FF3D7F] bg-[#FF3D7F]/10 px-1.5 py-0.5 rounded font-mono text-xs">SmsManager</code> allows our background service to dispatch messages silently and instantly.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Dispatch flow */}
            <div>
              <p className="text-xs font-bold tracking-widest text-white/30 uppercase mb-5">Dispatch Flow</p>
              <div className="space-y-2">
                {flowSteps.map((step, i) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`flex items-center gap-5 rounded-xl p-5 border transition-all ${
                      step.highlight
                        ? 'border-[#9B59D4]/40 bg-[#9B59D4]/08'
                        : 'border-white/07 bg-white/02 hover:border-white/12'
                    }`}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs shrink-0"
                      style={{ background: `${step.color}15`, border: `1px solid ${step.color}35`, color: step.color }}
                    >
                      {step.num}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-white text-sm">{step.label}</div>
                      <div className="text-xs text-white/40 mt-0.5 font-mono">{step.sub}</div>
                    </div>
                    {i < flowSteps.length - 1 && (
                      <motion.div
                        className="w-2 h-2 rounded-full"
                        style={{ background: step.color }}
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                      />
                    )}
                    {i === flowSteps.length - 1 && (
                      <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: comparison table + signal stat */}
          <div className="space-y-8">

            {/* Comparison */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-white/08"
            >
              {/* Table header */}
              <div className="grid grid-cols-3 bg-white/04 border-b border-white/06 px-5 py-4">
                <div className="text-xs font-bold text-white/40 uppercase tracking-wider">Feature</div>
                <div className="text-xs font-bold text-[#FF3D7F] uppercase tracking-wider text-center">Raksha SMS</div>
                <div className="text-xs font-bold text-white/30 uppercase tracking-wider text-center">WhatsApp / APIs</div>
              </div>
              {comparison.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 px-5 py-4 border-b border-white/04 last:border-0 ${i % 2 === 0 ? 'bg-white/01' : ''}`}
                >
                  <div className="text-sm text-white/60 font-medium flex items-center">{row.feature}</div>
                  <div className="flex items-center justify-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
                    <span className="text-xs text-green-400 font-semibold">{row.sms.val}</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5">
                    <XCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                    <span className="text-xs text-red-400 font-medium">{row.other.val}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Signal stat — big statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-pink rounded-2xl p-7 text-center"
            >
              <div className="flex justify-center mb-4">
                <Activity className="w-8 h-8 text-[#FF3D7F]" />
              </div>
              <blockquote className="text-xl font-bold text-white leading-snug mb-3">
                "If there is even a single bar of <span className="neon-text">2G signal</span>, Raksha Setu can send the SOS."
              </blockquote>
              <p className="text-sm text-white/45">
                Standard SMS uses the foundational Voice / Cellular band — the oldest and most resilient signal type. It penetrates basements, remote hills, and crowded disaster zones where data fails first.
              </p>
            </motion.div>

            {/* Mini stat row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { val: '2G', label: 'Min Signal' },
                { val: '0ms', label: 'User Action' },
                { val: '100%', label: 'Background' },
              ].map((s) => (
                <div key={s.label} className="glass rounded-xl p-4 text-center border border-white/06">
                  <div className="text-2xl font-black neon-text">{s.val}</div>
                  <div className="text-[11px] text-white/40 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
