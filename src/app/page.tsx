"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";
import Starfield from "@/components/Starfield";
import { portfolioData } from "@/lib/portfolioData";

declare global {
  interface Window {
    __setProjectPreview?: (
      project: (typeof portfolioData.projects)[number] | null,
    ) => void;
  }
}

function SkillLogo({
  name,
}: {
  name: "React" | "Next.js" | "TypeScript" | "Node.js" | "AWS" | "Docker";
}) {
  if (name === "React") {
    return (
      <svg viewBox="-12 -12 24 24" aria-hidden="true">
        <circle r="2.05" fill="#61DAFB" />
        <g fill="none" stroke="#61DAFB" strokeWidth="1">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }
  if (name === "Next.js") {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="#0A0E1C"
          stroke="#E9ECF7"
          strokeWidth="1.6"
        />
        <path d="M13 28V12h3.5l10 16H23L16.5 17.7V28H13Z" fill="#E9ECF7" />
        <path d="M25 12h3v16h-3z" fill="#E9ECF7" />
      </svg>
    );
  }
  if (name === "TypeScript") {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="6" fill="#3178C6" />
        <text
          x="20"
          y="28"
          textAnchor="middle"
          fontFamily="Arial,sans-serif"
          fontWeight="800"
          fontSize="16"
          fill="#fff"
        >
          TS
        </text>
      </svg>
    );
  }
  if (name === "Node.js") {
    return (
      <svg viewBox="0 0 32 36" aria-hidden="true">
        <path d="M16 1 30 9v18L16 35 2 27V9z" fill="#539E43" />
        <path
          d="M16 1 30 9v18L16 35 2 27V9z"
          fill="none"
          stroke="#83CD29"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <text
          x="16"
          y="23"
          textAnchor="middle"
          fontFamily="Arial,sans-serif"
          fontWeight="800"
          fontSize="10"
          fill="#fff"
        >
          JS
        </text>
      </svg>
    );
  }
  if (name === "AWS") {
    return (
      <svg viewBox="0 0 64 42" aria-hidden="true">
        <text
          x="32"
          y="20"
          textAnchor="middle"
          fontFamily="Arial,sans-serif"
          fontWeight="700"
          fontSize="20"
          fill="#E9ECF7"
        >
          aws
        </text>
        <path
          d="M11 31c8 5 34 5 42 0"
          fill="none"
          stroke="#FF9900"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M49 28l5 3-3 5"
          fill="none"
          stroke="#FF9900"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 38" aria-hidden="true">
      <g fill="#2496ED">
        <rect x="11" y="15" width="5" height="5" />
        <rect x="17" y="15" width="5" height="5" />
        <rect x="23" y="15" width="5" height="5" />
        <rect x="29" y="15" width="5" height="5" />
        <rect x="17" y="9" width="5" height="5" />
        <rect x="23" y="9" width="5" height="5" />
      </g>
      <path
        d="M5 22c0 7 5 10 13 10 10 0 17-5 19-12 3 1 5 0 6-3-3-1.5-5-1-6 .2-1-3-4-4-4-4-2 3-1 6 1 7-3 1.5-7 1.5-29 1.5z"
        fill="#2496ED"
      />
    </svg>
  );
}

function PageEffects() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    const observer = reduce
      ? null
      : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("in");
                observer?.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.14 },
        );

    document.querySelectorAll(".reveal").forEach((el) => {
      if (reduce) el.classList.add("in");
      else observer?.observe(el);
    });
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  return <div className="progress" style={{ width: `${progress}%` }} />;
}

function LaunchIntro() {
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState("T–03");

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce || sessionStorage.getItem("kp-launch") === "1") return;

    let done = false;
    const close = () => {
      if (done) return;
      done = true;
      sessionStorage.setItem("kp-launch", "1");
      document.documentElement.classList.remove("preloading");
      document.body.classList.remove("preloading");
      setVisible(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" || event.key === "Enter" || event.key === " ")
        close();
    };

    setVisible(true);
    document.documentElement.classList.add("preloading");
    document.body.classList.add("preloading");
    document.addEventListener("keydown", onKey);

    const timers = [
      window.setTimeout(() => setPhase("02"), 850),
      window.setTimeout(() => setPhase("01"), 1450),
      window.setTimeout(() => setPhase("IGNITION"), 2050),
      window.setTimeout(close, 3600),
      window.setTimeout(close, 7000),
    ];

    return () => {
      timers.forEach(clearTimeout);
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("preloading");
      document.body.classList.remove("preloading");
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`launch ${phase === "IGNITION" ? "lifting shake" : ""}`}
      role="dialog"
      aria-label="Launch sequence"
    >
      <div className="launch-ui">
        <div className={`count ${phase === "IGNITION" ? "fire" : ""}`}>
          {phase}
        </div>
        <svg
          className="rocket"
          viewBox="0 0 62 120"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M31 2c11 9 17 24 17 44v40H14V46C14 26 20 11 31 2Z"
            fill="#0A1022"
            stroke="#9FB2E8"
            strokeWidth="2"
          />
          <circle
            cx="31"
            cy="40"
            r="8"
            fill="#03040A"
            stroke="#CCFF4D"
            strokeWidth="2"
          />
          <path
            d="M14 70 4 96v-8c0-9 4-14 10-18ZM48 70l10 26v-8c0-9-4-14-10-18Z"
            fill="#0A1022"
            stroke="#9FB2E8"
            strokeWidth="2"
          />
          <path
            d="M22 86h18v8a9 9 0 0 1-18 0v-8Z"
            fill="#0A1022"
            stroke="#9FB2E8"
            strokeWidth="2"
          />
          <path
            className="flame"
            d="M24 102c2 9 5 14 7 18 2-4 5-9 7-18-3 2-4 2-7 2s-4 0-7-2Z"
            fill="#FFCE7A"
          />
        </svg>
        <div className="status">
          {phase === "IGNITION" ? "Lift-off" : "Pre-flight check"}
        </div>
        <div className="bar">
          <i style={{ width: phase === "IGNITION" ? "100%" : "64%" }} />
        </div>
      </div>
      <button className="skip" onClick={() => setVisible(false)}>
        Skip intro →
      </button>
    </div>
  );
}

function MagneticLink({
  className = "",
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const [style, setStyle] = useState<React.CSSProperties>({});
  return (
    <a
      {...props}
      className={`${className} mag`}
      style={style}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        setStyle({ transform: `translate(${x * 0.3}px, ${y * 0.4}px)` });
      }}
      onMouseLeave={() => setStyle({})}
    >
      {children}
    </a>
  );
}

function Astronaut() {
  return (
    <svg
      className="astro"
      aria-hidden="true"
      style={{ top: "5%", right: "3%", width: 94 }}
      viewBox="0 0 120 150"
      fill="none"
    >
      <ellipse cx="60" cy="142" rx="22" ry="5" fill="rgba(111,233,255,.10)" />
      <rect
        x="33"
        y="58"
        width="54"
        height="58"
        rx="22"
        fill="#11142A"
        stroke="#9FB2E8"
        strokeWidth="2.4"
      />
      <rect
        x="78"
        y="64"
        width="16"
        height="40"
        rx="8"
        fill="#11142A"
        stroke="#9FB2E8"
        strokeWidth="2.4"
      />
      <rect
        x="26"
        y="64"
        width="16"
        height="40"
        rx="8"
        fill="#11142A"
        stroke="#9FB2E8"
        strokeWidth="2.4"
      />
      <rect
        x="40"
        y="112"
        width="14"
        height="28"
        rx="7"
        fill="#11142A"
        stroke="#9FB2E8"
        strokeWidth="2.4"
      />
      <rect
        x="66"
        y="112"
        width="14"
        height="28"
        rx="7"
        fill="#11142A"
        stroke="#9FB2E8"
        strokeWidth="2.4"
      />
      <circle
        cx="60"
        cy="40"
        r="30"
        fill="#0C1022"
        stroke="#9FB2E8"
        strokeWidth="2.4"
      />
      <path
        d="M40 38a20 20 0 0 1 40 0v6a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8z"
        fill="#CCFF4D"
        opacity=".92"
      />
      <path
        d="M46 36c3-7 9-10 16-9"
        stroke="#06070E"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity=".5"
      />
      <rect
        x="44"
        y="70"
        width="32"
        height="22"
        rx="5"
        fill="#0C1022"
        stroke="#9B7BFF"
        strokeWidth="1.8"
      />
      <circle cx="52" cy="81" r="2.4" fill="#6FE9FF" />
      <circle cx="60" cy="81" r="2.4" fill="#CCFF4D" />
      <circle cx="68" cy="81" r="2.4" fill="#9B7BFF" />
    </svg>
  );
}

function Orrery() {
  const orbits = [
    [30, 26, "Next.js"],
    [42, 34, "React"],
    [54, 42, "TypeScript"],
    [66, 52, "Node.js"],
    [78, 62, "AWS"],
    [90, 74, "Docker"],
  ] as const;

  return (
    <div className="system" aria-hidden="true">
      <div className="sun" />
      {orbits.map(([radius, duration, skill], index) => (
        <div
          className="orbit orbiting"
          key={skill}
          style={{
            width: `${radius * 2}%`,
            height: `${radius * 2}%`,
            animationDuration: `${duration}s`,
            animationDelay: `-${index * 7}s`,
          }}
        >
          <div className="sat">
            <span
              className="chip"
              style={{
                animationDuration: `${duration}s`,
                animationDelay: `-${index * 7}s`,
              }}
            >
              <SkillLogo name={skill} />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectPreview() {
  const [active, setActive] = useState<
    (typeof portfolioData.projects)[number] | null
  >(null);
  const [position, setPosition] = useState({ x: -400, y: -400 });

  useEffect(() => {
    window.__setProjectPreview = setActive;
    const onMove = (event: PointerEvent) =>
      setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener("pointermove", onMove);
    return () => {
      delete window.__setProjectPreview;
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div
      className={`preview ${active ? "on" : ""}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%,-50%) scale(${active ? 1 : 0.9})`,
      }}
      aria-hidden="true"
    >
      {active && (
        <div
          className="card"
          style={{
            background: `linear-gradient(to top,rgba(6,7,14,.55),rgba(6,7,14,0) 60%),linear-gradient(135deg,${active.grad[0]},${active.grad[1]})`,
          }}
        >
          <span className="pv">view</span>
          <span className="pn">{active.name}</span>
          <span className="pt">{active.tech.join(" · ")}</span>
        </div>
      )}
    </div>
  );
}

function JokeFeature() {
  const jokes = portfolioData.jokes;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    setIndex(
      Math.floor((now.getTime() - start.getTime()) / 86400000) % jokes.length,
    );
  }, [jokes.length]);

  return (
    <section className="joke-feature reveal">
      <div className="wrap">
        <div className="seclabel">
          // incoming transmission <span className="ln" />
        </div>
        <div className="joker">
          <div className="jl">
            <i /> ground control · joke of the day
          </div>
          <div className="jt">{jokes[index]}</div>
          <button
            className="jb"
            onClick={() => setIndex((value) => (value + 1) % jokes.length)}
          >
            tell me another →
          </button>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      if (!response.ok) throw new Error("Failed to send");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form reveal" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          placeholder="Your name"
          required
        />
      </div>
      <div className="field">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          placeholder="your@email.com"
          required
        />
      </div>
      <div className="field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Tell me about your project or opportunity..."
          required
        />
      </div>
      <button className="mailbtn" disabled={status === "sending"} type="submit">
        {status === "sending"
          ? "Sending..."
          : status === "sent"
            ? "Sent"
            : "Send message"}
      </button>
      <p className="form-status" aria-live="polite">
        {status === "sent" && "Message sent. I will get back to you soon."}
        {status === "error" && "Could not send right now. Please try again."}
      </p>
    </form>
  );
}

export default function Home() {
  const { profile, projects, stack, experience, about, highlights } =
    portfolioData;
  const marquee = useMemo(() => [...stack, ...stack], [stack]);

  return (
    <>
      <LaunchIntro />
      <Starfield />
      <PageEffects />
      <div className="nebula" aria-hidden="true">
        <i className="n1" />
        <i className="n2" />
      </div>
      <ProjectPreview />

      <header>
        <div className="wrap nav">
          <span className="logo">◆ {profile.domain}</span>
          <nav className="menu">
            <a href="#work">Missions</a>
            <a href="#trajectory">Flight Log</a>
            <a href="#about">Operator</a>
            <a href="#contact">Comms</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div
            className="bigplanet"
            aria-hidden="true"
            style={{ width: 360, height: 360, left: -130, bottom: -130 }}
          />
          <Astronaut />
          <div className="wrap hero-grid">
            <div className="reveal">
              {/* <p className="eyebrow">
                <span className="bk" /> <span>{profile.eyebrow}</span>
              </p> */}
              <p className="eyebrow">
                <span className="bk text-xl" />
                <span>
                  Mission Control, this is KP. Ready for the next mission.
                </span>
              </p>
              <h1 className="name">
                {profile.name.split(" ").map((part) => (
                  <span key={part}>
                    {part}
                    <br />
                  </span>
                ))}
              </h1>

              <p className="sub">
                I don't know everything. I just enjoy building and figuring
                things out along the way.
              </p>
              <div className="hero-focus">
                <span>FULL STACK</span>
                <i />
                <span>CLOUD</span>
                <i />
                <span>AI</span>
              </div>
              {/* <div className="hero-focus">
                <span>FULL STACK</span>
                <span>CLOUD</span>
                <span>AI</span>
              </div>
              <div className="hero-line" /> */}
              <div className="cta">
                <MagneticLink className="btn pri" href="#work">
                  Explore missions →
                </MagneticLink>
                <MagneticLink
                  className="btn"
                  href={profile.resume}
                  target="_blank"
                  rel="noopener"
                >
                  Résumé ↗
                </MagneticLink>
              </div>
              <div className="herosoc">
                {profile.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener"
                  >
                    {link.label} ↗
                  </a>
                ))}
                <a href={`mailto:${profile.email}`}>Email ↗</a>
              </div>
            </div>
            <Orrery />
          </div>
        </section>

        <JokeFeature />

        <section id="work">
          <div className="wrap">
            <div className="seclabel reveal">
              // 01 — mission log <span className="ln" />{" "}
              <span className="c">
                {String(projects.length).padStart(2, "0")} projects
              </span>
            </div>
            <div className="work-list">
              {projects.map((project, index) => (
                <Link
                  className="proj"
                  href={`/projects/${project.id}`}
                  key={project.id}
                  onMouseEnter={() => window.__setProjectPreview?.(project)}
                  onMouseLeave={() => window.__setProjectPreview?.(null)}
                >
                  <span className="idx">0{index + 1}</span>
                  <span className="rowflex">
                    <span className="nm">{project.name}</span>
                    <span className="meta">
                      {project.year}
                      <span className="tc">{project.tech.join(" · ")}</span>
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="track">
            {marquee.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="inline-flex items-center gap-2"
              >
                <span>{item}</span>
                <b className="dot">
                  {(index + 1) % stack.length === 0 ? "★" : "/"}
                </b>
              </span>
            ))}
          </div>
        </div>

        <section id="trajectory">
          <div className="wrap">
            <div className="seclabel reveal">
              // 02 — flight log <span className="ln" />
            </div>
            <div className="exp">
              {experience.map((item) => (
                <div className="row reveal" key={`${item.when}-${item.role}`}>
                  <div className="when">{item.when}</div>
                  <div>
                    <div className="role">
                      {item.role} <span className="at">· {item.at}</span>
                    </div>
                    <div className="blurb">{item.blurb}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about">
          <div className="wrap">
            <div className="seclabel reveal">
              // 03 — the operator <span className="ln" />
            </div>
            <div className="about">
              <p className="lead reveal">{profile.aboutLead}</p>
              <div className="body reveal">
                {about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <div className="hl">
                  <div className="hl-h">Selected highlights</div>
                  {highlights.map((highlight) => (
                    <div className="hl-i" key={highlight}>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="wrap">
            <div className="seclabel reveal">
              // 04 — open comms <span className="ln" />
            </div>
            <h2 className="big reveal">
              Let's build something
              <br />
              off the ground.
            </h2>
            <ContactForm />
            <div className="socials reveal">
              {profile.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot">
          <span>© 2026 Kshitij Paliya · {profile.domain}</span>
          <span>28.46°N 77.03°E · Gurugram</span>
        </div>
      </footer>
    </>
  );
}
