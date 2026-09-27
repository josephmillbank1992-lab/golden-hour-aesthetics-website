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
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Golden Hour Aesthetics home">
          <span className="brand-logo">
            <Image
              src="/images/golden-hour-logo.png"
              alt=""
              width={400}
              height={500}
              priority
            />
          </span>
          <span className="brand-copy">
            Golden Hour
            <small>Aesthetics by Jess</small>
          </span>
        </a>

        <nav className="main-navigation" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="nav-booking" href={siteConfig.booking.url}>
          {siteConfig.booking.isConfigured ? "Book" : "Enquire"}
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-sun" aria-hidden="true">
            <span className="sun-ring sun-ring--one" />
            <span className="sun-ring sun-ring--two" />
            <span className="sun-core" />
          </div>

          <p className="hero-location">Darley Abbey · Derby</p>
          <p className="hero-index">Est. 2023 / 52.94°N</p>

          <div className="hero-copy">
            <p className="overline">Ethical aesthetics. Precisely personal.</p>
            <h1>
              Subtle work.
              <span>Warmly done.</span>
            </h1>
            <p className="hero-summary">
              Evidence-led aesthetic treatments shaped around your face, your
              comfort and your version of natural.
            </p>

            <div className="hero-actions">
              <ButtonLink href={siteConfig.booking.url}>
                {siteConfig.booking.label}
              </ButtonLink>
              <a className="quiet-link" href="#treatments">
                View treatment index <span aria-hidden="true">↓</span>
              </a>
            </div>

            {!siteConfig.booking.isConfigured ? (
              <p className="booking-note">
                Online booking is being prepared. Email enquiries are open.
              </p>
            ) : null}
          </div>

          <div className="hero-stamp" aria-label="Golden Hour Aesthetics">
            <Image
              src="/images/golden-hour-logo.png"
              alt="Golden Hour Aesthetics"
              width={400}
              height={500}
              priority
            />
          </div>

          <div className="hero-footer">
            <span>Dermal fillers</span>
            <span>Botulinum toxin</span>
            <span>Skin boosters</span>
            <span>Polynucleotides</span>
          </div>
        </section>

        <section className="opening-statement" aria-labelledby="statement-title">
          <div className="statement-label">
            <span>01</span>
            <p>The Golden Hour approach</p>
          </div>

          <div className="statement-copy">
            <p className="overline">Good treatment begins before the treatment.</p>
            <h2 id="statement-title">
              Listen closely.
              <br />
              Plan carefully.
              <br />
              <em>Change lightly.</em>
            </h2>
          </div>

          <div className="statement-detail">
            <p>
              Jess combines more than a decade in physical and mental healthcare
              with specialist aesthetics training and a clear preference for
              natural, balanced outcomes.
            </p>
            <p>
              You will receive honest advice, a plan shaped around you and the
              space to make an informed decision without pressure.
            </p>
          </div>
        </section>

        <section className="treatment-section" id="treatments">
          <div className="section-intro">
            <div>
              <span>02</span>
              <p>Treatment index</p>
            </div>
            <h2>
              Four routes.
              <br />
              One considered approach.
            </h2>
            <p>
              Suitability and treatment options are discussed in consultation.
              Prices, deposits and availability will live in the booking platform.
            </p>
          </div>

          <div className="treatment-index">
            {treatments.map((treatment) => (
              <article className="treatment-row" key={treatment.name}>
                <span className="treatment-number">{treatment.number}</span>
                <h3>{treatment.name}</h3>
                <p>{treatment.description}</p>
                <a href={siteConfig.booking.url} aria-label={`Enquire about ${treatment.name}`}>
                  <span>Enquire</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="profile-section" id="about">
          <div className="profile-sidebar">
            <p className="profile-vertical">Meet the practitioner</p>
            <div className="profile-swatch" aria-hidden="true">
              <span>J</span>
            </div>
          </div>

          <div className="profile-copy">
            <div className="section-tag">
              <span>03</span>
              <p>Jess / Founder</p>
            </div>
            <h2>
              Clear thinking.
              <br />
              Calm energy.
            </h2>
            <div className="profile-columns">
              <p>
                I’m Jess, founder of Golden Hour Aesthetics. I have more than 10
                years’ experience across physical and mental healthcare and I’m
                currently completing my BSc (Hons) in Adult Nursing at the
                University of Derby.
              </p>
              <p>
                I began training in aesthetics around three years ago. Since then,
                I’ve continued through specialist training, conferences and ongoing
                professional development. If a treatment is not right for you, I’ll
                always say so.
              </p>
            </div>
            <p className="profile-signoff">Jess — Golden Hour Aesthetics</p>
          </div>

          <div className="profile-data" aria-label="Jess's experience">
            <div>
              <strong>10+</strong>
              <span>years in healthcare</span>
            </div>
            <div>
              <strong>3</strong>
              <span>years in aesthetics</span>
            </div>
            <div>
              <strong>BSc</strong>
              <span>Adult Nursing in progress</span>
            </div>
          </div>
        </section>

        <section className="principles-section">
          <div className="principles-orbit" aria-hidden="true">
            <span className="orbit orbit--outer" />
            <span className="orbit orbit--inner" />
            <span className="orbit-dot orbit-dot--one" />
            <span className="orbit-dot orbit-dot--two" />
            <p>GH</p>
          </div>

          <div className="principles-copy">
            <div className="section-tag">
              <span>04</span>
              <p>The constants</p>
            </div>
            <h2>What never changes.</h2>
            <div className="principle-list">
              {reasons.map((reason) => (
                <article key={reason.title}>
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="results-section" id="results">
          <div className="results-heading">
            <div className="section-tag">
              <span>05</span>
              <p>Results log</p>
            </div>
            <h2>Subtle enough to feel like you.</h2>
            <p>
              Approved treatment photography will be added with client consent.
              Individual results vary and suitability is assessed in consultation.
            </p>
          </div>

          <div className="results-reel">
            {["Dermal filler study", "Skin quality study"].map((label, index) => (
              <article className="result-frame" key={label}>
                <div className={`result-visual result-visual--${index + 1}`}>
                  <span className="result-side">Before</span>
                  <span className="result-divider" />
                  <span className="result-side">After</span>
                  <span className="result-light" />
                </div>
                <div className="result-caption">
                  <span>Study 0{index + 1}</span>
                  <p>{label}</p>
                  <span>Imagery pending</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="reviews-section" id="reviews">
          <div className="review-title">
            <div className="section-tag">
              <span>06</span>
              <p>Client notes</p>
            </div>
            <h2>
              How care
              <br />
              should feel.
            </h2>
            {siteConfig.reviews.readUrl ? (
              <ButtonLink
                href={siteConfig.reviews.readUrl}
                variant="outline"
                {...externalLinkProps}
              >
                Read Google reviews
              </ButtonLink>
            ) : null}
          </div>

          <div className="review-notes">
            {reviewPlaceholders.map((review, index) => (
              <figure className={`review-note review-note--${index + 1}`} key={review.quote}>
                <span className="note-number">0{index + 1}</span>
                <blockquote>“{review.quote}”</blockquote>
                <figcaption>{review.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="visit-section" id="visit">
          <div className="visit-map" aria-label="Abstract map showing the clinic in Darley Abbey">
            <span className="map-line map-line--one" />
            <span className="map-line map-line--two" />
            <span className="map-line map-line--three" />
            <span className="map-point">GH</span>
            <p>52.9414° N / 1.4849° W</p>
          </div>

          <div className="visit-copy">
            <div className="section-tag">
              <span>07</span>
              <p>Find the clinic</p>
            </div>
            <h2>
              Darley Abbey,
              <br />
              Derby.
            </h2>
            <address>
              {businessDetails.addressLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
            <ButtonLink
              href={businessDetails.mapUrl}
              variant="outline"
              {...externalLinkProps}
            >
              Open map
            </ButtonLink>
          </div>
        </section>

        <section className="closing-section">
          <p className="overline">A considered first step</p>
          <h2>
            Start with
            <br />
            a conversation.
          </h2>
          <ButtonLink href={siteConfig.booking.url}>
            {siteConfig.booking.label}
          </ButtonLink>
          <p>
            No pressure. No one-size-fits-all plan.
            <br />
            Just clear advice about what is right for you.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-wordmark">
          <span>Golden</span>
          <span>Hour</span>
        </div>

        <div className="footer-details">
          <div>
            <p>Contact</p>
            <a href={businessDetails.phoneLink}>{businessDetails.phoneDisplay}</a>
            <a href={`mailto:${businessDetails.email}`}>{businessDetails.email}</a>
          </div>
          <div>
            <p>Social</p>
            {siteConfig.social.instagramUrl ? (
              <a href={siteConfig.social.instagramUrl} {...externalLinkProps}>
                Instagram ↗
              </a>
            ) : (
              <span>Instagram</span>
            )}
            {siteConfig.social.facebookUrl ? (
              <a href={siteConfig.social.facebookUrl} {...externalLinkProps}>
                Facebook ↗
              </a>
            ) : (
              <span>Facebook</span>
            )}
          </div>
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
