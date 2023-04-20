import React, { Component,Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import company_logo from '../../Assets/Images/company.png';
import media_company from '../../Assets/Images/Media company.jpg';
import sprint_company from '../../Assets/Images/Sprint-company.png';
import {faMapMarkerAlt,faUserGraduate,faBusinessTime}  from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
class Specificjob extends Component {
    render() {
        return (
            <Fragment>
                <Container className="specificJobContainer">
                    <Row className="jobsCardRow">
                        <Col lg={4} md={6} sm={12}>
                            <div className="jobCardContainer">
                                <Container>
                                    <Row>
                                        <Col lg={4} md={4} sm={4}>
                                            <img className="findJobImg" src={company_logo}/>
                                        </Col>
                                        <Col lg={8} md={8} sm={8}>
                                            <h2><Link to="/Jobdetails" className="jobCardTitle" >Assistant Manager</Link></h2>
                                            <h6 className="jobCardCompanyTitle">XYZ company</h6>
                                            <p className="postText"><FontAwesomeIcon className="iconBullet" icon={faMapMarkerAlt} /> Banani, Dhaka</p>
                                            <p className="postText"><FontAwesomeIcon className="iconBullet" icon={faUserGraduate} /> BA/ MA in Business or Marketing from any reputed university</p>
                                            <p className="postText"><FontAwesomeIcon className="iconBullet" icon={faBusinessTime} /> At least 1 year(s)</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="jobCardContainer">
                                <Container>
                                    <Row>
                                        <Col lg={4} md={4} sm={4}>
                                            <img className="findJobImg" src={media_company}/>
                                        </Col>
                                        <Col lg={8} md={8} sm={8}>
                                            <h2 className="jobCardTitle" >Production Manager</h2>
                                            <h6 className="jobCardCompanyTitle">Media Haven company</h6>
                                            <p className="postText"><FontAwesomeIcon className="iconBullet" icon={faMapMarkerAlt} /> Banani, Dhaka</p>
                                            <p className="postText"><FontAwesomeIcon className="iconBullet" icon={faUserGraduate} /> BA/ MA in Business or Marketing from any reputed university</p>
                                            <p className="postText"><FontAwesomeIcon className="iconBullet" icon={faBusinessTime} /> At least 1 year(s)</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="jobCardContainer">
                                <Container>
                                    <Row>
                                        <Col lg={4} md={4} sm={4}>
                                            <img className="findJobImg" src={sprint_company}/>
                                        </Col>
                                        <Col lg={8} md={8} sm={8}>
                                            <h2 className="jobCardTitle" >Software Engineer</h2>
                                            <h6 className="jobCardCompanyTitle">Sprint company</h6>
                                            <p className="postText"><FontAwesomeIcon className="iconBullet" icon={faMapMarkerAlt} /> Banani, Dhaka</p>
                                            <p className="postText"><FontAwesomeIcon className="iconBullet" icon={faUserGraduate} /> BA/ MA in Business or Marketing from any reputed university</p>
                                            <p className="postText"><FontAwesomeIcon className="iconBullet" icon={faBusinessTime} /> At least 1 year(s)</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="jobCardContainer">
                                <Container>
                                    <Row>
                                        <Col lg={4} md={4} sm={4}>
                                            <img className="findJobImg" src={company_logo}/>
                                        </Col>
                                        <Col lg={8} md={8} sm={8}>
                                            <h2 className="jobCardTitle" >Assistant Manager</h2>
                                            <h6 className="jobCardCompanyTitle">XYZ company</h6>
                                            <p className="postText"><FontAwesomeIcon className="iconBullet" icon={faMapMarkerAlt} /> Banani, Dhaka</p>
                                            <p className="postText"><FontAwesomeIcon className="iconBullet" icon={faUserGraduate} /> BA/ MA in Business or Marketing from any reputed university</p>
                                            <p className="postText"><FontAwesomeIcon className="iconBullet" icon={faBusinessTime} /> At least 1 year(s)</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="jobCardContainer">
                                <Container>
                                    <Row>
                                        <Col lg={4} md={4} sm={4}>
                                            <img className="findJobImg" src={media_company}/>
                                        </Col>
                                        <Col lg={8} md={8} sm={8}>
                                            <h2 className="jobCardTitle" >Production Manager</h2>
                                            <h6 className="jobCardCompanyTitle">Media Haven company</h6>
                                            <p className="postText"><FontAwesomeIcon className="iconBullet" icon={faMapMarkerAlt} /> Banani, Dhaka</p>
                                            <p className="postText"><FontAwesomeIcon className="iconBullet" icon={faUserGraduate} /> BA/ MA in Business or Marketing from any reputed university</p>
                                            <p className="postText"><FontAwesomeIcon className="iconBullet" icon={faBusinessTime} /> At least 1 year(s)</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="jobCardContainer">
                                <Container>
                                    <Row>
                                        <Col lg={4} md={4} sm={4}>
                                            <img className="findJobImg" src={sprint_company}/>
                                        </Col>
                                        <Col lg={8} md={8} sm={8}>
                                            <h2 className="jobCardTitle" >Software Engineer</h2>
                                            <h6 className="jobCardCompanyTitle">Sprint company</h6>
                                            <p className="postText"><FontAwesomeIcon className="iconBullet" icon={faMapMarkerAlt} /> Banani, Dhaka</p>
                                            <p className="postText"><FontAwesomeIcon className="iconBullet" icon={faUserGraduate} /> BA/ MA in Business or Marketing from any reputed university</p>
                                            <p className="postText"><FontAwesomeIcon className="iconBullet" icon={faBusinessTime} /> At least 1 year(s)</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Specificjob;