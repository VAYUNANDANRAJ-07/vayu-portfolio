"use client";

import { useEffect, useState } from "react";

const socialLinks = {
  linkedin:
    "https://www.linkedin.com/in/vayunandanraj-bodasu-b69294360/",
  github: "https://github.com/VAYUNANDANRAJ-07",
  instagram: "https://www.instagram.com/vayuuverse/",
  youtube:
    "https://www.youtube.com/channel/UCt4LXKk7YGEqrgAfvIlj37w",
};

const certificates = [
  {
    number: "01",
    title: "AWS CLOUD ENGINEER",
    subtitle: "Virtual Internship",
    organization: "AWS Skill Builder",
    period: "JUL — SEP 2025",
    file: "/certificates/aws-cloud-engineer.pdf",
  },
  {
    number: "02",
    title: "EMBEDDED SYSTEM DEVELOPER",
    subtitle: "Virtual Internship",
    organization: "Microchip",
    period: "OCT — DEC 2025",
    file: "/certificates/embedded-system-developer.pdf",
  },
  {
    number: "03",
    title: "AI — ML",
    subtitle: "Virtual Internship",
    organization: "Google for Developers",
    period: "JAN — MAR 2026",
    file: "/certificates/ai-ml.pdf",
  },
  {
    number: "04",
    title: "PYTHON FULL STACK",
    subtitle: "Development With Project",
    organization: "EduSkills Academy",
    period: "APR — JUN 2026",
    file: "/certificates/python-full-stack.pdf",
  },
  {
    number: "05",
    title: "ELECTRIC VEHICLE",
    subtitle: "Design & Simulation",
    organization: "EduSkills Academy",
    period: "JUN — AUG 2026",
    file: "/certificates/electric-vehicle.pdf",
  },
  {
    number: "06",
    title: "JAVA FULL STACK",
    subtitle: "Development With Project",
    organization: "EduSkills Academy",
    period: "AUG — OCT 2026",
    file: "/certificates/java-full-stack.pdf",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const current = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());

      setTime(current);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <nav className="navbar">
        <div className="nav-inner">
          <a href="#home" className="brand" onClick={closeMenu}>
            <span className="brand-symbol">V</span>

            <span className="brand-name">
              VAYU
              <small>VAYUNANDAN RAJ</small>
            </span>
          </a>

          <div className={`nav-menu ${menuOpen ? "nav-open" : ""}`}>
            <a href="#about" onClick={closeMenu}>
              ABOUT
            </a>

            <a href="#work" onClick={closeMenu}>
              WORK
            </a>

            <a href="#skills" onClick={closeMenu}>
              SKILLS
            </a>

            <a href="#journey" onClick={closeMenu}>
              JOURNEY
            </a>

            <a href="#certifications" onClick={closeMenu}>
              CREDENTIALS
            </a>

            <a href="#creator" onClick={closeMenu}>
              VAYUVERSE
            </a>

            <a href="#contact" onClick={closeMenu}>
              CONTACT
            </a>
          </div>

          <div className="nav-right">
            <a
              href="/Vayu-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="resume-link"
            >
              RESUME <span>↗</span>
            </a>

            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open navigation"
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero" id="home">
        <div className="hero-grid" />
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />

        <div className="hero-top">
          <div className="hero-location">
            <span className="tiny-dot" />
            HYDERABAD / INDIA
          </div>

          <div className="hero-clock">
            <span>IST</span>
            <strong>{time || "00:00:00"}</strong>
          </div>
        </div>

        <div className="hero-main">
          <div className="hero-copy">
            <p className="hero-kicker">
              ELECTRONICS & COMMUNICATION ENGINEERING
            </p>

            <h1>
              I BUILD
              <em>circuits.</em>
              <br />
              I CREATE
              <em>moments.</em>
            </h1>

            <div className="hero-intro">
              <span className="intro-line" />

              <p>
                I&apos;m <strong>Vayu</strong> — an ECE student, creator and
                curious mind building a space where technology and creativity
                can exist together.
              </p>
            </div>

            <div className="hero-actions">
              <a href="#work" className="hero-primary">
                SEE MY WORK
                <span>↓</span>
              </a>

              <a href="#creator" className="hero-secondary">
                ENTER VAYUVERSE
                <span>↗</span>
              </a>
            </div>
          </div>

          <div className="hero-portrait">
            <div className="portrait-backdrop" />

            <div className="portrait-frame">
              <div className="portrait-number">01</div>

              <img src="/profile.jpg" alt="Vayu" />

              <div className="portrait-caption">
                <span>VAYU</span>
                <small>ECE / CREATOR</small>
              </div>
            </div>

            <div className="floating-note note-one">
              <span>BASED IN</span>
              <strong>HYD</strong>
            </div>

            <div className="floating-note note-two">
              <span>IDENTITY</span>
              <strong>@VAYUVERSE</strong>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>2007 — PRESENT</span>
          <span>ECE / 2028</span>
          <span>ENGINEERING × CREATIVITY</span>

          <a href="#about">
            SCROLL TO EXPLORE
            <span>↓</span>
          </a>
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section className="about-section" id="about">
        <div className="paper-shape shape-about" />

        <div className="section-wrap">
          <div className="section-label">
            <span>01</span>
            A LITTLE ABOUT ME
          </div>

          <div className="about-layout">
            <div className="about-title">
              <p className="eyebrow">THE PERSON BEHIND THE SCREEN</p>

              <h2>
                A TECH
                <br />
                <i>mind</i> with
                <br />
                a creative
                <br />
                <strong>side.</strong>
              </h2>
            </div>

            <div className="about-text">
              <p className="large-copy">
                I&apos;m <strong>Bodasu Vayunandan Raj</strong>, known as
                Vayu — an Electronics & Communication Engineering student
                based in Hyderabad.
              </p>

              <p>
                I like learning by building, experimenting with technology,
                working on practical projects and creating visual content
                that feels personal rather than ordinary.
              </p>

              <p>
                Engineering gives me the logic. Content creation gives me the
                freedom to explore ideas, visuals and stories.
              </p>

              <div className="about-facts">
                <div>
                  <span>NAME</span>
                  <strong>BODASU VAYUNANDAN RAJ</strong>
                </div>

                <div>
                  <span>FIELD</span>
                  <strong>ELECTRONICS & COMMUNICATION</strong>
                </div>

                <div>
                  <span>COLLEGE</span>
                  <strong>NNRESGI</strong>
                </div>

                <div>
                  <span>LOCATION</span>
                  <strong>HYDERABAD, INDIA</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WORK
      ===================================================== */}

      <section className="work-section" id="work">
        <div className="section-wrap">
          <div className="section-label">
            <span>02</span>
            SOMETHING I BUILT
          </div>

          <div className="work-heading">
            <div>
              <p className="eyebrow">REAL-TIME PROJECT</p>

              <h2>
                FROM
                <br />
                <i>logic</i>
                <br />
                TO REALITY.
              </h2>
            </div>

            <p>
              A practical engineering project focused on memory organization,
              controlled data flow and synchronous operation.
            </p>
          </div>

          <article className="project-showcase">
            <div className="project-topline">
              <span>PROJECT / 001</span>
              <span>RTP</span>
              <span>VERILOG HDL</span>
            </div>

            <div className="project-content">
              <div className="project-name">
                <span>02 / ENGINEERING</span>

                <h3>
                  SYNCHRONOUS
                  <br />
                  <i>FIFO</i>
                  <br />
                  MEMORY
                </h3>

                <p>
                  A synchronous FIFO memory designed and simulated using
                  Verilog HDL.
                </p>
              </div>

              <div className="fifo-art">
                <div className="fifo-input">
                  DATA
                  <span>IN</span>
                </div>

                <div className="fifo-arrow">→</div>

                <div className="fifo-memory">
                  <div className="fifo-memory-title">
                    MEMORY
                    <small>FIFO BUFFER</small>
                  </div>

                  <div className="fifo-slots">
                    <span>00</span>
                    <span>01</span>
                    <span>02</span>
                    <span>03</span>
                    <span>04</span>
                    <span>05</span>
                  </div>

                  <div className="fifo-wave">
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                </div>

                <div className="fifo-arrow">→</div>

                <div className="fifo-input">
                  DATA
                  <span>OUT</span>
                </div>
              </div>
            </div>

            <div className="project-meta">
              <div>
                <span>TOOLS</span>
                <strong>VERILOG / SIMULATION</strong>
              </div>

              <div>
                <span>TYPE</span>
                <strong>REAL-TIME PROJECT</strong>
              </div>

              <div>
                <span>FOCUS</span>
                <strong>READ / WRITE CONTROL</strong>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          SKILLS
      ===================================================== */}

      <section className="skills-section" id="skills">
        <div className="section-wrap">
          <div className="section-label">
            <span>03</span>
            THINGS I KNOW
          </div>

          <div className="skills-intro">
            <h2>
              THE THINGS
              <br />
              <i>I&apos;M</i> LEARNING.
            </h2>

            <p>
              My skill set sits somewhere between engineering, technology and
              visual creativity.
            </p>
          </div>

          <div className="skills-orbit">
            <div className="orbit-center">
              <span>VAYU</span>
              <small>CURIOUS / ALWAYS</small>
            </div>

            <div className="skill-pill pill-one">
              <small>01</small>
              <strong>C / PYTHON</strong>
            </div>

            <div className="skill-pill pill-two">
              <small>02</small>
              <strong>WEB DEVELOPMENT</strong>
            </div>

            <div className="skill-pill pill-three">
              <small>03</small>
              <strong>IoT</strong>
            </div>

            <div className="skill-pill pill-four">
              <small>04</small>
              <strong>CONTENT CREATION</strong>
            </div>

            <div className="skill-pill pill-five">
              <small>05</small>
              <strong>VIDEO EDITING</strong>
            </div>

            <div className="skill-pill pill-six">
              <small>06</small>
              <strong>CANVA / VISUALS</strong>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          JOURNEY
      ===================================================== */}

      <section className="journey-section" id="journey">
        <div className="journey-tint" />

        <div className="section-wrap">
          <div className="section-label">
            <span>04</span>
            THE JOURNEY SO FAR
          </div>

          <div className="journey-header">
            <h2>
              STILL
              <br />
              <i>becoming.</i>
            </h2>

            <p>
              Every stage added something different — discipline, curiosity,
              direction and the confidence to build my own path.
            </p>
          </div>

          <div className="journey-list">
            <article className="journey-card">
              <div className="journey-year">2022</div>

              <div className="journey-marker">01</div>

              <div className="journey-info">
                <span>SECONDARY EDUCATION</span>

                <h3>VIJAYA RATNA</h3>

                <p>97% / 9.7</p>

                <small>HYDERABAD</small>
              </div>
            </article>

            <article className="journey-card">
              <div className="journey-year">2022 — 24</div>

              <div className="journey-marker">02</div>

              <div className="journey-info">
                <span>INTERMEDIATE</span>

                <h3>NARAYANA JUNIOR COLLEGE</h3>

                <p>703 / 1000</p>

                <small>TARNAKA</small>
              </div>
            </article>

            <article className="journey-card journey-current">
              <div className="journey-year">2024 — 28</div>

              <div className="journey-marker">03</div>

              <div className="journey-info">
                <span>B.TECH / ECE</span>

                <h3>
                  NALLA NARASIMHA REDDY EDUCATION SOCIETY&apos;S GROUP OF
                  INSTITUTIONS
                </h3>

                <p>ELECTRONICS & COMMUNICATION ENGINEERING</p>

                <small>HYDERABAD</small>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          CERTIFICATIONS
      ===================================================== */}

      <section className="cert-section" id="certifications">
        <div className="section-wrap">
          <div className="section-label">
            <span>05</span>
            CREDENTIALS
          </div>

          <div className="cert-header">
            <h2>
              PROOF
              <br />
              <i>OF</i>
              <br />
              PROGRESS.
            </h2>

            <div>
              <p>
                Six learning experiences across cloud, embedded systems,
                artificial intelligence, full-stack development and EV
                technology.
              </p>

              <span>2025 — 2026 / 06 CREDENTIALS</span>
            </div>
          </div>

          <div className="cert-grid">
            {certificates.map((certificate) => (
              <article className="cert-item" key={certificate.number}>
                <div className="cert-number">{certificate.number}</div>

                <div className="cert-content">
                  <span className="cert-type">
                    VIRTUAL INTERNSHIP
                  </span>

                  <h3>{certificate.title}</h3>

                  <p>{certificate.subtitle}</p>

                  <div className="cert-details">
                    <span>{certificate.organization}</span>
                    <span>{certificate.period}</span>
                  </div>
                </div>

                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-view"
                >
                  VIEW
                  <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CREATOR / VAYUVERSE
      ===================================================== */}

      <section className="creator-section" id="creator">
        <div className="creator-gradient" />
        <div className="creator-grid" />

        <div className="section-wrap">
          <div className="section-label creator-label">
            <span>06</span>
            THE CREATIVE SIDE
          </div>

          <div className="creator-heading">
            <p>WELCOME TO</p>

            <h2>
              VAYUU
              <br />
              <i>VERSE.</i>
            </h2>

            <div className="creator-stamp">
              <span>CONTENT</span>
              <strong>+</strong>
              <span>VISUALS</span>
              <strong>+</strong>
              <span>STORIES</span>
            </div>
          </div>

          <div className="creator-body">
            <div className="creator-manifesto">
              <p className="manifesto-small">
                NOT JUST CONTENT.
              </p>

              <h3>
                A WAY
                <br />
                <i>OF SEEING.</i>
              </h3>
            </div>

            <div className="creator-copy">
              <p>
                Content creation is the space where I experiment without
                limits — reels, videography, editing, visual ideas and the
                everyday moments that usually go unnoticed.
              </p>

              <p>
                I&apos;m building <strong>@VAYUVERSE</strong> as a place for
                those ideas to live.
              </p>

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="instagram-button"
              >
                EXPLORE @VAYUVERSE
                <span>↗</span>
              </a>
            </div>
          </div>

          <div className="creator-services">
            <div>
              <span>01</span>
              <strong>REELS</strong>
              <small>SHORT FORM / STORIES</small>
            </div>

            <div>
              <span>02</span>
              <strong>VIDEOGRAPHY</strong>
              <small>VISUAL MOMENTS</small>
            </div>

            <div>
              <span>03</span>
              <strong>EDITING</strong>
              <small>VIDEO / VISUALS</small>
            </div>

            <div>
              <span>04</span>
              <strong>STORYTELLING</strong>
              <small>IDEAS / PERSPECTIVE</small>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section className="contact-section" id="contact">
        <div className="contact-circle" />

        <div className="section-wrap">
          <div className="section-label">
            <span>07</span>
            SAY HELLO
          </div>

          <div className="contact-main">
            <div>
              <p className="eyebrow">HAVE AN IDEA?</p>

              <h2>
                LET&apos;S MAKE
                <br />
                <i>SOMETHING.</i>
              </h2>
            </div>

            <div className="contact-right">
              <p>
                Whether it&apos;s technology, content, collaboration or simply
                an interesting idea — I&apos;m always open to connecting.
              </p>

              <a
                href="mailto:Rajayanandan@gmail.com"
                className="contact-email"
              >
                Rajayanandan@gmail.com
                <span>↗</span>
              </a>
            </div>
          </div>

          <div className="social-row">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN <span>↗</span>
            </a>

            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
            >
              GITHUB <span>↗</span>
            </a>

            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
            >
              INSTAGRAM <span>↗</span>
            </a>

            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noreferrer"
            >
              YOUTUBE <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>
        <div className="footer-left">
          <strong>VAYU</strong>
          <span>ECE × CREATOR</span>
        </div>

        <div className="footer-center">
          MADE WITH CURIOSITY.
        </div>

        <div className="footer-right">
          HYDERABAD / INDIA
          <span>© 2026</span>
        </div>
      </footer>
    </main>
  );
}