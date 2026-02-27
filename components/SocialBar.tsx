"use client";

import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi"


const LINKS = [
  { label: "GitHub",    href: "https://github.com/mughisqarratal",       icon: <FiGithub size={16} /> },
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/cutqarratalmughis/",  icon: <FiLinkedin size={16} /> },
  { label: "Instagram", href: "https://www.instagram.com/mughis.tjoet",    icon: <FiInstagram size={16} /> },
  { label: "Email",     href: "mailto:cutqarratalmughis@gmail.com",             icon: <FiMail size={16} /> },
];

export default function SocialBar() {
  return (
    <div className="fixed left-5 bottom-0 z-50 flex flex-col items-center gap-2">
      {LINKS.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target={l.href.startsWith("mailto") ? "_self" : "_blank"}
          rel="noopener noreferrer"
          aria-label={l.label}
          className="group relative w-10 h-10 rounded-sm flex items-center justify-center
                     border-2 border-[var(--border)] bg-[var(--bg-2)]/80 text-[var(--text-3)]
                     hover:border-[var(--teal)] hover:text-[var(--teal)] hover:bg-[var(--teal-glow)]
                     transition-all duration-300"
        >
          {/* Tooltip kanan */}
          <span className="absolute left-12 px-3 py-1.5 text-xs font-medium tracking-wide whitespace-nowrap
                           bg-[var(--bg-2)] border border-[var(--border-h)] text-[var(--text-1)]
                           opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200
                           rounded-sm backdrop-blur-sm"
            style={{ fontFamily: "var(--font-body)" }}>
            {l.label}
          </span>

          {l.icon ? (
            l.icon
          ) : (
            <span className="w-2 h-2 rounded-full bg-[var(--text-3)] group-hover:bg-[var(--teal)] transition-colors" />
          )}
        </a>
      ))}

      {/* Garis vertikal ke bawah */}
      <div className="w-px h-14 bg-gradient-to-b from-[var(--teal-dim)] to-transparent opacity-60" />
    </div>
  );
}