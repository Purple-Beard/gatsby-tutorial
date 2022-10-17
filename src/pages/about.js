import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
    <Layout
      pageTitle='About'
      pageSummary='Learn a bit more about what we do and what we can offer...'
    >
      <StaticImage 
        src='../images/interior(2).jpg'
      />
    </Layout>
  )
}

export const Head = () => (
  <>
    <title>About | Sample</title>
  </>
)
export default AboutPage