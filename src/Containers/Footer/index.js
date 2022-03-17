import React from 'react';
import css from './footer.module.css'
import {Col, Container, Row} from "react-bootstrap";
import NextLink from "../NextLink";
import Image from 'next/image'

const FooterContainer = () => {
    return (
        <div>
            <div className={css.footherBorder}/>

            <Container>
                <Row>
                    <Col lg={3} md={4} xs={12}>
                        <div className={css.footLink}>
                            <h3>INFORMATION</h3>
                            <NextLink href=''>
                                About Us
                            </NextLink>
                            <NextLink href=''>
                                Customer Service
                            </NextLink>
                            <NextLink href=''>
                                Cooperation
                            </NextLink>
                            <NextLink href=''>
                                Privacy Policy
                            </NextLink>
                            <NextLink href=''>
                                Orders and Returns
                            </NextLink>
                            <NextLink href=''>
                                Contact Us
                            </NextLink>
                        </div>
                    </Col>
                    <Col lg={3} md={4} xs={12}>
                        <div className={css.footLink}>
                            <h3>WHY BUY FROM US</h3>
                            <NextLink href=''>
                                Shipping & Delivery
                            </NextLink>
                            <NextLink href=''>
                                Payment
                            </NextLink>
                            <NextLink href=''>
                                Guarantee
                            </NextLink>
                        </div>
                    </Col>
                    <Col lg={2} md={4} xs={12}>
                        <div className={css.footLink}>
                            <h3>MY ACCOUNT</h3>
                            <NextLink href=''>
                                Register/Login
                            </NextLink>
                            <NextLink href=''>
                                View Cart
                            </NextLink>
                            <NextLink href=''>
                                My Wishlist
                            </NextLink>
                            <NextLink href=''>
                                FAQ
                            </NextLink>
                        </div>
                    </Col>
                    <Col lg={4} md={12} xs={12}>
                        <div className={css.footText}>
                            <h3>CONTACTS</h3>
                            <p>50 Pushkin street, Yerevan, 0002, Armenia</p>
                            <p>Phones: +374 10 530374; +374 94 530374</p>
                            <p>E-mail: order@flower.am</p>
                            <div className={css.cardImages}>
                                <Image
                                    src="/arca.svg"
                                    alt="Picture of the author"
                                    width={80}
                                    height={80}
                                />
                                <Image
                                    src="/idram.svg"
                                    alt="Picture of the author"
                                    width={80}
                                    height={80}
                                />
                                <Image
                                    src="/webMony.svg"
                                    alt="Picture of the author"
                                    width={80}
                                    height={80}
                                />
                                <Image
                                    src="/mony.svg"
                                    alt="Picture of the author"
                                    width={80}
                                    height={80}
                                />
                                <Image
                                    src="/visa.svg"
                                    alt="Picture of the author"
                                    width={80}
                                    height={80}
                                />
                                <Image
                                    src="/masterCard.svg"
                                    alt="Picture of the author"
                                    width={80}
                                    height={80}
                                />
                                <Image
                                    src="/verified.svg"
                                    alt="Picture of the author"
                                    width={80}
                                    height={80}
                                />
                                <Image
                                    src="/amerian.svg"
                                    alt="Picture of the author"
                                    width={80}
                                    height={80}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className={css.footDownText}>
                    <p> 2022, Copyright text aaaaaa</p>
                </div>
            </Container>
        </div>
    );
};

export default FooterContainer;