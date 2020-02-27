import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            imgUrl
            twitter
          }
        }
      }
    ` 
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={site.siteMetadata.title}
      //   titleTemplate={`%s | ${site.siteMetadata.title}`} // will be useful when having multiple pages
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        // About viewport
        // + Include width=device-width to match the screen's width in device-independent pixels.
        // + Include initial-scale=1 to establish a 1:1 relationship between CSS pixels and device-independent pixels.
        {
            name: `viewport`,
            content: `width=device-width, initial-scale=1`
        },
        // Open Graph metadata
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: site.imgUrl,
        },
        {
          property: `og:url`,
          content: site.siteUrl, 
        },
        {
          property: `og:site_name`,
          content: "Re:Start Website", 
        },
        // Twitter metadata
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:site`,
          content: site.twitter,        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: site.imgUrl, 
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  title: `` 
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string, //TODO require when we have multiple pages
}

export default SEO
