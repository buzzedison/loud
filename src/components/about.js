import React from "react"
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact"

const About = () => {
  return (
    <MDBContainer className="mt-5 text-center" fluid>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ backgroundColor: "#ffffff" }}>
            <h2 className="h1 display-4">
              A Full Service 360 Degree Branding and Advertising Agency
            </h2>
            <p className="lead">
              We work hard, everyday, to help brands reach their full potential.
            </p>
            <hr className="my-2" />
            <p>
              A good creative is not just good business; it's the human touch
              that brings people together.
            </p>
            <p className="lead">
              <MDBBtn lg color="dark">
                CONTACT US
              </MDBBtn>
            </p>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default About
