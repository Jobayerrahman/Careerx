import React, { Component,Fragment } from 'react';
import { Col, Container, Row, Form,Button } from 'react-bootstrap';
import ImageUploader from "react-images-upload";
class Applyjob extends Component {
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
        return (
            <Fragment>
                <Container className="applyJobContainer">
                    <Row>
                        <Col lg={8} md={8} sm={12}>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label className="formTitle">Full Name</Form.Label>
                                <Form.Control type="text" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="formTitle">Email</Form.Label>
                                <Form.Control type="text" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="formTitle">Phone number</Form.Label>
                                <Form.Control type="text" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="formTitle">Address</Form.Label>
                                <Form.Control type="text" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="formTitle">SSC gpa</Form.Label>
                                <Form.Control type="text" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="formTitle">SSC passing year</Form.Label>
                                <Form.Control type="text" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="formTitle">HSC gpa</Form.Label>
                                <Form.Control type="text" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="formTitle">HSC passing year</Form.Label>
                                <Form.Control type="text" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="formTitle">BSc./BBA./Relevant degree cgpa</Form.Label>
                                <Form.Control type="text" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="formTitle">BSc./BBA./Relevant degree passing year</Form.Label>
                                <Form.Control type="text" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="formTitle">MSc./MBA./Relevant degree cgpa</Form.Label>
                                <Form.Control type="text" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="formTitle">MSc./MBA./Relevant degree passing year</Form.Label>
                                <Form.Control type="text" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="formTitle">Attach you CV</Form.Label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupFileAddon01">
                                        Upload File
                                        </span>
                                    </div>
                                    <div className="custom-file">
                                        <input
                                        type="file"
                                        className="custom-file-input"
                                        id="inputGroupFile01"
                                        aria-describedby="inputGroupFileAddon01"
                                        />
                                        <label className="custom-file-label" htmlFor="inputGroupFile01">
                                        Choose file
                                        </label>
                                    </div>
                                </div>
                            </Form.Group>
                            <Button className="applySubmitBtn" type="submit">
                                Submit
                            </Button>
                            </Form>
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                            <div style={{ marginRight: "35px", width:"20rem" }}>
                                <ImageUploader
                                withIcon={true}
                                withPreview={true}
                                label="Passport size picture"
                                buttonText="Upload Images"
                                onChange={this.onDrop}
                                imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg",".jpeg"]}
                                maxFileSize={1048576}
                                fileSizeError=" file size is too big"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Applyjob;