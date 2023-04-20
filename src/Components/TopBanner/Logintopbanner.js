import React, { Component,Fragment } from 'react';
import { Col, Container, Row, Button} from 'react-bootstrap';
import '../../Assets/Css/custom.css';
class Logintopbanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="loginTopFixedBanner p-0">
                    <div className="loginTopBannerOverlay">
                        <Container className="text-center">
                            <Row>
                                <Col className="loginBannerFirstCol" lg={12} md={12} sm={12}>
                                    <h1 className="bannerFirstTitle">Build you career</h1>
                                    <h5 className="bannerFirstSubTitle">Job search web platform</h5>
                                    <Button className="findJobBtn" variant="primary">Find a job</Button>
                                    <Button className="postJobBtn" variant="success">Post a job</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Logintopbanner;