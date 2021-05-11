import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
  <p className="text-red-600 text-center">HELLO, I am Gatsby Starter with pre-configured Tailwind CSS</p>
  </Layout>
)

export default IndexPage
