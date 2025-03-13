/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@use "src/styles/utils.scss" as *;`,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "one-howdoilook-team2.onrender.com",
        // port: "10000",
      },
      // {
      //   protocol: "https",
      //   hostname: "sprint-be-project.s3.ap-northeast-2.amazonaws.com",
      // },
    ],
  },
};
