import { useState, useEffect } from "react";
import { Instagram, SlidersHorizontal } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { getGalleryItems } from "@/lib/data";

const THEMES = ["purple", "blue", "pink", "emerald"] as const;
type Theme = typeof THEMES[number];

export default function Portfolio() {
  const [theme, setTheme] = useState<Theme>("purple");
  const [visible, setVisible] = useState<Set<string>>(new Set());
  const galleryItems = getGalleryItems();

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

  const tape = "  DESIGNS BY ANKUR  ·  ";

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
                  {tape.repeat(30)}
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
          {/* top label row */}
          <div
            {...reveal("hero-label", 0)}
            className="flex items-center gap-4 mb-10"
          >
            <span className="w-8 h-px bg-[var(--ac)]" />
            <span className="text-xs font-medium tracking-[0.25em] text-[var(--ac)] uppercase">
              Creative Designs
            </span>
          </div>

          {/* main headline + image */}
          <div className="flex flex-col lg:flex-row lg:items-end gap-12 lg:gap-20">

            {/* words stack */}
            <div className="flex-1">
              {["LOVE", "CREATING", "LEARNING", "BUILDING", "MAKING"].map(
                (word, i) => (
                  <div
                    key={word}
                    style={{
                      opacity: visible.has("hero-words") ? 1 : 0,
                      transform: visible.has("hero-words")
                        ? "translateY(0)"
                        : "translateY(32px)",
                      transition: `opacity 0.7s ease ${0.1 + i * 0.08}s, transform 0.7s ease ${0.1 + i * 0.08}s`,
                      fontSize: "clamp(2.9rem, 7.5vw, 8.3rem)",
                      lineHeight: 0.92,
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      color: i % 2 === 0 ? "white" : "var(--ac)",
                    }}
                    id={i === 0 ? "hero-words" : undefined}
                    data-reveal={i === 0 ? true : undefined}
                  >
                    {word}
                  </div>
                )
              )}
            </div>

            {/* profile image */}
            <div
              {...reveal("hero-img", 0.35)}
              className="lg:w-[480px] xl:w-[540px] shrink-0 mx-auto lg:mx-0 mt-8 lg:mt-0 group cursor-default"
            >
              <div
                className="relative w-full overflow-hidden rounded-md transition-all duration-500"
                style={{
                  aspectRatio: "1/1",
                  border: "1px solid rgba(var(--ac-rgb), 0.35)",
                  boxShadow: "var(--ac-glow)",
                }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/profile-square.jpg`}
                  alt="Ankur"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] will-change-transform"
                  style={{ filter: "contrast(1.1) brightness(0.9)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 40%)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* divider + CTA */}
          <div
            {...reveal("hero-cta", 0.55)}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-16 pb-12"
          >
            <button
              onClick={() => scrollTo("gallery")}
              className="px-8 py-3.5 text-sm font-semibold tracking-[0.12em] uppercase text-black ac-bg rounded transition-all duration-200 hover:opacity-90"
              style={{ boxShadow: "var(--ac-glow)" }}
            >
              View Designs
            </button>
            <button
              onClick={() => scrollTo("building")}
              className="px-8 py-3.5 text-sm font-semibold tracking-[0.12em] uppercase text-white rounded border border-white/20 hover:border-[var(--ac)] hover:text-[var(--ac)] transition-all duration-200"
            >
              Building Projects
            </button>
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
                    {tape.repeat(20)}
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
              Development
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
            <div className="group flex items-center gap-5 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:border-[rgba(var(--ac-rgb),0.3)]">
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
                onClick={() => alert("I will update this soon :)")}
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:text-[var(--ac)] group-hover:border-[var(--ac)] transition-colors cursor-pointer"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>

            {/* App 2: Task Enforcer */}
            <div className="group flex items-center gap-5 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:border-[rgba(var(--ac-rgb),0.3)]">
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
                onClick={() => alert("I will update this soon :)")}
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:text-[var(--ac)] group-hover:border-[var(--ac)] transition-colors cursor-pointer"
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
