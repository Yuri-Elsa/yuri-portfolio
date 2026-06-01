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
  { num: "5+", label: "Real Projects" },
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
    tags: [
      "React.js",
      "React Native",
      "Flutter",
      "Tailwind CSS",
      "HTML/CSS",
      "JavaScript",
    ],
  },
  {
    icon: "⚙️",
    title: "Backend Development",
    desc: "Secure, scalable server-side logic and RESTful API development.",
    tags: ["Laravel", "Node.js", "PHP", "Java", "Kotlin", "Python", "C", "C++"],
  },
  {
    icon: "🗄️",
    title: "Database & API",
    desc: "Database design, integration, and thorough API testing workflows.",
    tags: [
      "PostgreSQL",
      "MySQL",
      "Database Design",
      "Query Optimization",
      "Postman",
      "API Testing",
      "Functional Testing",
    ],
  },
  {
    icon: "🛠️",
    title: "Dev Tools",
    desc: "Version control, API clients, and IDEs for efficient end-to-end development workflows.",
    tags: [
      "Git",
      "Postman",
      "Visual Studio Code",
      "IntelliJ IDEA",
      "Android Studio",
      "Test Case Design",
      "Validation & Verification",
    ],
  },
  {
    icon: "🧠",
    title: "Soft Skills",
    desc: "Analytical thinking paired with strong collaborative and leadership qualities.",
    tags: [
      "Critical Thinking",
      "Problem-Solving",
      "Leadership",
      "Team Collaboration",
      "Time Management",
      "Communication",
    ],
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
    period: "Aug 2023 – Sep 2027 (Expected)",
    role: "Bachelor of Informatics",
    org: "Del Institute of Technology — Laguboti, Indonesia",
    bullets: [
      "Currently in 6th semester, specializing in UI/UX Design and Full-Stack Development with hands-on project experience.",
      "Active in academic projects, student organizations, and competitive events including a 1st-place scientific writing competition.",
    ],
  },
];

export const projects = [
  {
    num: "01",
    title: "Mobile GPdI Sibulele",
    role: "UI/UX Designer & Mobile Developer · Apr 2026 – May 2026",
    desc: "Church information system mobile application. Designed UI/UX using Figma and implemented with React Native. Collaborated with a cross-functional team to optimize user flows and integrate 10+ mobile application features.",
    stack: ["Figma", "React Native", "UI/UX Design"],
    link: "#",
  },
  {
    num: "02",
    title: "Web GPdI Sibulele",
    role: "UI/UX Designer & Front-End Developer · Jan 2026 – Apr 2026",
    desc: "Church information system deployed on the web platform. Designed UI/UX using Figma and implemented with React.js. Collaborated with a cross-functional team to optimize user flows and integrate 10+ application features.",
    stack: ["Figma", "React.js", "UI/UX Design"],
    link: "https://www.figma.com/design/VReUHzvulMN7nSxkcssvny/Proyek-Web-Design-GPDI?node-id=0-1&t=wrfmGGetyB5gCy6u-1",
  },
  {
    num: "03",
    title: "Aucations Web Application",
    role: "Full-Stack Developer · Nov 2025",
    desc: "Secure online auction platform with real-time bidding. Built end-to-end with React.js, Node.js, and PostgreSQL. Developed RESTful APIs for authentication, bidding, and auction management.",
    stack: ["React.js", "Node.js", "PostgreSQL", "Postman"],
    link: "https://lelang-ifs23051.vercel.app/",
  },
  {
    num: "04",
    title: "Website PPKHA IT Del",
    role: "System Analyst & Back-End Developer · Sep 2025 – Dec 2025",
    desc: "Web-based alumni management platform for IT Del. Analyzed system requirements, designed relational database architecture, and supported frontend-backend integration for alumni data management using Laravel and React.js.",
    stack: ["Laravel", "React.js", "System Analysis", "Database Design"],
    link: "https://itdel-ppkha.delpick.fun:8080/",
  },
  {
    num: "05",
    title: "Game Connect Four",
    role: "Game Developer · Mar 2026",
    desc: "Classic Connect Four game with a modern web interface. Developed game logic and interactive UI using React.js and Vite, ensuring responsive design and smooth gameplay.",
    stack: ["JavaScript", "HTML", "React.js", "Vite"],
    link: "https://github.com/Yuri-Elsa/Game_Connect_Four",
  },
  {
    num: "06",
    title: "Watchlist Movie App",
    role: "Mobile App Developer · Mar 2026",
    desc: "Mobile application for creating and managing movie watchlists. Built with Kotlin and Ktor on Android Studio, featuring a clean UI and seamless user experience.",
    stack: ["Kotlin", "Ktor", "Android Studio"],
    link: "https://github.com/Yuri-Elsa/Proyek_Watchlist",
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
      "Led policy review and governance evaluation for 10+ organizational programs to ensure compliance with association regulations.",
      "Monitored executive board performance and provided strategic recommendations to improve program effectiveness.",
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
      "Organized an academic webinar with alumni to provide career insights and professional development guidance for Informatics students.",
      "Distributed curated learning resources to support 100+ students in improving academic performance.",
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
    icon: "🥉",
    name: "Bronze Medal — Lombok Essay Competition (LEC) 6",
    issuer: "National Essay Competition",
    year: "May 2026",
    badge: "🥉 Bronze Medal",
    image: null,
  },
  {
    icon: "🎨",
    name: "Digital Skill Fair 48.0 — UI/UX",
    issuer: "Dibimbing Bootcamp",
    year: "Feb 2026",
    badge: "✓ Certification",
    image: "/certs/dibimbing.pdf",
  },
  {
    icon: "🏆",
    name: "1st Place — Scientific Writing Competition",
    issuer: "LLDIKTI Region I & APTISI North Sumatra",
    year: "Aug 2025",
    badge: "🥇 1st Place",
    image: "/certs/Sertifikat-juara-1.pdf",
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
    icon: "🧪",
    name: "IB Physics Laboratory Assistant",
    issuer: "Del Institute of Technology",
    year: "Sep 2024 – Nov 2024",
    badge: "✓ Certificate",
    image: "/certs/aslab.pdf",
  },
  {
    icon: "📚",
    name: "Education Division Member",
    issuer: "Informatics Student Association",
    year: "Jan 2025 – Dec 2025",
    badge: "✓ Certificate",
    image: "/certs/pendidikan.pdf",
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
