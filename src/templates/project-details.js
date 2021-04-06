import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../styles/projects-details.module.css"
import { graphql } from 'gatsby'

export default function ProjectDetails({ data }) {
    console.log(data.markdownRemark.frontmatter)
    const html = data.markdownRemark.html
    const {title, stack, featuredImg} = data.markdownRemark.frontmatter
    const image = getImage(featuredImg.childImageSharp.gatsbyImageData)
    return (
        <Layout>
            <div className={styles.details}>
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <div className={styles.featured}>
                    <GatsbyImage image={image} alt="Banner"/>
                    <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }}/>
                </div>
                {/*   */}
            </div>
        </Layout>
    )
}
export const query = graphql`
query ProjectDetails($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      stack
      title
      featuredImg {
        childImageSharp {
          gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                )
        }
      }
    }
  }
}
`