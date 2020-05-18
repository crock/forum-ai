import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import TechStack from '../components/TechStack'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Yoix.com" />
      <h1>Web Forum Analysis</h1>
      <p>{data.site.siteMetadata.description}</p>
      <nav>
        <a href="https://github.com/crock/yoix">GitHub</a>
        <a href="https://twitter.com/crocdomains">Twitter</a>
      </nav>
      <article>
        <h3>What's with the name?</h3>
        <p>The name "Yoix" doesn't have any meaning aside from an <a href="https://en.wikipedia.org/wiki/Yoix">abandoned programming language</a> created by AT&T in the 90s. I happened to have th domain name lying around and decided to put it to good use.</p>
      </article>
      <TechStack />
    </Layout>
  )
}

export default IndexPage
