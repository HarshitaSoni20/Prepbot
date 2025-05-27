import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};
// Uncomment if you want to redirect the root to sign-in page
// module.exports = {
//   async redirects() {
//     return [
//       {
//         source: '/',
//         destination: '/sign-in',
//         permanent: true,
//       },
//     ];
//   },
// };

export default nextConfig;
