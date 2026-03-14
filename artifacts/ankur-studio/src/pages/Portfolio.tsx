import { useState, useEffect } from "react";
import { Instagram, Disc3, SlidersHorizontal } from "lucide-react";
import { getGalleryItems } from "@/lib/data";

export default function Portfolio() {
  const [theme, setTheme] = useState<"purple" | "blue">("purple");
  const [visible, setVisible] = useState<Set<string>>(new Set());
  const galleryItems = getGalleryItems();

  const toggleTheme = () =>
    setTheme((p) => (p === "purple" ? "blue" : "purple"));

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
          <a
            href="#"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 text-white/50 hover:border-[var(--ac)] hover:text-[var(--ac)] transition-all duration-200"
          >
            <Instagram size={15} />
          </a>
          <a
            href="#"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 text-white/50 hover:border-[var(--ac)] hover:text-[var(--ac)] transition-all duration-200"
          >
            <Disc3 size={15} />
          </a>
          <button
            onClick={toggleTheme}
            title="Toggle theme"
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
              Creative Designer · Poster Artist
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
                      fontSize: "clamp(3.2rem, 8.5vw, 9rem)",
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
              className="lg:w-[340px] xl:w-[400px] shrink-0"
            >
              <div
                className="relative w-full overflow-hidden"
                style={{
                  aspectRatio: "3/4",
                  border: "1px solid rgba(var(--ac-rgb), 0.35)",
                  boxShadow: "var(--ac-glow)",
                }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/hero-photo.png`}
                  alt="Ankur"
                  className="w-full h-full object-cover"
                  style={{ filter: "contrast(1.1) brightness(0.9)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 40%)",
                  }}
                />
                <div className="absolute bottom-4 left-4">
                  <p className="text-[10px] font-medium tracking-[0.22em] text-white/50 uppercase">
                    Creative Director
                  </p>
                  <p className="text-xs font-semibold tracking-[0.15em] text-white uppercase mt-0.5">
                    Ankur Studio
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* divider + CTA */}
          <div
            {...reveal("hero-cta", 0.55)}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-16"
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
                    transition: "transform 0.4s ease",
                  }}
                  className="group-hover:scale-105"
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
          className="max-w-[1500px] mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10"
        >
          <div>
            <p className="text-[11px] font-medium tracking-[0.25em] text-[var(--ac)] uppercase mb-4">
              In Progress
            </p>
            <h2 className="text-5xl sm:text-7xl font-extrabold tracking-[-0.03em] text-white leading-none">
              Building
              <br />
              <span className="white-text-stroke">Projects</span>
            </h2>
          </div>

          <div className="lg:max-w-sm">
            <p className="text-base text-white/40 leading-relaxed">
              Apps, experiments and digital tools created by Ankur will appear
              here soon.
            </p>

            {/* progress bar */}
            <div className="mt-8 relative h-px bg-white/10 w-full overflow-hidden">
              <div
                className="dot-slide absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                style={{
                  background: "var(--ac)",
                  boxShadow: "var(--ac-glow)",
                }}
              />
            </div>
            <p className="text-[10px] tracking-[0.2em] text-white/20 uppercase mt-2">
              Coming soon
            </p>
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

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-8 h-8 rounded-full flex items-center justify-center border border-white/10 text-white/30 hover:border-[var(--ac)] hover:text-[var(--ac)] transition-all duration-200"
            >
              <Instagram size={13} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full flex items-center justify-center border border-white/10 text-white/30 hover:border-[var(--ac)] hover:text-[var(--ac)] transition-all duration-200"
            >
              <Disc3 size={13} />
            </a>
          </div>

          <p className="text-[11px] text-white/25 tracking-wider">
            © 2026 Ankur Studio · Designed &amp; Built by Ankur
          </p>
        </div>
      </footer>
    </div>
  );
}
