import React, { Component,Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import sprint_company from '../../Assets/Images/Sprint-company.png';
import { Link } from 'react-router-dom';
class Jobdetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className="jobDetailContainer">
                    <Row>
                        <Col lg={4} md={4} sm={12}>
                        <img className="jobDetailImg" src={sprint_company}/>
                        </Col>
                        <Col lg={8} md={8} sm={12}>
                            <h2 className="jobDetailTitle">Job title</h2>
                            <p className="jobDetailText">Assistant Manager</p>
                            <h2 className="jobDetailTitle">Company name</h2>
                            <p className="jobDetailText">XYZ company Ltd.</p>
                            <h2 className="jobDetailTitle">Vacancy</h2>
                            <p className="jobDetailText">3</p>
                            <h2 className="jobDetailTitle">Job responsibilities</h2>
                            <p className="jobDetailText">
                                <li>Age 35 to 40 years</li>
                                <li>5-10 Years in NGO`s/ Relevant field.</li>
                                <li>The deadline for submission of CV mentioning cell phone number with email address.</li>
                                <li>Candidates are capable to drive motorbikes to visit the field level and it`s branch offices.</li>
                                <li>Qualified and required Female candidates are preferable</li>
                                <li>Must have sound knowledge of Computer, especially on Microsoft Office application, Tally Software/ other relevant applications.</li>
                            </p>
                            <h2 className="jobDetailTitle">Job location</h2>
                            <p className="jobDetailText">Banani Dhaka, Bangladesh</p>
                            <h2 className="jobDetailTitle">Employment Status</h2>
                            <p className="jobDetailText">Full-time</p>
                            <h2 className="jobDetailTitle">Workplace</h2>
                            <p className="jobDetailText">Work from home</p>
                            <h2 className="jobDetailTitle">Experience requirements</h2>
                            <p className="jobDetailText">At least 1 year(s)</p>
                            <h2 className="jobDetailTitle">Educational requirements</h2>
                            <p className="jobDetailText"><li>Graduations in any discipline from reputed University.</li></p>
                            <h2 className="jobDetailTitle">Salary</h2>
                            <p className="jobDetailText">Negotiable</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="applyBtnCol text-center" lg={12} md={12} sm={12}>
                            <Button><Link className="jobApplyBtn" to="/Applyjob">Apply Now</Link> </Button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Jobdetails;