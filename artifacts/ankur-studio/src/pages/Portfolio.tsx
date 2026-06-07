import { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import animationData from "../ANIMATION2.json";
import { useLocation } from "wouter";
import { Instagram, SlidersHorizontal, Palette, Hammer, Globe, Gamepad2, Music, FileText } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { getGalleryItems } from "@/lib/data";

const THEMES = ["purple", "blue", "pink", "emerald"] as const;
type Theme = typeof THEMES[number];

const BUBBLE_MESSAGES = [
  "Welcome to the chaos 👋",
  "Currently building something weird 🛠️",
  "Design. Code. Repeat. 🔁",
  "Probably fixing bugs right now 🐛",
  "Ideas are always welcome 💡",
  "One project at a time 🎯",
  "Running on curiosity and caffeine ☕",
  "Still figuring things out 🤔",
  "Making pixels do cool things ✨",
  "Building things I wish existed 🚀",
  "This looked easier yesterday 😅",
  "Creating stuff for the internet 🌐",
  "Turning random ideas into projects 🎲",
  "Work in progress. Always. 🔨",
  "Some features may be accidental 🤷",
  "Good design feels invisible 👀",
  "Click around, you'll find things 🔍",
  "Currently lost in a side project 🗺️",
  "The robot approves this website 🤖",
  "Welcome to my digital playground 🎮"
];

export default function Portfolio() {
  const [, setLocation] = useLocation();
  const [theme, setTheme] = useState<Theme>("purple");

  // Lottie Animation Control
  const lottieRef = useRef<any>(null);

  // Set the animation speed here (1 = normal, 0.5 = half speed, 2 = double speed)
  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.5); // 👈 Change this number to make it slower or faster
    }
  }, []);
  const [visible, setVisible] = useState<Set<string>>(new Set());
  const [isExpanded, setIsExpanded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [bubbleIndex, setBubbleIndex] = useState(0);
  const [bubbleVisible, setBubbleVisible] = useState(true);
  const galleryItems = getGalleryItems();

  // Rotate bubble messages with fade
  useEffect(() => {
    const interval = setInterval(() => {
      setBubbleVisible(false);
      setTimeout(() => {
        setBubbleIndex((prev) => (prev + 1) % BUBBLE_MESSAGES.length);
        setBubbleVisible(true);
      }, 800);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const toggleTheme = () => {
    setTheme((p) => {
      const idx = THEMES.indexOf(p);
      return THEMES[(idx + 1) % THEMES.length];
    });
  };

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible((v) => new Set([...v, e.target.id]));
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const reveal = (id: string, delay = 0) => ({
    id,
    "data-reveal": true,
    style: {
      opacity: visible.has(id) ? 1 : 0.001,
      transform: visible.has(id) ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    },
  });

  const topTape = "  CRAFTS BY ANKUR  ·  ";
  const bottomTape = "  DESIGNS BY ANKUR  ·  ";

  return (
    <div
      data-theme={theme}
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Inter', sans-serif", overflowX: "clip" }}
    >

      {/* ── NAV ─────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.06]">
        <span className="text-sm font-semibold tracking-[0.18em] uppercase text-white">
          Ankur Studio
        </span>

        <div className="flex items-center gap-2">
          {/* PASTE YOUR INSTAGRAM LINK IN THE HREF BELOW */}
          <a
            href="https://www.instagram.com/iankur.fx?igsh=ajRneGptdWZnZWN5"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 text-white/50 hover:border-[var(--ac)] hover:text-[var(--ac)] transition-all duration-200"
          >
            <Instagram size={15} />
          </a>

          {/* PASTE YOUR DISCORD LINK IN THE HREF BELOW */}
          <a
            href="https://discord.com/users/1266802665783038104"
            target="_blank"
            rel="noopener noreferrer"
            title="Discord"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 text-white/50 hover:border-[var(--ac)] hover:text-[var(--ac)] transition-all duration-200"
          >
            <FaDiscord size={16} />
          </a>

          {/* Theme Toggler */}
          <button
            onClick={toggleTheme}
            title="Change Theme Color"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 text-white/50 hover:border-[var(--ac)] hover:text-[var(--ac)] transition-all duration-200"
          >
            <SlidersHorizontal size={15} />
          </button>
        </div>
      </nav>

      {/* spacer so tape sits below fixed nav */}
      <div style={{ height: "64px" }} />

      {/* ── TAPE ────────────────────────────────────────────── */}
      <div
        style={{
          width: "110vw",
          marginLeft: "-5vw",
          transform: "rotate(-1.5deg)",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          style={{
            height: "50px",
            background: "#ffd000",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Stripe layer (behind text) */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "repeating-linear-gradient(-55deg, transparent, transparent 24px, rgba(0,0,0,0.15) 24px, rgba(0,0,0,0.15) 40px)",
              zIndex: 1,
            }}
          />
          {/* Text layer (above stripes) */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              zIndex: 2,
              overflow: "hidden",
            }}
          >
            <div
              className="animate-tape"
              style={{ display: "flex", alignItems: "center", whiteSpace: "nowrap", width: "200%" }}
            >
              {[0, 1].map((n) => (
                <span
                  key={n}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 800,
                    fontSize: "0.72rem",
                    letterSpacing: "0.32em",
                    color: "#000000",
                    whiteSpace: "nowrap",
                    userSelect: "none",
                  }}
                >
                  {topTape.repeat(30)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="min-h-[calc(100vh-50px)] flex flex-col justify-center pt-16 pb-16 px-6 md:px-12 lg:px-20 relative overflow-hidden">

        {/* faint radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 70% 60%, rgba(var(--ac-rgb), 0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          {/* Main Layout Container: Profile & Label on Left, Title, Text & Button Grid on Right */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 lg:gap-20 mt-6 pb-12">

            {/* Left Column (Robot) */}
            <div className="flex-1 lg:max-w-[480px] w-full flex flex-col gap-6">

              {/* TEMPORARY CUTE ROBOT (NO BOX, FULL SIZE) */}
              <div
                {...reveal("hero-img", 0.15)}
                className="w-full group cursor-default flex items-center justify-center relative"
                style={{ aspectRatio: "1/1", overflow: "visible" }}
              >
                <style>{`
                  @keyframes wave-hand {
                    0%, 100% { transform: rotate(0deg); }
                    25% { transform: rotate(35deg); }
                    75% { transform: rotate(-20deg); }
                  }
                  @keyframes hover-bot {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                  }
                  @keyframes blink-eyes {
                    0%, 96%, 100% { transform: scaleY(1); }
                    98% { transform: scaleY(0.1); }
                  }
                  @keyframes status-pulse {
                    0%, 100% { opacity: 1; box-shadow: 0 0 0 0 var(--ac); }
                    50% { opacity: 0.6; box-shadow: 0 0 8px 3px var(--ac); }
                  }
                  @keyframes shimmer-border {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                  }
                `}</style>

                {/* ── Everything floats together ── */}
                <div className="w-full h-full flex flex-col items-center justify-center relative" style={{ animation: 'hover-bot 5s ease-in-out infinite' }}>

                  {/* ── Speech Bubble (synced with robot float) ──
                      TEMPORARILY HIDDEN PER REQUEST
                  <div
                    className="absolute z-30 pointer-events-none"
                    style={{
                      top: '-16px',
                      right: '-36px',
                    }}
                  >
                    <div
                      className="absolute -inset-[1px] rounded-[23px] opacity-60"
                      style={{
                        background: 'linear-gradient(135deg, var(--ac), rgba(var(--ac-rgb), 0.1), var(--ac), rgba(var(--ac-rgb), 0.1))',
                        backgroundSize: '300% 300%',
                        animation: 'shimmer-border 4s ease infinite',
                        filter: 'blur(1px)',
                        transition: 'background 0.5s ease',
                      }}
                    />
                    <div
                      className="relative w-[220px] sm:w-[240px] px-5 py-3.5 rounded-[22px]"
                      style={{
                        background: 'rgba(8, 8, 12, 0.82)',
                        backdropFilter: 'blur(24px) saturate(1.8)',
                        WebkitBackdropFilter: 'blur(24px) saturate(1.8)',
                        border: '1px solid rgba(var(--ac-rgb), 0.25)',
                        boxShadow: '0 0 30px rgba(var(--ac-rgb), 0.12), 0 0 60px rgba(var(--ac-rgb), 0.06), 0 12px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
                        transition: 'border-color 0.5s ease, box-shadow 0.5s ease',
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className="w-[7px] h-[7px] rounded-full flex-shrink-0"
                          style={{
                            background: 'var(--ac)',
                            animation: 'status-pulse 2.5s ease-in-out infinite',
                            transition: 'background 0.5s ease',
                          }}
                        />
                        <span
                          className="text-[10px] font-semibold tracking-[0.2em] uppercase"
                          style={{ color: 'var(--ac)', transition: 'color 0.5s ease' }}
                        >
                          Building
                        </span>
                      </div>

                      <p
                        className="text-[13px] sm:text-sm font-medium leading-relaxed text-white/85"
                        style={{
                          opacity: bubbleVisible ? 1 : 0,
                          transform: bubbleVisible ? 'translateY(0)' : 'translateY(4px)',
                          transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                          minHeight: '42px',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        {BUBBLE_MESSAGES[bubbleIndex]}
                      </p>
                    </div>

                    <div
                      className="absolute"
                      style={{
                        bottom: '-8px',
                        left: '28px',
                        width: 0,
                        height: 0,
                        borderLeft: '10px solid transparent',
                        borderRight: '10px solid transparent',
                        borderTop: '10px solid rgba(8, 8, 12, 0.82)',
                        filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.4))',
                      }}
                    />
                  </div>
                  */}

                  {/* ── Lottie Animation ── */}
                  {/* 
                     👇 TO CHANGE SIZE: Change 'scale-110' to 'scale-90' or 'scale-150', or change 'w-[125%]' to a different width.
                     👇 TO CHANGE POSITION: Add 'translate-x-[-20px]' or 'translate-y-[10px]' to the className.
                  */}
                  <div
                    className="w-[100%] h-[100%] transition-all duration-500 scale-120"
                    style={{
                      filter: 'drop-shadow(0 20px 30px rgba(var(--ac-rgb),0.3))',
                      overflow: 'visible',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      // transform: 'translate(0px, 0px)' // 👈 You can also change X and Y position here
                    }}
                  >
                    <Lottie lottieRef={lottieRef} animationData={animationData} loop={true} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (Ankur Studio Title, Description, and Buttons Grid) */}
            <div
              {...reveal("hero-content", 0.3)}
              className="flex-1 flex flex-col justify-start w-full lg:pt-0 lg:ml-12 xl:ml-24"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-[-0.03em] text-white leading-none mb-6" style={{ fontFamily: "'Avenir Next Cyr', sans-serif" }}>
                Ankur <span className="text-[var(--ac)]">Studio</span>
              </h1>

              <p className="text-white/60 text-sm md:text-base lg:text-lg leading-relaxed mb-8 max-w-[640px]">
                Stuff I've designed, things I've built, and projects I'm still figuring out. Welcome to my digital studio (you can also give ideas on my insta)
              </p>

              {/* Two buttons in one line (2-column grid) */}
              <div className="grid grid-cols-2 gap-4 w-full max-w-[720px]">
                {/* Button 1: View Designs */}
                <button
                  onClick={() => scrollTo("gallery")}
                  className="group/btn flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-[var(--ac)]/40 hover:shadow-[0_0_25px_rgba(var(--ac-rgb),0.2)] transition-all duration-300 text-left cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/[0.03] border border-white/5 text-[var(--ac)] group-hover/btn:scale-110 transition-transform duration-300">
                    <Palette size={18} />
                  </div>
                  <div>
                    <span className="block text-xs md:text-sm font-bold tracking-[0.05em] uppercase text-white">Creative Posters</span>
                    <span className="block text-[10px] md:text-xs text-white/30 font-medium group-hover/btn:text-white/50 transition-colors">Design Gallery</span>
                  </div>
                </button>

                {/* Button 2: Portfolio */}
                <button
                  /* PASTE YOUR PORTFOLIO LINK HERE, REPLACING THE URL IN QUOTES */
                  onClick={() => window.open("https://portfolio-ankurr.netlify.app", "_blank")}
                  className="group/btn flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-[var(--ac)]/40 hover:shadow-[0_0_25px_rgba(var(--ac-rgb),0.2)] transition-all duration-300 text-left cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/[0.03] border border-white/5 text-[var(--ac)] group-hover/btn:scale-110 transition-transform duration-300">
                    <Hammer size={18} />
                  </div>
                  <div>
                    <span className="block text-xs md:text-sm font-bold tracking-[0.05em] uppercase text-white">Portfolio</span>
                    <span className="block text-[10px] md:text-xs text-white/30 font-medium group-hover/btn:text-white/50 transition-colors">Portfolio 2026</span>
                  </div>
                </button>

                {/* Button 3: Websites */}
                <button
                  onClick={() => scrollTo("websites")}
                  className="group/btn flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-[var(--ac)]/40 hover:shadow-[0_0_25px_rgba(var(--ac-rgb),0.2)] transition-all duration-300 text-left cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/[0.03] border border-white/5 text-[var(--ac)] group-hover/btn:scale-110 transition-transform duration-300">
                    <Globe size={18} />
                  </div>
                  <div>
                    <span className="block text-xs md:text-sm font-bold tracking-[0.05em] uppercase text-white">Websites</span>
                    <span className="block text-[10px] md:text-xs text-white/30 font-medium group-hover/btn:text-white/50 transition-colors">Interactive Websites</span>
                  </div>
                </button>

                {/* Button 4: Applications */}
                <button
                  onClick={() => scrollTo("building")}
                  className="group/btn flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-[var(--ac)]/40 hover:shadow-[0_0_25px_rgba(var(--ac-rgb),0.2)] transition-all duration-300 text-left cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/[0.03] border border-white/5 text-[var(--ac)] group-hover/btn:scale-110 transition-transform duration-300">
                    <Gamepad2 size={18} />
                  </div>
                  <div>
                    <span className="block text-xs md:text-sm font-bold tracking-[0.05em] uppercase text-white">Applications</span>
                    <span className="block text-[10px] md:text-xs text-white/30 font-medium group-hover/btn:text-white/50 transition-colors">Software & Tools</span>
                  </div>
                </button>

                {/* Button 4: Music Player */}
                <button
                  onClick={() => setLocation("/music-player")}
                  className="group/btn flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-[var(--ac)]/40 hover:shadow-[0_0_25px_rgba(var(--ac-rgb),0.2)] transition-all duration-300 text-left cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/[0.03] border border-white/5 text-[var(--ac)] group-hover/btn:scale-110 transition-transform duration-300">
                    <Music size={18} />
                  </div>
                  <div>
                    <span className="block text-xs md:text-sm font-bold tracking-[0.05em] uppercase text-white">Music Player</span>
                    <span className="block text-[10px] md:text-xs text-white/30 font-medium group-hover/btn:text-white/50 transition-colors">Play and Build</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── CTA TAPE (Straight & Fancy) ───────────────────────── */}
        <div
          {...reveal("tape-cta", 0.75)}
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100vw",
            zIndex: 10,
          }}
        >
          <div
            style={{
              height: "46px",
              background: "#ffd000",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Stripe layer (behind text) */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "repeating-linear-gradient(-55deg, transparent, transparent 24px, rgba(0,0,0,0.15) 24px, rgba(0,0,0,0.15) 40px)",
                zIndex: 1,
              }}
            />
            {/* Text layer (above stripes) */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                zIndex: 2,
                overflow: "hidden",
              }}
            >
              <div
                className="animate-tape"
                style={{
                  display: "flex",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                  width: "200%",
                }}
              >
                {[0, 1].map((n) => (
                  <span
                    key={n}
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      letterSpacing: "0.15em",
                      color: "#000",
                      whiteSpace: "nowrap",
                      userSelect: "none",
                    }}
                  >
                    {bottomTape.repeat(20)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ─────────────────────────────────────────── */}
      <section
        id="gallery"
        className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20 py-24 scroll-mt-20"
      >
        {/* section header */}
        <div
          {...reveal("gallery-head", 0)}
          className="flex items-end justify-between mb-12 pb-5 border-b border-white/[0.08]"
        >
          <div>
            <p className="text-[11px] font-medium tracking-[0.25em] text-[var(--ac)] uppercase mb-2">
              Selected Works
            </p>
            <h2 className="text-4xl sm:text-5xl font-800 font-extrabold tracking-tight text-white">
              Poster Archive
            </h2>
          </div>
          <p className="text-sm text-white/30 font-medium hidden sm:block">
            {galleryItems.length} pieces
          </p>
        </div>

        {/* Gallery container wrapper with max-height cutoff */}
        <div className="relative">
          <div
            style={{
              maxHeight: isExpanded ? "15000px" : "640px",
              overflow: isExpanded ? "visible" : "hidden",
              transition: "max-height 2s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* masonry */}
            <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-3">
              {galleryItems.map((item, i) => (
                <div
                  key={item.id}
                  className="break-inside-avoid mb-3 group cursor-pointer"
                  style={{
                    opacity: visible.has("gallery-head") ? 1 : 0,
                    transform: visible.has("gallery-head")
                      ? "translateY(0)"
                      : "translateY(20px)",
                    transition: `opacity 0.5s ease ${Math.min(i * 0.03, 0.6)}s, transform 0.5s ease ${Math.min(i * 0.03, 0.6)}s`,
                  }}
                >
                  <div
                    className="relative overflow-hidden"
                    style={{
                      aspectRatio: `${item.width} / ${item.height}`,
                      background: "#0d0d0d",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "4px",
                      transition: "border-color 0.25s ease, box-shadow 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(var(--ac-rgb), 0.5)";
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "var(--ac-glow)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(255,255,255,0.06)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    {/*
                      ── POSTER IMAGE ─────────────────────────────────
                      Drop your image into:
                        artifacts/ankur-studio/public/images/
    
                      File name must match the `imagePath` in data.ts.
                      Examples:
                        500-days.jpg
                        orchid-3.jpg
                        weeknd-old-7.jpg
    
                      No code change needed — just add the file and reload.
                      ──────────────────────────────────────────────── */}
                    <img
                      src={item.imagePath}
                      alt={item.name}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                      className="transition-transform duration-700 ease-out group-hover:scale-[1.03] will-change-transform"
                    />

                    {/* placeholder — shown when no image file exists yet */}
                    <div
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                      style={{ zIndex: 0 }}
                    >
                      <div
                        style={{
                          width: 1,
                          height: "40%",
                          background:
                            "linear-gradient(to bottom, transparent, rgba(var(--ac-rgb),0.25), transparent)",
                        }}
                      />
                    </div>

                    {/* hover overlay — title + dimensions */}
                    <div
                      className="absolute inset-0 flex flex-col items-end justify-end p-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ zIndex: 2 }}
                    >
                      <div
                        style={{
                          background: "rgba(0,0,0,0.72)",
                          backdropFilter: "blur(6px)",
                          borderRadius: "3px",
                          padding: "4px 8px",
                        }}
                      >
                        <p className="text-[9px] font-semibold tracking-[0.18em] text-white uppercase">
                          {item.name}
                        </p>
                        <p className="text-[8px] tracking-wider text-white/40 mt-0.5">
                          {item.width} × {item.height}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fade Mask & View More Button overlay */}
          <div
            className={`absolute bottom-0 left-0 right-0 h-48 flex items-end justify-center pointer-events-none transition-opacity duration-1000 ${isExpanded ? 'opacity-0' : 'opacity-100'}`}
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(5,5,5,0.7) 30%, #050505 100%)",
              zIndex: 20,
            }}
          >
            <button
              onClick={() => setIsExpanded(true)}
              className={`pointer-events-auto px-8 py-3.5 mb-2 text-xs md:text-sm font-semibold tracking-[0.15em] uppercase text-white rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[var(--ac)]/50 hover:shadow-[0_0_20px_rgba(var(--ac-rgb),0.2)] transition-all duration-300 backdrop-blur-md flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95 ${isExpanded ? 'pointer-events-none' : ''}`}
            >
              View More Posters
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>

          {/* Hide Posters Button */}
          <div className={`flex justify-center w-full mt-10 mb-4 pointer-events-none relative z-20 transition-all duration-1000 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button
              onClick={() => {
                setIsExpanded(false);
                setTimeout(() => scrollTo("gallery"), 50);
              }}
              className={`pointer-events-auto px-8 py-3.5 text-xs md:text-sm font-semibold tracking-[0.15em] uppercase text-white rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[var(--ac)]/50 hover:shadow-[0_0_20px_rgba(var(--ac-rgb),0.2)] transition-all duration-300 backdrop-blur-md flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95 ${!isExpanded ? 'pointer-events-none' : ''}`}
            >
              Hide Posters
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce" style={{ animationDirection: 'reverse' }}>
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── BUILDING ────────────────────────────────────────── */}
      <section
        id="building"
        className="px-6 md:px-12 lg:px-20 py-32 scroll-mt-20"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div
          {...reveal("build-head", 0)}
          className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
        >
          {/* Left: Heading */}
          <div className="lg:col-span-4">
            <p className="text-[11px] font-medium tracking-[0.25em] text-[var(--ac)] uppercase mb-4">
              App Development
            </p>
            <h2 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-extrabold tracking-[-0.03em] text-white leading-[0.95]">
              Building
              <br />
              <span className="white-text-stroke">Projects</span>
            </h2>
          </div>

          {/* Middle: Interlocking Gears Animation */}
          <div className="lg:col-span-3 flex justify-center items-center lg:px-4 h-full min-h-[140px]">
            <div
              className="relative w-32 h-32 flex items-center justify-center origin-center"
              style={{ transform: "scale(1.65)" }}
            >
              {/* Main large gear */}
              <div
                className="absolute text-[var(--ac)] animate-[spin_8s_linear_infinite]"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(var(--ac-rgb), 0.6))",
                  top: "12px",
                  left: "16px"
                }}
              >
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>

              {/* Secondary smaller gear */}
              <div
                className="absolute text-white animate-[spin_6s_linear_infinite_reverse]"
                style={{
                  opacity: 0.5,
                  top: "66px",
                  left: "64px"
                }}
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>

              {/* Tertiary tiny gear */}
              <div
                className="absolute text-[var(--ac)] animate-[spin_4s_linear_infinite]"
                style={{
                  filter: "drop-shadow(0 0 4px rgba(var(--ac-rgb), 0.4))",
                  opacity: 0.8,
                  top: "22px",
                  left: "74px"
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Apps List */}
          <div className="lg:col-span-5 w-full flex flex-col gap-4">

            {/* App 1: Raksha Setu */}
            <div 
              onClick={() => setLocation("/raksha-setu")}
              className="group flex items-center gap-5 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:border-[rgba(var(--ac-rgb),0.3)] cursor-pointer"
            >
              {/* App Icon Box */}
              <div
                className="w-16 h-16 shrink-0 rounded-2xl overflow-hidden relative shadow-lg"
                style={{
                  border: "1px solid rgba(var(--ac-rgb), 0.4)",
                  boxShadow: "0 0 35px 5px rgba(var(--ac-rgb), 0.55)",
                }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/raksha-setu.png`}
                  alt="Raksha Setu"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback gradient if image not found
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                    e.currentTarget.parentElement!.style.background = "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)";
                  }}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>Raksha Setu</h3>
                <p className="text-sm text-white/40 mt-1 font-medium">Safety & Emergency App</p>
              </div>
              <button
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:text-[var(--ac)] group-hover:border-[var(--ac)] transition-colors pointer-events-none"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>

            {/* App 2: Task Enforcer */}
            <div 
              onClick={() => alert("I will update this soon :)")}
              className="group flex items-center gap-5 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:border-[rgba(var(--ac-rgb),0.3)] cursor-pointer"
            >
              {/* App Icon Box */}
              <div
                className="w-16 h-16 shrink-0 rounded-2xl overflow-hidden relative shadow-lg"
                style={{
                  border: "1px solid rgba(var(--ac-rgb), 0.4)",
                  boxShadow: "0 0 35px 5px rgba(var(--ac-rgb), 0.55)",
                }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/task-enforcer.png`}
                  alt="Task Enforcer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback gradient if image not found
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                    e.currentTarget.parentElement!.style.background = "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)";
                  }}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>Task Enforcer</h3>
                <p className="text-sm text-white/40 mt-1 font-medium">Productivity & Alarms</p>
              </div>
              <button
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:text-[var(--ac)] group-hover:border-[var(--ac)] transition-colors pointer-events-none"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ── SEPARATOR TAPE ──────────────────────────────────── */}
      <div style={{ width: "100vw", zIndex: 10, position: "relative" }}>
        <div style={{ height: "46px", background: "#ffd000", position: "relative", overflow: "hidden" }}>
          {/* Stripe layer */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(-55deg, transparent, transparent 24px, rgba(0,0,0,0.15) 24px, rgba(0,0,0,0.15) 40px)", zIndex: 1 }} />
          {/* Text layer */}
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", zIndex: 2, overflow: "hidden" }}>
            <div className="animate-tape" style={{ display: "flex", alignItems: "center", whiteSpace: "nowrap", width: "200%" }}>
              {[0, 1].map((n) => (
                <span key={n} style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.15em", color: "#000", whiteSpace: "nowrap", userSelect: "none" }}>
                  {"  BUILDING THINGS  ·  ".repeat(20)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── BUILDING WEBSITES ─────────────────────────────── */}
      <section
        id="websites"
        className="px-6 md:px-12 lg:px-20 py-32 scroll-mt-20"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div
          {...reveal("websites-head", 0)}
          className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
        >
          {/* Left: Heading */}
          <div className="lg:col-span-4">
            <p className="text-[11px] font-medium tracking-[0.25em] text-[var(--ac)] uppercase mb-4">
              Web Development
            </p>
            <h2 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-extrabold tracking-[-0.03em] text-white leading-[0.95]">
              Building
              <br />
              <span className="white-text-stroke">Websites</span>
            </h2>
          </div>

          {/* Middle: Browser Animation */}
          <div className="lg:col-span-3 flex justify-center items-center lg:px-4 h-full min-h-[140px]">
            <div className="relative w-40 h-28 rounded-lg border border-[var(--ac)] bg-[#050505] shadow-[0_0_25px_rgba(var(--ac-rgb),0.25)]" style={{ animation: "hover-bot 4s ease-in-out infinite" }}>
              {/* Browser Top Bar */}
              <div className="w-full h-5 border-b border-[var(--ac)]/30 flex items-center gap-1.5 px-2 bg-white/[0.02]">
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
              </div>
              {/* Browser Content */}
              <div className="p-3 flex flex-col gap-2">
                <div className="w-1/2 h-2 rounded bg-[var(--ac)]/60 animate-pulse"></div>
                <div className="w-full h-2 rounded bg-white/10"></div>
                <div className="w-3/4 h-2 rounded bg-white/10"></div>
                <div className="flex gap-2 mt-1">
                  <div className="w-8 h-8 rounded bg-[var(--ac)]/20"></div>
                  <div className="flex-1 rounded bg-white/5"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Websites List */}
          <div className="lg:col-span-5 w-full flex flex-col gap-4">

            {/* Website 1: Prompts Station */}
            <div 
              onClick={() => window.open("https://promptstationn.netlify.app/", "_blank")}
              className="group flex items-center gap-5 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:border-[rgba(var(--ac-rgb),0.3)] cursor-pointer"
            >
              {/* App Icon Box */}
              <div
                className="w-16 h-16 shrink-0 rounded-2xl overflow-hidden relative shadow-lg"
                style={{
                  border: "1px solid rgba(var(--ac-rgb), 0.4)",
                  boxShadow: "0 0 35px 5px rgba(var(--ac-rgb), 0.55)",
                }}
              >
                {/* INSTRUCTIONS: Drop 'prompts-station.png' in your public/images folder */}
                <img
                  src={`${import.meta.env.BASE_URL}images/prompts-station.png`}
                  alt="Prompts Station"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                    e.currentTarget.parentElement!.style.background = "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)";
                  }}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>Prompts Station</h3>
                <p className="text-sm text-white/40 mt-1 font-medium">AI Tools & Prompts</p>
              </div>
              <button
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:text-[var(--ac)] group-hover:border-[var(--ac)] transition-colors pointer-events-none"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>

            {/* Website 2 */}
            <div 
              onClick={() => alert("Website 2 coming soon!")}
              className="group flex items-center gap-5 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:border-[rgba(var(--ac-rgb),0.3)] cursor-pointer"
            >
              {/* App Icon Box */}
              <div
                className="w-16 h-16 shrink-0 rounded-2xl overflow-hidden relative shadow-lg"
                style={{
                  border: "1px solid rgba(var(--ac-rgb), 0.4)",
                  boxShadow: "0 0 35px 5px rgba(var(--ac-rgb), 0.55)",
                }}
              >
                {/* INSTRUCTIONS: Drop 'website-2.png' in your public/images folder */}
                <img
                  src={`${import.meta.env.BASE_URL}images/website-2.png`}
                  alt="Website 2"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                    e.currentTarget.parentElement!.style.background = "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)";
                  }}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>Website 2</h3>
                <p className="text-sm text-white/40 mt-1 font-medium">Coming Soon</p>
              </div>
              <button
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:text-[var(--ac)] group-hover:border-[var(--ac)] transition-colors pointer-events-none"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer
        className="px-6 md:px-12 lg:px-20 py-8"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-[1500px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/40">
            Ankur Studio
          </p>

          <p className="text-[11px] text-white/25 tracking-wider">
            © 2026 Ankur Studio · Designed &amp; Built by Ankur
          </p>
        </div>
      </footer>
    </div>
  );
}
