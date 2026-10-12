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
        source: "/owner",
        destination: `${bookingBackendUrl}/login`,
      },
      {
        source: "/login",
        destination: `${bookingBackendUrl}/login`,
      },
      {
        source: "/mfa",
        destination: `${bookingBackendUrl}/mfa`,
      },
      {
        source: "/forgot-password",
        destination: `${bookingBackendUrl}/forgot-password`,
      },
      {
        source: "/reset-password",
        destination: `${bookingBackendUrl}/reset-password`,
      },
      {
        source: "/admin",
        destination: `${bookingBackendUrl}/admin`,
      },
      {
        source: "/auth/:path*",
        destination: `${bookingBackendUrl}/auth/:path*`,
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
