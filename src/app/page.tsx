import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import {
  businessDetails,
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

      <SiteHeader />

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Aesthetics in Darley Abbey, Derby</p>
            <h1>
              Your features,
              <span>beautifully considered.</span>
            </h1>
            <p className="hero-introduction">
              Natural results, honest advice and client safety at the heart of
              every treatment.
            </p>
            <div className="hero-actions">
              <ButtonLink href={siteConfig.booking.url}>
                {siteConfig.booking.label}
              </ButtonLink>
              <ButtonLink href="#treatments" variant="text">
                Explore treatments
              </ButtonLink>
            </div>
            {!siteConfig.booking.isConfigured ? (
              <p className="booking-note">
                Online booking is being prepared. Enquiries are welcome by email.
              </p>
            ) : null}
          </div>

          <div className="hero-visual" aria-label="Golden Hour Aesthetics brand artwork">
            <div className="hero-glow" />
            <div className="hero-monogram">
              <Image
                src="/images/golden-hour-logo.png"
                alt="Golden Hour Aesthetics"
                width={400}
                height={500}
                priority
              />
            </div>
            <p className="hero-visual-caption">Ethical aesthetics · Personal care</p>
          </div>
        </section>

        <section className="intro section-shell" aria-labelledby="intro-title">
          <p className="intro-kicker">Welcome to Golden Hour</p>
          <div className="intro-grid">
            <h2 id="intro-title">
              A considered approach to feeling like your best self.
            </h2>
            <div className="intro-copy">
              <p>
                Every treatment begins with listening. Jess combines a warm,
                personal approach with specialist aesthetics training and more
                than a decade of experience across physical and mental healthcare.
              </p>
              <p>
                You can expect clear advice, a treatment plan shaped around you,
                and a calm professional environment where subtle, balanced results
                come first.
              </p>
            </div>
          </div>
        </section>

        <section className="treatments section-shell" id="treatments">
          <SectionHeading
            eyebrow="Treatments"
            title="Refined treatments. Never one-size-fits-all."
            description="Your appointment begins with an individual consultation. Treatment suitability, options and aftercare are discussed before you decide how to proceed."
          />

          <div className="treatment-list">
            {treatments.map((treatment) => (
              <article className="treatment-card" key={treatment.name}>
                <p className="treatment-number">{treatment.number}</p>
                <h3>{treatment.name}</h3>
                <p>{treatment.description}</p>
                <a href={siteConfig.booking.url}>
                  Enquire <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>

          <p className="treatment-footnote">
            Treatment pricing, appointment lengths, deposits and live availability
            are provided through the booking platform once it is connected.
          </p>
        </section>

        <section className="about" id="about">
          <div className="about-art" aria-hidden="true">
            <div className="about-portrait-placeholder">
              <span>J</span>
              <p>Portrait of Jess</p>
            </div>
          </div>
          <div className="about-copy">
            <p className="eyebrow">Meet Jess</p>
            <h2>Healthcare experience, specialist training and a genuinely personal touch.</h2>
            <p>
              I’m Jess, founder of Golden Hour Aesthetics. I have more than 10
              years’ experience working across physical and mental healthcare and
              I’m currently completing my BSc (Hons) in Adult Nursing at the
              University of Derby.
            </p>
            <p>
              I began training in aesthetics around three years ago and have
              continued to develop my knowledge through specialist training,
              conferences and ongoing professional development.
            </p>
            <p>
              I love natural, subtle and balanced results. I’ll always be honest
              if I don’t believe a treatment is right for you, and I’m happy to
              suggest a more suitable route or trusted practitioner where needed.
            </p>
            <p className="signature">Jess</p>
          </div>
        </section>

        <section className="why section-shell">
          <SectionHeading
            eyebrow="Why Golden Hour"
            title="A clinic experience built around trust."
            align="center"
          />

          <div className="reason-grid">
            {reasons.map((reason, index) => (
              <article key={reason.title}>
                <p className="reason-index">0{index + 1}</p>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="results section-shell" id="results">
          <SectionHeading
            eyebrow="Before & after"
            title="Real people. Subtle, considered results."
            description="Treatment photography will be added with client consent. Results vary and a consultation is required to assess individual suitability."
          />

          <div className="result-grid">
            {["Dermal filler result", "Skin treatment result"].map((label) => (
              <article className="result-card" key={label}>
                <div className="result-image-placeholder">
                  <div>
                    <span>Before</span>
                  </div>
                  <div>
                    <span>After</span>
                  </div>
                </div>
                <p>{label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="reviews" id="reviews">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Client words"
              title="Care that feels personal from start to finish."
              align="center"
            />

            <div className="review-grid">
              {reviewPlaceholders.map((review) => (
                <figure key={review.quote}>
                  <div className="review-stars" aria-label="Five stars">
                    ★ ★ ★ ★ ★
                  </div>
                  <blockquote>“{review.quote}”</blockquote>
                  <figcaption>{review.label}</figcaption>
                </figure>
              ))}
            </div>

            {siteConfig.reviews.readUrl || siteConfig.reviews.leaveUrl ? (
              <div className="review-actions">
                {siteConfig.reviews.readUrl ? (
                  <ButtonLink
                    href={siteConfig.reviews.readUrl}
                    variant="outline"
                    {...externalLinkProps}
                  >
                    Read Google reviews
                  </ButtonLink>
                ) : null}
                {siteConfig.reviews.leaveUrl ? (
                  <ButtonLink
                    href={siteConfig.reviews.leaveUrl}
                    variant="text"
                    {...externalLinkProps}
                  >
                    Leave a Google review
                  </ButtonLink>
                ) : null}
              </div>
            ) : null}
          </div>
        </section>

        <section className="visit section-shell" id="visit">
          <div className="visit-copy">
            <p className="eyebrow">Visit the clinic</p>
            <h2>A calm, welcoming space in Darley Abbey.</h2>
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
              Open in Google Maps
            </ButtonLink>
          </div>
          <div className="map-art" aria-label="Stylised map showing the clinic location">
            <div className="map-road map-road--one" />
            <div className="map-road map-road--two" />
            <div className="map-road map-road--three" />
            <div className="map-pin">
              <span>GH</span>
            </div>
            <p>Darley Abbey · Derby</p>
          </div>
        </section>

        <section className="final-cta">
          <p className="eyebrow">Your consultation</p>
          <h2>Ready when you are.</h2>
          <p>
            Begin with a conversation about your goals, your questions and what
            feels right for you.
          </p>
          <ButtonLink href={siteConfig.booking.url}>
            {siteConfig.booking.label}
          </ButtonLink>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <span className="footer-monogram">GH</span>
          <div>
            <p>Golden Hour</p>
            <span>Aesthetics</span>
          </div>
        </div>

        <div className="footer-contact">
          <p>Contact</p>
          <a href={businessDetails.phoneLink}>{businessDetails.phoneDisplay}</a>
          <a href={`mailto:${businessDetails.email}`}>{businessDetails.email}</a>
        </div>

        <div className="footer-social">
          <p>Follow</p>
          {siteConfig.social.instagramUrl ? (
            <a href={siteConfig.social.instagramUrl} {...externalLinkProps}>
              Instagram ↗
            </a>
          ) : null}
          {siteConfig.social.facebookUrl ? (
            <a href={siteConfig.social.facebookUrl} {...externalLinkProps}>
              Facebook ↗
            </a>
          ) : null}
          {!siteConfig.social.instagramUrl && !siteConfig.social.facebookUrl ? (
            <span>Instagram · Facebook</span>
          ) : null}
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Golden Hour Aesthetics by Jess.</p>
          <p>Appointments are subject to consultation and suitability.</p>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
