import React from "react"
import { MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdbreact"

const Digital = () => {
  return (
    <section className="digital">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Digital Marketing Boot Camp
      </h2>
      <p className="lead grey-text w-responsive text-center mx-auto mb-5">
        Social media intensive training Practical demonstration, work with real
        brands. Learn how to make money with digital tools. Job interviews for
        successful candidates
      </p>

      <MDBRow>
        <MDBCol lg="5" className="text-center text-lg-left">
          <img
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg"
            alt=""
          />
        </MDBCol>
        <MDBCol lg="7">
          <MDBRow className="mb-3">
            <MDBCol size="1">
              <MDBIcon icon="share" size="lg" className="indigo-text" />
            </MDBCol>
            <MDBCol xl="10" md="11" size="10">
              <h5 className="font-weight-bold mb-3">
                Mentored by experienced industry professionals
              </h5>
              <p className="grey-text">
                Learn Digital Marketing while building a professional portfolio
                of real client projects.
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="1">
              <MDBIcon icon="share" size="lg" className="indigo-text" />
            </MDBCol>
            <MDBCol xl="10" md="11" size="10">
              <h5 className="font-weight-bold mb-3">
                {" "}
                Indept understanding of the primary tools in the digital
                marketer’s toolbox
              </h5>
              <p className="grey-text">
                Easy-to-use frameworks for developing strategies and plans for
                your organization. The course cuts through the clutter of
                confusing digital jargon and buzzwords, and focuses on the
                strategic principles of digital marketing. The class size is
                limited to facilitate interactive activities, group discussion,
                and opportunities for networking.
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="1">
              <MDBIcon icon="share" size="lg" className="indigo-text" />
            </MDBCol>
            <MDBCol xl="10" md="11" size="10">
              <h5 className="font-weight-bold mb-3">
                The BootCamp will cover all of today’s core industry skills in
                digital marketing{" "}
              </h5>
              <p className="grey-text">
                social media, search engine optimization, analytics, advertising
                and content marketing. You’ll work directly with an experienced
                team of industry professionals, learning by creating and
                pitching digital marketing strategies for real clients, in an
                agency-style environment.
              </p>
              <MDBBtn lg color="dark">
                APPLY NOW!
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
  )
}

export default Digital
