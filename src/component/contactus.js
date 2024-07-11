import React, { useState } from 'react';
import { Badge, Button, Col, Form, Row, Modal } from 'react-bootstrap';
import Logo from '../component/assets/images/logo.png';

function BasicExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div style={{ textAlign: 'center', paddingTop: '30px', fontFamily: 'EB Garamond, serif', fontSize: '50px' }}>
        Contact Us<img src={Logo} alt='' style={{ width: '20%' }} />
      </div>

      <div className="container mt-5">
        <Row className="justify-content-center">
          <Col md={4} sm={12} className="text-center mb-4">
            <i className="bi bi-geo-alt" style={{ fontSize: '5em' }}></i>
            <h6 style={{ fontFamily: 'EB Garamond, serif', fontSize: '25px', marginTop: '10px' }}>Address</h6>
            <h6 style={{ fontFamily: 'EB Garamond, serif' }}>Anytown, USA 12345</h6>
          </Col>

          <Col md={4} sm={12} className="text-center mb-4">
            <i className="bi bi-phone" style={{ fontSize: '5em' }}></i>
            <h6 style={{ fontFamily: 'EB Garamond, serif', fontSize: '25px', marginTop: '10px' }}>Phone Number</h6>
            <h6 style={{ fontFamily: 'EB Garamond, serif' }}>+1 (555) 123-4567</h6>
          </Col>

          <Col md={4} sm={12} className="text-center mb-4">
            <i className="bi bi-envelope" style={{ fontSize: '5em' }}></i>
            <h6 style={{ fontFamily: 'EB Garamond, serif', fontSize: '25px', marginTop: '10px' }}>Email</h6>
            <h6 style={{ fontFamily: 'EB Garamond, serif' }}>VintageWheels@gmail.com</h6>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8} sm={12}>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Control type="name" placeholder="Your Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Control placeholder="Subject" style={{ height: '100px' }} />
              </Form.Group>

              <div className="text-center" style={{ marginBottom: '20px' }}>
                <Button variant="dark" type="button" onClick={handleShow}>
                  Send Message
                </Button>
              </div>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Request Portal</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your Request has been sent successfully! You will get the response soon.<br></br>THANK YOU!</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default BasicExample;
