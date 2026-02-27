import SectionHeader from "./SectionHeader";


const CERTS = [
  { title: "Microsoft Certified: Azure AI Fundamentals", issuer: "Microsoft",
    date: "June 2024", credentialId: "XeJw-XMpE",
    gdrive: "https://drive.google.com/file/d/1tQuJo7CqB0AuvDAFS2S_UvtGX00yFyqw/view" },
  { title: "Microsoft Office Specialist: Word 2019 Associate", issuer: "Microsoft",
    date: "June 2024", credentialId: "5xrN-4wTN",
    gdrive: "https://drive.google.com/file/d/1HAHNEU4vD4pf5dO_arHSuqaFZW8D_JzI/view" },
];

export default function CertificationSection() {
  return (
    <section id="certification" className="py-12 md:py-24 px-4 sm:px-8 md:px-20 lg:px-28">
      <div className="w-full max-w-4xl">
        <SectionHeader tag="" title="Certifications"
          subtitle="A certificate that formally proves my competence." />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {CERTS.map((cert, i) => (
            <div key={i}
              className="bg-[var(--bg-2)] border border-[var(--border)] rounded-sm p-4 sm:p-6
                         hover:border-[var(--border-h)] transition-all duration-300 flex flex-col">
              <span className="inline-block mb-3 sm:mb-4 px-2.5 py-1 text-xs font-medium tracking-wider uppercase
                               border border-[var(--teal)] text-[var(--teal)] rounded-sm self-start"
                style={{ fontFamily: "var(--font-body)" }}>{cert.issuer}</span>
              <h3 className="text-sm sm:text-base font-semibold text-[var(--text-1)] mb-2 leading-snug flex-1"
                style={{ fontFamily: "var(--font-display)" }}>{cert.title}</h3>
              <div className="flex flex-wrap gap-x-3 gap-y-1 mb-4 mt-2">
                <span className="text-xs text-[var(--text-3)]" style={{ fontFamily: "var(--font-body)" }}>📅 {cert.date}</span>
                <span className="text-xs text-[var(--text-3)]" style={{ fontFamily: "var(--font-body)" }}>🔖 {cert.credentialId}</span>
              </div>
              <a href={cert.gdrive} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-medium tracking-wide
                           border border-[var(--teal)] text-[var(--teal)] rounded-sm
                           hover:bg-[var(--teal-glow)] active:bg-[var(--teal-glow)]
                           transition-all duration-200 mt-auto"
                style={{ fontFamily: "var(--font-body)" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.28 3l5.72 9.9L3.57 21H1l8.57-14.85L6.28 3zm2.57 0H22.5l-5.24 9H8.85L8.85 3zm7.15 9.9l-5.24 9H22.5l-5.24-9z"/>
                </svg>
                View Certificates
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}