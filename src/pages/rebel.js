import React from "react"
import { MDBRow, MDBCol, MDBIcon } from "mdbreact"
import Layout from "../components/layout"
import styled from "styled-components"
import REBEL from "../images/rebelsmallb.png"
import BRANDING from "../images/brandingd.png"
const Head = styled.h1`
  padding-top: 40px;
  text-align: center;
  font-weight: bold;
`

const Image = styled.div`
  padding-top: 80px;
`
const Research = () => {
  return (
    <Layout>
      <section className="my-5">
        <Image>
          <center>
            {" "}
            <img src={REBEL} />
          </center>
        </Image>
        <center>
          {" "}
          <Head>World-class market research services.</Head>
        </center>
        <p className="lead black-text w-responsive text-center mx-auto mb-5">
          Identify and study consumers, their reactions to and preferences for
          specific products & services Understand your target market, your
          potential & existing customers and make informed decisions to drive
          success to your organization
        </p>

        <center>
          <MDBRow style={{ maxWidth: "950px" }}>
            <MDBCol lg="5" className="text-center text-lg-left">
              <img className="img-fluid" src={BRANDING} alt="" />
            </MDBCol>
            <MDBCol lg="7">
              <MDBRow className="mb-3">
                <MDBCol size="1">
                  <MDBIcon
                    icon="share"
                    size="lg"
                    className="blue-text"
                    style={{ paddingTop: "20px" }}
                  />
                </MDBCol>
                <MDBCol xl="10" md="11" size="10">
                  <h5
                    className="font-weight-bold mb-3"
                    style={{ paddingTop: "20px" }}
                  >
                    We do market research, but more importantly we turn them
                    into results for your business.
                  </h5>
                  <p>
                    <ul
                      style={{
                        listStyle: "none",
                        fontSize: "25px",
                        color: "orange",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      <li>Focus groups</li>
                      <li>Data insights</li>
                      <li> Surveys & Interviews</li>
                      <li> Methodologies</li>
                      <li> Technologies</li>
                    </ul>
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </center>
      </section>
    </Layout>
  )
}

export default Research
