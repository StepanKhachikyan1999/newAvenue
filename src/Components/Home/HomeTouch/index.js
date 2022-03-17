import React from 'react';
import css from './homeTouch.module.css';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {GrFacebookOption} from 'react-icons/Gr'
import {BsInstagram} from 'react-icons/Bs'
import Image from 'next/image'

const HomeTouch = () => {
    return (
            <Container>
                <Row>
                    <Col lg={6} md={6} xs={12}>
                        <div className={css.mainTouch}>
                            <h1>Let’s Get in Touch </h1>
                            <Form className='mt-5 mb-5'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="name" placeholder="Name/Surname" className={css.inpName}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Email" className={css.inpName}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="name" placeholder="Message" className={css.inpTxterea}/>
                                </Form.Group>
                                <Button type="submit" className={css.btnSend}>
                                    Send
                                </Button>
                            </Form>
                            <div className={css.icons}>
                                <h3>FOLLOW US:</h3>
                                <GrFacebookOption className={css.iconFb}/>
                                <BsInstagram className={css.iconInsta}/>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} xs={12}>
                        <div className={css.touchImg}>
                            <Image
                                src="/touchImg.svg"
                                alt="Picture of the author"
                                width={600}
                                height={500}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
    );
};

export default HomeTouch;