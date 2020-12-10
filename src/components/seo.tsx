import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface Props {
  description?: string
  lang: string
  meta?: {}
  title: string
  noCreateThumb?: boolean
  image?: string
}

function SEO({
  description,
  lang = 'pt-br',
  meta = [],
  title,
  image,
  noCreateThumb,
}: Props) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            thumbGeneratorUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const url = site.siteMetadata.siteUrl
  const { thumbGeneratorUrl } = site.siteMetadata
  const cover = 'assets/img/facadeImage.png'

  let ogImage = `${url}/${image || cover}`

  if (!image && !noCreateThumb) {
    const newTitle = title.split(' ').join('%20')
    ogImage = `${thumbGeneratorUrl}/api/thumbnail.png?title=${newTitle}`
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: ogImage,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:image:src`,
          content: ogImage,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
