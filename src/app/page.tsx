import Image from "next/image";
import styles from "./page.module.css";

const services = [
  {
    number: "01",
    title: "Computer & Phone help",
    description:
      "Setup, slowdowns, updates, and those mysterious pop-ups. We’ll work through it together.",
    icon: "computer",
  },
  {
    number: "02",
    title: "Wi-Fi & home tech",
    description:
      "Wi-Fi, printers, smart-home gear, and security cameras—installed and working together.",
    icon: "wifi",
  },
  {
    number: "03",
    title: "Patient tech coaching",
    description:
      "Learn at your pace, ask every question, and leave feeling more confident.",
    icon: "chat",
  },
] as const;

function ServiceIcon({ name }: { name: (typeof services)[number]["icon"] }) {
  if (name === "computer") {
    return (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="5.5" y="7" width="29" height="21" rx="3" />
        <path d="M14 34h12M20 28v6M12 13h16v9H12z" />
      </svg>
    );
  }

  if (name === "wifi") {
    return (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M5 14.5a22 22 0 0 1 30 0M10 20a14.5 14.5 0 0 1 20 0m-15 5a7.3 7.3 0 0 1 10 0" />
        <circle cx="20" cy="31" r="1.7" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M7 9.5h26a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H18l-8 5v-5H7a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2Z" />
      <path d="M13 18h14m-14 5h9" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <a className={styles.skipLink} href="#main">
        Skip to content
      </a>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a className={styles.brand} href="#top" aria-label="Bert's Best Tech home">
            <Image
              className={styles.brandLogo}
              src="/bert-logo.webp"
              alt=""
              width={62}
              height={62}
              priority
            />
            <span className={styles.brandText}>
              <strong>Bert&apos;s Best Tech</strong>
              <span>Fox Valley, Wisconsin</span>
            </span>
          </a>
          <nav className={styles.nav} aria-label="Main navigation">
            <a href="#services">Tech help</a>
            <a href="#laughs">The funny side</a>
            <a className={styles.dataNav} href="#data">AI &amp; BI</a>
          </nav>
          <a className={styles.headerCta} href="#contact">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <main id="main">
        <section className={styles.hero} id="top" aria-labelledby="hero-title">
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                Neighborly tech help · Fox Valley, WI
              </p>
              <h1 id="hero-title">
                Good tech help.
                <br />
                <span>No geek speak.</span>
              </h1>
              <p className={styles.heroDescription}>
                Computers, Wi-Fi, and everyday tech can be a lot. Bert makes it
                feel simple again—with patient, down-to-earth help right here in
                the Fox Valley.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="#contact">
                  Tell Bert what&apos;s going on <span aria-hidden="true">↗</span>
                </a>
                <a className={styles.textButton} href="#services">
                  See how Bert can help <span aria-hidden="true">↓</span>
                </a>
              </div>
              <div className={styles.heroNote}>
                <span className={styles.noteCheck} aria-hidden="true">
                  ✓
                </span>
                No question is too small. Seriously.
              </div>
            </div>

            <div className={styles.heroArt}>
              <Image
                className={styles.mascot}
                src="/bert-hero.png"
                alt="Cartoon Bert smiling with crossed arms in a black polo and smartwatch, with the messages “Your Local Tech Buddy” and “Take a breath. We’ll figure it out.”"
                width={850}
                height={768}
                priority
                sizes="(max-width: 760px) 100vw, 45vw"
              />
            </div>
          </div>
          <div className={styles.heroGround} aria-hidden="true" />
        </section>

        <section className={styles.promiseBar} aria-label="What to expect">
          <div className={styles.promiseInner}>
            <p><span>01</span> Patient, never rushed</p>
            <p><span>02</span> Plain-English answers</p>
            <p><span>03</span> Right here in the Fox Valley</p>
          </div>
        </section>

        <section className={styles.servicesSection} id="services" aria-labelledby="services-title">
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.eyebrow}>The everyday tech stuff</p>
                <h2 id="services-title">Let&apos;s get it <em>working.</em></h2>
              </div>
              <p className={styles.sectionIntro}>
                Friendly help for the devices you use every day. We&apos;ll start
                with what&apos;s bugging you and take it one step at a time.
              </p>
            </div>

            <div className={styles.serviceGrid}>
              {services.map((service) => (
                <article className={styles.serviceCard} key={service.number}>
                  <div className={styles.serviceCardTop}>
                    <span className={styles.serviceIcon}>
                      <ServiceIcon name={service.icon} />
                    </span>
                    <span className={styles.serviceNumber}>{service.number}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#contact" aria-label={`Ask Bert about ${service.title}`}>
                    Ask Bert about this <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
            <p className={styles.serviceFootnote}>
              Not sure what you need? That&apos;s a perfectly good place to start.
            </p>
          </div>
        </section>

        <section className={styles.comedySection} id="laughs" aria-labelledby="comedy-title">
          <div className={styles.comedyInner}>
            <div className={styles.comedyCopy}>
              <p className={styles.eyebrow}>A little help. A lot of love.</p>
              <h2 id="comedy-title">
                Tech support is a
                <br />
                <em>family sport.</em>
              </h2>
              <p>
                We&apos;ve all been there: stuck on the phone for hours trying
                to figure something out. Let&apos;s turn those moments into
                something to laugh about—and bond over.
              </p>
              <span className={styles.comedyTag}>Bert&apos;s Best Skits</span>
            </div>
            <div className={styles.comedyCard} aria-label="A preview of Bert's comedy skits">
              <div className={styles.comedyQuote}>
                <span aria-hidden="true">&ldquo;</span>
                <p>
                  Dad... the last time your internet went out,
                  <br />
                  <strong>we didn&apos;t hear from you for three weeks!</strong>
                </p>
              </div>
              <div className={styles.comedyDoodle} aria-hidden="true">☺</div>
            </div>
          </div>
        </section>

        <section className={styles.dataSection} id="data" aria-labelledby="data-title">
          <div className={styles.dataInner}>
            <div className={styles.dataIntro}>
              <p className={styles.dataEyebrow}>
                <span className={styles.dataPulse} />
                Practical AI & business intelligence
              </p>
              <div className={styles.dataIntroCopy}>
                <h2 id="data-title">
                  Practical AI.
                  <br />
                  <span>Better decisions.</span>
                </h2>
                <p>
                  Have an idea to automate—or data that could work harder?
                  Let&apos;s turn it into something useful for you or your
                  business.
                </p>
              </div>
            </div>
            <div className={styles.dataOfferGrid}>
              <article className={styles.dataOfferCard}>
                <span className={styles.dataOfferLabel}>AI</span>
                <h3>Artificial intelligence &amp; automation</h3>
                <ul>
                  <li>Agentic workflows and task automation</li>
                  <li>Practical AI guidance, setup, and training</li>
                  <li>Connect AI tools to your existing processes</li>
                </ul>
                <a href="#contact">Have an idea? Let&apos;s talk <span aria-hidden="true">↗</span></a>
              </article>
              <article className={styles.dataOfferCard}>
                <span className={styles.dataOfferLabel}>BI</span>
                <h3>Business intelligence</h3>
                <ul>
                  <li>Data management, storage, and organization</li>
                  <li>Security, backup, and recovery planning</li>
                  <li>Dashboards, reporting, and forecasting</li>
                </ul>
                <a href="#contact">Make your data useful <span aria-hidden="true">↗</span></a>
              </article>
            </div>
            <div className={styles.dataVisual}>
              <div className={styles.dataGrid} aria-hidden="true" />
              <div className={styles.dataOrbit} aria-hidden="true" />
              <a
                className={styles.dataCore}
                href="#contact"
                aria-label="Free consultation: contact Bert"
              >
                <span>FREE</span>
                <strong aria-hidden="true">→</strong>
                <span>CONSULTATION</span>
              </a>
              <div className={`${styles.dataBar} ${styles.dataBarOne}`} />
              <div className={`${styles.dataBar} ${styles.dataBarTwo}`} />
              <div className={`${styles.dataBar} ${styles.dataBarThree}`} />
              <span className={styles.dataLabel} aria-hidden="true">MAKE THE SIGNAL CLEAR</span>
            </div>
          </div>
        </section>

        <section className={styles.contactSection} id="contact" aria-labelledby="contact-title">
          <div className={styles.contactInner}>
            <div>
              <p className={styles.eyebrow}>Start with what&apos;s going on</p>
              <h2 id="contact-title">
                We&apos;ll make tech
                <br />
                <em>less of a thing.</em>
              </h2>
            </div>
            <div className={styles.contactDetails}>
              <p>
                Tell Bert what&apos;s giving you trouble—and get a free quote.
                Not sure what you need? Start with a conversation.
              </p>
              <div className={styles.contactActions}>
                <a href="tel:+19202126601">
                  <span>Call Bert</span>
                  <strong>(920) 212-6601</strong>
                </a>
                <a href="sms:+19202126601">
                  <span>Send a text</span>
                  <strong>(920) 212-6601</strong>
                </a>
                <a href="mailto:bert@bertsbesttech.com">
                  <span>Email Bert</span>
                  <strong>bert@bertsbesttech.com</strong>
                </a>
                <a
                  href="https://www.facebook.com/people/Berts-Best-Tech/61596461640327/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Facebook</span>
                  <strong>Send Bert a message ↗</strong>
                </a>
              </div>
              <span className={styles.contactLocal}>
                Serving homes and small businesses across Wisconsin&apos;s Fox Valley.
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <a className={styles.footerBrand} href="#top">
            <Image
              className={styles.footerLogo}
              src="/bert-logo.webp"
              alt=""
              width={50}
              height={50}
            />
            <span>Bert&apos;s Best Tech</span>
          </a>
          <p>Good tech help. Good neighbors. Fox Valley, Wisconsin.</p>
          <a href="#top">Back to top ↑</a>
        </div>
        <div className={styles.footerBottom}>
          <span>© Bert&apos;s Best Tech</span>
          <span>Made for real life (and the occasional “did you try turning it off?”)</span>
        </div>
      </footer>
    </>
  );
}
