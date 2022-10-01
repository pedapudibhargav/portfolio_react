import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function home() {
  return (
    <>
      <div className="fh-row">
        <div className="fh-section">
          <Container>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <div className="intro-text">
                  <h2>
                    Hi!
                  </h2>
                  <h2>I'm 'Bhargav'</h2>
                  <h2>full stack engineer</h2>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}
