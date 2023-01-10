import React from "react"
import { Helmet } from "react-helmet"

export default function Seo({title, description, url, image}) {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <link rel="canonical" href={url}/>
        {image && <meta name="image" content={image} />}
        <meta name="keywords" content="Online Pizza Ordering, Online Food App, Fast Delivering Food"/>

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
