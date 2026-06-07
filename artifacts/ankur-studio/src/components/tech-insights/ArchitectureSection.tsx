import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, Smartphone, ArrowDown, Zap } from 'lucide-react';

const archLayers = [
  {
    icon: Code2,
    label: 'WEB LAYER',
    title: 'React + TypeScript',
    bullets: ['Component-based UI', 'Vite HMR build pipeline', 'Tailwind CSS styling', 'Capacitor Plugin calls'],
    color: '#FF3D7F',
  },
  {
    icon: Layers,
    label: 'CAPACITOR BRIDGE',
    title: 'Native Wrapper',
    bullets: ['Packages web → .apk', 'Exposes Plugin API', 'Manages permissions', 'Platform lifecycle'],
    color: '#9B59D4',
  },
  {
    icon: Smartphone,
    label: 'ANDROID NATIVE',
    title: 'Java Services',
    bullets: ['BroadcastReceivers', 'ForegroundService', 'SmsManager dispatch', 'GPS hardware access'],
    color: '#FF3D7F',
  },
];

export function ArchitectureSection() {
  return (
    <section className="py-28 relative z-10 bg-black/30">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
            Hybrid Mobile <span className="neon-text-purple">Architecture</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Three tightly-coupled layers. Each has a distinct role. Together they make offline safety possible.
          </p>
        </motion.div>

        <div className="w-full grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Layer diagram */}
          <div className="flex flex-col items-center gap-0">
            {archLayers.map((layer, idx) => {
              const Icon = layer.icon;
              return (
                <React.Fragment key={layer.label}>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    className="w-full rounded-2xl overflow-hidden"
                    style={{ border: `1px solid ${layer.color}30`, background: `linear-gradient(135deg, ${layer.color}08, transparent)` }}
                  >
                    <div className="flex items-start gap-5 p-6">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: `${layer.color}15`, border: `1px solid ${layer.color}35` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: layer.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-black tracking-widest mb-0.5" style={{ color: layer.color }}>
                          {layer.label}
                        </div>
                        <div className="text-base font-bold text-white mb-3">{layer.title}</div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                          {layer.bullets.map((b) => (
                            <div key={b} className="flex items-center gap-1.5 text-xs text-white/50">
                              <div className="w-1 h-1 rounded-full shrink-0" style={{ background: layer.color }} />
                              {b}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {idx < archLayers.length - 1 && (
                    <motion.div
                      className="flex flex-col items-center py-2"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.6, repeat: Infinity, delay: idx * 0.3 }}
                    >
                      <div className="w-px h-4 bg-gradient-to-b from-[#FF3D7F] to-[#9B59D4]" />
                      <ArrowDown className="w-3.5 h-3.5 text-[#9B59D4]" />
                      <div className="w-px h-4 bg-gradient-to-b from-[#9B59D4] to-transparent" />
                    </motion.div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Right: Why hybrid + code */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl p-7 border border-[#FF3D7F]/20 bg-[#FF3D7F]/04"
            >
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-4 h-4 text-[#FF3D7F]" />
                <h4 className="font-bold text-white text-lg">Why Hybrid Architecture?</h4>
              </div>
              <p className="text-sm text-white/55 leading-relaxed mb-4">
                A pure web app cannot run background services reliably on Android — the OS kills it to save battery. A pure native app means rewriting the entire UI in Java/Kotlin, which is slow to iterate on.
              </p>
              <p className="text-sm text-white/55 leading-relaxed">
                The hybrid approach gives us the best of both: React's rapid UI development at the top, and Java's unrestricted background execution at the bottom, connected seamlessly by Capacitor's plugin bridge.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="terminal-window"
            >
              <div className="terminal-header">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="text-xs font-mono text-white/30 ml-2">bridge-call.ts</span>
              </div>
              <div className="p-5 overflow-x-auto">
                <pre className="text-sm font-mono leading-6">
<span className="text-[#6b8cba]">import</span> <span className="text-white">{'{ registerPlugin }'}</span> <span className="text-[#6b8cba]">from</span> <span className="text-[#a8d58a]">'@capacitor/core'</span><span className="text-white">;</span>
{'\n'}
<span className="text-[#6b8cba]">export interface</span> <span className="text-[#c5a5e8]">SosPlugin</span> <span className="text-white">{'{'}</span>
{'  '}<span className="text-[#88b4f8]">triggerEmergency</span><span className="text-white">(opts: {'{'}</span>
{'    '}<span className="text-white">mode</span><span className="text-white">: </span><span className="text-[#a8d58a]">'silent'</span> <span className="text-white">| </span><span className="text-[#a8d58a]">'loud'</span>
{'  '}<span className="text-white">{'}'}</span><span className="text-white">): </span><span className="text-[#c5a5e8]">Promise</span><span className="text-white">{'<{ success: boolean }>'}</span><span className="text-white">;</span>
<span className="text-white">{'}'}</span>
{'\n'}
<span className="text-[#6b8cba]">const</span> <span className="text-white">SOS </span><span className="text-white">= </span><span className="text-[#88b4f8]">registerPlugin</span><span className="text-white">{'<SosPlugin>'}(</span><span className="text-[#a8d58a]">'SosService'</span><span className="text-white">);</span>
{'\n'}
<span className="text-white/40">{'// '}React calls native Java directly:</span>
<span className="text-[#6b8cba]">await</span> <span className="text-white">SOS.</span><span className="text-[#88b4f8]">triggerEmergency</span><span className="text-white">({'{ mode: '}</span><span className="text-[#a8d58a]">'silent'</span> <span className="text-white">{'}'});</span>
                </pre>
              </div>
            </motion.div>

            {/* Performance badges */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { val: '<50ms', label: 'Bridge Latency' },
                { val: '24/7', label: 'Background Run' },
                { val: '0 MB', label: 'Extra Runtime' },
              ].map((badge) => (
                <div key={badge.label} className="glass rounded-xl p-4 text-center border border-white/06">
                  <div className="text-xl font-black neon-text">{badge.val}</div>
                  <div className="text-[11px] text-white/40 font-medium mt-1">{badge.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
