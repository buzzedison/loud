import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"

const Head = styled.h1`
  padding: 100px;
  text-align: center;
  font-weight: 800px;
  color: orange;
`
const Insight = ({ data }) => {
  const insight = data.allContentfulInsight.edges

  return (
    <Layout>
      <Container>
        <SEO title="Blog posts" />
        <Row>
          <Col sm={12}>
            <Head>{"We share with you what we know!"}</Head>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            {insight.map(({ node: post }) => (
              <div key={post.id}>
                <Link to={`/insight/${post.slug}`}>{post.title}</Link>
              </div>
            ))}
            <span className="mgBtm__24" />
            <Link to="/">Go back to the homepage</Link>
          </Col>

          <Col sm={6}>podcast</Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Insight

export const query = graphql`
  query BlogPostsPageQuery {
    allContentfulInsight(limit: 1000) {
      edges {
        node {
          id
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
    }
  }
`
