# Golden Hour Aesthetics: launch and search audit

Reviewed 6 October 2026 against all 20 items in the supplied image. Base commit: `be3fd51ff376ce9bd5b9241d195e78500eb201f8`. Sage and Glow is excluded; all ten explicitly listed repositories are included. The user authorized this merge into `preview/seo-foundations-20261006`. Non-Wix production branches are unchanged; Wix publishing remains a separate step. Page layouts, colours, images and content are preserved.

## Search changes

Social imagery and favicon metadata, stable sitemap entries and launch indexing control for the intended goldenhouraesthetics.co.uk domain. Existing page design retained.

## Verification

Production build passed; generated HTML/XML checks passed.

## 20-point checklist

| # | Item | Finding before publication | Work prepared | Remaining check |
|---|---|---|---|---|
| 1 | Privacy policy page | Missing dedicated policy page in the reviewed repository. | No policy invented. | Provide the actual business data practices and publish a policy linked from the footer. |
| 2 | Terms & conditions page | Missing dedicated terms page in the reviewed repository. | No terms invented. | Confirm booking/cancellation, delivery/refund or service terms as appropriate and publish/link them. |
| 3 | Secrets off the frontend | No obvious Stripe/GitHub/private-key literals found by the scoped current-source scan (0 matches). | Kept all new search code public-data only. | This does not verify history, deployed bundles, hosting secrets, CMS permissions or API authorization. Review those separately. |
| 4 | Force HTTPS | HTTPS response and HSTS observed on the tested homepage. | HTTPS canonical/URL work where needed. | Verify HTTP redirects and final production host after publication. |
| 5 | Cookie consent banner | No consent banner observed on tested homepages; third-party/hosting cookie behaviour not fully audited. | No generic consent banner added. | Inventory actual nonessential cookies, trackers and embeds; configure consent before any that need it. A banner is not automatically needed for a site using only essential storage. |
| 6 | Meta titles + descriptions | Present for the intended future domain. | Prepared shared or per-route titles, descriptions and confirmed HTTPS canonicals. | Recheck production after merge; keep preview indexing disabled where configured. |
| 7 | Social preview image | Missing/incomplete in source; Wix defaults may supply some metadata. | Added missing social metadata/images using existing brand assets; improved route URLs where needed. | Test an actual shared link after publication; brand/product images are usable foundation assets rather than bespoke social artwork. |
| 8 | Favicon | No explicit brand favicon in reviewed source; Wix defaults may differ. | Added missing favicon or explicit icon metadata. | Check browser and search favicon fetching on the published domain. |
| 9 | Sitemap + robots.txt | robots.txt: 200 text/plain; charset=utf-8; sitemap.xml: 200 application/xml | Added real crawl endpoints/files or corrected the domain; previews remain blocked until configured. | Recheck XML/text content types and all listed URLs after merge/deploy. |
| 10 | Alt text on images | No missing alt attributes in the mobile homepage samples. | New code uses text-only fallback or labelled brand assets. | A full multi-page accessibility review is still needed; decorative images and meaningful alternative text require human judgment. |
| 11 | Compress images | 0 repository images above 500 KB (500 KB is an audit flag, not a pass/fail standard). | Existing image assets reused; this PR does not batch-reencode them. | Review largest rendered images and responsive sizing. Remote Wix images need delivery-size measurements. |
| 12 | Check page load speed | Homepage response took 0.58 s in one request; this is not a Lighthouse or Core Web Vitals score. | Existing content and loading appearance preserved. | Run desktop/mobile Lighthouse and field Core Web Vitals after publication; review large images, fonts and any intro animation. |
| 13 | Fix colour contrast | Visual homepage sample reviewed; no full contrast certification. | No colour change: existing appearance preserved. | Measure all normal, hover, focus, disabled and image-overlay text states before calling this complete. |
| 14 | Mobile friendly | Phone-sized homepage reviewed at 390 × 844; no document-level horizontal overflow in the sample. | No broad redesign; primary mobile journeys retained. | Homepage sampling is not a full responsive audit. |
| 15 | Custom 404 page | HTTP 404 observed; generic/default missing-page presentation. | Existing missing-page design preserved. Metadata/status handling updated where applicable. | Verify real HTTP 404 after publication, especially Wix catch-all routes and Vercel static clean URLs. |
| 16 | Fix broken links | Known crawl-file failures or wrong canonical destinations found; primary homepage navigation reviewed. | Fixed crawl endpoints, canonical destinations, clean route links and the Sophellie HTTP booking link where applicable. | Full link crawl and external booking/social destination checks remain; policy links require real pages. |
| 17 | Form validation | No on-site form in reviewed pages; enquiries/booking use external routes. | Preserved existing form/cart implementation. | External booking/payment-provider validation is outside this repository audit. |
| 18 | Spam protection | No on-site enquiry form; external services handle the action. | No new CAPTCHA/provider configured. | Not applicable to on-site forms; external service controls were not tested. |
| 19 | Set up analytics | No explicit analytics implementation found; Wix/hosting dashboards were not verified. | No analytics account or tracking ID invented. | Verify actual data arrives; configure measurement, conversions and any required consent. |
| 20 | One clear call to action | Clear primary booking, enquiry or shopping action visible in the mobile homepage sample. | Primary actions retained; local Glow shop filter/Add/basket flow checked. | Confirm external booking/contact journeys after publication; live payments and enquiry submissions were not performed. |

## AI-search scope

This merge covers crawl routing, accurate metadata, consistent business identity and factual structured data. Full initial HTML content is available on the existing Next.js/static sites and prerendered on Website Mill. Wix keeps its existing client-rendered content and requires further server-readable content work. Universal robots rules permit ordinary search crawling on launched sites. Structured data is not a promise of AI recommendations or rich results. Full CMS catalogue/article rendering, Search Console, Business Profiles, Merchant Center, analytics and field performance remain separate verification steps.

Google guidance: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
