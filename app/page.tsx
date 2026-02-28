import SideNav from "@/components/SideNav";
import SocialBar from "@/components/SocialBar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
// import ProjectSection from "@/components/ProjectSection";
import EducationSection from "@/components/EducationSection";
import CertificationSection from "@/components/CertificationSection";
import SkillSection from "@/components/SkillSection";

// Divider antar section
function Divider() {
  return (
    <div className="mx-4 sm:mx-12 md:mx-20 lg:mx-28 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
  );
}

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      {/* Fixed sidebars — desktop: kanan & kiri | mobile: bawah */}
      <SideNav />
      <SocialBar />

      {/*
        Wrapper konten utama:
        - pl: ruang untuk SocialBar di desktop (kiri)
        - pr: ruang untuk SideNav di desktop (kanan)
        - pb: ruang untuk bottom nav + social bar di mobile
        - overflow-x: hidden cegah geser horizontal
      */}
      <div
        className="w-full overflow-x-hidden
                      pl-0 pr-0 md:pl-4 md:pr-16
                      pb-24 md:pb-0"
      >
        <HeroSection />
        <Divider />
        <ExperienceSection />
        <Divider />
        {/* <ProjectSection /> */}
        <Divider />
        <EducationSection />
        <Divider />
        <CertificationSection />
        <Divider />
        <SkillSection />
      </div>

      {/* Footer */}
      <footer
        className="relative z-10 w-full overflow-x-hidden
                         py-6 md:py-10 px-4 sm:px-8 md:px-20 lg:px-28
                         md:pr-16 pb-5 md:pb-10
                         border-t border-[var(--border)]"
      >
        <div className=" flex flex-col sm:flex-row items-center justify-between gap-1">
          <p
            className="text-xs sm:text-sm font-medium text-[var(--text-3)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--teal)] animate-pulse" />
            <span
              className="text-xs animate-pulse text-[var(--teal)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Made by Myself
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
