"use client";
import { useEffect, useState } from "react";

const ROLES = [
  "QA Engineer",
  "WordPress Developer",
  "Bug Hunter",
  "Web Craftsman",
];

export default function HeroSection() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  useEffect(() => {
    const cur = ROLES[idx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && text.length < cur.length)
      t = setTimeout(() => setText(cur.slice(0, text.length + 1)), 80);
    else if (!deleting && text.length === cur.length)
      t = setTimeout(() => setDeleting(true), 2200);
    else if (deleting && text.length > 0)
      t = setTimeout(() => setText(text.slice(0, -1)), 45);
    else {
      setDeleting(false);
      setIdx((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center
                 px-4 sm:px-10 md:px-20 lg:px-28"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-64 md:w-96 h-64 md:h-96 rounded-full bg-[var(--teal)] opacity-[0.03] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-48 md:w-64 h-48 md:h-64 rounded-full bg-[var(--teal)] opacity-[0.04] blur-[80px] pointer-events-none" />

      <div
        className={`w-full max-w-3xl transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6 animate-fade-up">
          <span className="w-6 sm:w-8 h-px bg-[var(--teal)]" />
          <span
            className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-[var(--teal)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Portfolio
          </span>
        </div>

        {/* Main heading */}
        <h1
          className="animate-fade-up delay-1 mb-5 leading-tight"
          style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
        >
          <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[var(--text-1)]">
            Hello,
          </span>
          <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl italic text-[var(--teal)] mt-1">
            I'm Mughis.
          </span>
        </h1>

        {/* Role typewriter */}
        <div className="animate-fade-up delay-2 flex items-center gap-3 mb-6 h-7">
          <span className="w-4 sm:w-5 h-px bg-[var(--text-3)]" />
          <p
            className="text-base sm:text-lg font-medium text-[var(--text-2)] tracking-wide"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {text}
            <span className="ml-0.5 inline-block w-0.5 h-5 bg-[var(--teal)] align-middle animate-pulse" />
          </p>
        </div>

        {/* Description */}
        <p
          className="animate-fade-up delay-3 text-sm sm:text-base md:text-lg text-[var(--text-3)] leading-relaxed max-w-xl mb-8 sm:mb-12"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          I ensure every digital product works flawlessly — in terms of both
          quality and construction.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-4 flex flex-wrap gap-3">
          <button
            onClick={() =>
              document
                .getElementById("experience")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-sm border border-[var(--teal)] text-[var(--teal)]
                       text-sm font-medium tracking-wide hover:bg-[var(--teal-glow)] transition-all duration-200"
            style={{ fontFamily: "var(--font-body)" }}
          >
            View my work →
          </button>
          <button
            onClick={() =>
              document
                .getElementById("skills")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-sm border border-[var(--border)] text-[var(--text-2)]
                       text-sm font-medium tracking-wide hover:border-[var(--border-h)] hover:text-[var(--text-1)] transition-all duration-200"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Skills
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-up delay-5 mt-12 sm:mt-20 flex items-center gap-3 text-[var(--text-3)]">
          <div className="flex flex-col gap-1">
            <span className="w-4 h-px bg-[var(--text-3)]" />
            <span className="w-6 h-px bg-[var(--text-3)]" />
          </div>
          <span
            className="text-xs tracking-[0.25em] uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
