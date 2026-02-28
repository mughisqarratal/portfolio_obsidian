// import SectionHeader from "./SectionHeader";

// // ✏️ EDIT DATA DI BAWAH INI
// const PROJECTS = [
//   { type: "WordPress", title: "Toko Online Fashion", year: "2024",
//     desc: "Custom WooCommerce store dengan tema unik, filter produk dinamis, dan payment gateway lokal. Diuji end-to-end sebelum launch.",
//     tags: ["WooCommerce", "Custom Theme", "PHP"] },
//   { type: "QA", title: "Automation Suite — SaaS App", year: "2024",
//     desc: "Test suite otomatis dengan Cypress untuk aplikasi SaaS B2B, coverage 80%+ fitur utama termasuk edge case.",
//     tags: ["Cypress", "JavaScript", "CI/CD"], link: "#" },
//   { type: "WordPress", title: "Company Profile — Konstruksi", year: "2023",
//     desc: "Situs company profile dengan Elementor, SEO on-page, Page Speed 90+, dan form inquiry terintegrasi CRM.",
//     tags: ["Elementor", "ACF", "SEO"], link: "#" },
//   { type: "QA", title: "API Testing — Fintech Platform", year: "2023",
//     desc: "REST API testing platform fintech: 200+ test case, dokumentasi lengkap, integrasi pipeline CI.",
//     tags: ["Postman", "Newman", "REST API"], link: "#" },
//   { type: "Assignment", title: "Bug Reporting Documentation", year: "2023",
//     desc: "Dokumentasi bug report standar perusahaan: template, severity matrix, dan workflow resolusi.",
//     tags: ["Jira", "Confluence", "Documentation"], link: "#" },
//   { type: "WordPress", title: "Membership & Blog Site", year: "2022",
//     desc: "Platform konten premium dengan sistem membership, konten terkunci, dan landing page konversi tinggi.",
//     tags: ["MemberPress", "Custom Plugin"], link: "#" },
// ];

// const TYPE_MAP: Record<string, { label: string; color: string; dot: string }> = {
//   QA:         { label: "QA",         color: "text-emerald-400 border-emerald-800", dot: "bg-emerald-400" },
//   WordPress:  { label: "WordPress",  color: "text-purple-400  border-purple-800",  dot: "bg-purple-400"  },
//   Assignment: { label: "Assignment", color: "text-sky-400     border-sky-800",     dot: "bg-sky-400"     },
// };

// export default function ProjectSection() {
//   return (
//     <section id="projects" className="py-12 md:py-24 px-4 sm:px-8 md:px-20 lg:px-28">
//       <div className="w-full max-w-5xl">
//         <SectionHeader tag="" title="Projects & Assignment"
//           subtitle="A collection of jobs and tasks that I have handled." />

//         {/* Legend */}
//         <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-10">
//           {Object.entries(TYPE_MAP).map(([k, v]) => (
//             <div key={k} className="flex items-center gap-2">
//               <span className={`w-2 h-2 rounded-full ${v.dot}`} />
//               <span className={`text-xs font-medium ${v.color.split(" ")[0]}`}
//                 style={{ fontFamily: "var(--font-body)" }}>{v.label}</span>
//             </div>
//           ))}
//         </div>

//         {/* Grid — 1 col mobile, 2 col tablet, 3 col desktop */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4">
//           {PROJECTS.map((p, i) => {
//             const t = TYPE_MAP[p.type] ?? TYPE_MAP.Assignment;
//             return (
//               <a key={i} href={p.link}
//                 className="group block bg-[var(--bg-2)] border border-[var(--border)] rounded-sm p-4 sm:p-6
//                            hover:border-[var(--border-h)] hover:bg-[var(--bg-3)] transition-all duration-300">
//                 <div className="flex items-center justify-between mb-3">
//                   <span className={`text-[10px] font-medium tracking-wider uppercase border px-2 py-0.5 rounded-sm ${t.color}`}
//                     style={{ fontFamily: "var(--font-body)" }}>{t.label}</span>
//                   <span className="text-xs text-[var(--text-3)]" style={{ fontFamily: "var(--font-body)" }}>{p.year}</span>
//                 </div>
//                 <h3 className="text-base sm:text-lg font-semibold text-[var(--text-1)] mb-2
//                                group-hover:text-[var(--teal)] transition-colors"
//                   style={{ fontFamily: "var(--font-display)" }}>{p.title}</h3>
//                 <p className="text-sm text-[var(--text-3)] leading-relaxed mb-3 sm:mb-4"
//                   style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>{p.desc}</p>
//                 <div className="flex flex-wrap gap-1.5">
//                   {p.tags.map((tag) => (
//                     <span key={tag} className="text-xs px-2 py-0.5 border border-[var(--border)]
//                                                text-[var(--text-3)] rounded-sm"
//                       style={{ fontFamily: "var(--font-body)" }}>{tag}</span>
//                   ))}
//                 </div>
//                 <div className="mt-3 text-[var(--text-3)] group-hover:text-[var(--teal)] text-sm transition-colors"></div>
//               </a>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }