// ============================================================
// PORTFOLIO DATA — edit di sini untuk update konten
// ============================================================

export const personal = {
  name: "Yuri Pakpahan",
  email: "yuripakpahan2205@gmail.com",
  phone: "+62 852-6015-3158",
  location: "North Sumatra, Indonesia",
  education: "Bachelor of Informatics, IT Del",
  linkedin: "yuri-pakpahan",
  github: "Yuri-Elsa",
  whatsapp: "6285260153158",
  cvFile: "Yuri.pdf",
  tagline:
    "Software Developer & UI/UX Designer crafting intuitive, scalable digital products — from clean code to beautiful interfaces.",
};

export const stats = [
  { num: "3+", label: "Real Projects" },
  { num: "50+", label: "Students Mentored" },
  { num: "1st", label: "Science Writing" },
];

export const skills = [
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "User-centered design through research, wireframing, and high-fidelity prototyping.",
    tags: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "User Research",
      "User Flow",
      "Usability Testing",
      "Design Thinking",
    ],
  },
  {
    icon: "⚛️",
    title: "Frontend Development",
    desc: "Responsive, pixel-perfect interfaces with modern frameworks and component libraries.",
    tags: ["React.js", "Flutter", "Tailwind CSS", "HTML/CSS", "JavaScript"],
  },
  {
    icon: "⚙️",
    title: "Backend Development",
    desc: "Secure, scalable server-side logic and RESTful API development.",
    tags: ["Laravel", "Node.js", "PHP", "Java", "Kotlin", "Python"],
  },
  {
    icon: "🗄️",
    title: "Database & API",
    desc: "Database design, integration, and thorough API testing workflows.",
    tags: [
      "PostgreSQL",
      "MySQL",
      "Postman",
      "API Testing",
      "Functional Testing",
    ],
  },
  {
    icon: "🛡️",
    title: "Cybersecurity",
    desc: "Foundational security awareness applied in web and network environments.",
    tags: ["Pen Testing", "Vuln. Assessment", "Web Security", "Cryptography"],
  },
  {
    icon: "🧠",
    title: "Soft Skills",
    desc: "Analytical thinking paired with strong collaborative and leadership qualities.",
    tags: ["Critical Thinking", "Leadership", "Communication", "Adaptability"],
  },
];

export const experiences = [
  {
    period: "Sep 2024 – Nov 2024",
    role: "Physics IB Laboratory Assistant",
    org: "Del Institute of Technology — Toba, Indonesia",
    bullets: [
      "Led physics laboratory sessions for 50+ students, covering Measurement & Uncertainty, Projectile Motion, Fluid Viscosity, Momentum, and Pendulum Oscillation.",
      "Explained core concepts, guided experimental procedures, and supported data collection and analysis to improve accuracy and error identification.",
      "Evaluated 50+ student lab reports weekly, delivered structured feedback, and maintained laboratory safety standards.",
    ],
  },
  {
    period: "Aug 2023 – Present",
    role: "Bachelor of Informatics",
    org: "Del Institute of Technology — Toba, Indonesia",
    bullets: [
      "Specializing in UI/UX Design and Full-Stack Development with hands-on project experience.",
      "Active in academic projects, student organizations, and competitive events including a 1st-place scientific writing competition.",
    ],
  },
];

export const projects = [
  {
    num: "01",
    title: "Web GPdI Sibulele",
    role: "UI/UX Designer · Jan 2025 – Present",
    desc: "Church management system with web and mobile interfaces. Designed intuitive user flows and prototyped high-fidelity screens using Figma, then implemented with React.js and Flutter following user-centered design principles.",
    stack: ["Figma", "React.js", "Flutter", "UI/UX Design"],
    link: "#",
  },
  {
    num: "02",
    title: "Aucations Web Application",
    role: "Full-Stack Developer · Nov 2025",
    desc: "Secure online auction platform with real-time bidding. Built end-to-end with React.js, Node.js, and PHP. Managed database integration, crafted the UI/UX, and performed API testing with Postman to ensure reliable functionality.",
    stack: ["React.js", "Node.js", "PHP", "PostgreSQL", "Postman"],
    link: "https://lelang-ifs23051.vercel.app/",
  },
  {
    num: "03",
    title: "Website PPKHA IT Del",
    role: "System Analyst · Sep 2025 – Dec 2025",
    desc: "Web-based student achievement & activity platform for IT Del. Analyzed business requirements, defined project scope, and translated user needs into system specifications. Collaborated on a Laravel and Vue.js/React stack.",
    stack: ["Laravel", "Vue.js", "React", "System Analysis"],
    link: "https://itdel-ppkha.delpick.fun:8080/",
  },
];

export const organizations = [
  {
    icon: "⚖️",
    name: "Informatics Students Association",
    role: "Head of the Association Deliberative Assembly",
    period: "Dec 2025 – Present",
    photo: null,
    photoPlaceholder: { icon: "🏛️", text: "Foto kegiatan\norganisasi" },
    bullets: [
      "Directed the review and ratification of organizational regulations and policies to ensure alignment with the association's constitution.",
      "Monitored Executive Board work programs, evaluated accountability, and delivered strategic governance recommendations.",
      "Enforced transparency standards and ensured compliance in major organizational decisions.",
    ],
  },
  {
    icon: "📚",
    name: "Informatics Students Association",
    role: "Member of the Education Division",
    period: "Jan 2025 – Dec 2025",
    photo: null,
    photoPlaceholder: { icon: "📚", text: "Foto kegiatan\ndivisi pendidikan" },
    bullets: [
      "Compiled and distributed course materials to improve members' academic performance.",
      "Organized alumni-led webinars delivering career insights and industry knowledge.",
      "Conducted school outreach programs to promote the Informatics program and build external partnerships.",
    ],
  },
  {
    icon: "🛡️",
    name: "Del Cyber Security Club",
    role: "Member",
    period: "Oct 2023 – Present",
    photo: null,
    photoPlaceholder: { icon: "🛡️", text: "Foto kegiatan\ncyber security" },
    bullets: [
      "Analyzed network security concepts and discussed real-world attack scenarios with members.",
      "Conducted basic penetration testing and vulnerability assessments in controlled lab environments.",
      "Evaluated web security risks and applied ethical hacking principles responsibly.",
    ],
  },
];

export const certifications = [
  {
    icon: "🎨",
    name: "Digital Skill Fair 48.0 — UI/UX",
    issuer: "Dibimbing Bootcamp",
    year: "Feb 2026",
    badge: "✓ Certification",
    image: "/certs/dibimbing.pdf",
  },
  {
    icon: "🛡️",
    name: "Membership Certificate",
    issuer: "Del Cyber Security Club",
    year: "2023 – 2024",
    badge: "✓ Certificate",
    image: "/certs/sertifikat-dcsc.png",
  },
  {
    icon: "🏆",
    name: "1st Place — Scientific Writing",
    issuer: "University-Level Competition",
    year: "Sep 2025",
    badge: "🥇 Achievement",
    image: "/certs/Sertifikat-juara-1.pdf",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#organizations", label: "Org" },
  { href: "#certs", label: "Certs" },
];
