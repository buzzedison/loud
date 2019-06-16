import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Head = styled.h1`
  padding: 90px;
  color: black;
  font-weight: bold;
  text-align: center;
  font-size: 30px;
`

const Image = styled.div`
  max-width: 500px;
  padding-bottom: 30px;
`

const Main = styled.p`
  max-width: 950px;
  padding-bottom: 30px;
  color: black;
`
const BlogPost = ({ data }) => {
  const { title, body, image, tags } = data.contentfulInsight
  return (
    <Layout>
      <SEO title={title} />
      <div className="blogpost">
        <Head>{title}</Head>
        <center>
          <Image>
            <img alt={title} src={image.file.url} />
          </Image>
        </center>

        <center>
          {" "}
          <Main>{body.body}</Main>
        </center>
        <Link to="/insights">View more posts</Link>
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulInsight(slug: { eq: $slug }) {
      title
      slug
      body {
        body
      }
      image {
        file {
          url
        }
      }
      tags
    }
  }
`
