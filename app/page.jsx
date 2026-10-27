"use client";

import Image from "next/image";
import Link from "next/link";

const platformFeatures = [
  {
    icon: "⌕",
    title: "Cloud Asset Discovery",
    description: "Automatically discover and map all cloud resources.",
  },
  {
    icon: "♢",
    title: "Misconfiguration Detection",
    description: "Find security misconfigurations before they become threats.",
  },
  {
    icon: "⌘",
    title: "Attack Path Analysis",
    description: "Understand how risks are connected across your cloud.",
  },
  {
    icon: "▤",
    title: "Compliance Monitoring",
    description: "Stay compliant with industry standards and internal policies.",
  },
];

const benefits = [
  { icon: "◎", title: "Unified Visibility", description: "See all your cloud assets in one place." },
  { icon: "◉", title: "Prioritize Real Risks", description: "Focus on what matters most." },
  { icon: "ϟ", title: "Faster Remediation", description: "Get actionable insights to fix risks quickly." },
  { icon: "▰", title: "Scalable Architecture", description: "Built for startups to enterprises." },
];

const orbitFeatures = [
  { icon: "◈", label: "Cloud Assets", position: "orbit-top" },
  { icon: "◎", label: "Risk Context", position: "orbit-right" },
  { icon: "↗", label: "Actionable Insights", position: "orbit-bottom-right" },
  { icon: "◉", label: "Cost Intelligence", position: "orbit-bottom" },
  { icon: "⌘", label: "Threat Detection", position: "orbit-bottom-left" },
  { icon: "↻", label: "Cloud Governance", position: "orbit-left" },
];

const footerGroups = [
  { title: "Platform", links: ["Overview", "Features", "Pricing"] },
  { title: "Solutions", links: ["By Industry", "Use Cases", "Success Stories"] },
  { title: "Security", links: ["Our Approach", "Compliance", "Best Practices"] },
  { title: "Resources", links: ["Blog", "Documentation", "Support"] },
  { title: "About Us", links: ["Our Mission", "Careers", "Company"] },
];

export default function HomePage() {
  return (
    <main className="buv-page">

      {/* HEADER */}
      <header className="buv-header">
        <div className="buv-header-inner">
          <Link href="/" className="buv-brand">
            <Image
              src="/images/buvcloud-globe.png"
              alt="BUVCloud"
              width={46}
              height={46}
              priority
            />
            <span>BUVCloud</span>
          </Link>

          <nav className="buv-nav" aria-label="Main navigation">
            <a href="#platform">Platform <span>⌄</span></a>
            <a href="#solutions">Solutions <span>⌄</span></a>
            <a href="#security">Security <span>⌄</span></a>
            <a href="#resources">Resources <span>⌄</span></a>
            <a href="#about">About Us</a>
          </nav>

          <div className="buv-header-actions">
            <button className="search-button" aria-label="Search">⌕</button>
            <Link href="/login" className="signin-button">Sign In</Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="buv-hero" id="about">
        <div className="hero-content">
          <p className="hero-label">CLOUD SECURITY FOR A SAFER TOMORROW</p>

          <h1>
            Secure Your Cloud.
            <br />
            Move Forward
            <br />
            with <span>Confidence.</span>
          </h1>

          <p className="hero-description">
            BUVCloud helps businesses discover, protect and continuously
            monitor their cloud environments with an agentless, unified
            security platform.
          </p>

          {/* Explore Platform is the only primary CTA */}
          <div className="hero-buttons">
            <a href="#platform" className="explore-button">
              Explore Platform <span>→</span>
            </a>
          </div>

          <div className="hero-trust">
            <div><span>⬡</span> Agentless</div>
            <div><span>▱</span> Multi-Cloud Ready</div>
            <div><span>↗</span> Enterprise-Grade</div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow" />
          <Image
            src="/images/buvcloud-globe.png"
            alt="BUVCloud cloud intelligence globe"
            width={700}
            height={700}
            className="hero-globe"
            priority
          />
        </div>
      </section>

      {/* PLATFORM */}
      <section className="buv-platform" id="platform">
        <div className="platform-intro">
          <p className="blue-label">BUVCLOUD PLATFORM</p>
          <h2>Comprehensive Cloud Security for Modern Teams</h2>
          <p>
            Everything you need to discover, assess and mitigate risks across
            your cloud environments in one unified platform.
          </p>
        </div>

        <div className="platform-feature-grid">
          {platformFeatures.map((feature) => (
            <article className="platform-feature" key={feature.title}>
              <span className="platform-feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>

        {/* Dashboard preview built with JSX and CSS */}
        <div className="dashboard">
          <div className="dashboard-topbar">
            <strong><span className="mini-cloud">☁</span> BUVCloud</strong>
            <div className="dashboard-search">⌕ &nbsp; Search...</div>
            <span>♧</span>
            <span className="profile-circle">R</span>
          </div>

          <div className="dashboard-body">
            <aside className="dashboard-sidebar">
              {["▦ Dashboard", "◇ Assets", "◎ Risks", "▤ Compliance", "▧ Reports", "⚙ Settings"].map((item, index) => (
                <div className={index === 0 ? "sidebar-active" : ""} key={item}>
                  {item}
                </div>
              ))}
            </aside>

            <div className="dashboard-main">
              <h3>Security Overview</h3>

              <div className="dashboard-stats">
                <div><small>Total Assets</small><strong>1,248</strong></div>
                <div><small>High Risk</small><strong className="stat-red">27</strong></div>
                <div><small>Medium Risk</small><strong className="stat-yellow">86</strong></div>
                <div><small>Low Risk</small><strong className="stat-green">312</strong></div>
              </div>

              <div className="chart-panel">
                <div className="chart-heading">
                  <strong>Risk Trend</strong>
                  <span>━ High &nbsp; ━ Medium &nbsp; ━ Low</span>
                </div>

                <div className="chart-grid">
                  {[80, 60, 40, 20, 0].map((number) => (
                    <div className="chart-row" key={number}>
                      <small>{number}</small>
                      <span />
                    </div>
                  ))}

                  <svg
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    className="chart-lines"
                    aria-label="Illustrative cloud risk trend chart"
                  >
                    <polyline
                      points="0,110 50,80 100,105 150,55 200,80 250,45 300,75 350,25 400,50 450,18 500,42"
                      fill="none"
                      stroke="#ff354f"
                      strokeWidth="2"
                    />
                    <polyline
                      points="0,95 50,105 100,85 150,100 200,70 250,85 300,65 350,88 400,67 450,80 500,55"
                      fill="none"
                      stroke="#ffc52e"
                      strokeWidth="2"
                    />
                    <polyline
                      points="0,125 50,115 100,125 150,90 200,105 250,65 300,95 350,50 400,72 450,45 500,60"
                      fill="none"
                      stroke="#12d9f5"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                <div className="chart-months">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month) => (
                    <span key={month}>{month}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BUVCloud */}
      <section className="buv-benefits" id="solutions">
        <div className="benefits-inner">
          <div className="benefits-intro">
            <p className="cyan-label">WHY BUVCLOUD?</p>
            <h2>Built for a Safer Digital Future</h2>
            <p>
              We believe cloud security should be simple, powerful and
              accessible to every organization.
            </p>
          </div>

          {benefits.map((benefit) => (
            <article className="benefit-item" key={benefit.title}>
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>

        <div className="mountain-scene" aria-hidden="true">
          <div className="mountain-back" />
          <div className="mountain-front" />
          <div className="mountain-lights" />
        </div>
      </section>

      {/* SECURITY */}
      <section className="orbit-section" id="security">
        <div className="orbit-copy">
          <p className="cyan-label">CONNECTED CLOUD INTELLIGENCE</p>
          <h2>One Connected View</h2>
          <p>
            Connect cloud assets, understand risk relationships, and turn
            security findings into actionable insights.
          </p>
        </div>

        <div className="orbit-visual">
          <div className="orbit-ring orbit-ring-outer" />
          <div className="orbit-ring orbit-ring-middle" />
          <div className="orbit-ring orbit-ring-inner" />

          {/* Three crossing connections inside the orbit */}
          <div className="orbit-cross cross-one" />
          <div className="orbit-cross cross-two" />
          <div className="orbit-cross cross-three" />

          <div className="orbit-center">
            <Image
              src="/images/buvcloud-globe.png"
              alt="BUVCloud connected intelligence"
              width={230}
              height={230}
            />
          </div>

          {orbitFeatures.map((feature) => (
            <div className={`orbit-chip ${feature.position}`} key={feature.label}>
              <span>{feature.icon}</span>
              <strong>{feature.label}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* RESOURCES */}
      <section className="resources-section" id="resources">
        <div>
          <p className="cyan-label">CLOUD KNOWLEDGE</p>
          <h2>Understand your cloud environment.</h2>
          <p>
            Explore cloud security concepts, risk awareness and practical
            ways to improve your cloud workflow.
          </p>
        </div>

        <a href="#platform" className="explore-button">
          Explore Platform <span>→</span>
        </a>
      </section>

      {/* FOOTER */}
      <footer className="buv-footer" id="about-footer">
        <div className="footer-main">
          <div className="footer-company">
            <Link href="/" className="buv-brand footer-logo">
              <Image
                src="/images/buvcloud-globe.png"
                alt="BUVCloud"
                width={40}
                height={40}
              />
              <span>BUVCloud</span>
            </Link>
            <p>
              Empowering organizations to build a safer, more resilient
              cloud infrastructure.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div className="footer-group" key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map((link) => (
                <a href="#platform" key={link}>{link}</a>
              ))}
            </div>
          ))}

          <div className="footer-group footer-connect">
            <h3>Connect</h3>
            <a href="mailto:buvcloud@gmail.com">✉ &nbsp; Contact</a>
            <div className="social-links">
              <a href="#resources" aria-label="LinkedIn">in</a>
              <a href="#resources" aria-label="X">𝕏</a>
              <a href="#resources" aria-label="YouTube">▶</a>
              <a href="#resources" aria-label="GitHub">⌘</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 BUVI TECHNOLOGY PRIVATE LIMITED. All rights reserved.</p>
          <div>
            <a href="#resources">Privacy Policy</a>
            <span>|</span>
            <a href="#resources">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}