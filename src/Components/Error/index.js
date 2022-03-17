import React from 'react';
import css from './error.module.css'
import {Col, Container, Row} from "react-bootstrap";
import {AiOutlineHome} from 'react-icons/Ai'
import Link from 'next/link'
import Image from 'next/image'

const ErrorComponents = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={12} md={12} xs={12}>
                        <div className={css.aboutHome}>
                            <span><AiOutlineHome /></span>
                            <span>/</span>
                            <Link href="/AboutUs">
                                <a>About Us</a>
                            </Link>
                        </div>
                    </Col>
                    <Col lg={12} md={12} xs={12}>
                            <div className={css.oops}>
                                <h1>OOPS!!!</h1>
                                <div className={css.caxik}>
                                    <span>4</span>
                                    <Image
                                        src="/caxik.svg"
                                        alt="Picture of the author"
                                        width={350}
                                        height={350}
                                    />
                                    <span>4</span>
                                </div>
                            </div>
                    </Col>
                </Row>
            </Container>
            <div className={css.errBg}>

            </div>
        </div>
    );
};

export default ErrorComponents;