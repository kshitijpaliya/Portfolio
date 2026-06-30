"use client";

import Link from "next/link";
import { portfolioData, type Project } from "@/lib/portfolioData";
import Starfield from "@/components/Starfield";

type ProjectPageClientProps = {
  project: Project;
};

export default function ProjectPageClient({ project }: ProjectPageClientProps) {
  const index = portfolioData.projects.findIndex((item) => item.id === project.id);
  const previous = portfolioData.projects[(index - 1 + portfolioData.projects.length) % portfolioData.projects.length];
  const next = portfolioData.projects[(index + 1) % portfolioData.projects.length];

  return (
    <div className="case-page">
      <Starfield />
      <div className="nebula" aria-hidden="true"><i className="n1" /><i className="n2" /></div>
      <div className="case-wrap">
        <div className="topbar">
          <Link className="back" href="/#work"><b>~</b> cd ../ &nbsp;back to missions</Link>
          <span className="logo"><b>◆</b> {portfolioData.profile.domain}</span>
        </div>

        <main>
          <div
            className="case-hero"
            style={{
              background: `linear-gradient(to top,rgba(6,7,14,.5),rgba(6,7,14,0) 60%),linear-gradient(135deg,${project.grad[0]},${project.grad[1]})`,
            }}
          >
            <span className="eybr">MISSION {String(index + 1).padStart(2, "0")} · {project.year} · {project.role}</span>
            <h1>{project.name}</h1>
          </div>

          <p className="case-lead">{project.tagline}</p>

          <div className="links">
            {project.links.map((link) => (
              <a href={link.href} key={link.href} target="_blank" rel="noopener">{link.label}</a>
            ))}
          </div>

          <div className="stats">
            {project.metrics.map(([number, label]) => (
              <div className="stat" key={label}>
                <div className="n">{number}</div>
                <div className="l">{label}</div>
              </div>
            ))}
          </div>

          <section>
            <p className="lbl">// the problem</p>
            <div className="prose"><p>{project.problem}</p></div>
          </section>

          <section>
            <p className="lbl">// what I built</p>
            <ol className="build">
              {project.build.map((item) => <li key={item}>{item}</li>)}
            </ol>
          </section>

          <section>
            <p className="lbl">// instruments</p>
            <div className="chips">
              {project.tech.map((item) => <span className="chip" key={item}>{item}</span>)}
            </div>
          </section>

          <div className="case-nav">
            <Link href={`/projects/${previous.id}`}>
              <div className="dir">← previous</div>
              <div className="nm">{previous.name}</div>
            </Link>
            <Link className="next" href={`/projects/${next.id}`}>
              <div className="dir">next →</div>
              <div className="nm">{next.name}</div>
            </Link>
          </div>
        </main>

        <footer>
          <span>© 2026 Kshitij Paliya</span>
          <span><Link href="/">Home</Link> · <a href={`mailto:${portfolioData.profile.email}`}>Transmission</a></span>
        </footer>
      </div>
    </div>
  );
}
