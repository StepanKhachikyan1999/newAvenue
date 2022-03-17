import React from 'react';
import css from './basket.module.css'
import {Col, Container, Row} from "react-bootstrap";
import {AiOutlineHome} from "react-icons/ai";
import {useSelector} from "react-redux";
import Link from 'next/link';
import BasketItem from "../BasketItem";
import {useCart} from "react-use-cart";

const BasketComponents = () => {

    const dataBasket = useSelector(state => state.HomeReducers.basketData);

    const {
        isEmpty,
        items,
        cartTotal
    } = useCart();

    return (
        <div>
            <Container>
                <Row>
                    <Col lg={12} md={12} xs={12}>
                        <div className={css.wishHome}>
                            <AiOutlineHome/>
                            <span>/</span>
                            <p>Cart</p>
                        </div>
                    </Col>
                    <Col lg={12} md={12} xs={12}>
                        <div className={css.wishMyList}>
                            <h1>Add to cart list</h1>
                        </div>
                    </Col>
                    <Col lg={12} md={12} xs={12}>

                        {
                              isEmpty ?
                                <h3>Your wish list is empty.

                                </h3> : <div className={css.table}>
                                    <table>
                                        <thead>
                                        <tr className={css.tr}>
                                            <th className={css.tdR}>IMAGE</th>
                                            <th className={css.tdR}>NAME</th>
                                            <th className={css.tdR}>PRICE</th>
                                            <th className={css.tdR}>QUANTITY</th>
                                            <th className={css.tdR}>TOTAL</th>
                                            <th>ACTION</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            items && items.map((item) => {
                                                return (
                                                    <BasketItem itemData={item} key={item.id}/>
                                                )
                                            })
                                        }
                                        </tbody>

                                    </table>
                                </div>
                        }


                    </Col>
                </Row>
                <Row className='mt-5 justify-content-md-end'>
                    <Col lg={12} md={12} xs={12}>
                        {
                             isEmpty ? null :
                                <div className={css.btnAdd}>
                                    <div>
                                        <h1>TOTAL PRICE: {cartTotal} AMD</h1>
                                        <Link href="/Billings">
                                            <button>Buy</button>
                                        </Link>
                                    </div>
                                </div>
                        }

                    </Col>
                </Row>
            </Container>
            <div className={css.wishBg}>

            </div>
        </div>
    );
};

export default BasketComponents;