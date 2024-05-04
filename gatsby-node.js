/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

plugins: [
  {
    resolve: `gatsby-source-stripe`,
    options: {
      objects: ['Balance', 'BalanceTransaction', 'Product', 'ApplicationFee', 'Sku', 'Subscription'],
      secretKey: 'sk_test_51MMdLGCM7ZpocpvZMrBEJjRCfzqBUxtIlBkjY9i441lu3pnJJEYeV3dLdlibuBOs9wJg2DscHysUISIJ1TAYD7PP00rtAgeOxG',
      downloadFiles: true,
    }
  }
]