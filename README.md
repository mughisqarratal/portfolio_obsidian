# Portfolio — Obsidian Theme
**Next.js 15 + Tailwind CSS** · Dark, elegan, readable

---

## 🗂️ Struktur

```
portfolio-obsidian/
├── app/
│   ├── layout.tsx            ← Metadata + favicon
│   ├── page.tsx              ← Assembler semua section
│   └── globals.css           ← Tema Obsidian (warna, font, animasi)
├── components/
│   ├── SideNav.tsx           ← Navbar kanan  ← TAMBAH IKON DI SINI
│   ├── SocialBar.tsx         ← Sosmed kiri   ← TAMBAH IKON DI SINI
│   ├── SectionHeader.tsx     ← Komponen heading reusable
│   ├── HeroSection.tsx       ← Hero
│   ├── ExperienceSection.tsx ← Timeline pengalaman kerja
│   ├── ProjectSection.tsx    ← Grid proyek & assignment
│   ├── EducationSection.tsx  ← Pendidikan
│   ├── CertificationSection.tsx ← Sertifikasi + tombol GDrive
│   └── SkillSection.tsx      ← Skill bar + tools
├── public/
│   └── favicon.ico           ← ← TARUH FAVICON KAMU DI SINI
└── package.json
```

---

## 🚀 Cara Menjalankan

```bash
npm install
npm run dev
```

---

## 🖼️ Favicon (Ikon Tab Browser)

1. Siapkan file `favicon.ico` atau `favicon.png`
2. Letakkan di folder `/public/`
3. Sudah otomatis terbaca via `app/layout.tsx`

Buat favicon gratis: https://favicon.io/

---

## 🔗 Menambahkan Ikon Navigasi (SideNav)

```bash
npm install lucide-react
```

Buka `components/SideNav.tsx`, tambahkan:
```tsx
import { Home, Briefcase, FolderOpen, GraduationCap, Award, Wrench } from "lucide-react";

const NAV_ITEMS = [
  { id: "hero",          label: "Home",          icon: <Home size={16} /> },
  { id: "experience",    label: "Experience",    icon: <Briefcase size={16} /> },
  { id: "projects",      label: "Projects",      icon: <FolderOpen size={16} /> },
  { id: "education",     label: "Education",     icon: <GraduationCap size={16} /> },
  { id: "certification", label: "Certification", icon: <Award size={16} /> },
  { id: "skills",        label: "Skills",        icon: <Wrench size={16} /> },
];
```

---

## 🌐 Menambahkan Ikon Sosmed (SocialBar)

```bash
npm install react-icons
```

Buka `components/SocialBar.tsx`:
```tsx
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";

const LINKS = [
  { label: "GitHub",    href: "https://github.com/username",      icon: <FiGithub size={16} /> },
  { label: "LinkedIn",  href: "https://linkedin.com/in/username", icon: <FiLinkedin size={16} /> },
  { label: "Instagram", href: "https://instagram.com/username",   icon: <FiInstagram size={16} /> },
  { label: "Email",     href: "mailto:kamu@email.com",            icon: <FiMail size={16} /> },
];
```

---

## 🔗 Sertifikasi — Google Drive

1. Upload sertifikatmu ke Google Drive
2. Klik kanan file → Share → "Anyone with the link" → Copy
3. Paste link ke field `gdrive` di `CertificationSection.tsx`

---

## ✏️ Edit Konten

| File | Yang diubah |
|------|-------------|
| `HeroSection.tsx`       | Teks deskripsi, array ROLES |
| `ExperienceSection.tsx` | Array EXPERIENCES |
| `ProjectSection.tsx`    | Array PROJECTS |
| `EducationSection.tsx`  | Array EDUCATION |
| `CertificationSection.tsx` | Array CERTS + link GDrive |
| `SkillSection.tsx`      | Array QA_SKILLS, WP_SKILLS, TOOLS |

---

## 🌐 Deploy

```bash
npx vercel
```
