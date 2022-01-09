import React, { Component } from "react";
import { Popover, OverlayTrigger, Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Home.module.scss";
import Image from "next/dist/client/image";

export default class FooterComponent extends Component {
  render() {
    return (
      <footer className={styles.footer}>
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
            <Col>
              <OverlayTrigger
                trigger="focus"
                key="license-text"
                delay={{show:300, hide:500}}
                placement="top"
                overlay={
                  <Popover id="license-popover" className="popover">
                    <Popover.Header as="h4">License Info</Popover.Header>
                    <Popover.Body>
                      Copyright 2021 Creston Barker Permission is hereby
                      granted, free of charge, to any person obtaining a copy of
                      this software and associated documentation files (the
                      &quot;Software&quot;), to deal in the Software without restriction,
                      including without limitation the rights to use, copy,
                      modify, merge, publish, distribute, sublicense, and/or
                      sell copies of the Software, and to permit persons to whom
                      the Software is furnished to do so, subject to the
                      following conditions: The above copyright notice and this
                      permission notice shall be included in all copies or
                      substantial portions of the Software. THE SOFTWARE IS
                      PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
                      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                      NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                      COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
                      OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                      OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                      SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

                      <a href="https://opensource.org/licenses/MIT">License text via opensource.org</a>
                    </Popover.Body>
                  </Popover>
                }
              >
              <span tabIndex={0} className="text-decoration-underline">MIT license 2021</span>
              </OverlayTrigger>
            </Col>
            <Col className="d-flex justify-content-end">
              <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by{" "}
                <span className={styles.logo}>
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
