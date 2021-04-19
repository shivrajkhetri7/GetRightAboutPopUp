import React from 'react'
import './style.css'
import { Link } from 'react-dom'
import { Modal, Button, Row, Col, Container, Form } from 'react-bootstrap'
export default function PopUpForm(props) {
    return (
        <div>
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {/* Write The Title For the Pop Over Here */}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Form autoComplete="off">
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" autoComplete="off" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group >
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Enter Email" />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control type="text" placeholder="Enter Mobile" />
                            </Form.Group>

                            <Form.Row>
                    
                                        <Form.Group as={Col} controlId="formGridCity">
                                            <Form.Label>City</Form.Label>
                                            <Form.Control />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridState">
                                            <Form.Label>State</Form.Label>
                                            <Form.Control as="select" defaultValue="Choose...">
                                                <option>Choose...</option>
                                                <option>Maharastra</option>
                                                <option>Karnataka</option>
                                                <option>Maharastra</option>
                                                <option>Karnataka</option>
                                                <option>Maharastra</option>
                                                <option>Karnataka</option>
                                                <option>Maharastra</option>
                                                <option>Karnataka</option>
                                                <option>Maharastra</option>
                                                <option>Karnataka</option>
                                                <option>Maharastra</option>
                                                <option>Karnataka</option>
                                                <option>Delhi</option>
                                            </Form.Control>
                                        </Form.Group>
                            </Form.Row>

                            <Form.Row >
                                <Form.Text className="text-muted pb-2 m-auto">I Agree to Get Right Property' Terms of Use</Form.Text>
                            </Form.Row>
                            <Button variant="danger" className="submit-btn" type="submit">
                                Contact
                            </Button>
                        </Form>
                    </Container>
                </Modal.Body>
            </Modal>

        </div>
    )
}


