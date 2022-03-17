import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import css from './home.module.css'
import Slider from "react-slick";
import Image from 'next/image'
import HomeTwo from "./HomeTwo";
import HomeFloral from "./HomeFloral";
import HomeTouch from "./HomeTouch";
import HomeMap from "./HomeMap";
import Link from 'next/link'

const HomeComponents = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <div className={css.homeBg}>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col lg={12} md={12} xs={12}>
                            <div className={css.homeBgText}>
                                <div className={css.homeTextTwo}>
                                    <h1>Lorem Ipsum</h1>
                                    <h3>Flowers & Handmade Goods</h3>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container>
                <Row>
                    <Col lg={12} md={12} xs={12} className='mt-5'>
                        <Slider {...settings}>
                            <div>
                                <div>

                                    <div className={css.homeSlider1}>

                                        <div className={css.homeSliderTExt1}>
                                            <Image
                                                src="/onlineFloristText.svg"
                                                alt="Picture of the author"
                                                width={200}
                                                height={80}
                                                priority
                                            />
                                            <h3>Express your interest by donating flowers</h3>
                                        </div>
                                        <div>
                                            <Image
                                                src="/homeSlider1_2.png"
                                                alt="Picture of the author"
                                                width={280}
                                                height={200}
                                                priority
                                                className={css.caxkaman}
                                            />
                                            <Image
                                                src="/homeSlider1.svg"
                                                alt="Picture of the author"
                                                width={380}
                                                height={380}
                                                priority
                                            />
                                        </div>

                                        <div className={css.homeSliderDiv2}>
                                            <Col lg={6} md={12} xs={12}>
                                                <div className={css.homeSlider1Flex}>
                                                    <Image
                                                        src="/homeSlider1_3.svg"
                                                        alt="Picture of the author"
                                                        width={380}
                                                        height={380}
                                                        priority
                                                    />
                                                    <div className={css.homeSlider1Direction}>
                                                        <Image
                                                            src="/homeSlider1_4.svg"
                                                            alt="Picture of the author"
                                                            width={200}
                                                            height={200}
                                                            priority
                                                        />
                                                        <Image
                                                            src="/homeSlider1_5.svg"
                                                            alt="Picture of the author"
                                                            width={200}
                                                            height={200}
                                                            priority
                                                        />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={6} md={12} xs={12}>
                                                <div className={css.homeSliderDiv2Text}>
                                                    <Image
                                                        src="/homeSliderTextTwo.svg"
                                                        alt="Picture of the author"
                                                        width={150}
                                                        height={100}
                                                        priority
                                                    />
                                                    <div className={css.homeSliderText2Direction}>
                                                        <h3>New and popular</h3>
                                                        <h3>flowers on the page</h3>
                                                    </div>
                                                </div>
                                            </Col>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div>
                                <div>

                                    <div className={css.homeSlider1}>

                                        <div className={css.homeSliderTExt1}>
                                            <Image
                                                src="/onlineFloristText.svg"
                                                alt="Picture of the author"
                                                width={200}
                                                height={80}
                                                priority
                                            />
                                            <h3>Express your interest by donating flowers</h3>
                                        </div>
                                        <div>
                                            <Image
                                                src="/homeSlider1_2.png"
                                                alt="Picture of the author"
                                                width={280}
                                                height={200}
                                                priority
                                                className={css.caxkaman}
                                            />
                                            <Image
                                                src="/homeSlider1.svg"
                                                alt="Picture of the author"
                                                width={380}
                                                height={380}
                                                priority
                                            />
                                        </div>

                                        <div className={css.homeSliderDiv2}>
                                            <Col lg={6} md={12} xs={12}>
                                                <div className={css.homeSlider1Flex}>
                                                    <Image
                                                        src="/homeSlider1_3.svg"
                                                        alt="Picture of the author"
                                                        width={380}
                                                        height={380}
                                                        priority
                                                    />
                                                    <div className={css.homeSlider1Direction}>
                                                        <Image
                                                            src="/homeSlider1_4.svg"
                                                            alt="Picture of the author"
                                                            width={200}
                                                            height={200}
                                                            priority
                                                        />
                                                        <Image
                                                            src="/homeSlider1_5.svg"
                                                            alt="Picture of the author"
                                                            width={200}
                                                            height={200}
                                                            priority
                                                        />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={6} md={12} xs={12}>
                                                <div className={css.homeSliderDiv2Text}>
                                                    <Image
                                                        src="/homeSliderTextTwo.svg"
                                                        alt="Picture of the author"
                                                        width={150}
                                                        height={100}
                                                        priority
                                                    />
                                                    <div className={css.homeSliderText2Direction}>
                                                        <h3>New and popular</h3>
                                                        <h3>flowers on the page</h3>
                                                    </div>
                                                </div>
                                            </Col>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div>
                                <div>

                                    <div className={css.homeSlider1}>

                                        <div className={css.homeSliderTExt1}>
                                            <Image
                                                src="/onlineFloristText.svg"
                                                alt="Picture of the author"
                                                width={200}
                                                height={80}
                                                priority
                                            />
                                            <h3>Express your interest by donating flowers</h3>
                                        </div>
                                        <div>
                                            <Image
                                                src="/homeSlider1_2.png"
                                                alt="Picture of the author"
                                                width={280}
                                                height={200}
                                                priority
                                                className={css.caxkaman}
                                            />
                                            <Image
                                                src="/homeSlider1.svg"
                                                alt="Picture of the author"
                                                width={380}
                                                height={380}
                                                priority
                                            />
                                        </div>

                                        <div className={css.homeSliderDiv2}>
                                            <Col lg={6} md={12} xs={12}>
                                                <div className={css.homeSlider1Flex}>
                                                    <Image
                                                        src="/homeSlider1_3.svg"
                                                        alt="Picture of the author"
                                                        width={380}
                                                        height={380}
                                                        priority
                                                    />
                                                    <div className={css.homeSlider1Direction}>
                                                        <Image
                                                            src="/homeSlider1_4.svg"
                                                            alt="Picture of the author"
                                                            width={200}
                                                            height={200}
                                                            priority
                                                        />
                                                        <Image
                                                            src="/homeSlider1_5.svg"
                                                            alt="Picture of the author"
                                                            width={200}
                                                            height={200}
                                                            priority
                                                        />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={6} md={12} xs={12}>
                                                <div className={css.homeSliderDiv2Text}>
                                                    <Image
                                                        src="/homeSliderTextTwo.svg"
                                                        alt="Picture of the author"
                                                        width={150}
                                                        height={100}
                                                        priority
                                                    />
                                                    <div className={css.homeSliderText2Direction}>
                                                        <h3>New and popular</h3>
                                                        <h3>flowers on the page</h3>
                                                    </div>
                                                </div>
                                            </Col>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </Slider>
                    </Col>
                    <Col lg={12} md={12} xs={12} className='mt-5'>
                        <div className={css.homeAbout}>
                            <h1>Why Shop With Us?</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries,</p>
                            <Link href="/AboutUs">
                                See more
                            </Link>
                            <div className={css.homeAboutImg}>
                                <Image
                                    src="/bmbul.svg"
                                    alt="Picture of the author"
                                    width={150}
                                    height={150}
                                    priority
                                />
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
            <div>
                <HomeTwo/>
            </div>
            <Container>
                <Row className="justify-content-md-center">
                    <HomeFloral />
                </Row>

            </Container>

            <div className={css.homeTouch}>
                <Container>
                    <Row>
                        <HomeTouch />
                    </Row>
                </Container>
            </div>
            <div className={css.homeMap}>
                <HomeMap />
            </div>
        </div>
    );
};

export default HomeComponents;