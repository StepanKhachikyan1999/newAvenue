import React from 'react';
import css from "./contactUs.module.css";
import {Col, Container, Row} from "react-bootstrap";
import {AiOutlineHome} from "react-icons/ai";
import {Formik} from 'formik';
import TextField from '@mui/material/TextField';
import Image from 'next/image';

const ContactComponents = () => {
    return (
        <div>

            <Container>
                <Row>
                    <Col>
                        <div className={css.wishHome}>
                            <AiOutlineHome/>
                            <span>/</span>
                            <p>My wish list</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} xs={12}>
                        <div className={css.contact}>
                            <h1>Contact Us</h1>
                            <h2>Send Message</h2>
                        </div>
                        <Formik
                            initialValues={{
                                email: '',
                                password: '',
                                name: '',
                                phonenumber: '',
                                message: ''
                            }}
                            validate={values => {
                                const errors = {};
                                if (!values.email) {
                                    errors.email = 'Required';
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = 'Invalid email address';
                                } else if (!values.name) {
                                    errors.name = 'Invalid email lastname';
                                } else if (!/^[+374]{4}|[0]{1}?[1-9]{2}\d{6}$/i.test(values.phonenumber)) {
                                    errors.phonenumber = 'Invalid email phonenumber';
                                } else if (!values.message) {
                                    errors.message = 'Invalid email message';
                                }
                                return errors;
                            }}
                            onSubmit={(values, {setSubmitting}) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 400);
                            }}
                        >
                            {({
                                  values,
                                  errors,
                                  touched,
                                  handleChange,
                                  handleBlur,
                                  handleSubmit,
                                  isSubmitting,
                                  /* and other goodies */
                              }) => (
                                <form onSubmit={handleSubmit} className={css.formik}>
                                    <TextField
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                        id="outlined-required"
                                        label="Your name"
                                        defaultValue="John Cupper"
                                    />
                                    {errors.name && touched.name && errors.name}
                                    <TextField
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        id="outlined-required"
                                        label="email"
                                        defaultValue="JohnCupper@gmail.com"
                                    />
                                    {errors.email && touched.email && errors.email}
                                    <TextField
                                        type="tel"
                                        name="phonenumber"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.phonenumber}
                                        id="outlined-required"
                                        label="+374-00-00-00"
                                        defaultValue="+374-00-00-00"
                                    />
                                    {errors.phonenumber && touched.phonenumber && errors.phonenumber}
                                    <TextField
                                        type="text"
                                        name="message"
                                        onChange={handleChange}
                                        onBlur={handleBlur} s
                                        value={values.message}
                                        id="outlined-required"
                                        label="Message"
                                        defaultValue=" "
                                        className={css.ll}
                                    />
                                    {errors.message && touched.message && errors.message}
                                    <button type="submit" disabled={isSubmitting} className={css.btn}>
                                        Submit
                                    </button>
                                </form>
                            )}
                        </Formik>
                    </Col>

                    <Col lg={6} md={6} xs={12}>
                        <div>
                            <div className={css.posDiv}>
                                <Image
                                    src="/contactMain.svg"
                                    alt="Picture of the author"
                                    width={600}
                                    height={500}
                                />
                                <div className={css.absalute}>
                                    <div className={css.one}>
                                        <Image
                                            src="/contactEmail.svg"
                                            alt="Picture of the author"
                                            width={20}
                                            height={20}
                                        />
                                        <h5>info@abcde</h5>
                                    </div >
                                    <div  className={css.two}>
                                        <Image
                                            src="/contactPhone.svg"
                                            alt="Picture of the author"
                                            width={20}
                                            height={20}
                                        />
                                        <h5>+374 (10) 123-456</h5>
                                    </div>
                                    <div>
                                        <Image
                                            src="/contactLocation.svg"
                                            alt="Picture of the author"
                                            width={20}
                                            height={20}
                                        />
                                        <h5>Yerevan, Pushkin 50</h5>
                                    </div >
                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>


            <div className={css.wishBg}>

            </div>
        </div>
    );
};

export default ContactComponents;