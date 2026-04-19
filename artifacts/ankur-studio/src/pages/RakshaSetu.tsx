import { useEffect } from "react";
import img1 from "@assets/1_1776541800724.jpg";
import img2 from "@assets/2_1776541805347.jpg";
import img3 from "@assets/3_1776541809962.jpg";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── shared tokens ───────────────────────────────────────────────────────── */
const TAG: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 7,
  borderRadius: 20,
  padding: "5px 14px",
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  width: "fit-content",
  marginBottom: 4,
};

const BULLET = (color: string) => ({
  width: 6,
  height: 6,
  borderRadius: "50%",
  background: color,
  marginTop: 9,
  flexShrink: 0,
} as React.CSSProperties);

const BULLET_ROW: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: 11,
  fontSize: 14,
  color: "#c1c9d8",
  lineHeight: 1.65,
};

/* ─── image panel — fills the full column, image centred inside ───────────── */
function ImagePanel({
  src,
  alt,
  accent,
  overlay,
  flip = false,
}: {
  src: string;
  alt: string;
  accent: string;
  overlay?: React.ReactNode;
  flip?: boolean;
}) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: flip
          ? `radial-gradient(ellipse at 60% 50%, ${accent}18 0%, transparent 70%)`
          : `radial-gradient(ellipse at 40% 50%, ${accent}18 0%, transparent 70%)`,
        padding: "40px 24px",
        minHeight: "100%",
      }}
    >
      <div style={{ position: "relative", display: "inline-block" }}>
        <img
          src={src}
          alt={alt}
          style={{
            width: "min(380px, 90%)",
            display: "block",
            objectFit: "contain",
            filter: `drop-shadow(0 8px 60px ${accent}30)`,
          }}
        />
        {overlay}
      </div>
    </div>
  );
}

/* ─── text panel ─────────────────────────────────────────────────────────── */
function TextPanel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="reveal"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 22,
        padding: "60px 56px 60px 52px",
        justifyContent: "center",
        minHeight: "100%",
      }}
    >
      {children}
    </div>
  );
}

function BtnPrimary({
  children,
  bg,
}: {
  children: string;
  bg: string;
}) {
  return (
    <button
      style={{
        padding: "13px 30px",
        borderRadius: 10,
        background: bg,
        border: "none",
        color: "#fff",
        fontFamily: "inherit",
        fontWeight: 700,
        fontSize: 13.5,
        cursor: "pointer",
        letterSpacing: "0.01em",
      }}
    >
      {children}
    </button>
  );
}

function BtnOutline({
  children,
  color,
}: {
  children: string;
  color: string;
}) {
  return (
    <button
      style={{
        padding: "13px 30px",
        borderRadius: 10,
        background: "transparent",
        border: `1.5px solid ${color}55`,
        color,
        fontFamily: "inherit",
        fontWeight: 600,
        fontSize: 13.5,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

/* ─── SECTION 1 ─────────────────────────────────────────────────────────── */
function Section1() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        background: "#090509",
      }}
    >
      {/* LEFT — image */}
      <div
        className="reveal"
        style={{
          background:
            "linear-gradient(135deg,#130409 0%,#0e0308 60%,#090509 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px 8px",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "relative", display: "inline-block", width: "100%", maxWidth: 560, padding: "0 12px" }}>
          <img
            src={img1}
            alt="Raksha Setu SOS"
            style={{
              width: "100%",
              display: "block",
              objectFit: "contain",
              filter: "drop-shadow(0 8px 60px rgba(220,38,38,0.3))",
            }}
          />
          {/* arrow pointing to volume button */}
          <div
            className="reveal"
            style={{
              position: "absolute",
              left: "-4%",
              top: "35%",
              display: "flex",
              alignItems: "center",
              gap: 8,
              pointerEvents: "none",
              zIndex: 10,
            }}
          >
            <div style={{
              background: "rgba(239, 68, 68, 0.12)",
              border: "1px solid rgba(239, 68, 68, 0.3)",
              color: "#fca5a5",
              padding: "6px 12px",
              borderRadius: 8,
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              boxShadow: "0 4px 12px rgba(239, 68, 68, 0.15)",
              backdropFilter: "blur(4px)"
            }}>
              Hold Volume
            </div>
            <svg
              width="28"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ filter: "drop-shadow(0 0 8px rgba(239,68,68,0.5))" }}
            >
              <path d="M3 12h16" />
              <path d="m14 5 7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* RIGHT — text */}
      <TextPanel>
        {/* tag */}
        <div
          style={{
            ...TAG,
            background: "rgba(239,68,68,0.1)",
            border: "1px solid rgba(239,68,68,0.3)",
            color: "#f87171",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#ef4444",
              display: "inline-block",
            }}
          />
          Emergency SOS
        </div>

        <h1
          style={{
            fontSize: "clamp(2rem,3.8vw,3.4rem)",
            fontWeight: 800,
            lineHeight: 1.13,
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          Emergency Help,{" "}
          <span
            style={{
              background: "linear-gradient(90deg,#ef4444,#f97316)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Instantly.
          </span>
        </h1>

        <p
          style={{
            fontSize: 15,
            lineHeight: 1.75,
            color: "#8899aa",
            margin: 0,
            maxWidth: 460,
          }}
        >
          Raksha Setu sends your live GPS location to all emergency contacts the
          moment SOS is pressed — no unlocking, no typing, no delay.
        </p>

        {/* callout */}
        <div
          style={{
            background: "rgba(239,68,68,0.07)",
            border: "1px solid rgba(239,68,68,0.3)",
            borderRadius: 12,
            padding: "15px 20px",
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: 10,
              background: "rgba(239,68,68,0.16)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <div>
            <p style={{ fontWeight: 700, fontSize: 13.5, color: "#fff", margin: 0 }}>
              Volume Down → Hold 7 Seconds
            </p>
            <p style={{ fontSize: 12.5, color: "#fca5a5", margin: "3px 0 0" }}>
              Hardware shortcut triggers SOS without opening the app
            </p>
          </div>
        </div>

        {/* bullets */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            "Live GPS location sent to all emergency contacts instantly",
            "Works when you cannot make a call or unlock your phone",
            "Built for harassment, danger, and medical emergencies",
            "Designed for women's safety, family safety, and solo travel",
          ].map((t) => (
            <div key={t} style={BULLET_ROW}>
              <span style={BULLET("#ef4444")} />
              {t}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <BtnPrimary bg="linear-gradient(135deg,#dc2626,#991b1b)">
            See How It Works
          </BtnPrimary>
          <BtnOutline color="#f87171">Stay Protected</BtnOutline>
        </div>
      </TextPanel>
    </section>
  );
}

/* ─── SECTION 2 ─────────────────────────────────────────────────────────── */
function Section2() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        background: "#050b10",
      }}
    >
      {/* LEFT — text */}
      <TextPanel>
        <div
          style={{
            ...TAG,
            background: "rgba(56,189,248,0.1)",
            border: "1px solid rgba(56,189,248,0.25)",
            color: "#7dd3fc",
          }}
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#7dd3fc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          Safety Network
        </div>

        <h2
          style={{
            fontSize: "clamp(2rem,3.8vw,3.4rem)",
            fontWeight: 800,
            lineHeight: 1.13,
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          Your Trusted{" "}
          <span
            style={{
              background: "linear-gradient(90deg,#38bdf8,#34d399)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Emergency Contacts.
          </span>
        </h2>

        <p
          style={{
            fontSize: 15,
            lineHeight: 1.75,
            color: "#8899aa",
            margin: 0,
            maxWidth: 460,
          }}
        >
          Build a trusted safety network before danger strikes. Family, friends,
          neighbours — they all receive your live location and an alert the
          moment SOS is triggered.
        </p>

        <div
          style={{
            background: "rgba(56,189,248,0.07)",
            border: "1px solid rgba(56,189,248,0.2)",
            borderRadius: 12,
            padding: "13px 18px",
          }}
        >
          <p
            style={{
              fontSize: 13.5,
              fontWeight: 600,
              color: "#7dd3fc",
              margin: 0,
              fontStyle: "italic",
            }}
          >
            "Your safety network should be ready before danger happens."
          </p>
        </div>

        {/* 2-col grid of contact types */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 10,
          }}
        >
          {[
            { e: "👨‍👩‍👧", l: "Family Members" },
            { e: "👫", l: "Friends" },
            { e: "🏘️", l: "Neighbours" },
            { e: "🤝", l: "Trusted People" },
            { e: "📱", l: "Quick Access List" },
            { e: "🔔", l: "Instant Alerts" },
          ].map((c) => (
            <div
              key={c.l}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(56,189,248,0.1)",
                borderRadius: 10,
                padding: "10px 14px",
              }}
            >
              <span style={{ fontSize: 18 }}>{c.e}</span>
              <span style={{ fontSize: 12.5, fontWeight: 500, color: "#94a3b8" }}>
                {c.l}
              </span>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <BtnPrimary bg="linear-gradient(135deg,#0369a1,#1e40af)">
            Set Up Safety Network
          </BtnPrimary>
          <BtnOutline color="#7dd3fc">Add Contacts</BtnOutline>
        </div>
      </TextPanel>

      {/* RIGHT — image */}
      <div
        className="reveal"
        style={{
          background:
            "linear-gradient(135deg,#050b10 0%,#071220 60%,#050b10 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px 8px",
          overflow: "hidden",
        }}
      >
        <img
          src={img2}
          alt="Emergency Contacts"
          style={{
            width: "100%",
            maxWidth: 560,
            display: "block",
            objectFit: "contain",
            padding: "0 12px",
            filter: "drop-shadow(0 8px 60px rgba(56,189,248,0.2))",
          }}
        />
      </div>
    </section>
  );
}

/* ─── SECTION 3 ─────────────────────────────────────────────────────────── */
function Section3() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        background: "#07050f",
      }}
    >
      {/* LEFT — image */}
      <div
        className="reveal"
        style={{
          background:
            "linear-gradient(135deg,#0c0816 0%,#090612 60%,#07050f 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px 8px",
          overflow: "hidden",
        }}
      >
        <img
          src={img3}
          alt="High Alert Mode"
          style={{
            width: "100%",
            maxWidth: 560,
            display: "block",
            objectFit: "contain",
            padding: "0 12px",
            filter: "drop-shadow(0 8px 60px rgba(168,85,247,0.25))",
          }}
        />
      </div>

      {/* RIGHT — text */}
      <TextPanel>
        <div
          style={{
            ...TAG,
            background: "rgba(168,85,247,0.1)",
            border: "1px solid rgba(168,85,247,0.25)",
            color: "#c084fc",
          }}
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="23" />
            <line x1="8" y1="23" x2="16" y2="23" />
          </svg>
          High Alert Mode
        </div>

        <h2
          style={{
            fontSize: "clamp(2rem,3.8vw,3.4rem)",
            fontWeight: 800,
            lineHeight: 1.13,
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          Just Say the Word.{" "}
          <span
            style={{
              background: "linear-gradient(90deg,#a855f7,#ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SOS Activates.
          </span>
        </h2>

        <p
          style={{
            fontSize: 15,
            lineHeight: 1.75,
            color: "#8899aa",
            margin: 0,
            maxWidth: 460,
          }}
        >
          Enable High Alert Mode and Raksha Setu listens for your voice. Say{" "}
          <strong style={{ color: "#e2e8f0", fontWeight: 600 }}>
            "Emergency help"
          </strong>{" "}
          and SOS triggers automatically — even if your phone is locked or out
          of reach.
        </p>

        {/* voice callout */}
        <div
          style={{
            background: "rgba(168,85,247,0.07)",
            border: "1px solid rgba(168,85,247,0.3)",
            borderRadius: 12,
            padding: "15px 20px",
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: 10,
              background: "rgba(168,85,247,0.16)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            </svg>
          </div>
          <div>
            <p style={{ fontWeight: 700, fontSize: 13.5, color: "#fff", margin: 0 }}>
              Say "Emergency help"
            </p>
            <p style={{ fontSize: 12.5, color: "#d8b4fe", margin: "3px 0 0" }}>
              Voice trigger sends location to all emergency contacts immediately
            </p>
          </div>
        </div>

        {/* bullets */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            "Hands-free protection — no need to touch your phone",
            "Works even when the screen is locked or switched off",
            "Activated silently — ideal when you cannot speak loudly",
            "Built for critical moments when every second counts",
          ].map((t) => (
            <div key={t} style={BULLET_ROW}>
              <span style={BULLET("#a855f7")} />
              {t}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <BtnPrimary bg="linear-gradient(135deg,#7c3aed,#9d174d)">
            Enable High Alert Mode
          </BtnPrimary>
          <BtnOutline color="#c084fc">Activate Voice Protection</BtnOutline>
        </div>
      </TextPanel>
    </section>
  );
}

/* ─── SECTION 4 ─────────────────────────────────────────────────────────── */
const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    color: "#ef4444",
    bg: "rgba(239,68,68,0.08)",
    border: "rgba(239,68,68,0.2)",
    title: "Fake Call Feature",
    desc: "Trigger a realistic fake incoming call to escape uncomfortable or dangerous situations without raising suspicion.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
    color: "#a855f7",
    bg: "rgba(168,85,247,0.08)",
    border: "rgba(168,85,247,0.2)",
    title: "Voice-Trigger SOS",
    desc: 'Say "Emergency help" and SOS fires instantly — even when your phone is locked or completely out of reach.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    color: "#f97316",
    bg: "rgba(249,115,22,0.08)",
    border: "rgba(249,115,22,0.2)",
    title: "Volume Button SOS",
    desc: "Hold the volume down button for 7 seconds. SOS triggers instantly — no unlock, no app, no delay.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    color: "#38bdf8",
    bg: "rgba(56,189,248,0.08)",
    border: "rgba(56,189,248,0.2)",
    title: "Live Location Sharing",
    desc: "Share your real-time GPS location instantly with trusted contacts — essential for travel, late nights, or unknown areas.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    color: "#34d399",
    bg: "rgba(52,211,153,0.08)",
    border: "rgba(52,211,153,0.2)",
    title: "Area Safety Check",
    desc: "Scan the safety level of nearby areas using live insights. Choose safer routes and avoid high-risk zones before you step out.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.2)",
    title: "Nearby Safe Places",
    desc: "Instantly find nearby cafes, restaurants, and public spaces with safety ratings — your closest refuge in an emergency.",
  },
];

function Section4() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "linear-gradient(160deg,#07050f 0%,#060810 50%,#08060d 100%)",
        padding: "80px 60px",
      }}
    >
      {/* Header */}
      <div className="reveal" style={{ textAlign: "center", marginBottom: 56 }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "rgba(239,68,68,0.1)",
          border: "1px solid rgba(239,68,68,0.3)",
          borderRadius: 20,
          padding: "5px 16px",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.12em",
          color: "#f87171",
          textTransform: "uppercase",
          marginBottom: 22,
        }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#ef4444", display: "inline-block" }} />
          Advanced Safety Features
        </div>

        <h2 style={{
          fontSize: "clamp(1.9rem,3.5vw,3.1rem)",
          fontWeight: 800,
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          marginBottom: 16,
        }}>
          Advanced Safety Features for{" "}
          <span style={{
            background: "linear-gradient(90deg,#ef4444,#f97316)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Complete Protection
          </span>
        </h2>

        <p style={{
          fontSize: 15.5,
          color: "#8899aa",
          maxWidth: 560,
          margin: "0 auto",
          lineHeight: 1.7,
        }}>
          Raksha Setu goes beyond SOS with smart tools designed to keep you safe in every situation.
        </p>
      </div>

      {/* Cards grid */}
      <div
        className="reveal"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
        }}
      >
        {FEATURES.map((f) => (
          <div
            key={f.title}
            style={{
              background: f.bg,
              border: `1px solid ${f.border}`,
              borderRadius: 16,
              padding: "28px 26px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-5px)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 40px ${f.border}`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
            }}
          >
            {/* icon */}
            <div style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: `${f.bg}`,
              border: `1px solid ${f.border}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: f.color,
              flexShrink: 0,
            }}>
              {f.icon}
            </div>

            <h3 style={{ fontSize: 15.5, fontWeight: 700, color: "#f1f5f9", margin: 0 }}>
              {f.title}
            </h3>

            <p style={{ fontSize: 13.5, color: "#7a8fa8", lineHeight: 1.68, margin: 0 }}>
              {f.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Footer line + CTA */}
      <div className="reveal" style={{ textAlign: "center", marginTop: 56 }}>
        <p style={{
          fontSize: 17,
          fontWeight: 700,
          color: "#e2e8f0",
          marginBottom: 28,
          letterSpacing: "-0.01em",
        }}>
          Your safety is not just a feature —{" "}
          <span style={{
            background: "linear-gradient(90deg,#ef4444,#f97316)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            it's a system.
          </span>
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => alert("Publishing soon!")}
            style={{
              padding: "14px 36px",
              borderRadius: 10,
              background: "linear-gradient(135deg,#dc2626,#991b1b)",
              border: "none",
              color: "#fff",
              fontFamily: "inherit",
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
              letterSpacing: "0.01em",
            }}>
            Download Raksha Setu
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── ROOT ───────────────────────────────────────────────────────────────── */
export default function Home() {
  useReveal();
  return (
    <>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0;}
        html,body{font-family:'Poppins',sans-serif;background:#07080f;color:#fff;scroll-behavior:smooth;overflow-x:hidden;}
        .reveal{opacity:0;transform:translateY(28px);transition:opacity .7s ease,transform .7s ease;}
        .reveal.visible{opacity:1;transform:none;}
        @media(max-width:860px){
          section{grid-template-columns:1fr!important;}
          section>div:first-child{min-height:50vh;}
        }
        @media(max-width:700px){
          .feat-grid{grid-template-columns:1fr!important;}
        }
      `}</style>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
}
