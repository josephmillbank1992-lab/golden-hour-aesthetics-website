import { businessDetails } from "./site-content";

function readPublicUrl(value: string | undefined) {
  return value?.trim() ?? "";
}

const configuredBookingUrl = readPublicUrl(
  process.env.NEXT_PUBLIC_BOOKING_URL,
);

export const siteConfig = {
  booking: {
    isConfigured: Boolean(configuredBookingUrl),
    url:
      configuredBookingUrl ||
      `mailto:${businessDetails.email}?subject=Appointment enquiry`,
    label: configuredBookingUrl
      ? "Book an appointment"
      : "Enquire about an appointment",
  },
  social: {
    instagramUrl: readPublicUrl(process.env.NEXT_PUBLIC_INSTAGRAM_URL),
    facebookUrl: readPublicUrl(process.env.NEXT_PUBLIC_FACEBOOK_URL),
  },
  reviews: {
    readUrl: readPublicUrl(process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL),
    leaveUrl: readPublicUrl(process.env.NEXT_PUBLIC_GOOGLE_REVIEW_FORM_URL),
  },
};
