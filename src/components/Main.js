import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Job from "./Job";
export default function Main({ search, location, fullTime }) {
  const [jobs, setJobs] = useState([]);
  const [start, setStart] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=google_jobs&q=${search}&start=${start}&hl=en&api_key=f2b862eea49dfaf91b9a5b50611d7e26a37d6fe6f2df97575d608b36d38ec80f`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setJobs(json.jobs_results);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [search]);

  const handleLoadMore = () => {
    setStart((start) => start + 1);
  };
  return (
    <Container>
      <Row className="mt-5 gy-5 gx-2 g-md-5">
        {jobs?.map((job, i) => (
          <Job
            key={i}
            job={job}
            onClick={() => {
              navigate(`/details/q=${job.job_id}`, { state: job });
            }}
          />
        ))}
        <Col md={12}>
          <div className="col-wrapper d-flex justify-content-center mb-4">
            <Button className="load-more-button" onClick={handleLoadMore}>
              Load More
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
