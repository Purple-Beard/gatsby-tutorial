import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout
      pageTitle="Home"
      pageSummary="We offer a range of services, ranging from ___ to ___...">
      <StaticImage
        src="../images/interior.jpg"
        alt="A home interior"
      />
    </Layout>
  )
}

export const Head = () => (
  <>
    <title>Home | Sample</title>
    <meta name="description" />
  </>
)
export default IndexPage