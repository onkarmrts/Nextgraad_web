// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['pdf-lib', 'qrcode', 'nodemailer', 'xlsx'],
};

export default nextConfig;