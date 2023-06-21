import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function FloatingJobBar({ job }) {
  return (
    <div className="job-bar">
      <Container>
        <div className="extra-padding">
          <Row className="job-bar-row rounded rounded-3 align-items-center gx-0 p-5 p-md-0 position-relative">
            <Col md={2} className="d-none d-md-block">
              <img
                src={job?.thumbnail}
                className="img-fluid"
                alt="company"
                height={"140px"}
                width={"140px"}
              />
            </Col>
            <div className="floating-img d-flex d-md-none rounded-4 rounded">
              <img
                src={job?.thumbnail}
                className="img-fluid rounded-4 rounded"
                alt="company"
              />
            </div>

            <Col md={2}>
              <div className="col-wrapper text-center">
                <p className="text">{job?.company_name}</p>
                <p className="muted-text ">{job?.related_links[0]?.text}</p>
              </div>
            </Col>
            <Col md={2} className="offset-md-5 offset-sm-0">
              <div className="d-flex justify-content-center">
                <Button className="company-button" variant="custom">
                  Company Site
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
