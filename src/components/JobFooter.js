import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function JobFooter({ job }) {
  return (
    <Container>
      <Row className="job-footer align-items-center p-4 rounded rounded-3">
        <Col md={10} className="d-none d-md-block">
          <div className="col-wrapper">
            <p className="job-title text">{job?.title}</p>
            <p className="muted-text">{job?.company_name}</p>
          </div>
        </Col>
        <Col md={2} className="col-12">
          <div className="d-flex justify-content-center w-100">
            <Button className="apply-button w-100"> Apply Now</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
