import React from "react"
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBView,
  MDBBtn,
} from "mdbreact"

import Layout from "../components/layout"
import BRANDING from "../images/brandinga.jpg"
import DIGITAL from "../images/brandingb.jpg"
import PRINTING from "../images/brandingc.png"
import RESEARCH from "../images/brandingd.png"

const Services = () => {
  return (
    <Layout>
      <MDBCard className="my-5 px-5 pb-5">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Our Services
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            Data is at the heart of how we approach planning, strategy, design,
            branding, and storytelling. We can pivot on our strategies based on
            in-market feedback, and provide our clients with real-time insight
            to the performance of their marketing activity.
          </p>
          <MDBRow>
            <MDBCol lg="5" xl="4">
              <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                <img className="img-fluid" src={BRANDING} alt="" />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
            <MDBCol lg="7" xl="8">
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>Branding</strong>
              </h3>
              <p className="dark-grey-text">
                We give you a major edge in an increasingly competitive market.
                We understand what exactly "branding" means? Simply put, We help
                make your brand your promise to your customer. We tell them what
                they can expect from your products and services.{" "}
                <strong>Differentiate your offering , Stand Out.</strong>{" "}
                <p>
                  <ul>
                    <li>We will Create a great logo</li>
                    <li>Write down your</li>
                    <li>brand messaging </li>
                    <li>
                      Create a "voice" for your company that reflects your
                      brand.
                    </li>
                    <li>Develop a tagline</li>
                    <li>
                      Design templates and create brand standards for your
                      marketing materials.
                    </li>
                  </ul>
                </p>
              </p>

              <MDBBtn color="orange" size="md">
                SEE PORTFFOLIO
              </MDBBtn>
            </MDBCol>
          </MDBRow>
          <hr className="my-5" />
          <MDBRow>
            <MDBCol lg="5" xl="4">
              <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                <img className="img-fluid" src={DIGITAL} alt="" />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
            <MDBCol lg="7" xl="8">
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>Digital Marketing</strong>
              </h3>
              <p className="dark-grey-text">
                Let us target a specific segment of your customer base and make
                them interactive.take over the world offline and online through
                our extensive digital ad channels that produces real results.
              </p>

              <MDBBtn color="orange" size="md">
                Read More
              </MDBBtn>
            </MDBCol>
          </MDBRow>
          <hr className="my-5" />
          <MDBRow>
            <MDBCol lg="5" xl="4">
              <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                <img className="img-fluid" src={PRINTING} alt="" />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
            <MDBCol lg="7" xl="8">
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>Printing</strong>
              </h3>
              <p className="dark-grey-text">
                Get creative, paint the town with your brand, print on any
                surface, get a variety of print needs that will make your brand
                come alive.
              </p>

              <MDBBtn color="orange" size="md">
                See Portfolio
              </MDBBtn>
            </MDBCol>
          </MDBRow>

          <hr className="my-5" />
          <MDBRow>
            <MDBCol lg="5" xl="4">
              <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                <img className="img-fluid" src={RESEARCH} alt="" />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
            <MDBCol lg="7" xl="8">
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>Market Research</strong>
              </h3>
              <p className="dark-grey-text">
                Determine the viability of your brand whether its new or has
                been in the market for long.
                <ul>
                  <li>Gather the data you need</li>
                  <li>Understand industry shifts</li>
                  <li>
                    Get more insight on changing consumer needs and preferences
                  </li>
                  <li>
                    Now make informed decisions on your strategies, operations
                    and potential customer base.
                  </li>
                </ul>
              </p>

              <MDBBtn color="orange" size="md">
                READ MORE
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </Layout>
  )
}

export default Services
