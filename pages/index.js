import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout";
import FadeSet from "../components/FadeSet";

export default function Home() {
  return (
    <Layout>
      <head>
        <title>Creston Barker - Developer</title>
        <meta></meta>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Container as="main" className={`main mt-4 mb-4 flex-grow-1`}>
        <Row className="mt-4 mb-4">
          <Col>
            <h1 className={`${styles["title"]}`}>
              Creston Barker - Junior Developer
            </h1>
          </Col>
        </Row>
        <Row className="mt-4 mb-4">
          <Col>
            <p className={`${styles["description"]}`}>
              Junior Developer enthusiastic about creating clean code and
              solving problems. Recently graduated from the Manitoba Institute
              of Trades and Technology and experienced with remote work. Always
              ready for a challenge.
            </p>
          </Col>
        </Row>
        <Row className="mt-4 mb-4">
          <Col>
            <h4>Projects</h4>
            <FadeSet begin="1000" duration="500" delay="700" wait={false}>
              <div>
                <p>
                  <Card>
                    <Card.Header>
                      <div>
                        <Image
                          src={"/kikapekiskwewin-sc.png"}
                          alt="kikapekiskwewin website screenshot"
                          layout="fill"
                        />
                      </div>
                    </Card.Header>
                    <Card.Title>
                      Developed website for kikapekiskwewin conference
                    </Card.Title>
                    <Card.Body>
                      <ul>
                        <li>Created website using Next.js 12</li>
                        <li>Elements designed with React-Bootstrap</li>
                        <li></li>
                      </ul>
                    </Card.Body>
                  </Card>
                </p>
              </div>
            </FadeSet>
          </Col>
          <Col>
            <h4>Resume</h4>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
