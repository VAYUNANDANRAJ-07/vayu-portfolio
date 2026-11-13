"use client";

import { useEffect, useState } from "react";
import NavBar from "./components/Navbar";

const certificates = [
  ["01", "AWS CLOUD ENGINEER", "AWS Skill Builder", "JUL — SEP 2025", "/certificates/aws-cloud-engineer.pdf"],
  ["02", "EMBEDDED SYSTEM DEVELOPER", "Microchip", "OCT — DEC 2025", "/certificates/embedded-system-developer.pdf"],
  ["03", "AI / MACHINE LEARNING", "Google for Developers", "JAN — MAR 2026", "/certificates/ai-ml.pdf"],
  ["04", "PYTHON FULL STACK", "EduSkills Academy", "APR — JUN 2026", "/certificates/python-full-stack.pdf"],
  ["05", "ELECTRIC VEHICLE", "EduSkills Academy", "JUN — AUG 2026", "/certificates/electric-vehicle.pdf"],
  ["06", "JAVA FULL STACK", "EduSkills Academy", "AUG — OCT 2026", "/certificates/java-full-stack.pdf"],
];

const skills = [
  ["Python", "PROGRAMMING"],
  ["Java", "PROGRAMMING"],
  ["HTML / CSS", "WEB DEVELOPMENT"],
  ["JavaScript", "WEB DEVELOPMENT"],
  ["React / Next.js", "WEB DEVELOPMENT"],
  ["Verilog HDL", "DIGITAL DESIGN"],
  ["Embedded Systems", "HARDWARE"],
  ["IoT", "HARDWARE"],
  ["Git / GitHub", "TOOLS"],
  ["MATLAB", "ENGINEERING"],
];

const socials = [
  ["LINKEDIN", "https://www.linkedin.com/in/vayunandanraj-bodasu-b69294360/"],
  ["INSTAGRAM", "https://www.instagram.com/vayuversee/"],
  ["GITHUB", "https://github.com/VAYUNANDANRAJ-07"],
  ["YOUTUBE", "https://www.youtube.com/channel/UCt4LXKk7YGEqrgAfvIlj37w"],
];

export default function Home() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date())
      );
    };

    updateTime();
    const timer = window.setInterval(updateTime, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <main id="home">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <NavBar />

      <section className="hero section-shell">
        <div className="hero-grid">
          <div className="hero-copy reveal">
            <div className="status-line">
              <span className="status-dot" />
              AVAILABLE TO LEARN · BUILD · COLLABORATE
            </div>

            <p className="eyebrow">ELECTRONICS · SOFTWARE · SYSTEMS</p>
            <h1>
              BODASU
              <br />
              <span>VAYUNANDAN</span>
              <br />
              <em>RAJ.</em>
            </h1>

            <p className="hero-description">
              I’m Vayu, an Electronics and Communication Engineering student
              exploring software development, embedded technology, IoT and
              digital systems. I enjoy turning ideas into working projects.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                EXPLORE MY WORK ↘
              </a>
              <a
                className="button button-secondary"
                href="/Vayu-Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                VIEW RESUME ↗
              </a>
            </div>

            <div className="hero-meta">
              <div>
                <span>LOCATION</span>
                <strong>HYDERABAD, INDIA</strong>
              </div>
              <div>
                <span>DEGREE</span>
                <strong>B.TECH · ECE</strong>
              </div>
              <div>
                <span>LOCAL TIME</span>
                <strong className="live-time">{time} IST</strong>
              </div>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="visual-topline">
              <span>IDENTITY MODULE / 001</span>
              <span>V28—HYD</span>
            </div>

            <div className="portrait-wrap">
              <div className="portrait-ring ring-one" />
              <div className="portrait-ring ring-two" />
              <div className="portrait-image">
                <img src="/profile.jpg" alt="Vayunandan Raj" />
              </div>
              <span className="portrait-index">VR / 28</span>
              <span className="portrait-cross cross-one">+</span>
              <span className="portrait-cross cross-two">+</span>
            </div>

            <div className="visual-bottomline">
              <div>
                <span>CURRENT MODE</span>
                <strong>LEARN · BUILD · IMPROVE</strong>
              </div>
              <span className="signal-bars">
                <i /><i /><i /><i /><i /><i /><i />
              </span>
            </div>
          </div>
        </div>

        <a href="#about" className="scroll-cue">
          <span className="scroll-line" />
          SCROLL TO EXPLORE ↓
        </a>
      </section>

      <section className="section-shell section-block" id="about">
        <div className="section-heading reveal">
          <span>01 / PROFILE</span>
          <span>A LITTLE ABOUT ME</span>
        </div>

        <div className="about-grid">
          <div className="about-title reveal">
            <p className="eyebrow">CURIOUS BY DEFAULT</p>
            <h2>
              LEARN.
              <br />
              <span>BUILD.</span>
              <br />
              <em>IMPROVE.</em>
            </h2>
          </div>

          <div className="about-content reveal">
            <p className="large-copy">
              I’m <strong>Bodasu Vayunandan Raj</strong>, an ECE student
              interested in understanding how technology works — from code and
              interfaces to connected devices and digital systems.
            </p>
            <p>
              I learn by making things, testing ideas and improving them.
              My interests include software development, embedded systems,
              IoT, web technologies and practical engineering projects.
            </p>
            <p>
              This portfolio documents what I’m learning, what I’m building
              and the direction I’m growing toward.
            </p>

            <div className="fact-grid">
              <div><span>01 / NAME</span><strong>Bodasu Vayunandan Raj</strong></div>
              <div><span>02 / FIELD</span><strong>Electronics & Communication</strong></div>
              <div><span>03 / COLLEGE</span><strong>Nalla Narasimha Reddy Engineering College</strong></div>
              <div><span>04 / LOCATION</span><strong>Hyderabad, India</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-block" id="work">
        <div className="section-heading reveal">
          <span>02 / SELECTED WORK</span>
          <span>IDEAS MADE TANGIBLE</span>
        </div>

        <div className="work-intro reveal">
          <h2>
            BUILT TO
            <br />
            <em>UNDERSTAND.</em>
          </h2>
          <p>
            Engineering and development work focused on designing,
            implementing, testing and refining practical ideas.
          </p>
        </div>

        <article className="project-card reveal">
          <div className="project-top">
            <span>PROJECT / 001</span>
            <span className="project-status"><span className="status-dot" /> RTL DESIGN</span>
          </div>

          <div className="project-body">
            <div className="project-copy">
              <p className="eyebrow">DIGITAL SYSTEMS · VERILOG HDL</p>
              <h3>SYNCHRONOUS FIFO MEMORY</h3>
              <p>
                RTL design and simulation of a synchronous First-In,
                First-Out memory. The project explores pointer management,
                read/write control, full and empty conditions, and
                clock-synchronous data flow.
              </p>
              <div className="tag-row">
                <span>VERILOG HDL</span>
                <span>RTL DESIGN</span>
                <span>TESTBENCH</span>
                <span>SIMULATION</span>
              </div>
            </div>

            <div className="fifo-visual">
              <div className="fifo-label">DATA FLOW / FIFO BUFFER</div>
              <div className="fifo-arrow">WRITE →</div>
              <div className="fifo-slots">
                <span>00</span><span>01</span><span>10</span><span>11</span>
              </div>
              <div className="fifo-pointer">
                <span>WR_PTR</span><span>RD_PTR</span>
              </div>
              <div className="fifo-footer">
                <span>CLK ↑</span><span>SYNC MEMORY</span>
              </div>
            </div>
          </div>

          <div className="project-bottom">
            <span>01 — DIGITAL DESIGN</span>
            <span>DESIGN · VERIFY · SIMULATE</span>
          </div>
        </article>

        <div className="project-note reveal">
          <span>↗</span>
          <p>More projects will be added as they are completed and documented.</p>
        </div>
      </section>

      <section className="section-shell section-block" id="skills">
        <div className="section-heading reveal">
          <span>03 / TOOLKIT</span>
          <span>SKILLS IN PROGRESS</span>
        </div>

        <div className="skills-header reveal">
          <h2>MY TECH<br /><em>STACK.</em></h2>
          <p>
            A growing toolkit across programming, web development,
            electronics and engineering tools.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map(([name, type], index) => (
            <div className="skill-card reveal" key={name}>
              <span className="skill-index">{String(index + 1).padStart(2, "0")}</span>
              <div><strong>{name}</strong><span>{type}</span></div>
              <span className="skill-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell section-block" id="journey">
        <div className="section-heading reveal">
          <span>04 / TIMELINE</span>
          <span>EDUCATION & DEVELOPMENT</span>
        </div>

        <div className="journey-layout">
          <div className="journey-heading reveal">
            <h2>THE<br /><em>JOURNEY.</em></h2>
            <p>Each stage adds a new layer. Keep learning and turn knowledge into practical ability.</p>
          </div>

          <div className="timeline">
            <article className="timeline-item reveal">
              <div className="timeline-marker">01</div>
              <div className="timeline-content">
                <span className="timeline-date">2024 — 2028</span>
                <h3>B.TECH — ELECTRONICS & COMMUNICATION ENGINEERING</h3>
                <p>Nalla Narasimha Reddy Engineering College</p>
                <span className="timeline-detail">Digital systems · Communication · Embedded technology</span>
              </div>
            </article>

            <article className="timeline-item reveal">
              <div className="timeline-marker">02</div>
              <div className="timeline-content">
                <span className="timeline-date">2022 — 2024</span>
                <h3>INTERMEDIATE</h3>
                <p>Narayana Junior College, Tarnaka</p>
                <span className="timeline-detail">Score: 703 / 1000</span>
              </div>
            </article>

            <article className="timeline-item reveal">
              <div className="timeline-marker">03</div>
              <div className="timeline-content">
                <span className="timeline-date">2022</span>
                <h3>SECONDARY SCHOOL CERTIFICATE</h3>
                <p>Vijaya Ratna</p>
                <span className="timeline-detail">Score: 97%</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-shell section-block" id="credentials">
        <div className="section-heading reveal">
          <span>05 / CREDENTIALS</span>
          <span>LEARNING IN MOTION</span>
        </div>

        <div className="credentials-intro reveal">
          <h2>PROOF OF<br /><em>PROGRESS.</em></h2>
          <p>Open a certificate to view its PDF. Each file must exist in the public folder.</p>
        </div>

        <div className="certificate-list">
          {certificates.map(([number, title, organization, period, file]) => (
            <article className="certificate-row reveal" key={number}>
              <span className="certificate-number">{number}</span>
              <div className="certificate-info">
                <h3>{title}</h3>
                <p>{organization}</p>
              </div>
              <span className="certificate-period">{period}</span>
              <a className="certificate-link" href={file} target="_blank" rel="noreferrer">
                VIEW PDF ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell section-block story-section" id="vayuverse">
        <div className="section-heading reveal">
          <span>06 / VAYUVERSE</span>
          <span>STORIES BEHIND THE BUILD</span>
        </div>

        <div className="story-layout">
          <div className="story-copy reveal">
            <p className="eyebrow">A SPACE TO SHARE THE PROCESS</p>
            <h2>NOT JUST<br /><em>THE FINISHED THING.</em></h2>
            <p>
              Vayuverse is where I share the stories around what I’m learning
              and creating: experiments that worked, ideas still taking shape,
              everyday moments, and the lessons in between.
            </p>
            <a
              className="button button-primary story-link"
              href="https://www.instagram.com/vayuversee/"
              target="_blank"
              rel="noreferrer"
            >
              FOLLOW @VAYUVERSEE ↗
            </a>
          </div>

          <a
            className="story-card reveal"
            href="https://www.instagram.com/vayuversee/"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Vayuversee on Instagram"
          >
            <span className="story-card-index">FIELD NOTES / 001</span>
            <span className="story-card-mark">V</span>
            <span className="story-card-handle">@VAYUVERSEE</span>
            <span className="story-card-caption">LEARN · MAKE · SHARE</span>
            <span className="story-card-arrow">↗</span>
          </a>
        </div>
      </section>
      <section className="section-shell contact-section" id="contact">
        <div className="section-heading reveal">
          <span>07 / CONNECTION</span>
          <span>OPEN CHANNEL</span>
        </div>

        <div className="contact-layout">
          <div className="contact-copy reveal">
            <p className="eyebrow">HAVE AN IDEA OR OPPORTUNITY?</p>
            <h2>LET’S<br /><em>CONNECT.</em></h2>
            <p>
              Interested in technology, engineering projects, internships or
              learning together? Send me a message.
            </p>
            <a className="button button-primary" href="mailto:rajvayunandan@gmail.com">
              EMAIL ME ↗
            </a>
          </div>

          <div className="contact-links reveal">
            {socials.map(([label, href], index) => (
              <a href={href} target="_blank" rel="noreferrer" key={label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{label}</strong>
                <span>↗</span>
              </a>
            ))}
            <a href="mailto:rajvayunandan@gmail.com">
              <span>04</span><strong>EMAIL</strong><span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <a href="#home" className="footer-brand">VAYU <span>// SIGNAL 28</span></a>
        <span>BUILT WITH CURIOSITY.</span>
        <span>HYDERABAD, INDIA · © 2026</span>
      </footer>
    </main>
  );
}

