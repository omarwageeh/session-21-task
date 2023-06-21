import React, { useState } from "react";
import "../assets/css/SearchBar.css";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import SearchImg from "../assets/003-search 2.png";
import PlaceImg from "../assets/placeholder 2.png";
export default function SearchBar({ setSearch }) {
  const [filter, setFilter] = useState("");
  const [location, setLocation] = useState(null);
  const [fullTime, setFullTime] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="search-bar">
      <Container>
        <Row>
          <Col md={12} className="d-none d-md-block">
            <div className="d-flex">
              <InputGroup className="justify-content-center align-items-center p-3 rounded rounded-4 text-center">
                <InputGroup.Text
                  id="basic-addon1"
                  style={{
                    backgroundColor: "inherit",
                    borderWidth: 0,
                  }}
                >
                  <img src={SearchImg} alt="" />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Filter by title, companies, expertise…"
                  aria-describedby="basic-addon1"
                  style={{
                    borderWidth: "0px 1px 0px 0px",
                    height: "100%",
                    backgroundColor: "inherit",
                    color: "inherit",
                    boxShadow: "none",
                    outline: "none",
                  }}
                  onChange={(e) => setFilter(e.target.value)}
                />
                <InputGroup.Text
                  id="basic-addon1"
                  style={{
                    backgroundColor: "inherit",
                    borderWidth: 0,
                  }}
                >
                  <img src={PlaceImg} alt="" />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Location"
                  aria-describedby="basic-addon1"
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                  style={{
                    borderWidth: "0px 1px 0px 0px",
                    height: "100%",
                    backgroundColor: "inherit",
                    color: "inherit",
                    boxShadow: "none",
                    outline: "none",
                  }}
                />

                <InputGroup.Checkbox
                  aria-label="Checkbox for following text
                input"
                  checked={fullTime}
                  onChange={(e) => {
                    setFullTime(e.target.checked);
                  }}
                />
                <div className="d-flex align-items-center me-3 mb-0">
                  Full Time Only
                </div>
                <Button
                  className="custom-button rounded rounded-2"
                  variant="custom"
                  id="button-addon2"
                  onClick={() => {
                    setSearch(filter);
                  }}
                >
                  Search
                </Button>
              </InputGroup>
            </div>
          </Col>
          <Col md={12} className="d-md-none">
            <InputGroup className="justify-content-center align-items-center p-3 rounded rounded-4 text-center">
              <Form.Control
                placeholder="Enter job desc..."
                aria-describedby="basic-addon1"
                style={{
                  borderWidth: "0px 0px 0px 0px",
                  height: "100%",
                  backgroundColor: "inherit",
                  color: "inherit",
                  boxShadow: "none",
                  outline: "none",
                }}
              />
              <div className="me-2 filter-icon" onClick={handleShow}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-funnel-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z" />
                </svg>
              </div>

              <Button
                className="custom-button rounded rounded-2"
                variant="custom"
                id="button-addon2"
                onClick={() => {
                  setSearch(filter);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
      <div>
        <Modal className="top-50 my-modal" show={show} onHide={handleClose}>
          <Modal.Header>
            <InputGroup className="location-filter">
              <InputGroup.Text
                style={{
                  backgroundColor: "inherit",
                  borderWidth: 0,
                }}
              >
                <img src={PlaceImg} alt="" />
              </InputGroup.Text>
              <Form.Control
                placeholder="Filter by location..."
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                style={{
                  borderWidth: "0px 0px 0px 0px",
                  height: "100%",
                  backgroundColor: "inherit",
                  color: "inherit",
                  boxShadow: "none",
                  outline: "none",
                }}
              />
            </InputGroup>
          </Modal.Header>
          <Modal.Body>
            <InputGroup>
              <InputGroup.Checkbox
                aria-label="Checkbox for following text
                input"
                className="checkbox"
                checked={fullTime}
                onChange={(e) => {
                  setFullTime(e.target.checked);
                }}
                style={{ backgroundColor: "inheret" }}
              />
              <div className="d-flex align-items-center ms-2 mb-0">
                Full Time Only
              </div>
            </InputGroup>
            <div className="d-flex justify-content-center">
              <Button
                className="custom-button rounded rounded-2 w-75 text-center"
                variant="custom"
                onClick={() => {
                  handleClose();
                  setSearch(filter);
                }}
              >
                Search
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
