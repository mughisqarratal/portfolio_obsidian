import SectionHeader from "./SectionHeader";


// const QA_SKILLS = [
//   { name: "Manual Testing", level: 92 },
//   { name: "Cypress / Selenium", level: 80 },
//   { name: "API Testing (Postman)", level: 85 },
//   { name: "Jira / Bug Tracking", level: 90 },
//   { name: "Test Case Design", level: 88 },
//   { name: "Regression Testing", level: 85 },
// ];

// const WP_SKILLS = [
//   { name: "WordPress / Elementor", level: 90 },
//   { name: "Custom Theme Dev", level: 82 },
//   { name: "Plugin Development", level: 75 },
//   { name: "WooCommerce", level: 80 },
//   { name: "PHP / MySQL", level: 72 },
//   { name: "SEO & Performance", level: 78 },
// ];

const TOOLS_Technology = [
  "Jira",
  "WordPress",
  "Git / GitHub",
  "Postman",
  "Selenium",
  "Elementor",
  "PHP",
  "Python",
  "MySQL", 
  "Machine Learning",
  "Laragon",
  "Next.js",
  "React",
  "Tailwind CSS",
];
const QA_SKILLS = [
  "Manual Testing",
  "Test Case Creation",
  "Bug Reporting",
  "App Release Approval",
  "Selenium",
  "Postman",
  "Jira",
  "Git / GitHub",
];
const TOOLS_WP = [
  "HTML/CSS",
  "Elementor",
  "PHP",
  "MySQL",
  "WooCommerce",
  "LiteSpeed Cache",
  "Yoast SEO",
  "Site Kit",
  "WP Forms",
];

// function Bar({ name, level }: { name: string; level: number }) {
//   return (
//     <div>
//       <div className="flex justify-between items-center mb-1.5">
//         <span
//           className="text-xs sm:text-sm text-[var(--text-2)]"
//           style={{ fontFamily: "var(--font-body)" }}
//         >
//           {name}
//         </span>
//         <span
//           className="text-xs text-[var(--text-3)]"
//           style={{ fontFamily: "var(--font-body)" }}
//         >
//           {level}%
//         </span>
//       </div>
//       <div className="h-1 rounded-full bg-[var(--bg-3)] overflow-hidden">
//         <div
//           className="h-full rounded-full bg-gradient-to-r from-[var(--teal-dim)] to-[var(--teal)]"
//           style={{ width: `${level}%` }}
//         />
//       </div>
//     </div>
//   );
// }

export default function SkillSection() {
  return (
    <section
      id="skills"
      className="py-12 md:py-24 px-4 sm:px-8 md:px-20 lg:px-28"
    >
      <div className="w-full max-w-5xl">
        <SectionHeader
          tag=""
          title="Skills"
          subtitle="A collection of technical skills that I have mastered and continue to hone."
        />

        {/* Dual column — stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-10 mb-8 sm:mb-14">
          <div className="bg-[var(--bg-2)] border border-[var(--border)] rounded-sm p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-5 sm:mb-7">
              <span
                className="px-2.5 py-1 text-xs font-medium tracking-widest uppercase
                               border border-emerald-800 text-emerald-400 rounded-sm"
                style={{ fontFamily: "var(--font-body)" }}
              >
                QA
              </span>
              <h3
                className="text-sm sm:text-base font-semibold text-[var(--text-1)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                QA & Testing
              </h3>
            </div>
            <div className="space-y-4 sm:space-y-5">
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {QA_SKILLS.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs border border-[var(--border)]
                           text-[var(--text-3)] hover:border-[var(--teal)] hover:text-[var(--teal)]
                           transition-all duration-200 rounded-sm"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[var(--bg-2)] border border-[var(--border)] rounded-sm p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-5 sm:mb-7">
              <span
                className="px-2.5 py-1 text-xs font-medium tracking-widest uppercase
                               border border-purple-800 text-purple-400 rounded-sm"
                style={{ fontFamily: "var(--font-body)" }}
              >
                WP
              </span>
              <h3
                className="text-sm sm:text-base font-semibold text-[var(--text-1)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                WordPress Dev
              </h3>
            </div>
            <div className="space-y-4 sm:space-y-5">
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {TOOLS_WP.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs border border-[var(--border)]
                           text-[var(--text-3)] hover:border-[var(--teal)] hover:text-[var(--teal)]
                           transition-all duration-200 rounded-sm"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3
            className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--text-3)] mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Tools & Technology
          </h3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {TOOLS_Technology.map((t) => (
              <span
                key={t}
                className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs border border-[var(--border)]
                           text-[var(--text-3)] hover:border-[var(--teal)] hover:text-[var(--teal)]
                           transition-all duration-200 rounded-sm"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
