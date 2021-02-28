import React from "react"
// import Header from '../examples/Header'
import HeaderStatic from "../examples/HeaderStatic"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const examples = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data

  return (
    <Layout>
      <p>hello from examples page</p>
      <HeaderStatic />
      <h5>author: {author}</h5>
    </Layout>
  )
}

export const data = graphql`
  query {
    site {
      info: siteMetadata {
        author
        data
        description
        dscription
        person {
          age
          name
        }
        title
      }
    }
  }
`

export default examples
