import React, { Component,Fragment } from 'react';
import { Col, Container, Row,Card,Form,Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
class Signin extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="text-center">
                    <div>
                    <Container>
                        <Row>
                            <Col lg={12} md={12} sm={12}>
                            <Card className="signInCard">
                                <Card.Body>
                                    <Card.Title className="bannerSecondTitle">Sign In Now</Card.Title>
                                        <Form className="text-justify">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label className="bannerSecondSubTitle">Email address</Form.Label>
                                                <Form.Control type="text"  />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label className="bannerSecondSubTitle">Password</Form.Label>
                                                <Form.Control type="password" />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicCheckbox">
                                                <Form.Check className="bannerSecondSubTitle" type="checkbox" label="Remember me" />
                                            </Form.Group>
                                            <Button className="bannerSecondBtn" variant="primary" type="submit">
                                                Sign In
                                            </Button>
                                        </Form>
                                        <p className="bannerSecondSubTitle">--or--</p>
                                        <Link className="bannerSecondSigninBtn" to="/SignUp"><Card.Link>Sign Up</Card.Link></Link>
                                </Card.Body>
                            </Card>
                            </Col>
                        </Row>
                    </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Signin;