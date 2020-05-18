import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Accordian from '../components/Accordian'

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
      <h2>FAQ</h2>
      <Accordian title="What's with the name?">
        <p>The name "Yoix" doesn't have any meaning aside from an <a href="https://en.wikipedia.org/wiki/Yoix">abandoned programming language</a> created by AT&T in the 90s. I happened to have the domain name lying around and decided to put it to good use.</p>
      </Accordian>
      <Accordian title="What tech are you using?">
          <ul>
              <li><a href="https://python.org/">Python 3</a></li>
              <li><a href="https://scrapy.org/">Scrapy</a></li>
              <li><a href="https://spacy.io/">spaCy</a></li>
              <li><a href="https://www.mongodb.com/">MongoDB</a></li>
              <li><a href="https://www.gatsbyjs.org/">Gatsby.js</a></li>
              <li><a href="https://netlify.com">Netlify</a></li>
              <li><a href="https://newcss.net/">New.css</a></li>
          </ul>
      </Accordian>
    </Layout>
  )
}

export default IndexPage
