import { useState, useEffect, useRef, useMemo } from "react";
import { useLocation } from "wouter";
import { Play, Pause, SkipBack, SkipForward, ArrowLeft, ExternalLink } from "lucide-react";

// ==========================================
// 🎵 MUSIC PLAYLIST CONFIGURATION
// ==========================================
// Instructions:
// 1. Create a folder named "music" inside your "public" folder (public/music).
// 2. Place your 3 .mp3 files inside that folder.
// 3. Name them exactly "song1.mp3", "song2.mp3", and "song3.mp3".
// 4. Update the titles and artists below to match your songs.
const PLAYLIST = [
  {
    id: 1,
    title: "Start Building",
    artist: "idk",
    src: "/music/song1.mp3"
  },
  {
    id: 2,
    title: "Start Focusing",
    artist: "idk",
    src: "/music/song2.mp3"
  },
  {
    id: 3,
    title: "Miss Her",
    artist: "idk",
    src: "/music/song3.mp3"
  }
];

export default function MusicPlayer() {
  const [, setLocation] = useLocation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const currentTrack = PLAYLIST[currentTrackIndex];

  // Memoize random styles for animations to prevent recalculation on state updates
  const windParticles = useMemo(() => {
    return Array.from({ length: 40 }).map(() => ({
      width: Math.random() * 3 + 1 + "px",
      height: Math.random() * 2 + 1 + "px",
      top: Math.random() * 100 + "%",
      left: "-5%",
      opacity: Math.random() * 0.4 + 0.1,
      filter: "blur(1px)",
      animation: `windBlow ${Math.random() * 15 + 10}s linear infinite`,
      animationDelay: `-${Math.random() * 20}s`,
    }));
  }, []);

  const birds = useMemo(() => {
    return Array.from({ length: 6 }).map(() => ({
      width: Math.random() * 20 + 15 + "px",
      height: Math.random() * 20 + 15 + "px",
      top: 15 + Math.random() * 35 + "%",
      left: "-10%",
      animation: `birdFly ${Math.random() * 30 + 20}s linear infinite`,
      animationDelay: `-${Math.random() * 30}s`,
    }));
  }, []);

  // Play/Pause logic
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((e) => {
          console.log("Audio playback requires user interaction first.", e);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrackIndex]);

  // Handle Time Update
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration;
      setCurrentTime(current);
      if (total) {
        setProgress((current / total) * 100);
      }
    }
  };

  // Handle Loaded Metadata (when song loads, get its length)
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  // Format time (e.g., 65 seconds -> "1:05")
  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Next Track
  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % PLAYLIST.length);
    setIsPlaying(true);
  };

  // Previous Track
  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev === 0 ? PLAYLIST.length - 1 : prev - 1));
    setIsPlaying(true);
  };

  // Handle Scrubber Click
  const handleScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const clickRatio = x / rect.width;

    if (audioRef.current && duration) {
      audioRef.current.currentTime = clickRatio * duration;
      setProgress(clickRatio * 100);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#0a0514] overflow-hidden selection:bg-purple-500/30 font-['Inter',sans-serif]">

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={currentTrack.src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleNext}
      />

      {/* ── BACKGROUND IMAGE W/ PANNING ANIMATION ── */}
      <div
        className="absolute inset-[-5%] w-[110%] h-[110%] bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: "url('/images/lofi-bg.jpg')",
          animation: "panBg 60s ease-in-out infinite alternate"
        }}
      />

      {/* ── SUBTLE OVERLAY TO ENSURE CONTRAST ── */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      {/* ── WIND / DUST PARTICLES ── */}
      <div className="absolute inset-0 pointer-events-none">
        {windParticles.map((style, i) => (
          <div
            key={`wind-${i}`}
            className="absolute rounded-full bg-white"
            style={style}
          />
        ))}
      </div>

      {/* ── ROAMING BIRDS (SVG) ── */}
      <div className="absolute inset-0 pointer-events-none">
        {birds.map((style, i) => (
          <svg
            key={`bird-${i}`}
            viewBox="0 0 24 24"
            className="absolute text-black/60 fill-current"
            style={style}
          >
            <path d="M22 8c-2 1-4 2-6 2-1 0-2-.5-3-1-1-.5-2.5-1.5-4-1.5-1 0-2.5.5-4 1.5C3.5 9.5 2.5 10 1.5 10c-1 0-1.5-1-1.5-1s1-1 3-1.5c1.5-.5 3-.5 4.5 0 1 .5 2 1 3 1s2-.5 3-1c1.5-.5 3-.5 4.5 0 2 .5 3 1.5 3 1.5z" />
          </svg>
        ))}
      </div>

      {/* ── NAVIGATION (BACK BUTTON) ── */}
      <button
        onClick={() => setLocation("/")}
        className="absolute top-6 left-6 z-50 p-3 rounded-full bg-black/20 border border-white/10 text-white/80 hover:bg-black/40 hover:text-white backdrop-blur-md transition-all duration-300"
      >
        <ArrowLeft size={20} />
      </button>

      {/* ── LOWER LEFT CONTENT CONTAINER ── */}
      <div className="absolute bottom-6 left-6 right-6 sm:right-auto z-10 flex flex-col gap-4">

        {/* ── SONG CREDITS LINK BOX ── */}
        {/* PASTE YOUR LINK IN THE HREF BELOW */}
        <a
          href="https://open.spotify.com/playlist/79tTTqPEMaRwL4AsQvQjTk?si=4Qd4ckH_RVOe_G0sG2ESpg&nd=1&dlsi=e65f12d021fb49be"
          target="_blank"
          rel="noopener noreferrer"
          className="w-max px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-300"
          style={{
            background: "rgba(15, 15, 25, 0.4)",
            backdropFilter: "blur(16px) saturate(1.5)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.05), 0 10px 30px rgba(0,0,0,0.4)",
          }}
        >
          <span className="text-white/80 text-xs font-semibold tracking-wider uppercase">Song Credits</span>
          <ExternalLink size={14} className="text-white/60" />
        </a>

        {/* ── MINIMALIST CONTROLS (PLAYER BOX) ── */}
        <div
          className="w-full sm:w-[320px] rounded-2xl p-5 flex flex-col gap-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          style={{
            background: "rgba(15, 15, 25, 0.4)",
            backdropFilter: "blur(16px) saturate(1.5)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.05), 0 10px 30px rgba(0,0,0,0.4)",
          }}
        >
          {/* Track Info */}
          <div className="px-1">
            <h3 className="text-white font-bold text-base tracking-wide">{currentTrack.title}</h3>
            <p className="text-white/60 text-xs font-medium">{currentTrack.artist}</p>
          </div>

          {/* Progress Bar */}
          <div className="w-full px-1">
            <div
              className="h-1.5 w-full bg-white/20 rounded-full cursor-pointer relative overflow-hidden"
              onClick={handleScrub}
            >
              <div
                className="h-full bg-white rounded-full relative transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-white/50 mt-1.5 font-medium tracking-wide">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Playback Controls */}
          <div className="flex items-center justify-between px-2 pt-1">
            <button onClick={handlePrev} className="text-white/70 hover:text-white transition-colors p-2">
              <SkipBack size={20} fill="currentColor" />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:scale-105 active:scale-95 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            >
              {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-0.5" />}
            </button>

            <button onClick={handleNext} className="text-white/70 hover:text-white transition-colors p-2">
              <SkipForward size={20} fill="currentColor" />
            </button>
          </div>
        </div>

      </div>

      {/* ── GLOBAL STYLES FOR ANIMATIONS ── */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes panBg {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.05) translate(-1%, 1%); }
        }
        @keyframes windBlow {
          0% { transform: translateX(0) translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(120vw) translateY(-5vh); opacity: 0; }
        }
        @keyframes birdFly {
          0% { transform: translateX(0) translateY(0); opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { transform: translateX(120vw) translateY(-15vh); opacity: 0; }
        }
      `}} />
    </div>
  );
}
