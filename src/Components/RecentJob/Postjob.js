import React, { Component,Fragment } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import ImageUploader from "react-images-upload";
import Select from 'react-select';
class Postjob extends Component {
    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
      }
    
      onDrop(pictureFiles, pictureDataURLs) {
        this.setState({
          pictures: this.state.pictures.concat(pictureFiles)
        });
      }
    render() {
        const options = [
            { value: 'Full-time', label: 'Full-time' },
            { value: 'Part-time', label: 'Part-time' },
            { value: 'Both', label: 'Full-time/Part-time' }
          ]
        return (
            <Fragment>
                <div className="postJobContainer">
                <Container>
                    <Row>
                        <Col lg={4} md={4} sm={12}>
                            <div style={{ marginRight: "35px", width:"20rem" }}>
                                <ImageUploader
                                withIcon={true}
                                withPreview={true}
                                label="Company Logo"
                                buttonText="Upload Images"
                                onChange={this.onDrop}
                                imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg",".jpeg"]}
                                maxFileSize={1048576}
                                fileSizeError=" file size is too big"
                                />
                            </div>
                        </Col>
                        <Col lg={8} md={8} sm={12}>
                            <Form>
                            <Form.Group className="mb-3">
                                <Form.Label className="formTitle">Job title</Form.Label>
                                <Form.Control type="text" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="formTitle">Company name</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="formTitle">Vacancy</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="formTitle">Workplace</Form.Label>
                                <Form.Control type="text" /> 
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="formTitle">Employment Status</Form.Label>
                                <Select className="formTitle" options={options} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="formTitle">Educational requirements</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="formTitle">Experience requirements</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="formTitle">Job location</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="formTitle">Salary</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Button className="formSubmitBtn" type="submit">
                                Submit
                            </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                </div>
            </Fragment>
        );
    }
}

export default Postjob;