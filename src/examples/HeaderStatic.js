import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
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
    `}
    render={data => <h4>{data.site.info.dscription}</h4>}
  ></StaticQuery>
)

export default ComponentName

