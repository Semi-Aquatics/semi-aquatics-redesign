const withImages = require('next-images');
const withVideos = require('next-videos');
const path = require('path')


module.exports = withVideos(withImages({
    env: {
      SHOPIFY_ACCESS_TOKEN: process.env.SHOPIFY_ACCESS_TOKEN,
      WEBSITE_LOCK_PASSWORD: process.env.WEBSITE_LOCK_PASSWORD
    },
    sassOptions: {
      fiber: false,
      includePaths: [path.join(__dirname, 'styles')],
    },
  }));