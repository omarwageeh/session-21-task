import React from "react";
import light from "../assets/light.png";
import dark from "../assets/dark.png";
import { Container, Row } from "react-bootstrap";
import logo from "../assets/devjobs.png";

export default function Header({ setTheme }) {
  return (
    <div className="header">
      <Container>
        <Row>
          <div className="d-flex justify-content-between align-items-center h-100 header-items pt-5">
            {/* <h1 className="text mb-0">devjobs</h1> */}
            <img src={logo} alt="" />
            <div className="form-check form-switch d-flex align-items-center">
              <img src={light} alt="light mode" />
              <input
                className="form-check-input ms-2 me-2"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={() => setTheme((theme) => !theme)}
              />
              <img src={dark} alt="dark mode" height={"12px"} width={"12px"} />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
