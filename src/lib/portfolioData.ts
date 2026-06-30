export const portfolioData = {
  profile: {
    name: "Kshitij Paliya",
    first: "KSHITIJ",
    last: "PALIYA",
    domain: "kshitijpaliya.space",
    eyebrow: "callsign KP · full-stack · available for launch",
    role: "Full-Stack & Cloud engineer",
    email: "kshitij.paliya1@gmail.com",
    resume:
      "https://drive.google.com/file/d/1F6UVvkEszXkEBOEpnoIXKkP4eGFjG66U/view?usp=sharing",
    sub: "I don't know everything. I just enjoy figuring things out",
    aboutLead:
      "Final-year IT student at MIT Manipal, currently an analyst intern at Bain — happiest building systems that real people actually use.",
    links: [
      { label: "GitHub", href: "https://github.com/kshitijpaliya" },
      { label: "LinkedIn", href: "https://linkedin.com/in/kshitij-paliya" },
      {
        label: "Résumé",
        href: "https://drive.google.com/file/d/1F6UVvkEszXkEBOEpnoIXKkP4eGFjG66U/view?usp=sharing",
      },
    ],
  },
  projects: [
    {
      id: "paperclip",
      name: "PaperClip",
      year: "2025",
      role: "Solo build",
      grad: ["#2B5BFF", "#4DE0FF"],
      tagline:
        "Real-time collaborative text & file sharing over shareable links.",
      tech: ["Next.js", "Pusher", "Cloudflare R2", "PostgreSQL"],
      links: [
        {
          label: "Live site ↗",
          href: "https://paper-clip-project.vercel.app/",
        },
        {
          label: "Source ↗",
          href: "https://github.com/kshitijpaliya/PaperClip",
        },
      ],
      metrics: [
        ["<100ms", "cross-device sync"],
        ["AES-256", "encrypted at rest"],
        ["R2", "secure presigned uploads"],
      ],
      problem:
        "Moving text and files between your own devices — or with someone nearby — usually means emailing yourself, a chat app, or a clunky upload flow. None of it is instant, and little of it is secure.",
      build: [
        "WebSocket-based real-time sync via Pusher, so updates appear instantly across every device on a link.",
        "Secure file uploads through Cloudflare R2 presigned URLs, with AES-256 encryption for data at rest.",
        "CAPTCHA and rate limiting to keep public links abuse-resistant in production.",
      ],
    },
    {
      id: "klyk",
      name: "Creator Dashboard",
      year: "2025",
      role: "Full-stack developer @ KLYK",
      grad: ["#FFC93D", "#CCFF4D"],
      tagline:
        "Enterprise dashboard for brand–creator campaigns, with AI search.",
      tech: ["Next.js", "Node.js", "AWS", "PostgreSQL"],
      links: [
        { label: "Live site ↗", href: "https://klyk.thejunecollective.com/" },
      ],
      metrics: [
        ["200+", "creator profiles"],
        ["-90%", "video bandwidth"],
        ["real-time", "filters & search"],
      ],
      problem:
        "Brands running creator campaigns juggle profiles, content review, and campaign state across spreadsheets and tools that don't talk to each other — slow, error-prone, and impossible to scale.",
      build: [
        "AI-powered search and real-time filtering across 200+ creator profiles.",
        "Multi-step campaign workflows with status tracking and Slack-based alerts.",
        "AWS S3 + CloudFront video delivery for content review, cutting bandwidth by 90%.",
      ],
    },
    {
      id: "hemocare",
      name: "HemoCare",
      year: "2024",
      role: "Team build · App-A-Thon winner",
      grad: ["#7C3AED", "#C4A0FF"],
      tagline: "Hemodialysis scheduling and hospital resource management.",
      tech: ["React Native", "Node.js", "MongoDB", "WebSockets"],
      links: [
        {
          label: "Source ↗",
          href: "https://github.com/kshitijpaliya/HemoCare",
        },
      ],
      metrics: [
        ["1st", "App-A-Thon 2024"],
        ["real-time", "scheduling"],
        ["mobile", "React Native"],
      ],
      problem:
        "Hemodialysis patients need regular, reliable slots and hospitals have a limited number of machines. Manual scheduling means clashes, idle capacity, and missed treatments.",
      build: [
        "A scheduling system that matches patients to dialysis slots while respecting machine and staff capacity.",
        "Real-time updates over WebSockets so changes reach staff and patients immediately.",
        "A React Native app for on-the-go access — won 1st place at App-A-Thon 2024.",
      ],
    },
    {
      id: "travelify",
      name: "Travelify",
      year: "2024",
      role: "Solo build",
      grad: ["#1FB257", "#7CFFB0"],
      tagline: "AI travel planner that generates day-wise itineraries.",
      tech: ["React", "Firebase", "Gemini API", "Google Places"],
      links: [
        { label: "Live demo ↗", href: "https://travelify-travel.vercel.app/" },
        {
          label: "Source ↗",
          href: "https://github.com/kshitijpaliya/travelify",
        },
      ],
      metrics: [
        ["AI", "Gemini itineraries"],
        ["day-wise", "auto plans"],
        ["Places", "hotels + spots"],
      ],
      problem:
        "Planning a trip means juggling dozens of tabs — places, hotels, routes, timing — and most planners just hand you a list, not an actual day-by-day plan you can follow.",
      build: [
        "Generates personalized, day-wise itineraries with Gemini AI from a few preferences.",
        "Pulls hotel and place recommendations through the Google Places API.",
        "Firebase auth and storage so trips are saved and shareable.",
      ],
    },
  ],
  experience: [
    {
      when: "Jan 2026 — Now",
      role: "Analyst Intern",
      at: "Bain & Company (BCN)",
      blurb:
        "Custom analysis on large-scale transaction data — customer behavior, retention, cross-shop — with data pipelines built and validated in Snowflake to drive case decisions.",
    },
    {
      when: "May — Aug 2025",
      role: "Full-Stack Developer",
      at: "KLYK",
      blurb:
        "Built a Next.js creator dashboard with AI search and real-time filters for 200+ profiles; AWS S3 + CloudFront video delivery cut bandwidth by 90%.",
    },
    {
      when: "Apr — Jul 2025",
      role: "Frontend Developer Intern",
      at: "StyleMind AI",
      blurb:
        "Shipped a Next.js + TypeScript API-analytics dashboard with real-time charts and secure JWT / Google OAuth authentication.",
    },
    {
      when: "May — Jul 2024",
      role: "SDE Intern",
      at: "ChipIOT",
      blurb:
        "Built an end-to-end IoT pipeline — ESP32 to AWS IoT Core over MQTT/TLS, with Lambda processing into DynamoDB.",
    },
  ],
  about: [
    "Full-stack and cloud is where most of my work lives: Next.js front to back, AWS infra (EC2, S3, Lambda, IoT Core), real-time sync, and data pipelines in Snowflake.",
    "Based in Gurugram. Outside the editor I travel, chase new places, and fall down history rabbit holes.",
  ],
  highlights: [
    "App-A-Thon 2024 — 1st place (HemoCare)",
    "Top 30 of 350+ teams — M# Hackathon",
    "Top 6 — Enduraverse Hackathon",
    "Scholar Scholarship - MIT Manipal",
  ],
  stack: [
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "AWS",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Python",
    "Cloudflare",
    "WebSockets",
    "System Design",
  ],
  jokes: [
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "I told my code a joke — it didn't laugh. Must've been a syntax error.",
    "Why did the scarecrow win an award? He was outstanding in his field.",
    "I'm reading a book on anti-gravity. It's impossible to put down.",
    'A SQL query walks up to two tables and asks: "may I join you?"',
    "Why don't skeletons fight each other? They don't have the guts.",
    "To understand recursion, you must first understand recursion.",
    "What do you call fake spaghetti? An impasta.",
    "How do you comfort a JavaScript bug? You console it.",
    "I only know 25 letters of the alphabet. I don't know y.",
    "There are 10 kinds of people: those who read binary and those who don't.",
    "Why did the developer go broke? He used up all his cache.",
    "What do you call a belt made of watches? A waist of time.",
    "Why was the function sad after the party? It never got called.",
    "I'd tell you a UDP joke, but you might not get it.",
    "How does NASA organise a party? They planet.",
    "Why do Java developers wear glasses? Because they don't C#.",
    "I used to hate facial hair, but then it grew on me.",
  ],
} as const;

export type PortfolioData = typeof portfolioData;
export type Project = PortfolioData["projects"][number];
