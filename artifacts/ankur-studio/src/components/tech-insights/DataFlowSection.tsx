import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Activity, Crosshair, Code2, Send, PhoneForwarded, ArrowDown } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Zap,
    label: 'Emergency Trigger',
    detail: 'Power button × 5 / Volume hold / "emergency help" voice command',
    sub: 'Detected by BroadcastReceiver or AccessibilityService — no screen unlock needed',
    colorA: '#FF3D7F',
    colorB: '#FF6B9D',
  },
  {
    num: '02',
    icon: Activity,
    label: 'Native Service Fires',
    detail: 'Android Foreground Service wakes up and takes control',
    sub: 'OS cannot kill this service — it has FOREGROUND_SERVICE permission and a persistent notification',
    colorA: '#d44fcc',
    colorB: '#c026d3',
  },
  {
    num: '03',
    icon: Crosshair,
    label: 'GPS Retrieval',
    detail: 'FusedLocationProviderClient activates the hardware GPS chip',
    sub: 'PRIORITY_HIGH_ACCURACY forces a satellite fix — lat/lng accurate to within 4 metres',
    colorA: '#9B59D4',
    colorB: '#7c3aed',
  },
  {
    num: '04',
    icon: Code2,
    label: 'Message Formatting',
    detail: 'Coordinates are embedded into a pre-set SOS message',
    sub: '"EMERGENCY! I need help. Location: https://maps.google.com/?q=28.6139,77.2090"',
    colorA: '#7c3aed',
    colorB: '#9B59D4',
  },
  {
    num: '05',
    icon: Send,
    label: 'SMS Dispatch',
    detail: 'SmsManager.getDefault().sendMultipartTextMessage() fires',
    sub: 'Sent over the Voice/Cellular band — no internet required. Works on 2G signal',
    colorA: '#c026d3',
    colorB: '#FF3D7F',
  },
  {
    num: '06',
    icon: PhoneForwarded,
    label: 'Contact Receives Alert',
    detail: 'Emergency contact gets SMS with name, message, and clickable map link',
    sub: 'They tap the link → Google Maps opens → navigation begins. Zero friction.',
    colorA: '#FF3D7F',
    colorB: '#FF6B9D',
  },
];

export function DataFlowSection() {
  return (
    <section className="py-28 relative z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(155,89,212,0.05),transparent)] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
            Complete <span className="neon-text">Data Flow</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            From physical trigger to life-saving alert — every step, every millisecond.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={step.num}>
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative flex gap-5 rounded-2xl p-6 border transition-all hover:border-white/14 group"
                  style={{
                    border: `1px solid ${step.colorA}20`,
                    background: `linear-gradient(135deg, ${step.colorA}06, transparent 60%)`,
                  }}
                >
                  {/* Step number + icon column */}
                  <div className="flex flex-col items-center gap-2 shrink-0">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: `${step.colorA}18`, border: `1px solid ${step.colorA}35` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: step.colorA }} />
                    </div>
                    <div
                      className="text-[10px] font-black tracking-widest"
                      style={{ color: `${step.colorA}80` }}
                    >
                      {step.num}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-white text-base mb-1.5">{step.label}</h4>
                    <p className="text-sm text-white/70 font-medium mb-2">{step.detail}</p>
                    <p className="text-xs text-white/40 leading-relaxed">{step.sub}</p>
                  </div>

                  {/* Animated status dot */}
                  <motion.div
                    className="w-2.5 h-2.5 rounded-full shrink-0 mt-1"
                    style={{ background: step.colorA }}
                    animate={{ opacity: [1, 0.3, 1], scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.25 }}
                  />
                </motion.div>

                {/* Connector arrow */}
                {idx < steps.length - 1 && (
                  <div className="flex justify-center my-1">
                    <motion.div
                      className="flex flex-col items-center gap-0.5"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.4, repeat: Infinity, delay: idx * 0.2 }}
                    >
                      <div
                        className="w-px h-4"
                        style={{ background: `linear-gradient(to bottom, ${step.colorA}, ${steps[idx + 1].colorA})` }}
                      />
                      <ArrowDown className="w-3 h-3" style={{ color: steps[idx + 1].colorA }} />
                    </motion.div>
                  </div>
                )}
              </React.Fragment>
            );
          })}

          {/* Time stat */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 glass-pink rounded-2xl p-6 text-center"
          >
            <div className="text-5xl font-black neon-text mb-2">{'<3s'}</div>
            <div className="text-white/60 text-base font-semibold">Total time from trigger to alert delivery</div>
            <div className="text-white/35 text-sm mt-1">Assuming a satellite fix is already available</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
