import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Mic, VolumeX, RefreshCcw, Moon } from 'lucide-react';

// Pre-compute bar heights to avoid Math.random() on every render
const BARS = Array.from({ length: 48 }, (_, i) => ({
  height: 20 + ((Math.sin(i * 0.6) + 1) * 60) + (i % 3) * 20,
  duration: 0.5 + (i % 4) * 0.15,
  delay: i * 0.04,
}));

const features = [
  {
    icon: RefreshCcw,
    title: 'Continuous Listening Loop',
    desc: 'Standard speech recognition stops after a few seconds of silence. We override the onResults and onError callbacks to call scheduleRestart() immediately — creating an unbreakable listening loop.',
  },
  {
    icon: VolumeX,
    title: 'Silent Audio Mute Hack',
    desc: 'Android plays an audible "beep" every time the microphone activates. Our code hooks into AudioManager to mute STREAM_MUSIC right before each restart — the loop is completely silent and invisible to the user.',
  },
  {
    icon: Moon,
    title: 'Foreground Service Protection',
    desc: 'The entire voice engine runs inside NightModeVoiceService — a Foreground Service that Android OS cannot kill for battery optimisation, ensuring listening persists even with the screen off.',
  },
];

export function VoiceSection() {
  return (
    <section className="py-28 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="w-full grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: visualizer */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-8"
          >
            {/* Waveform visualizer card */}
            <div className="w-full glass rounded-2xl border border-[#9B59D4]/25 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/06">
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-2.5 h-2.5 rounded-full bg-[#9B59D4]"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  />
                  <span className="text-xs font-bold text-[#9B59D4] tracking-wider uppercase">Voice Engine Active</span>
                </div>
                <span className="text-xs font-mono text-white/30">NightModeVoiceService.java</span>
              </div>

              {/* Bars */}
              <div className="h-40 flex items-center justify-center gap-[3px] px-5 py-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#9B59D4]/03 to-transparent" />
                {BARS.map((bar, i) => (
                  <motion.div
                    key={i}
                    className="rounded-full shrink-0"
                    style={{
                      width: 3,
                      background: i % 5 === 0 ? '#FF3D7F' : '#9B59D4',
                      opacity: 0.6 + (Math.sin(i * 0.3) + 1) * 0.2,
                    }}
                    animate={{ height: [8, bar.height, 8] }}
                    transition={{
                      duration: bar.duration,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: bar.delay,
                      repeatType: 'reverse',
                    }}
                  />
                ))}
              </div>

              {/* Keyword detection */}
              <div className="px-5 py-4 border-t border-white/06 font-mono text-xs space-y-2">
                <div className="flex items-center gap-2 text-white/30">
                  <span>{'>'}</span>
                  <span>Listening for keyword...</span>
                </div>
                <motion.div
                  className="flex items-center gap-2 text-[#FF3D7F]"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                >
                  <span>{'>'}</span>
                  <span className="font-bold">MATCH: "emergency help" detected</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 text-green-400"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 4 }}
                >
                  <span>{'>'}</span>
                  <span>SOS triggered → GPS + SMS dispatch</span>
                </motion.div>
              </div>
            </div>

            {/* Microphone visual */}
            <div className="relative w-44 h-44 flex items-center justify-center">
              {[168, 128, 88].map((size, i) => (
                <motion.div
                  key={size}
                  className="absolute rounded-full border border-[#9B59D4]/20"
                  style={{ width: size, height: size }}
                  animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, delay: i * 0.5 }}
                />
              ))}
              <div className="w-20 h-20 rounded-full glass-purple border border-[#9B59D4]/40 flex items-center justify-center glow-purple">
                <Mic className="w-9 h-9 text-[#9B59D4]" />
              </div>
            </div>
          </motion.div>

          {/* Right: info + code */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-purple mb-6">
                <Moon className="w-3.5 h-3.5 text-[#9B59D4]" />
                <span className="text-xs font-bold tracking-widest uppercase text-[#9B59D4]">Night Mode</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
                Voice Trigger<br />
                <span className="neon-text-purple">That Never Sleeps</span>
              </h2>
              <p className="text-white/50 text-base leading-relaxed">
                Speak "emergency help" and Raksha Setu fires — even if your phone is in your pocket with the screen off, mid-walk at 2 AM.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-5 rounded-xl border border-white/07 bg-white/02 hover:border-[#9B59D4]/30 transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#9B59D4]/12 border border-[#9B59D4]/25 flex items-center justify-center shrink-0">
                      <Icon className="w-4.5 h-4.5 text-[#9B59D4]" style={{ width: 18, height: 18 }} />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm mb-1">{f.title}</div>
                      <div className="text-xs text-white/45 leading-relaxed">{f.desc}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Code */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="text-xs font-mono text-white/30 ml-2">NightModeVoiceService.java</span>
              </div>
              <div className="p-5 overflow-x-auto">
                <pre className="text-sm font-mono leading-6">
<span className="text-[#c5a5e8]">@Override</span>
<span className="text-[#6b8cba]">public void</span> <span className="text-[#88b4f8]">onResults</span><span className="text-white">(</span><span className="text-[#c5a5e8]">Bundle</span> <span className="text-white">results) {'{'}</span>
{'  '}<span className="text-[#c5a5e8]">ArrayList</span><span className="text-white">{'<String>'}</span> <span className="text-white">matches = results</span>
{'    '}<span className="text-white">.</span><span className="text-[#88b4f8]">getStringArrayList</span><span className="text-white">(</span>
{'      '}<span className="text-[#c5a5e8]">SpeechRecognizer</span><span className="text-white">.</span><span className="text-[#a8d58a]">RESULTS_RECOGNITION</span>
{'    '}<span className="text-white">);</span>
{'\n'}
{'  '}<span className="text-[#6b8cba]">if</span> <span className="text-white">(matches != </span><span className="text-[#a8d58a]">null</span> <span className="text-white">&& !matches.isEmpty()) {'{'}</span>
{'    '}<span className="text-[#c5a5e8]">String</span> <span className="text-white">text = matches.</span><span className="text-[#88b4f8]">get</span><span className="text-white">(0).</span><span className="text-[#88b4f8]">toLowerCase</span><span className="text-white">();</span>
{'    '}<span className="text-[#6b8cba]">if</span> <span className="text-white">(text.</span><span className="text-[#88b4f8]">contains</span><span className="text-white">(</span><span className="text-[#a8d58a]">"emergency help"</span><span className="text-white">)) {'{'}</span>
{'      '}<span className="text-[#88b4f8]">SimpleSOSHelper</span><span className="text-white">.</span><span className="text-[#FF3D7F] font-bold">triggerSOS</span><span className="text-white">(</span><span className="text-[#6b8cba]">this</span><span className="text-white">);</span>
{'    '}<span className="text-white">{'}'}</span>
{'  '}<span className="text-white">{'}'}</span>
{'  '}<span className="text-[#88b4f8]">scheduleRestart</span><span className="text-white">();</span> <span className="text-white/30">// mic reboot</span>
<span className="text-white">{'}'}</span>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
