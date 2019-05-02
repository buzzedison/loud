import React from "react"
import { MDBRow, MDBCol, MDBIcon } from "mdbreact"

const Services = () => {
  return (
    <section className="main">
      <h2 className="h1-responsive font-weight-bold my-5">
        Why work with us to promote your business?
      </h2>
      <p className="lead grey-text w-responsive mx-auto mb-5">
        WE THINK OUTSIDE THE BOX.... At the heart of every journey is the power
        to shake things up...
      </p>
      <MDBRow>
        <MDBCol md="4">
          <MDBIcon icon="chart-area" size="3x" className="red-text" />
          <h5 className="font-weight-bold my-4">SOCIAL MEDIA</h5>
          <p className="grey-text mb-md-0 mb-5">
            Getting results for Small and medium scale enterprises since 2015.
          </p>
        </MDBCol>
        <MDBCol md="4">
          <MDBIcon
            icon="book"
            size="3x"
            className="cyan-text"
            color="warning"
          />
          <h5 className="font-weight-bold my-4">BRANDING</h5>
          <p className="grey-text mb-md-0 mb-5">
            In a nutshell, we can make your company look so good. We can make
            you look the part
          </p>
        </MDBCol>
        <MDBCol md="4">
          <MDBIcon far icon="comments" size="3x" className="orange-text" />
          <h5 className="font-weight-bold my-4">MARKET RESEARCH</h5>
          <p className="grey-text mb-md-0 mb-5">
            Deep insights, Market Research and development excellence.
          </p>
        </MDBCol>
      </MDBRow>
    </section>
  )
}

export default Services
