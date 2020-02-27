/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/img`
			}
    },
    {
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Re:Start Website',
				short_name: 'Re:Start',
				start_url: '/',
				background_color: '#18a0fb',
				theme_color: '#18a0fb',
				display: 'minimal-ui',
				icon: 'src/assets/img/restart-icon.jpg'
			}
		},
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`
  ],
}
