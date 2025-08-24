import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";
/**
 * @type {import('next').NextConfig}
 */

const nextConfig: NextConfig = {
  // config options here
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com'],
  },
};

const withPWA = withPWAInit({
  dest: 'public'
})

/*module.exports = {
  images: {
    remotePatterns: [
      new URL('https://moviesdatabase.p.rapidapi.com/titles**'),
      new URL('https://m.media-amazon.com/**')
    ],
  },
}*/

//export default nextConfig;
export default withPWA({
  ...nextConfig
})


//import {
//  PHASE_DEVELOPMENT_SERVER,
//  PHASE_PRODUCTION_BUILD,
//} from "next/constants.js";
//
///** @type {import("next").NextConfig} */
//const nextConfig = {
//  reactStrictMode: true,
//};
//
//const nextConfigFunction = async (phase) => {
//  if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
//    const withPWA = (await import("@ducanh2912/next-pwa")).default({
//      dest: "public",
//    });
//    return withPWA(nextConfig);
//  }
//  return nextConfig;
//};
//
//export default nextConfigFunction;
