import React, { Component } from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import Image from "next/dist/client/image";

export default class HeaderComponent extends Component {
  render() {
    return (
      <header className={`header`}>
        <NavComponent />
      </header>
    );
  }
}

class NavComponent extends Component {
  render() {
    return (
      <Navbar variant="dark" expand="lg" className="navbar navbar-dark">
        <Container className="container">
          <Row className="d-flex flex-grow-1 flex-nowrap">
            <Col className="flex-grow-1">
              <Navbar.Brand href="/" className="">
                <h1 className={`align-middle`}>
                  Barker<strong>dev</strong>
                </h1>
              </Navbar.Brand>
            </Col>
            <Col className="mt-4 mr-2 justify-self-end flex-grow-0 justify-content-end"></Col>
          </Row>
        </Container>
      </Navbar>
    );
  }
}
