import React from "react"
import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCarousel,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBCarouselInner,
} from "mdbreact"
import DELA from "../images/267.jpg"
import DELA2 from "../images/269.jpg"
import MEDIA from "../images/267.jpg"
const About = () => {
  return (
    <MDBContainer className="mt-5 text-center" fluid>
      <MDBRow>
        <MDBCol md={6}>
          <MDBJumbotron style={{ backgroundColor: "#FE9C54  " }}>
            <h2
              className="h1 display-5"
              style={{
                paddingTop: "40px",
                color: "white",
                fontWeight: "800px",
              }}
            >
              A Full Service 360 Degree Branding and Advertising Agency
            </h2>
            <p className="lead">
              We work hard, everyday, to help brands reach their full potential.
            </p>
            <hr className="my-2" />
            <p>
              <strong>
                A good creative is not just good business; it's the human touch
                that brings people together.
              </strong>
            </p>
            <p className="lead">
              <MDBBtn lg color="dark">
                CONTACT US
              </MDBBtn>
            </p>
          </MDBJumbotron>
        </MDBCol>
        <MDBCol sm={6}>
          <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img
                    className="d-block w-200"
                    src={DELA}
                    alt="First slide"
                    style={{ width: "100%" }}
                  />
                  <MDBMask overlay="black-light" />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    className="d-block w-200"
                    src={DELA2}
                    alt="Second slide"
                    style={{ width: "100%" }}
                  />
                  <MDBMask overlay="black-strong" />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img
                    className="d-block w-200"
                    src={MEDIA}
                    alt="Third slide"
                    style={{ width: "100%" }}
                  />
                  <MDBMask overlay="black-slight" />
                </MDBView>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default About
