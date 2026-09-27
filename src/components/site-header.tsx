import Image from "next/image";

import { navigationItems } from "@/content/site-content";
import { siteConfig } from "@/content/site-config";

import { ButtonLink } from "./button-link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand-link" href="#top" aria-label="Golden Hour Aesthetics home">
        <span className="brand-mark">
          <Image
            src="/images/golden-hour-logo.png"
            alt=""
            width={400}
            height={500}
            priority
          />
        </span>
        <span className="brand-name">Golden Hour Aesthetics</span>
      </a>

      <nav className="main-navigation" aria-label="Main navigation">
        {navigationItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <ButtonLink className="header-booking" href={siteConfig.booking.url}>
        {siteConfig.booking.label}
      </ButtonLink>
    </header>
  );
}
