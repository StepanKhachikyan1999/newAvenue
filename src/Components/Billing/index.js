import React from 'react';
import css from './billing.module.css'
import {Col, Container, Row} from "react-bootstrap";
import {AiOutlineHome} from 'react-icons/Ai';
import Image from 'next/image';
import {Formik, Form, Field} from 'formik';
import {useCart} from "react-use-cart";

const BillingComponents = () => {

    const {
        isEmpty,
        cartTotal,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();

    return (
        <div>
            <Container>
                <Row>
                    <Col lg={12} md={12} xs={12}>
                        <div className={css.home}>
                            <span><AiOutlineHome/></span>
                            <span>/</span>
                            <span>Checkout</span>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">

                        <Col>
                            <div>
                                <h3>Billing Details</h3>
                            </div>
                        </Col>

                        <Col lg={12} md={12} xs={12} className='mt-3'>

                                <Formik
                                    initialValues={{
                                        email: '',
                                        password: '',
                                        lastname: '',
                                        firstname: '',
                                        phonenumber: '',
                                        phonenumber2: '',
                                        addres: ''
                                    }}
                                    validate={values => {
                                        const errors = {};
                                        if (!values.email) {
                                            errors.email = 'Required';
                                        } else if (
                                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                        ) {
                                            errors.email = 'Invalid email address';
                                        } else if (!values.lastname) {
                                            errors.lastname = 'Invalid email lastname';
                                        } else if (!values.firstname) {
                                            errors.firstname = 'Invalid email firstname';
                                        } else if (!/^[+374]{4}|[0]{1}?[1-9]{2}\d{6}$/i.test(values.phonenumber)) {
                                            errors.phonenumber = 'Invalid email phonenumber';
                                        } else if (!/^[+374]{4}|[0]{1}?[1-9]{2}\d{6}$/i.test(values.phonenumber2)) {
                                            errors.phonenumber2 = 'Invalid email phonenumber2';
                                        } else if (!values.addres) {
                                            errors.addres = 'Invalid email addres';
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
                                        <form onSubmit={handleSubmit}>

                                            <Row className="justify-content-md-center">



                                                <Col lg={6} md={12} xs={12}>
                                                    <div className={css.divOne}>
                                                        <div className={css.nameInp}>
                                                            <div>
                                                                <h4>First name</h4>
                                                                <input
                                                                    type="text"
                                                                    name="firstname"
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.name}
                                                                />
                                                                {errors.firstname && touched.firstname &&
                                                                    <div className={css.errorEmail}>{errors.firstname}</div>}
                                                            </div>

                                                            <div>
                                                                <h4>Last name</h4>
                                                                <input
                                                                    type="text"
                                                                    name="lastname"
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.lastname}
                                                                />
                                                                {errors.lastname && touched.lastname &&
                                                                    <div className={css.errorEmail}>{errors.lastname}</div>}
                                                            </div>
                                                        </div>

                                                        <div className={css.nameInp}>
                                                            <div>
                                                                <h4>Phone number</h4>
                                                                <input
                                                                    type="tel"
                                                                    name="phonenumber"
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.phonenumber}
                                                                />
                                                                {errors.phonenumber && touched.phonenumber &&
                                                                    <div className={css.errorEmail}>{errors.phonenumber}</div>}
                                                            </div>

                                                            <div>
                                                                <h4>Phone number</h4>
                                                                <input
                                                                    type="tel"
                                                                    name="phonenumber2"
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.phonenumber2}
                                                                />
                                                                {errors.phonenumber2 && touched.phonenumber2 &&
                                                                    <div className={css.errorEmail}>{errors.phonenumber2}</div>}
                                                            </div>
                                                        </div>

                                                        <div className={css.mainInp}>
                                                            <div>
                                                                <h4>Email</h4>
                                                                <input
                                                                    type="email"
                                                                    name="email"
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.email}
                                                                />
                                                                {errors.email && touched.email && <div className={css.errorEmail}>{errors.email}</div>}
                                                            </div>

                                                            <div>
                                                                <h4>Address</h4>
                                                                <input
                                                                    type="text"
                                                                    name="addres"
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.addres}
                                                                />
                                                                {errors.addres && touched.addres &&
                                                                    <div className={css.errorEmail}>{errors.addres}</div>}
                                                            </div>

                                                            <div>
                                                                <h4>Delivery pay</h4>
                                                                <Field as="select" name="del" value={values.del}>
                                                                    <option value="red">Red</option>
                                                                    <option value="green">Green</option>
                                                                    <option value="blue">Blue</option>
                                                                </Field>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>



                                                <Col lg={6} md={12} xs={12} className='mt-5'>
                                                    <div className={css.divTwo}>
                                                        <div className={css.paymentMain}>

                                                            <div className={css.paymentProduct}>
                                                                <h5>Product</h5>

                                                                <div/>
                                                            </div>


                                                            <div>
                                                                <div>
                                                                    {
                                                                        items && items.map((item) => {
                                                                            return (
                                                                                <div key={item.id}  className={css.prodName}>
                                                                                    <p>{item.productName}</p>
                                                                                    <h5>{item.itemTotal} AMD</h5>
                                                                                </div>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                                <div className={css.border}/>
                                                            </div>

                                                            <div>
                                                                <div className={css.prodName}>
                                                                    <p>Delivery</p>
                                                                    <h5>400 AMD</h5>
                                                                </div>
                                                                <div className={css.border}/>
                                                            </div>

                                                            <div>
                                                                <div className={css.prodTotal}>
                                                                    <p>Total</p>
                                                                    <h5>{cartTotal + 400} AMD</h5>
                                                                </div>
                                                                <div className={css.border}/>
                                                            </div>

                                                            <div className={css.carts}>
                                                                <p>Payment type </p>
                                                                <div className={css.imagesCart}>
                                                                    <Image
                                                                        src="/idramCart.svg"
                                                                        alt="Picture of the author"
                                                                        width={90}
                                                                        height={70}
                                                                    />
                                                                    <Image
                                                                        src="/paypal.jpg"
                                                                        alt="Picture of the author"
                                                                        width={90}
                                                                        height={70}
                                                                    />
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>
                                                </Col>


                                            <div className={css.btn}>
                                                <button type="submit" disabled={isSubmitting}>
                                                    Submit
                                                </button>
                                            </div>
                                            </Row>
                                        </form>
                                    )}
                                </Formik>



                        </Col>

                </Row>
            </Container>
        </div>
    );
};

export default BillingComponents;