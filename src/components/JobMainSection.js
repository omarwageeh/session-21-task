import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import dotImg from "../assets/Oval.png";

export default function JobMainSection({ job }) {
  return (
    <Container className="mt-5">
      <div className="extra-padding">
        <Row className="job-main-section p-3 p-md-5 rounded rounded-2 gx-0 mb-5">
          <Col md={12}>
            <div className="col-wrapper">
              <div className="job-details-header d-flex justify-content-between align-items-center mb-4 flex-column flex-md-row">
                <div className="title">
                  <span className="muted-text me-2">{job?.extensions[0]}</span>
                  <img src={dotImg} alt="" />
                  <span className="muted-text ms-2">{job?.extensions[1]}</span>
                  <p className="text job-title  mt-2 mb-1">{job?.title}</p>
                  <p className="location-text">{job?.location}</p>
                </div>
                <Button className="apply-button">Apply Now</Button>
              </div>
              <p className="body-text">{job?.description}</p>
            </div>
          </Col>
          <Col md={12}>
            <div className="col-wrapper">
              <h2 className="heading-text mb-4">Requirments</h2>
              <p className="body-text">
                Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia,
                magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae
                facilisis libero dolor a purus. Sed vel lacus. Mauris nibh
                felis, adipiscing varius, adipiscing in, lacinia vel, tellus.
                Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc
                tellus ante, mattis eget, gravida vitae, ultricies ac, leo.
                Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.
              </p>
            </div>
          </Col>
          <Col md={12}>
            <div className="col-wrapper">
              <h2 className="heading-text mb-4">What You Will Do</h2>
              <p className="body-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam, delectus aut velit totam nisi fuga doloremque, quam
                omnis nemo ducimus eius magni! Ea aperiam, ipsa explicabo ad
                debitis incidunt tenetur!
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
