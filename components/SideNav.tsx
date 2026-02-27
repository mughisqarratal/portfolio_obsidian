"use client";
import { useState, useEffect } from "react";
import { Home, Briefcase, FolderOpen, GraduationCap, Award, Wrench } from "lucide-react"

const NAV_ITEMS = [
  { id: "hero",          label: "Home",          icon: <Home size={16} /> },
  { id: "experience",    label: "Experience",    icon: <Briefcase size={16} /> },
  // { id: "projects",      label: "Projects",      icon: <FolderOpen size={16} /> },
  { id: "education",     label: "Education",     icon: <GraduationCap size={16} /> },
  { id: "certification", label: "Certification", icon: <Award size={16} /> },
  { id: "skills",        label: "Skills",        icon: <Wrench size={16} /> },
];

export default function SideNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <nav className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-1.5">
      {/* Garis atas */}
      <div className="w-px h-10 bg-gradient-to-b from-transparent to-[var(--teal-dim)] mb-1" />

      {NAV_ITEMS.map((item) => (
        <div key={item.id} className="group relative flex items-center justify-end">
          {/* Tooltip label */}
          <span className="absolute right-12 px-3 py-1.5 text-xs font-medium tracking-wide whitespace-nowrap
                           bg-[var(--bg-2)] border border-[var(--border-h)] text-[var(--text-1)]
                           opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200
                           rounded-sm backdrop-blur-sm"
            style={{ fontFamily: "var(--font-body)" }}>
            {item.label}
          </span>

          {/* Tombol ikon */}
          <button
            onClick={() => scrollTo(item.id)}
            aria-label={item.label}
            className={`
              w-10 h-10 flex items-center justify-center border-2 transition-all duration-300 relative rounded-sm
              ${active === item.id
                ? "border-[var(--teal)] bg-[var(--teal-glow)] text-[var(--teal)] shadow-[0_0_14px_var(--teal-glow)]"
                : "border-[var(--border)] bg-[var(--bg-2)]/80 text-[var(--text-3)] hover:border-[var(--border-h)] hover:text-[var(--teal-dim)] hover:bg-[var(--teal-glow)]"
              }
            `}
          >
            {/* Active right bar */}
            {active === item.id && (
              <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-1 h-5 bg-[var(--teal)] rounded-full shadow-[0_0_6px_var(--teal)]" />
            )}

            {item.icon ? (
              item.icon
            ) : (
              <span className={`w-2 h-2 rounded-full transition-all ${
                active === item.id
                  ? "bg-[var(--teal)] shadow-[0_0_6px_var(--teal)]"
                  : "bg-[var(--text-3)]"
              }`} />
            )}
          </button>
        </div>
      ))}

      {/* Garis bawah */}
      <div className="w-px h-10 bg-gradient-to-b from-[var(--teal-dim)] to-transparent mt-1" />
    </nav>
  );
}