const scriptSrc = [
  "'self'",
  "'unsafe-inline'",
  "'unsafe-eval'",
].join(" ");

const connectSrc = [
  "'self'",
  "https://*.supabase.co",
  "wss://*.supabase.co",
].join(" ");

const frameSrc = [
  "'self'",
  "https://open.spotify.com",
  "https://www.youtube.com",
  "https://www.youtube-nocookie.com",
].join(" ");

const imgSrc = [
  "'self'",
  "data:",
  "blob:",
  "https://i.ytimg.com",
  "https://i.scdn.co",
  "https://open.spotify.com",
].join(" ");

export const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src ${scriptSrc}`,
  "style-src 'self' 'unsafe-inline'",
  `img-src ${imgSrc}`,
  "font-src 'self'",
  `connect-src ${connectSrc}`,
  `frame-src ${frameSrc}`,
  "worker-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

export const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
];
