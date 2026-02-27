import SectionHeader from "./SectionHeader";

const EDUCATION = [
  {
    degree: "Bachelor of Informatics Engineering",
    school: "Institut Teknologi PLN, Jakarta",
    period: "2020 — 2024",
    gpa: "3.50 / 4.00",
    desc: "Focused on Web Development and Software Engineering, with strong foundations in system design, application development, and problem-solving methodologies. Completed a final thesis on the implementation of Deep Learning, specifically utilizing Convolutional Neural Networks (CNN) for intelligent data processing and analysis.",
    highlights: ["Software Engineering", "Database Systems", "Web Development", "Machine Learning"],
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-12 md:py-24 px-4 sm:px-8 md:px-20 lg:px-28">
      <div className="w-full max-w-4xl">
        <SectionHeader tag="" title="Education" />
        <div className="space-y-4 sm:space-y-5">
          {EDUCATION.map((edu, i) => (
            <div key={i}
              className="bg-[var(--bg-2)] border border-[var(--border)] rounded-sm p-4 sm:p-6 md:p-8
                         hover:border-[var(--border-h)] transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-1)]"
                    style={{ fontFamily: "var(--font-display)" }}>{edu.degree}</h3>
                  <p className="text-sm text-[var(--teal)] mt-1" style={{ fontFamily: "var(--font-body)" }}>{edu.school}</p>
                </div>
                <div className="flex sm:flex-col sm:text-right items-center sm:items-end gap-2 shrink-0">
                  <span className="text-sm text-[var(--text-3)]" style={{ fontFamily: "var(--font-body)" }}>{edu.period}</span>
                  {edu.gpa && (
                    <p className="text-xs text-[var(--teal)] font-medium" style={{ fontFamily: "var(--font-body)" }}>GPA {edu.gpa}</p>
                  )}
                </div>
              </div>
              <p className="text-sm text-[var(--text-2)] leading-relaxed mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>{edu.desc}</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {edu.highlights.map((h) => (
                  <span key={h} className="px-2 sm:px-3 py-1 text-xs border border-[var(--border)]
                                           text-[var(--text-3)] rounded-sm"
                    style={{ fontFamily: "var(--font-body)" }}>{h}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}