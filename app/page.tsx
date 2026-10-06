"use client";

import { useEffect, useState } from "react";

const socialLinks = {
  linkedin:
    "https://www.linkedin.com/in/vayunandanraj-bodasu-b69294360/",
  github: "https://github.com/VAYUNANDANRAJ-07",
  instagram: "https://www.instagram.com/vayuuverse/",
  youtube: "https://www.youtube.com/channel/UCt4LXKk7YGEqrgAfvIlj37w",
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
    title: "AI-ML",
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

    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="nav-inner">
          <a href="#home" className="logo" onClick={closeMenu}>
            <span className="logo-mark">V</span>

            <span className="logo-text">
              VAYU
              <small>ECE • CREATOR</small>
            </span>
          </a>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
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
              CERTS
            </a>

            <a href="#creator" onClick={closeMenu}>
              CREATOR
            </a>

            <a href="#contact" onClick={closeMenu}>
              CONTACT
            </a>

            <a
              href="/Vayu-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              RESUME ↗
            </a>
          </div>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}

      <section className="hero" id="home">
        <div className="hero-decoration hero-decoration-one" />
        <div className="hero-decoration hero-decoration-two" />

        <div className="hero-top">
          <div className="eyebrow">
            <span className="status-dot" />
            AVAILABLE / LEARNING / CREATING
          </div>

          <div className="hero-time">
            <span>HYDERABAD / IST</span>
            <strong>{time || "00:00:00"}</strong>
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-copy">
            <p className="signal-label">
              ECE STUDENT • CONTENT CREATOR
            </p>

            <h1>
              HELLO,
              <span>I&apos;M VAYU.</span>
              <span>LET&apos;S CREATE.</span>
            </h1>

            <p className="hero-description">
              Electronics & Communication Engineering student and content
              creator exploring technology, storytelling, visual content and
              digital creativity.
            </p>

            <div className="hero-buttons">
              <a href="#work" className="primary-button">
                EXPLORE WORK
                <span>↘</span>
              </a>

              <a
                href="#creator"
                className="secondary-button"
              >
                VIEW CREATIVE
                <span>↘</span>
              </a>
            </div>

            <div className="hero-role-list">
              <span>ENGINEERING</span>
              <i />
              <span>CONTENT</span>
              <i />
              <span>CREATIVE</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-frame">
              <div className="frame-corner frame-tl" />
              <div className="frame-corner frame-tr" />
              <div className="frame-corner frame-bl" />
              <div className="frame-corner frame-br" />

              <img src="/profile.jpg" alt="Vayu" />

              <div className="profile-tag">
                <strong>VAYU</strong>
                <span>ECE / CONTENT CREATOR</span>
              </div>
            </div>

            <div className="frequency-card">
              <span>BASED IN</span>
              <strong>HYD</strong>
              <small>INDIA</small>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>ECE / 2028</span>
          <span>CONTENT CREATOR</span>
          <span>@VAYUVERSE</span>
          <span className="hero-bottom-right">
            HYDERABAD / INDIA
          </span>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section className="section about-section" id="about">
        <div className="section-number">01</div>

        <div className="section-heading">
          <p>ABOUT / 001</p>

          <h2>
            ENGINEERING
            <br />
            <span>MEETS IDEAS.</span>
          </h2>
        </div>

        <div className="about-content">
          <div className="about-large">
            <p>
              I&apos;m <strong>Vayu</strong>, an Electronics & Communication
              Engineering student and content creator based in Hyderabad.
            </p>

            <p>
              I enjoy learning through practical work, exploring technology,
              creating digital content and turning ideas into experiences that
              people can connect with.
            </p>
          </div>

          <div className="about-data">
            <div>
              <span>FULL NAME</span>
              <strong>BODASU VAYUNANDAN RAJ</strong>
            </div>

            <div>
              <span>BRANCH</span>
              <strong>ELECTRONICS & COMMUNICATION</strong>
            </div>

            <div>
              <span>INSTITUTION</span>
              <strong>NNRESGI</strong>
            </div>

            <div>
              <span>ROLE</span>
              <strong>ECE • CONTENT CREATOR</strong>
            </div>

            <div>
              <span>LOCATION</span>
              <strong>HYDERABAD, INDIA</strong>
            </div>

            <div>
              <span>GRADUATION</span>
              <strong>2028</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WORK ================= */}

      <section className="section work-section" id="work">
        <div className="section-number">02</div>

        <div className="section-heading">
          <p>ENGINEERING / 002</p>

          <h2>
            ONE PROJECT.
            <br />
            <span>BUILT FOR REAL.</span>
          </h2>
        </div>

        <div className="project-card">
          <div className="project-header">
            <div>
              <span className="project-label">
                REAL-TIME PROJECT / 01
              </span>

              <h3>SYNCHRONOUS FIFO MEMORY</h3>

              <p>USING VERILOG</p>
            </div>

            <span className="project-year">RTP</span>
          </div>

          <div className="fifo-visual">
            <div className="data-label">DATA_IN</div>

            <div className="signal-arrow">→</div>

            <div className="fifo-box">
              <div className="fifo-title">FIFO MEMORY</div>

              <div className="memory-cells">
                <span>00</span>
                <span>01</span>
                <span>02</span>
                <span>03</span>
                <span>04</span>
                <span>05</span>
              </div>

              <div className="fifo-lines">
                <i />
                <i />
                <i />
              </div>
            </div>

            <div className="signal-arrow">→</div>

            <div className="data-label">DATA_OUT</div>
          </div>

          <div className="clock-row">
            <span>CLOCK</span>

            <div className="clock-wave">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>

          <div className="project-footer">
            <p>
              A synchronous FIFO memory design implemented using Verilog HDL,
              focusing on controlled read and write operations, memory
              organization and simulation-based verification.
            </p>

            <div className="tags">
              <span>VERILOG</span>
              <span>FIFO</span>
              <span>RTL</span>
              <span>SIMULATION</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}

      <section className="section skills-section" id="skills">
        <div className="section-number">03</div>

        <div className="section-heading">
          <p>SKILLS / 003</p>

          <h2>
            THE
            <br />
            <span>TOOLKIT.</span>
          </h2>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <span>01</span>

            <div>
              <h3>PROGRAMMING</h3>
              <p>C / PYTHON</p>
            </div>

            <div className="skill-line" />
          </div>

          <div className="skill-card">
            <span>02</span>

            <div>
              <h3>WEB DEVELOPMENT</h3>
              <p>WEB / DIGITAL</p>
            </div>

            <div className="skill-line" />
          </div>

          <div className="skill-card">
            <span>03</span>

            <div>
              <h3>IoT</h3>
              <p>SENSORS / CONNECTED SYSTEMS</p>
            </div>

            <div className="skill-line" />
          </div>

          <div className="skill-card creator-skill">
            <span>04</span>

            <div>
              <h3>CONTENT CREATOR</h3>
              <p>VIDEO / REELS / CANVA / STORYTELLING</p>
            </div>

            <div className="skill-line" />
          </div>
        </div>
      </section>

      {/* ================= JOURNEY ================= */}

      <section className="section journey-section" id="journey">
        <div className="section-number">04</div>

        <div className="section-heading">
          <p>JOURNEY / 004</p>

          <h2>
            WHERE I
            <br />
            <span>STARTED.</span>
          </h2>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year">2022</div>

            <div className="timeline-dot" />

            <div className="timeline-content">
              <span>SECONDARY EDUCATION</span>

              <h3>VIJAYA RATNA</h3>

              <p>97%</p>

              <small>HYDERABAD</small>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2022—24</div>

            <div className="timeline-dot" />

            <div className="timeline-content">
              <span>INTERMEDIATE / MPC</span>

              <h3>NARAYANA JUNIOR COLLEGE</h3>

              <p>703 / 1000</p>

              <small>TARNAKA</small>
            </div>
          </div>

          <div className="timeline-item active">
            <div className="timeline-year">2024—28</div>

            <div className="timeline-dot" />

            <div className="timeline-content">
              <span>B.TECH / ECE</span>

              <h3>
                NALLA NARASIMHA REDDY EDUCATION SOCIETY&apos;S GROUP OF
                INSTITUTIONS
              </h3>

              <p>ELECTRONICS & COMMUNICATION ENGINEERING</p>

              <small>HYDERABAD</small>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATIONS ================= */}

      <section
        className="section certifications-section"
        id="certifications"
      >
        <div className="section-number">05</div>

        <div className="section-heading">
          <p>CREDENTIALS / 005</p>

          <h2>
            LEARNING
            <br />
            <span>IN MOTION.</span>
          </h2>
        </div>

        <div className="cert-intro">
          <p>
            Virtual internships and technical learning experiences across
            cloud, embedded systems, AI-ML, full-stack development and
            electric vehicle technology.
          </p>

          <span>06 CREDENTIALS / 2025—26</span>
        </div>

        <div className="cert-grid">
          {certificates.map((certificate) => (
            <article className="cert-card" key={certificate.number}>
              <div className="cert-top">
                <span>{certificate.number}</span>
                <span>VIRTUAL INTERNSHIP</span>
              </div>

              <div className="cert-main">
                <span className="cert-small">CREDENTIAL</span>

                <h3>{certificate.title}</h3>

                <h4>{certificate.subtitle}</h4>

                <div className="cert-info">
                  <div>
                    <span>ORGANIZATION</span>
                    <strong>{certificate.organization}</strong>
                  </div>

                  <div>
                    <span>PERIOD</span>
                    <strong>{certificate.period}</strong>
                  </div>
                </div>
              </div>

              <div className="cert-bottom">
                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noreferrer"
                  className="certificate-button"
                >
                  VIEW CERTIFICATE
                  <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= CREATOR ================= */}

      <section className="section creator-section" id="creator">
        <div className="section-number">06</div>

        <div className="creator-top">
          <div>
            <p className="section-mini">
              CONTENT CREATION / 006
            </p>

            <h2>
              CREATE.
              <br />
              <span>CONNECT.</span>
              <br />
              <strong>EXPRESS.</strong>
            </h2>
          </div>

          <div className="creator-intro">
            <div className="creator-badge">
              <span className="creator-dot" />
              CREATOR MODE
            </div>

            <p>
              Engineering is one side of me. Content creation is where I
              explore ideas, moments, visuals and stories in my own way.
            </p>

            <p>
              Through reels, videography, editing and visual content, I
              experiment with different ways of turning everyday moments into
              something people can experience.
            </p>

            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              className="creator-button"
            >
              EXPLORE @VAYUVERSE
              <span>↗</span>
            </a>
          </div>
        </div>

        <div className="creator-cards">
          <div className="creator-card creator-card-large">
            <span>01</span>

            <div>
              <strong>CONTENT</strong>
              <p>Reels • Digital Stories • Ideas</p>
            </div>

            <span className="creator-arrow">↗</span>
          </div>

          <div className="creator-card">
            <span>02</span>

            <div>
              <strong>VIDEOGRAPHY</strong>
              <p>Visual Moments</p>
            </div>

            <span className="creator-arrow">↗</span>
          </div>

          <div className="creator-card">
            <span>03</span>

            <div>
              <strong>EDITING</strong>
              <p>Video • Visuals • Storytelling</p>
            </div>

            <span className="creator-arrow">↗</span>
          </div>
        </div>

        <div className="creator-handle">
          <span>CREATOR IDENTITY</span>

          <strong>@VAYUVERSE</strong>

          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noreferrer"
          >
            INSTAGRAM ↗
          </a>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <p className="section-mini">CONTACT / 007</p>

          <h2>
            LET&apos;S
            <br />
            <span>CONNECT.</span>
          </h2>

          <p className="contact-subtitle">
            Engineering, ideas, content or collaboration —
            <br />
            feel free to reach out.
          </p>

          <a
            href="mailto:Rajayanandan@gmail.com"
            className="email-link"
          >
            Rajayanandan@gmail.com ↗
          </a>

          <div className="socials">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN ↗
            </a>

            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
            >
              GITHUB ↗
            </a>

            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
            >
              INSTAGRAM ↗
            </a>

            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noreferrer"
            >
              YOUTUBE ↗
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer>
        <div className="footer-brand">
          <strong>VAYU</strong>
          <span>ECE • CREATOR</span>
        </div>

        <p>DESIGNED & BUILT BY VAYU © 2026</p>

        <span>HYDERABAD / INDIA</span>
      </footer>
    </main>
  );
}