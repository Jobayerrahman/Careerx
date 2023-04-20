import React, { Component,Fragment } from 'react';
import {Container,Col,Row} from 'react-bootstrap' 
class Pagetop extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="pagetopFixedBanner p-0">
                    <div className="pagetopOverlay">
                        <Container className=" p-0">
                            <Row>
                                <Col className="text-center">
                                <h5 className="pagetopTitle">{this.props.pagetilte}</h5>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Pagetop;