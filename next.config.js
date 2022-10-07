/** @type {import('next').NextConfig} */



const { withContentlayer} = require('next-contentlayer')

const nextconfig = {
  reactStrictMode: true,
  disableImportAliasWarning: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
}


module.exports = withContentlayer(nextconfig)
