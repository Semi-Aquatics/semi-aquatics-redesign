const withImages = require('next-images');
module.exports = withImages({
    env: {
      SHOPIFY_ACCESS_TOKEN: process.env.SHOPIFY_ACCESS_TOKEN
    }
  });
