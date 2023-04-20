import React, { Component,Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
class Midbanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="midFixedBanner p-0">
                    <div className="midBannerOverlay">
                        <Container className="text-center p-0">
                            <Row>
                                <Col className="midCounterCol" lg={6} md={6} sm={12}>
                                    <h1 className="midCouter">
                                        <CountUp start={0} end={10}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                        </CountUp>
                                    </h1>
                                    <h2 className="midCouterTitle">Total Job Post</h2>
                                </Col>
                                <Col className="midCounterCol" lg={6} md={6} sm={12}>
                                    <h1 className="midCouter">
                                        <CountUp start={0} end={20}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                        </CountUp>
                                    </h1>
                                    <h2 className="midCouterTitle">Total Users</h2>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Midbanner;