import SectionHeader from "./SectionHeader";

// ✏️ EDIT DATA DI BAWAH INI
const EXPERIENCES = [
  {
    role: "Quality Assurance Tester",
    company: "PT. Kreasindo Karya Abadi",
    period: "Mar 2025 — Present",
    type: "Full-time",
    desc: "Collaborated with cross-functional teams including UI/UX, Web & Mobile Developers, and Product Managers to design and execute test cases, manage bug reporting and verification, ensure comprehensive API test coverage, and oversee application release approvals for the Google Play Store and App Store.",
    tags: [
      "Bug Reporting",
      "Manual Testing",
      "API Testing",
      "Test Case Design",
    ],
  },
  {
    role: "WordPress Developer",
    company: "Self-Employed",
    period: "Jun 2024 — Present",
    type: "Freelance",
    desc: "Developed and maintained three WordPress-based company profile websites across import-export and solar panel (PV) industries by customizing themes, configuring plugins, managing content updates, and ensuring optimal performance, security, and compatibility with the latest WordPress version.",
    tags: ["WordPress", "Elementor", "PHP"],
  },
  // {
  //   role: "",
  //   company: "",
  //   period: "",
  //   type: "",
  //   desc: "",
  //   tags: [""],
  // },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-12 md:py-24 px-4 sm:px-8 md:px-20 lg:px-28"
    >
      <div className="w-full max-w-5xl">
        <SectionHeader
          tag=""
          title="Experiences"
          subtitle="A professional journey that shaped the way I work today."
        />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--teal)] via-[var(--border)] to-transparent" />

          <div className="space-y-6 md:space-y-10 pl-5 sm:pl-8">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="relative group">
                {/* Dot */}
                <div
                  className="absolute -left-6 sm:-left-9 top-1 w-2.5 h-2.5 rounded-full
                                border-2 border-[var(--teal)] bg-[var(--bg)]
                                group-hover:bg-[var(--teal)] transition-colors duration-200"
                />

                <div
                  className="bg-[var(--bg-2)] border border-[var(--border)] rounded-sm p-4 sm:p-6
                                hover:border-[var(--border-h)] transition-all duration-300 hover:bg-[var(--bg-3)]"
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-3 mb-3">
                    <div>
                      <h3
                        className="text-lg sm:text-xl font-semibold text-[var(--text-1)]"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {exp.role}
                      </h3>
                      <p
                        className="text-sm text-[var(--teal)] mt-0.5"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex sm:flex-col sm:text-right items-center sm:items-end gap-2 sm:gap-1 shrink-0">
                      <span
                        className="text-xs text-[var(--text-4)]"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {exp.period}
                      </span>
                      <span
                        className="inline-block px-2 py-0.5 text-[10px] tracking-wider uppercase
                                       border border-[var(--border)] text-[var(--text-3)] rounded-sm"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p
                    className="text-sm text-[var(--text-2)] leading-normal mb-3"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    {exp.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {exp.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 sm:px-3 py-1 text-xs text-[var(--text-3)]
                                               border border-[var(--border)] hover:border-[var(--teal)]
                                               hover:text-[var(--teal)] transition-colors duration-200 rounded-sm"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
