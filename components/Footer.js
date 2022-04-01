import React, { Component } from "react";
import { Popover, OverlayTrigger, Container, Row, Col } from "react-bootstrap";
import Image from "next/dist/client/image";

export default class FooterComponent extends Component {
  render() {
    return (
      <footer className={`footer`}>
        <Container className="container">
          <Row>
            <Col>
              <span>
                Creston Barker -{" "}
                <a href="mailto:creston@barkerdev.com">creston@barkedev.com</a>
              </span>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-end">
              <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by{" "}
                <span className={`logo`}>
                  <Image
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    width={72}
                    height={16}
                  />
                </span>
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
