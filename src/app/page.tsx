import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import {
  businessDetails,
  navigationItems,
  reasons,
  treatments,
} from "@/content/site-content";
import { siteConfig } from "@/content/site-config";

const externalLinkProps = {
  target: "_blank",
  rel: "noreferrer",
};

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand-mark ${light ? "brand-mark--light" : ""}`}>
      <Image
        src={
          light
            ? "/images/golden-hour-logo-reverse.png"
            : "/images/golden-hour-logo-transparent.png"
        }
        alt="Golden Hour Aesthetics"
        width={light ? 1080 : 448}
        height={light ? 1350 : 339}
        priority
      />
    </span>
  );
}

function Sparkle() {
  return <span className="sparkle" aria-hidden="true">✦</span>;
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
          {siteConfig.booking.isConfigured ? "Book now" : "Enquire"}
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><Sparkle /> Ethical aesthetics in Darley Abbey</p>
            <h1>Natural results,<br /><em>beautifully you.</em></h1>
            <p className="hero-summary">
              Personalised, evidence-based treatments delivered with warmth,
              honesty and your safety at the heart of every appointment.
            </p>
            <div className="hero-actions">
              <ButtonLink href={siteConfig.booking.url}>{siteConfig.booking.label}</ButtonLink>
              <a className="text-link" href="#treatments">View treatments</a>
            </div>
            {!siteConfig.booking.isConfigured ? (
              <p className="booking-note">Online booking is coming soon. Email enquiries are open.</p>
            ) : null}
          </div>

          <figure className="hero-visual">
            <Image
              src="/images/instagram-clinic-consultation.jpg"
              alt="Jess welcoming a client in the Golden Hour treatment room"
              fill
              priority
              sizes="(max-width: 850px) 100vw, 55vw"
            />
            <figcaption>
              <Sparkle />
              <p>A relaxed, private setting where you can feel completely at ease.</p>
            </figcaption>
          </figure>
        </section>

        <div className="trust-strip" aria-label="Golden Hour treatment approach">
          <span>Natural-looking results</span>
          <span>Consultation-led</span>
          <span>Healthcare-informed</span>
          <span>Honest advice</span>
        </div>

        <section className="welcome-section" aria-labelledby="welcome-title">
          <div className="welcome-heading">
            <p className="eyebrow">Welcome to Golden Hour</p>
            <h2 id="welcome-title">A little refresh.<br />Never a different you.</h2>
          </div>
          <div className="welcome-copy">
            <p>
              Every appointment begins with a conversation. Jess takes time to
              understand what you want, explain your options and create a plan
              that feels considered rather than rushed.
            </p>
            <p>
              The focus is always on subtle, balanced results and a calm,
              comfortable experience from consultation through to aftercare.
            </p>
          </div>
          <figure className="welcome-detail">
            <Image
              src="/images/instagram-gift-vouchers.jpg"
              alt="Golden Hour Aesthetics branded gift vouchers"
              fill
              sizes="(max-width: 850px) 100vw, 26vw"
            />
          </figure>
        </section>

        <section className="treatments-section" id="treatments">
          <div className="section-heading section-heading--centered">
            <p className="eyebrow">Treatments</p>
            <h2>Made personal to you.</h2>
            <p>Thoughtful options for natural enhancement and healthier-looking skin.</p>
          </div>
          <div className="treatment-layout">
            <figure className="treatment-image">
              <Image
                src="/images/treatment-still-life.png"
                alt="Carefully prepared aesthetics treatment setting"
                fill
                sizes="(max-width: 850px) 100vw, 38vw"
              />
              <figcaption>Carefully prepared. Always consultation-led.</figcaption>
            </figure>
            <div className="treatment-grid">
              {treatments.map((treatment) => (
                <article className="treatment-card" key={treatment.name}>
                  <span className="treatment-number">{treatment.number}</span>
                  <h3>{treatment.name}</h3>
                  <p>{treatment.description}</p>
                  <a href={siteConfig.booking.url} aria-label={`Enquire about ${treatment.name}`}>
                    Ask about this treatment <span aria-hidden="true">→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-portrait-wrap">
            <figure className="about-portrait">
              <Image
                src="/images/instagram-jess-in-clinic.jpg"
                alt="Jess inside the Golden Hour Aesthetics clinic"
                fill
                sizes="(max-width: 850px) 100vw, 42vw"
              />
            </figure>
            <div className="about-badge"><strong>10+</strong><span>years in healthcare</span></div>
          </div>
          <div className="about-copy">
            <p className="eyebrow">Meet Jess</p>
            <h2>Friendly, honest care—with no pressure.</h2>
            <p>
              I’m Jess, founder of Golden Hour Aesthetics. I have more than 10
              years’ experience across physical and mental healthcare and I’m
              currently completing my BSc (Hons) in Adult Nursing at the
              University of Derby.
            </p>
            <p>
              I began training in aesthetics around three years ago and continue
              to develop through specialist training, conferences and ongoing
              professional development. If I do not believe a treatment is right
              for you, I will always be honest about it.
            </p>
            <div className="about-facts">
              <span>Natural approach</span><span>Ongoing development</span><span>Ethical advice</span>
            </div>
          </div>
        </section>

        <section className="principles-section" aria-labelledby="principles-title">
          <div className="section-heading">
            <p className="eyebrow">The Golden Hour difference</p>
            <h2 id="principles-title">Feel comfortable.<br />Feel informed.</h2>
          </div>
          <div className="principles-grid">
            {reasons.map((reason, index) => (
              <article key={reason.title}>
                <span aria-hidden="true">{["♡", "✦", "✓", "◌"][index]}</span>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="results-section" id="results">
          <div className="results-card">
            <p className="eyebrow">Real clients, real results</p>
            <h2>Subtle changes.<br />Confident smiles.</h2>
            <p>
              Before and after photography will be shared here with client
              consent. Every result is individual and every treatment begins
              with a suitability assessment.
            </p>
            <ButtonLink href={siteConfig.booking.url} variant="outline">Discuss your goals</ButtonLink>
          </div>
          <div className="results-visual" aria-hidden="true">
            <span>Before</span><Sparkle /><span>After</span>
            <p>Approved client imagery coming soon</p>
          </div>
        </section>

        <section className="reviews-section" id="reviews">
          <Sparkle />
          <p className="eyebrow">Client experience</p>
          <h2>Kind care is part of the treatment.</h2>
          <p>Read verified experiences on Google or share your own visit to Golden Hour Aesthetics.</p>
          <div className="review-actions">
            {siteConfig.reviews.readUrl ? (
              <ButtonLink href={siteConfig.reviews.readUrl} {...externalLinkProps}>Read Google reviews</ButtonLink>
            ) : (
              <span className="reviews-pending">Google reviews link coming soon</span>
            )}
            {siteConfig.reviews.leaveUrl ? (
              <ButtonLink href={siteConfig.reviews.leaveUrl} variant="outline" {...externalLinkProps}>Leave a review</ButtonLink>
            ) : null}
          </div>
        </section>

        <section className="visit-section" id="visit">
          <div className="visit-card">
            <p className="eyebrow">Visit Golden Hour</p>
            <h2>Your calm space in Darley Abbey.</h2>
            <address>{businessDetails.addressLines.map((line) => <span key={line}>{line}</span>)}</address>
            <ButtonLink href={businessDetails.mapUrl} variant="outline" {...externalLinkProps}>Get directions</ButtonLink>
          </div>
          <div className="visit-brand">
            <BrandMark light />
            <p>Private appointments · Warm welcome · Thoughtful aftercare</p>
          </div>
        </section>

        <section className="closing-section">
          <div>
            <p className="eyebrow">Ready when you are</p>
            <h2>Let’s talk about what feels right for you.</h2>
          </div>
          <div>
            <p>No pressure. No one-size-fits-all plan. Just honest, personalised advice.</p>
            <ButtonLink href={siteConfig.booking.url}>{siteConfig.booking.label}</ButtonLink>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <BrandMark light />
        <div className="footer-contact">
          <p>Contact</p><a href={businessDetails.phoneLink}>{businessDetails.phoneDisplay}</a>
          <a href={`mailto:${businessDetails.email}`}>{businessDetails.email}</a>
        </div>
        <div className="footer-social">
          <p>Follow</p>
          {siteConfig.social.instagramUrl ? <a href={siteConfig.social.instagramUrl} {...externalLinkProps}>Instagram ↗</a> : <span>Instagram</span>}
          {siteConfig.social.facebookUrl ? <a href={siteConfig.social.facebookUrl} {...externalLinkProps}>Facebook ↗</a> : <span>Facebook</span>}
        </div>
        <div className="footer-legal">
          <p>© {new Date().getFullYear()} Golden Hour Aesthetics by Jess.</p>
          <p>All treatments are subject to consultation and suitability.</p>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
