import React, { Component,Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faYoutube} from '@fortawesome/free-brands-svg-icons'
class Footer extends Component {
    render() {
        return (
            <Fragment>
                <hr/>
                <Container className="footerContainer">
                    <Row>
                        <Col className="footerCol" lg={3} md={6} sm={12}>
                            <h2 className="footerTitle">Follow Us</h2>
                            <FontAwesomeIcon className="footerMediaIcon" icon={faFacebook} /> <a className="footerMedia"> facebook</a><br/>
                            <FontAwesomeIcon className="footerMediaIcon" icon={faYoutube} /> <a className="footerMedia"> YouTube</a> 
                        </Col>
                        <Col className="footerCol"  lg={3} md={6} sm={12}>
                            <h2 className="footerTitle">Address</h2>
                            <p className="footerAddress">154 Birchwood Ave.
                                New Rochelle, NY 10801</p>      
                            <p className="footerAddress">k229r01132n@temporary-mail.net</p>      
                            <p className="footerAddress">	208-891-6363</p> 
                        </Col>
                        <Col className="footerCol"  lg={3} md={6} sm={12}>
                            <h2 className="footerTitle">Informations</h2>
                            <a className="footerSubTitle">About me</a><br/>
                            <a className="footerSubTitle">My resume</a><br/>
                            <a className="footerSubTitle">Contact me</a>
                        </Col>
                        <Col className="footerCol"  lg={3} md={6} sm={12}>
                            <h2 className="footerTitle">Legal</h2>
                            <a className="footerSubTitle">Refund policy</a><br/>
                            <a className="footerSubTitle">Terms and Conditions</a><br/>
                            <a className="footerSubTitle">Privacy policy</a>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;