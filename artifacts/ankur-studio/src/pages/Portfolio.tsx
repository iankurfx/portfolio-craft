import { useState, useEffect, useRef } from "react";
import { Instagram, Disc, Palette, Diamond } from "lucide-react";
import { getGalleryItems } from "@/lib/data";

function useIntersectionObserver(options = {}) {
  const [elements, setElements] = useState<Element[]>([]);
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (elements.length) {
      observer.current = new IntersectionObserver((observedEntries) => {
        setEntries(observedEntries);
      }, options);

      elements.forEach((element) => observer.current?.observe(element));
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [elements, options]);

  return [setElements, entries] as const;
}

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".observe-me").forEach((el) => {
      el.classList.add("opacity-0");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div data-theme={theme} className="min-h-screen bg-black text-white transition-colors duration-500 ease-in-out font-sans overflow-x-hidden">
      
      {/* HEADER */}
      <header className="relative w-full pt-12 pb-6 px-6 sm:px-12 flex flex-col items-center justify-center z-10">
        <div className="absolute inset-0 bg-noise z-0"></div>
        
        <div className="w-full flex justify-end absolute top-6 right-6 sm:right-12 z-20 gap-3">
          <a
            href="#"
            className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center gap-2 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
          >
            <Instagram size={16} />
            <span className="text-xs font-bold uppercase tracking-wider hidden sm:block">Instagram</span>
          </a>
          <a
            href="#"
            className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center gap-2 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
          >
            <Disc size={16} />
            <span className="text-xs font-bold uppercase tracking-wider hidden sm:block">Discord</span>
          </a>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center gap-2 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
          >
            <Palette size={16} />
          </button>
        </div>

        <div className="relative w-full text-center mt-12 sm:mt-4 pointer-events-none z-10 select-none">
          {/* Shadowed outline version */}
          <h1 className="font-display text-[15vw] leading-none text-stroke-outline opacity-30 absolute top-2 left-0 right-0">
            ANKUR STUDIO
          </h1>
          {/* Main solid version */}
          <h1 className="font-display text-[15vw] leading-none text-white relative">
            ANKUR STUDIO
          </h1>
        </div>
      </header>

      {/* CRIME SCENE TAPE */}
      <div className="relative mt-8 mb-24 w-[110vw] -ml-[5vw] overflow-hidden -rotate-[3deg] h-[80px] bg-[#ffd000] shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_20px,rgba(0,0,0,0.9)_20px,rgba(0,0,0,0.9)_40px)]"></div>
        <div className="absolute inset-0 flex items-center whitespace-nowrap animate-tape-scroll w-[200%]">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="text-black bg-[#ffd000] font-sans font-black text-3xl tracking-[0.3em] px-4 shrink-0 shadow-sm mix-blend-screen">
              DESIGNS BY ANKUR &bull; DESIGNS BY ANKUR &bull;
            </span>
          ))}
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-12 mb-32 relative observe-me">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--accent)_0%,transparent_50%)] opacity-[0.07] pointer-events-none z-0"></div>
        
        <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="w-full lg:w-[60%] flex flex-col items-start font-display text-[clamp(4rem,10vw,10rem)] leading-[0.85] uppercase tracking-wide">
            <span className="text-white">LOVE</span>
            <span className="text-[var(--accent)] drop-shadow-[0_0_20px_var(--accent)]">CREATING</span>
            <span className="text-white">LEARNING</span>
            <span className="text-[var(--accent)] drop-shadow-[0_0_20px_var(--accent)]">BUILDING</span>
            <span className="text-white">MAKING</span>
          </div>

          <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-[500px] aspect-[3/4] p-[2px] overflow-hidden group">
              {/* Glitchy border effect container */}
              <div className="absolute inset-0 border-2 border-dashed border-[var(--accent)] opacity-50"></div>
              <div className="absolute inset-0 border-2 border-dashed border-white opacity-20 [animation:glow-pulse_2s_infinite]"></div>
              
              <div className="w-full h-full relative bg-[#050505] overflow-hidden z-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/20 to-transparent mix-blend-screen z-20"></div>
                <img 
                  src={`${import.meta.env.BASE_URL}images/hero-photo.png`} 
                  alt="Creative Director" 
                  className="w-full h-full object-cover grayscale-[30%] contrast-125 hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <p className="mt-6 font-sans font-bold text-sm tracking-[0.4em] text-white/60 uppercase">
              Creative Director @ Ankur Studio
            </p>
          </div>
        </div>
      </section>

      {/* NAV BUTTONS */}
      <section className="max-w-7xl mx-auto px-6 mb-40 flex flex-col sm:flex-row justify-center gap-6 observe-me">
        <button 
          onClick={() => scrollToSection('gallery')}
          className="h-[72px] flex-1 sm:max-w-md bg-[var(--accent)] text-black font-sans font-bold text-2xl tracking-widest hover:brightness-110 transition-all shadow-[0_0_30px_var(--accent)] flex items-center justify-center"
        >
          DESIGNS &rarr;
        </button>
        <button 
          onClick={() => scrollToSection('building')}
          className="h-[72px] flex-1 sm:max-w-md bg-transparent border-2 border-[var(--accent)] text-white font-sans font-bold text-2xl tracking-widest hover:bg-[var(--accent)]/10 transition-all shadow-[inset_0_0_20px_rgba(var(--accent-rgb),0.2),0_0_20px_rgba(var(--accent-rgb),0.2)] flex items-center justify-center"
        >
          BUILDING &rarr;
        </button>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="max-w-[1600px] mx-auto px-6 mb-40 scroll-mt-32">
        <div className="mb-16 observe-me">
          <div className="flex flex-wrap items-end gap-6 mb-6">
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl text-stroke-outline">POSTER</h2>
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl text-white">ARCHIVE</h2>
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-[var(--accent)] via-[var(--accent)] to-transparent shadow-[0_0_10px_var(--accent)]"></div>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id} 
              className="break-inside-avoid bg-[#000] border border-[var(--accent)] rounded-lg overflow-hidden group cursor-pointer observe-me relative"
              style={{ animationDelay: `${(index % 10) * 0.1}s` }}
            >
              <div 
                className="w-full relative bg-[#0a0a0a] overflow-hidden transition-all duration-300 group-hover:shadow-[0_0_20px_var(--accent)]"
                style={{ aspectRatio: `${item.width} / ${item.height}` }}
              >
                {/* Scanline animation on hover */}
                <div className="absolute left-0 right-0 h-[2px] bg-[var(--accent)] shadow-[0_0_10px_var(--accent)] opacity-0 group-hover:opacity-100 group-hover:animate-scanline z-20"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10 text-[var(--accent)] opacity-60 group-hover:opacity-100 transition-opacity">
                  <Diamond size={32} className="group-hover:scale-125 transition-transform duration-500" />
                  <span className="font-sans font-bold text-xs tracking-widest uppercase text-center px-4">{item.name}</span>
                </div>
              </div>
              
              <div className="p-4 bg-black flex justify-between items-center relative z-30">
                <h3 className="font-sans font-bold text-white text-xs uppercase tracking-wider truncate mr-4">
                  {item.name}
                </h3>
                <p className="font-sans text-white/40 text-[10px] tracking-widest whitespace-nowrap">
                  {item.width}x{item.height}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BUILDING SECTION */}
      <section id="building" className="max-w-[1600px] mx-auto px-6 mb-40 scroll-mt-32 observe-me">
        <div className="w-full min-h-[60vh] border border-white/10 relative flex flex-col items-center justify-center p-12 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--accent)_0%,transparent_30%)] opacity-5 pointer-events-none"></div>
          
          <div className="text-center z-10 flex flex-col gap-4 mb-12">
            <h2 className="font-display text-5xl sm:text-7xl md:text-9xl tracking-[0.3em] text-stroke-outline">
              COMING
            </h2>
            <h2 className="font-display text-5xl sm:text-7xl md:text-9xl tracking-[0.3em] text-white ml-4">
              SOON
            </h2>
          </div>
          
          <p className="font-sans text-white/50 tracking-widest text-sm uppercase max-w-md text-center mb-16 z-10">
            Digital tools, experiments, and applications crafted with precision.
          </p>

          <div className="w-full max-w-lg h-[1px] bg-white/20 relative z-10">
            <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)] [animation:dot-move_3s_ease-in-out_infinite_alternate]"></div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-white/10 bg-black pt-8 pb-8 relative z-10 mt-auto">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-[var(--accent)] opacity-50 shadow-[0_0_10px_var(--accent)]"></div>
        <div className="max-w-[1600px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-2xl text-white tracking-widest">
            ANKUR STUDIO
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/50 hover:text-[var(--accent)] transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-white/50 hover:text-[var(--accent)] transition-colors">
              <Disc size={20} />
            </a>
          </div>

          <div className="font-sans text-white/30 text-xs tracking-widest uppercase">
            &copy; 2026 Ankur Studio
          </div>
        </div>
      </footer>
    </div>
  );
}
