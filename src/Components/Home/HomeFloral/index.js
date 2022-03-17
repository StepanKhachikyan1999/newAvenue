import React, {useEffect, useState} from 'react';
import css from './homeFloral.module.css'
import {Col, Container, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {basketDataGet, getProduct, swishDataGet, swishRemoveDataGet} from "../../../Redux/Actions/productActions";
import Image from 'next/image';
import Link from 'next/link'
import {useCart} from "react-use-cart";
import HomeItem from "../HomeItem";

const HomeFloral = () => {

    const data = useSelector(state => state.HomeReducers.productData)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProduct())
    }, [])


    return (
        <div>
            <div className={css.FloralText}>
                <div/>
                <h1>Floral Arrangements</h1>
                <div/>
            </div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col lg={10} md={10} xs={12}>
                        <div className={css.floralTextP}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the
                                industry's standard dummy text ever since the 1500s, when an unknown</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className="justify-content-md-center mt-5">

                    {
                        data && data.slice(0, 4).map((item) => {
                            return (
                                    <HomeItem item={item} key={item.id} />
                            )
                        })
                    }
                    <Link href="/Product">
                        <p className={css.productSee}>See more ></p>
                    </Link>


                </Row>
            </Container>


        </div>
    );
};

export default HomeFloral;