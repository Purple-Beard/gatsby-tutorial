module.exports = {
  siteMetadata: {
    title: `Sample Site`
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        icon: "./src/images/icon.png",
        theme_color: `#F6F7F1`,
      },
    },
  ],
}
