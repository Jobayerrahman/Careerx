import React, { Component,Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import company_logo from '../../Assets/Images/company.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt,faUserGraduate,faBusinessTime}  from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
class Recentjob extends Component {
    render() {
        var settings = {
            autoplaySpeed: 6000,
            autoplay: true,
            dots: false,
            infinite: true,
            speed: 6000,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        return (
            <Fragment>
                <Container className="postContainer text-center">
                <h2 className="contentHeaderTitle">Recent Post</h2>
                    <Slider {...settings}>
                        <div className="postCard">
                            <Container className="text-center">
                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <img className="companyImg" src={company_logo}/>
                                    </Col>
                                    <Col className="text-justify" lg={6} md={6} sm={12}>
                                        <h2 className="postTitle"><a>Executive Manager</a></h2>
                                        <h6 className="postSubTitle">XYZ company LTD.</h6>
                                        <br/>
                                        <p className="postText"><FontAwesomeIcon className="iconBullet" icon={faMapMarkerAlt} /> Banani, Dhaka</p>
                                        <p className="postText"><FontAwesomeIcon className="iconBullet" icon={faUserGraduate} /> BA/ MA in Business or Marketing from any reputed university</p>
                                        <p className="postText"><FontAwesomeIcon className="iconBullet" icon={faBusinessTime} /> At least 1 year(s)</p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div className="postCard">
                            <Container>
                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <img className="companyImg" src={company_logo}/>
                                    </Col>
                                    <Col className="text-justify" lg={6} md={6} sm={12}>
                                        <h2 className="postTitle"><a>Executive Manager</a></h2>
                                        <h6 className="postSubTitle">XYZ company LTD.</h6>
                                        <br/>
                                        <p className="postText"><FontAwesomeIcon className="iconBullet" icon={faMapMarkerAlt} /> Banani, Dhaka</p>
                                        <p className="postText"><FontAwesomeIcon className="iconBullet" icon={faUserGraduate} /> BA/ MA in Business or Marketing from any reputed university</p>
                                        <p className="postText"><FontAwesomeIcon className="iconBullet" icon={faBusinessTime} /> At least 1 year(s)</p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div className="postCard">
                            <Container>
                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <img className="companyImg" src={company_logo}/>
                                    </Col>
                                    <Col className="text-justify" lg={6} md={6} sm={12}>
                                        <h2 className="postTitle"><a>Executive Manager</a></h2>
                                        <h6 className="postSubTitle">XYZ company LTD.</h6>
                                        <br/>
                                        <p className="postText"><FontAwesomeIcon className="iconBullet" icon={faMapMarkerAlt} /> Banani, Dhaka</p>
                                        <p className="postText"><FontAwesomeIcon className="iconBullet" icon={faUserGraduate} /> BA/ MA in Business or Marketing from any reputed university</p>
                                        <p className="postText"><FontAwesomeIcon className="iconBullet" icon={faBusinessTime} /> At least 1 year(s)</p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Slider>
                </Container>
            </Fragment>
        );
    }
}

export default Recentjob;