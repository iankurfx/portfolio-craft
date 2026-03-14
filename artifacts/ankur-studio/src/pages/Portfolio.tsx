import { useState, useEffect } from "react";
import { Instagram, Disc, Palette } from "lucide-react";
import { getGalleryItems } from "@/lib/data";

export default function Portfolio() {
  const [theme, setTheme] = useState<"purple" | "blue">("purple");
  const galleryItems = getGalleryItems();

  const toggleTheme = () => {
    setTheme((prev) => (prev === "purple" ? "blue" : "purple"));
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div data-theme={theme} className="min-h-screen transition-colors duration-500 ease-in-out">
      
      {/* HEADER */}
      <header className="relative w-full pt-12 pb-6 px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between z-10">
        <div className="w-full text-center sm:absolute sm:inset-0 sm:pointer-events-none sm:flex sm:items-center sm:justify-center mt-4 sm:mt-0">
          <h1 className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl tracking-[0.2em] text-white text-shadow-glow-hover uppercase pointer-events-auto cursor-default">
            Ankur Studio
          </h1>
        </div>
        
        <div className="hidden sm:block" /> {/* Spacer for flex layout */}
        
        <div className="flex items-center gap-4 mt-8 sm:mt-0 z-20">
          <a
            href="#"
            className="w-12 h-12 rounded-full glass-panel flex items-center justify-center neon-border text-white hover:scale-110 transition-transform"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full glass-panel flex items-center justify-center neon-border text-white hover:scale-110 transition-transform"
            aria-label="Discord"
          >
            <Disc size={20} />
          </a>
          <button
            onClick={toggleTheme}
            className="w-12 h-12 rounded-full glass-panel flex items-center justify-center neon-border text-white hover:scale-110 transition-transform"
            aria-label="Toggle Theme"
            title="Toggle Theme"
          >
            <Palette size={20} />
          </button>
        </div>
      </header>

      {/* CRIME SCENE TAPE */}
      <div className="relative mt-12 mb-24 w-[110vw] -ml-[5vw] overflow-hidden -rotate-2 h-[60px] crime-scene-tape shadow-2xl z-0">
        <div className="absolute inset-0 bg-[#ffd000]/90 mix-blend-overlay"></div>
        <div className="absolute inset-0 flex items-center whitespace-nowrap animate-scroll w-[200%]">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="text-black font-sans font-black text-2xl tracking-widest px-4 shrink-0">
              DESIGNS BY ANKUR &bull; DESIGNS BY ANKUR &bull; DESIGNS BY ANKUR &bull; DESIGNS BY ANKUR &bull;
            </span>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO ID CARD */}
        <section className="flex justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="w-full max-w-[900px] glass-panel neon-border rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center gap-12 group">
            
            {/* Left: Typography stack */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="font-display text-[4rem] sm:text-[5rem] lg:text-[6rem] leading-[0.85] text-white opacity-90 drop-shadow-md flex flex-col">
                <span className="hover:text-[var(--accent-color)] transition-colors duration-300">LOVE</span>
                <span className="hover:text-[var(--accent-color)] transition-colors duration-300">CREATING</span>
                <span className="hover:text-[var(--accent-color)] transition-colors duration-300">LEARNING</span>
                <span className="hover:text-[var(--accent-color)] transition-colors duration-300">BUILDING</span>
                <span className="hover:text-[var(--accent-color)] transition-colors duration-300 text-[var(--accent-color)]">MAKING</span>
              </div>
            </div>

            {/* Right: ID Photo */}
            <div className="shrink-0 relative">
              <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] rounded-xl overflow-hidden neon-border group-hover:scale-105 transition-transform duration-500 bg-[#1a1a1a] relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[var(--accent-color)]/10 to-transparent opacity-50 z-10 mix-blend-screen pointer-events-none"></div>
                <img 
                  src={`${import.meta.env.BASE_URL}images/hero-photo.png`} 
                  alt="Ankur Studio Profile" 
                  className="w-full h-full object-cover grayscale-[20%] contrast-125"
                />
                <div className="absolute bottom-4 left-0 w-full text-center z-20">
                  <span className="bg-black/80 backdrop-blur-sm text-white/70 font-sans text-xs tracking-widest px-3 py-1 rounded-full border border-white/10 uppercase">
                    [ ID: ANKUR-X99 ]
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NAVIGATION BUTTONS */}
        <section className="flex flex-col sm:flex-row justify-center gap-6 mb-32 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <button 
            onClick={() => scrollToSection('gallery')}
            className="bg-[#111] px-12 py-5 rounded-xl neon-border-intense font-sans font-bold text-xl tracking-wider text-white hover:scale-105 transition-all duration-300 flex-1 sm:flex-none max-w-xs"
          >
            DESIGNS
          </button>
          <button 
            onClick={() => scrollToSection('building')}
            className="bg-[#111] px-12 py-5 rounded-xl neon-border-intense font-sans font-bold text-xl tracking-wider text-white hover:scale-105 transition-all duration-300 flex-1 sm:flex-none max-w-xs"
          >
            BUILDING
          </button>
        </section>

        {/* GALLERY SECTION */}
        <section id="gallery" className="mb-32 scroll-mt-32">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl sm:text-7xl text-[var(--accent-color)] tracking-wider text-shadow-glow">GALLERY</h2>
            <div className="h-1 w-24 mx-auto mt-6 bg-[var(--accent-color)] rounded-full shadow-[var(--accent-glow)]"></div>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
            {galleryItems.map((item, index) => (
              <div 
                key={item.id} 
                className="break-inside-avoid glass-panel rounded-xl overflow-hidden neon-border group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${(index % 10) * 0.05}s` }}
              >
                {/* Image Placeholder maintaining exact aspect ratio */}
                <div 
                  className="w-full relative bg-[#151515] overflow-hidden"
                  style={{ aspectRatio: `${item.width} / ${item.height}` }}
                >
                  {/* Subtle shimmer effect background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#222] to-[#1a1a1a]"></div>
                  
                  {/* Neon overlay on hover */}
                  <div className="absolute inset-0 bg-[var(--accent-color)]/0 group-hover:bg-[var(--accent-color)]/20 transition-colors duration-500 mix-blend-overlay"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 backdrop-blur-sm bg-black/40">
                    <span className="font-sans font-bold tracking-widest text-[var(--accent-color)] text-sm uppercase">VIEW POSTER</span>
                  </div>
                </div>
                
                {/* Card Footer */}
                <div className="p-4 border-t border-white/5 relative z-20 bg-[#0a0a0a]">
                  <h3 className="font-sans font-bold text-white uppercase tracking-wider text-sm truncate">
                    {item.name}
                  </h3>
                  <p className="font-sans text-muted-foreground text-xs mt-1">
                    {item.width} &times; {item.height} px
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BUILDING SECTION */}
        <section id="building" className="mb-32 scroll-mt-32 py-24 glass-panel rounded-3xl neon-border relative overflow-hidden text-center px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--accent-color)_0%,transparent_50%)] opacity-10 pointer-events-none"></div>
          
          <h2 className="font-display text-4xl sm:text-6xl text-[var(--accent-color)] tracking-wider mb-6 text-shadow-glow">BUILDING PROJECTS</h2>
          <p className="font-sans text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
            Apps, experiments, and digital tools created by Ankur will appear here soon.
          </p>
          
          <div className="mt-12 inline-flex items-center justify-center w-24 h-24 rounded-full border border-white/10 animate-pulse bg-white/5">
            <span className="text-white/30 font-sans tracking-widest text-xs">SOON</span>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#050505] py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-sans font-bold text-white tracking-widest">&copy; 2026 ANKUR STUDIO</p>
            <p className="font-sans text-muted-foreground text-sm mt-2">Designed and Built by Ankur</p>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-colors text-white/70">
              <Instagram size={16} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-colors text-white/70">
              <Disc size={16} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
