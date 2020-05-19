import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

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
      <SEO title="Forum AI Coming Soon" />
      <h1>Web Forum Analysis</h1>
      <p>{data.site.siteMetadata.description}</p>
      <nav>
        <a href="https://github.com/crock/forum-ai">GitHub</a>
        <a href="https://twitter.com/crocdomains">Twitter</a>
      </nav>
      <h2 style={{marginBottom: 15}}>FAQ</h2>
      <details>
        <summary>What tech are you using?</summary>
        <ul>
              <li><a href="https://python.org/">Python 3</a></li>
              <li><a href="https://scrapy.org/">Scrapy</a></li>
              <li><a href="https://spacy.io/">spaCy</a></li>
              <li><a href="https://www.mongodb.com/">MongoDB</a></li>
              <li><a href="https://www.gatsbyjs.org/">Gatsby.js</a></li>
              <li><a href="https://netlify.com">Netlify</a></li>
              <li><a href="https://newcss.net/">New.css</a></li>
          </ul>
      </details>
    </Layout>
  )
}

export default IndexPage
