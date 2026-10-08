function readPublicUrl(value: string | undefined) {
  return value?.trim() ?? "";
}

const configuredBookingUrl = readPublicUrl(
  process.env.NEXT_PUBLIC_BOOKING_URL,
);

const bookingUrl =
  configuredBookingUrl ||
  "https://portal.aestheticnursesoftware.com/book-online/30984";

export const siteConfig = {
  booking: {
    url: bookingUrl,
    label: "Book an appointment",
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
