import type { NextConfig } from "next";

const bookingBackendUrl = (
  process.env.BOOKING_BACKEND_URL ||
  "https://golden-hour-booking-alpha.vercel.app"
).replace(/\/$/, "");

const nextConfig: NextConfig = {
  agentRules: false,
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/booking-app/:path*",
        destination: `${bookingBackendUrl}/booking-app/:path*`,
      },
      {
        source: "/book",
        destination: `${bookingBackendUrl}/book`,
      },
      {
        source: "/booking/:path*",
        destination: `${bookingBackendUrl}/booking/:path*`,
      },
      {
        source: "/manage-booking",
        destination: `${bookingBackendUrl}/manage-booking`,
      },
      {
        source: "/gift-cards/:path*",
        destination: `${bookingBackendUrl}/gift-cards/:path*`,
      },
      {
        source: "/memberships/:path*",
        destination: `${bookingBackendUrl}/memberships/:path*`,
      },
      {
        source: "/api/:path*",
        destination: `${bookingBackendUrl}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
