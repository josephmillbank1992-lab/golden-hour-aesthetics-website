import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import {
  businessDetails,
  navigationItems,
  reasons,
  reviewPlaceholders,
  treatments,
} from "@/content/site-content";
import { siteConfig } from "@/content/site-config";

const externalLinkProps = {
  target: "_blank",
  rel: "noreferrer",
};

const resultPlaceholders = [
  { number: "01", label: "Natural enhancement", tone: "stone" },
  { number: "02", label: "Skin quality", tone: "blush" },
];

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand-mark ${light ? "brand-mark--light" : ""}`}>
      <Image
        src={light ? "/images/golden-hour-logo-reverse.png" : "/images/golden-hour-logo.png"}
        alt="Golden Hour Aesthetics"
        width={1080}
        height={1350}
        priority
      />
    </span>
  );
}

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: businessDetails.name,
    url: `https://${businessDetails.domain}`,
    telephone: businessDetails.phoneDisplay,
    email: businessDetails.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "7 West Park Road",
      addressLocality: "Darley Abbey",
      addressRegion: "Derby",
      postalCode: "DE22 1GG",
      addressCountry: "GB",
    },
  };

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>

      <header className="site-header">
        <a className="header-brand" href="#top" aria-label="Golden Hour Aesthetics home">
          <BrandMark />
        </a>

        <nav className="main-navigation" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="header-booking" href={siteConfig.booking.url}>
          {siteConfig.booking.isConfigured ? "Book online" : "Enquire"}
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-kicker">
            <span>Darley Abbey, Derby</span>
            <span>Est. 2023</span>
          </div>

          <div className="hero-copy">
            <p className="eyebrow">Natural results, thoughtfully considered.</p>
            <h1>Feel like yourself.<em>Only fresher.</em></h1>
            <p className="hero-summary">
              Ethical, evidence-based aesthetic treatments delivered with honest
              advice, a gentle approach and your safety at the centre.
            </p>
            <div className="hero-actions">
              <ButtonLink href={siteConfig.booking.url}>{siteConfig.booking.label}</ButtonLink>
              <a className="text-link" href="#treatments">
                Explore treatments <span aria-hidden="true">↓</span>
              </a>
            </div>
            {!siteConfig.booking.isConfigured ? (
              <p className="booking-note">Online booking is being prepared. Email enquiries are open.</p>
            ) : null}
          </div>

          <aside className="hero-note" aria-label="Golden Hour approach">
            <span className="hero-note-number">01</span>
            <p>No pressure.<br />No over-treatment.<br />Just considered care.</p>
          </aside>

          <div className="hero-treatments" aria-label="Available treatments">
            {treatments.map((treatment) => (
              <span key={treatment.name}>{treatment.name}</span>
            ))}
          </div>
        </section>

        <section className="introduction" aria-labelledby="introduction-title">
          <div className="section-label"><span>01</span><p>The Golden Hour approach</p></div>
          <div className="introduction-heading">
            <p className="eyebrow">A calm space for honest conversations.</p>
            <h2 id="introduction-title">Listen first.<br />Treat <em>lightly.</em></h2>
          </div>
          <div className="introduction-copy">
            <p>
              Jess combines more than a decade in physical and mental healthcare
              with specialist aesthetics training and a clear preference for
              natural, balanced outcomes.
            </p>
            <p>
              Every appointment starts with listening. You will receive clear
              advice, a personalised plan and the space to make an informed choice
              without pressure.
            </p>
          </div>
        </section>

        <section className="treatments-section" id="treatments">
          <div className="treatments-heading">
            <div className="section-label section-label--light"><span>02</span><p>Treatments</p></div>
            <h2>Considered treatments.<br />Never a template.</h2>
            <p>
              Suitability and options are discussed in consultation. Prices,
              deposits and availability remain in the booking platform.
            </p>
          </div>

          <div className="treatment-list">
            {treatments.map((treatment) => (
              <article className="treatment-item" key={treatment.name}>
                <span>{treatment.number}</span>
                <h3>{treatment.name}</h3>
                <p>{treatment.description}</p>
                <a href={siteConfig.booking.url} aria-label={`Enquire about ${treatment.name}`}>
                  Enquire <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-card" aria-label="Portrait placeholder for Jess">
            <div className="portrait-placeholder">
              <span>Portrait of Jess</span>
              <small>Approved photography to be added</small>
            </div>
            <p>Founder · Aesthetic practitioner</p>
          </div>

          <div className="about-copy">
            <div className="section-label"><span>03</span><p>Meet Jess</p></div>
            <h2>Care is the<br />starting point.</h2>
            <div className="about-body">
              <p>
                I’m Jess, founder of Golden Hour Aesthetics. I have more than 10
                years’ experience across physical and mental healthcare and I’m
                currently completing my BSc (Hons) in Adult Nursing at the
                University of Derby.
              </p>
              <p>
                I began training in aesthetics around three years ago and have
                continued through specialist training, conferences and ongoing
                professional development. If a treatment is not right for you, I
                will always say so.
              </p>
            </div>
            <p className="signature">Jess</p>
          </div>

          <dl className="experience-list">
            <div><dt>Healthcare experience</dt><dd>10+ years</dd></div>
            <div><dt>Aesthetics experience</dt><dd>Around 3 years</dd></div>
            <div><dt>Current study</dt><dd>BSc (Hons) Adult Nursing</dd></div>
          </dl>
        </section>

        <section className="principles-section" aria-labelledby="principles-title">
          <div className="principles-heading">
            <div className="section-label"><span>04</span><p>Why Golden Hour</p></div>
            <h2 id="principles-title">Quiet confidence,<br />built on care.</h2>
          </div>
          <div className="principles-list">
            {reasons.map((reason, index) => (
              <article key={reason.title}>
                <span>0{index + 1}</span>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="results-section" id="results">
          <div className="results-heading">
            <div className="section-label"><span>05</span><p>Results</p></div>
            <h2>Subtle enough<br />to still feel like you.</h2>
            <p>
              Approved treatment photography will be added with client consent.
              Individual results vary and suitability is assessed in consultation.
            </p>
          </div>

          <div className="result-grid">
            {resultPlaceholders.map((result) => (
              <article className={`result-card result-card--${result.tone}`} key={result.number}>
                <div className="result-image-placeholder"><span>Before</span><span>After</span></div>
                <div className="result-meta">
                  <span>{result.number}</span><p>{result.label}</p><span>Imagery pending</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="reviews-section" id="reviews">
          <div className="reviews-heading">
            <div className="section-label"><span>06</span><p>Client words</p></div>
            <h2>Warmly recommended.</h2>
            <div className="review-actions">
              {siteConfig.reviews.readUrl ? (
                <ButtonLink href={siteConfig.reviews.readUrl} variant="outline" {...externalLinkProps}>
                  Read Google reviews
                </ButtonLink>
              ) : null}
              {siteConfig.reviews.leaveUrl ? (
                <a className="text-link" href={siteConfig.reviews.leaveUrl} {...externalLinkProps}>
                  Leave a review <span aria-hidden="true">↗</span>
                </a>
              ) : null}
            </div>
          </div>

          <div className="review-list">
            {reviewPlaceholders.map((review, index) => (
              <figure key={review.quote}>
                <span>0{index + 1}</span>
                <blockquote>“{review.quote}”</blockquote>
                <figcaption>{review.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="visit-section" id="visit">
          <div className="visit-panel"><BrandMark light /><p>By appointment in Darley Abbey</p></div>
          <div className="visit-copy">
            <div className="section-label"><span>07</span><p>Visit the clinic</p></div>
            <h2>A private setting<br />in Darley Abbey.</h2>
            <address>
              {businessDetails.addressLines.map((line) => <span key={line}>{line}</span>)}
            </address>
            <ButtonLink href={businessDetails.mapUrl} variant="outline" {...externalLinkProps}>
              Open in Google Maps
            </ButtonLink>
          </div>
        </section>

        <section className="closing-section">
          <p className="eyebrow">Ready when you are.</p>
          <h2>Start with a<br /><em>conversation.</em></h2>
          <p>No pressure and no one-size-fits-all plan. Just clear advice about what is right for you.</p>
          <ButtonLink href={siteConfig.booking.url}>{siteConfig.booking.label}</ButtonLink>
        </section>
      </main>

      <footer className="site-footer">
        <BrandMark light />
        <div className="footer-contact">
          <p>Contact</p>
          <a href={businessDetails.phoneLink}>{businessDetails.phoneDisplay}</a>
          <a href={`mailto:${businessDetails.email}`}>{businessDetails.email}</a>
        </div>
        <div className="footer-social">
          <p>Follow</p>
          {siteConfig.social.instagramUrl ? (
            <a href={siteConfig.social.instagramUrl} {...externalLinkProps}>Instagram ↗</a>
          ) : <span>Instagram</span>}
          {siteConfig.social.facebookUrl ? (
            <a href={siteConfig.social.facebookUrl} {...externalLinkProps}>Facebook ↗</a>
          ) : <span>Facebook</span>}
        </div>
        <div className="footer-legal">
          <p>© {new Date().getFullYear()} Golden Hour Aesthetics by Jess.</p>
          <p>All treatments are subject to consultation and suitability.</p>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
