import React, { Component,Fragment } from 'react';
import { Col, Container, Row,Card,Button } from 'react-bootstrap';
import career_development from '../../Assets/Images/Career Development.jpg';
import human_resource from '../../Assets/Images/Human Resource.jpg';
import job_specification from '../../Assets/Images/Job specification.jpg';
class Objectives extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                <h2 className="contentHeaderTitle">Objectives</h2>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                        <Card className="objectiveCard">
                            <Card.Img variant="top" src={career_development} />
                            <Card.Body>
                                <Card.Title className="objectiveTitle">Career Development</Card.Title>
                                <Card.Text className="objectiveSubTitle">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Read more</Button>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Card className="objectiveCard">
                                <Card.Img variant="top" src={human_resource} />
                                <Card.Body>
                                    <Card.Title className="objectiveTitle">Human Resource</Card.Title>
                                    <Card.Text className="objectiveSubTitle">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Read more</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Card className="objectiveCard">
                                <Card.Img variant="top" src={job_specification} />
                                <Card.Body>
                                    <Card.Title className="objectiveTitle">Job specification</Card.Title>
                                    <Card.Text className="objectiveSubTitle">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Read more</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Objectives;