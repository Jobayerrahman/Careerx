import React, { Component,Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleRight}  from "@fortawesome/free-solid-svg-icons";
import company_logo from '../../Assets/Images/company.png';
import media_company from '../../Assets/Images/Media company.jpg';
import sprint_company from '../../Assets/Images/Sprint-company.png';
import {faMapMarkerAlt,faUserGraduate,faBusinessTime}  from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
class Findjob extends Component {
    render() {
        return (
            <Fragment>
                <Container className="findJobContainer">
                    <h2 className="contentHeaderTitle">Job Categories</h2>
                    <Row className="allJobsCardRow">
                        <Col className="text-justify" lg={6} md={6} sm={12}>
                            <FontAwesomeIcon className="iconBullet" icon={faArrowCircleRight} /> <Link to="/Specificjob" className="jobTitle"> Accounting & Finance</Link><br/>
                            <FontAwesomeIcon className="iconBullet" icon={faArrowCircleRight} /><Link to="/Specificjob" className="jobTitle"> Bank & Non-Bank Fin. Institution</Link><br/>
                            <FontAwesomeIcon className="iconBullet" icon={faArrowCircleRight} /><Link to="/Specificjob" className="jobTitle"> Commercial & Supply Chain</Link><br/>
                            <FontAwesomeIcon className="iconBullet" icon={faArrowCircleRight} /><Link to="/Specificjob" className="jobTitle"> Education & Training</Link><br/>
                            <FontAwesomeIcon className="iconBullet" icon={faArrowCircleRight} /><Link to="/Specificjob" className="jobTitle"> Engineer & Architects</Link><br/>
                            <FontAwesomeIcon className="iconBullet" icon={faArrowCircleRight} /><Link to="/Specificjob" className="jobTitle"> Garments & Textile</Link><br/>
                            <FontAwesomeIcon className="iconBullet" icon={faArrowCircleRight} /><Link to="/Specificjob" className="jobTitle"> HR & Org. Development</Link><br/>
                            <FontAwesomeIcon className="iconBullet" icon={faArrowCircleRight} /><Link to="/Specificjob" className="jobTitle"> Design & Creative</Link><br/>
                        </Col>
                        <Col className="text-justify" lg={6} md={6} sm={12}>
                            <FontAwesomeIcon className="iconBullet" icon={faArrowCircleRight} /><Link to="/Specificjob" className="jobTitle"> Travel & Tourism</Link><br/>
                            <FontAwesomeIcon className="iconBullet" icon={faArrowCircleRight} /><Link to="/Specificjob" className="jobTitle"> IT & Telecommunication</Link><br/>
                            <FontAwesomeIcon className="iconBullet" icon={faArrowCircleRight} /><Link to="/Specificjob" className="jobTitle"> Marketing & Sales</Link><br/>
                            <FontAwesomeIcon className="iconBullet" icon={faArrowCircleRight} /><Link to="/Specificjob" className="jobTitle"> Media & Ad. & Event Mgt.</Link><br/>
                            <FontAwesomeIcon className="iconBullet" icon={faArrowCircleRight} /><Link to="/Specificjob" className="jobTitle"> Agro (Plant/Animal/Fisheries)</Link><br/>
                            <FontAwesomeIcon className="iconBullet" icon={faArrowCircleRight} /><Link to="/Specificjob" className="jobTitle"> Research & Consultancy</Link><br/>
                            <FontAwesomeIcon className="iconBullet" icon={faArrowCircleRight} /><Link to="/Specificjob" className="jobTitle"> Law & Legal</Link><br/>
                            <FontAwesomeIcon className="iconBullet" icon={faArrowCircleRight} /><Link to="/Specificjob" className="jobTitle"> Others</Link><br/>
                        </Col>
                    </Row>
                    <hr/>
                    <h2 className="contentHeaderTitle">Recent Post</h2>
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
                                        <h2><Link to="/Jobdetails" className="jobCardTitle" >Production Manager</Link></h2>
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
                                            <h2><Link to="/Jobdetails" className="jobCardTitle" >Software Engineer</Link></h2>
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
                                        <h2><Link to="/Jobdetails" className="jobCardTitle" >Production Manager</Link></h2>
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
                                            <h2><Link to="/Jobdetails" className="jobCardTitle" >Software Engineer</Link></h2>
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

export default Findjob;