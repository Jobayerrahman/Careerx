import React, { Component,Fragment } from 'react';
import { Col, Container, Row, Button, Card, Form } from 'react-bootstrap';
import '../../Assets/Css/custom.css';
import {Link} from "react-router-dom";
class Topfixbanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0">
                    <div className="topBannerOverlay">
                        <Container className="text-center">
                            <Row>
                                <Col className="bannerFirstCol" lg={6} md={6} sm={12}>
                                    <h1 className="bannerFirstTitle">Build you career</h1>
                                    <h5 className="bannerFirstSubTitle">Job search web platform</h5>
                                    
                                    <Link to="/Findjob"><Button className="findJobBtn" variant="primary">Find a job</Button></Link>
                                    <Button className="postJobBtn" variant="success">Post a job</Button>
                                </Col>
                                <Col className="bannerSecondCol" lg={6} md={6} sm={12}>
                                    <Card className="topBannerCard">
                                        <Card.Body>
                                            <Card.Title className="bannerSecondTitle">Sign Up Now</Card.Title>
                                                <Form className="text-justify">
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label className="bannerSecondSubTitle">Email address</Form.Label>
                                                        <Form.Control type="text"  />
                                                    </Form.Group>
                                                    <Form.Group controlId="formBasicPassword">
                                                        <Form.Label className="bannerSecondSubTitle">Password</Form.Label>
                                                        <Form.Control type="password" />
                                                    </Form.Group>
                                                    <Form.Group controlId="formBasicPassword">
                                                        <Form.Label className="bannerSecondSubTitle">Confirm Password</Form.Label>
                                                        <Form.Control type="password" />
                                                    </Form.Group>
                                                    <Form.Group controlId="formBasicCheckbox">
                                                        <Form.Check className="bannerSecondSubTitle" type="checkbox" label="Agree with" />
                                                    </Form.Group>
                                                    <Button className="bannerSecondBtn" variant="primary" type="submit">
                                                        Submit
                                                    </Button>
                                                </Form>
                                                <p className="bannerSecondSubTitle">--or--</p>
                                                <Card.Link className="bannerSecondSigninBtn" >Sign in</Card.Link>
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

export default Topfixbanner;