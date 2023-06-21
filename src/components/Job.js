import React from "react";
import { Col } from "react-bootstrap";
import img from "../assets/Rectangle.png";

export default function Job({ job, onClick }) {
  return (
    <Col md={4} sm={6} xs={12}>
      <div
        className="job-card-wrapper rounded rounded-3 p-4 h-100"
        onClick={onClick}
      >
        <img className="image rounded rounded-3" src={job?.thumbnail} alt="" />

        <div className="ms-2 mt-3">
          <div className="d-flex ">
            <span className="muted-text">{job?.extensions[0]}</span>
            <span>.</span>
            <span className="muted-text">{job?.extensions[1]}</span>
          </div>
          <div>
            <p className="text">{job?.title}</p>
            <p className="muted-text">{job?.company_name}</p>
            <p className="location-text">{job?.location}</p>
          </div>
        </div>
      </div>
    </Col>
  );
}
