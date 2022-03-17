import React from 'react';
import css from './aboutUs.module.css';
import {Col, Container, Row} from "react-bootstrap";

const AboutUsComponents = () => {
    return (
        <div>
            <div className={css.aboutUsBg}>
                <h1>Avenue Des Fleurs</h1>
            </div>

            <Container>
                <Row className='mt-5 mb-5'>
                    <Col lg={12} md={12} xs={12}>
                        <div>
                            <div className={css.aboutH1}>
                                <h2>About us</h2>
                            </div>
                            <div className={css.aboutP}>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                                    with desktop publishing software like Aldus PageMaker including versions of Lorem
                                    Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                    an unknown printer took a galley of type and scrambled it to make a type specimen
                                    book. It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                                    with desktop publishing software like Aldus PageMaker including versions of Lorem
                                    Ipsum.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className={css.aboutBg2}>

            </div>
        </div>
    );
};

export default AboutUsComponents;