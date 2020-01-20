const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Johannes Eslage",
    description:
      "Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",
    author: "@chrisbiscardi"
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: path.resolve("./src/components/Layout/Layout.js")
        }
      }
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Johannes Eslage",
        short_name: "Johannes Eslage",
        start_url: "/",
        background_color: "#222222",
        theme_color: "#222222",
        display: "minimal-ui",
        icon: "src/images/icon.png"
      }
    },
    "gatsby-plugin-offline"
  ]
};
