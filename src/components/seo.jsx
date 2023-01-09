import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

export default function Seo(props) {
  const siteDetails = useStaticQuery(graphql`
    query GetSiteMetadata {
      site {
        siteMetadata {
          description
          image
          title
          siteUrl
        }
      }
    }
  `)

  const data = siteDetails.site.siteMetadata;

  const title = props.title || data.title;
  const description = props.description || data.description;
  const image = new URL(props.image || data.image,data.siteUrl);
  const url = new URL(props.path || '/', data.siteUrl);

  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <link rel="canonical" href={url}/>
        {image && <meta name="image" content={image} />}

        {/* for facebook */}
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {image && <meta name="og:image" content={image} />}

        {/* for twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        {image && <meta name="twitter:image" content={image} />}

    </Helmet>
  )
}
