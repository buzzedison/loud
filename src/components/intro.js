import React, { Component } from "react"
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
} from "mdbreact"
import "./layout.css"

class Intro extends Component {
  render() {
    return (
      <div className="container">
        <MDBContainer>
          <MDBView>
            <video
              className="video-intro"
              poster="https://mdbootstrap.com/img/Photos/Others/background.jpg"
              playsInline
              autoPlay
              muted=""
              loop
            >
              <source
                src="https://mdbootstrap.com/img/video/animation.mp4"
                type="video/mp4"
              />
            </video>

            <MDBMask className="d-flex justify-content-center align-items-center gradient">
              <MDBContainer className="px-md-3 px-sm-0">
                <MDBRow>
                  <MDBCol md="12" className="introText">
                    <h3 className="display-3 font-weight-bold mb-0 pt-md-5">
                      Creative Agency{" "}
                    </h3>
                    <hr className="hr-light my-4 w-75" />
                    <h4 className="subtext-header mt-2 mb-4">
                      Relentless focus on reaching your target customers with
                      your brand and stories. We find out what your customers or
                      potential customers want and show you how to deliver based
                      on findings.
                    </h4>
                    <MDBBtn lg rounded color="secondary">
                      <MDBIcon icon="home" /> FIND OUT MORE
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBMask>
          </MDBView>
        </MDBContainer>
      </div>
    )
  }
}

export default Intro
