import React from 'react';
import css from './homeTwo.module.css'
import {Col, Container, Row} from "react-bootstrap";
import Image from 'next/image'

const HomeTwo = () => {
    return (
        <div className={css.bgHomeTwo}>

            <Container>
                <Row className="justify-content-md-center">
                    <Col lg={4} md={4} xs={12}>

                        <div className={css.colOne}>
                            <Image
                                src="/homeTwoOne.svg"
                                alt="Picture of the author"
                                width={140}
                                height={140}
                                priority
                            />
                            <h2>Planet Friendly & Sustainable</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>

                    </Col>

                    <Col lg={4} md={4} xs={12}>
                        <div className={css.colOne}>
                            <Image
                                src="/homeTwoTwo.svg"
                                alt="Picture of the author"
                                width={140}
                                height={140}
                                priority
                            />
                            <h2>SUPPORTS AND DELIVERY <br/> ATTENTION</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </Col>

                    <Col lg={4} md={4} xs={12}>
                        <div className={css.colOne}>
                            <Image
                                src="/homeTwothree.svg"
                                alt="Picture of the author"
                                width={140}
                                height={140}
                                priority
                            />
                            <h2>HIGH QUALITY  <br/> PRODUCTS</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeTwo;