import React, { Component, Fragment } from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleRight}  from "@fortawesome/free-solid-svg-icons";
class Jobcategory extends Component {
    render() {
        return (
            <Fragment>
                <Container className="jobCategory text-center">
                    <h2 className="contentHeaderTitle">Job Categories</h2>
                    <Row>
                        <Col className="text-justify" lg={6} md={6} sm={12}>
                            <FontAwesomeIcon className="iconBullet" icon={faArrowCircleRight} /><a className="jobTitle"> Accounting & Finance</a><br/>
                            <FontAwesomeIcon className="iconBullet" icon={faArrowCircleRight} /><a className="jobTitle"> Bank & Non-Bank Fin. Institution</a><br/>
                            <FontAwesomeIcon className="iconBullet" icon={faArrowCircleRight} /><a className="jobTitle"> Commercial & Supply Chain</a><br/>
                            <FontAwesomeIcon className="iconBullet" icon={faArrowCircleRight} /><a className="jobTitle"> Education & Training</a><br/>
                            <FontAwesomeIcon className="iconBullet" icon={faArrowCircleRight} /><a className="jobTitle"> Engineer & Architects</a><br/>
                            <FontAwesomeIcon className="iconBullet" icon={faArrowCircleRight} /><a className="jobTitle"> Garments & Textile</a><br/>
                            <FontAwesomeIcon className="iconBullet" icon={faArrowCircleRight} /><a className="jobTitle"> HR & Org. Development</a><br/>
                            <FontAwesomeIcon className="iconBullet" icon={faArrowCircleRight} /><a className="jobTitle"> Design & Creative</a><br/>
                        </Col>
                        <Col className="text-justify" lg={6} md={6} sm={12}>
                            <FontAwesomeIcon className="iconBullet" icon={faArrowCircleRight} /><a className="jobTitle"> Travel & Tourism</a><br/>
                            <FontAwesomeIcon className="iconBullet" icon={faArrowCircleRight} /><a className="jobTitle"> IT & Telecommunication</a><br/>
                            <FontAwesomeIcon className="iconBullet" icon={faArrowCircleRight} /><a className="jobTitle"> Marketing & Sales</a><br/>
                            <FontAwesomeIcon className="iconBullet" icon={faArrowCircleRight} /><a className="jobTitle"> Media & Ad. & Event Mgt.</a><br/>
                            <FontAwesomeIcon className="iconBullet" icon={faArrowCircleRight} /><a className="jobTitle"> Agro (Plant/Animal/Fisheries)</a><br/>
                            <FontAwesomeIcon className="iconBullet" icon={faArrowCircleRight} /><a className="jobTitle"> Research & Consultancy</a><br/>
                            <FontAwesomeIcon className="iconBullet" icon={faArrowCircleRight} /><a className="jobTitle"> Law & Legal</a><br/>
                            <FontAwesomeIcon className="iconBullet" icon={faArrowCircleRight} /><a className="jobTitle"> Others</a><br/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Jobcategory;