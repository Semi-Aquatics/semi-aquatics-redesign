const withImages = require('next-images');
const withVideos = require('next-videos');

module.exports = withVideos(withImages({
    env: {
      SHOPIFY_ACCESS_TOKEN: process.env.SHOPIFY_ACCESS_TOKEN
    }
  }));

