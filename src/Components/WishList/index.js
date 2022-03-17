import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import css from './wishList.module.css'
import {AiOutlineHome} from 'react-icons/Ai'
import {useSelector} from "react-redux";
import WhisItem from "../WhisItem";

const WishListComponents = () => {

    var dataMain;
    if (typeof window !== 'undefined') {
        dataMain = localStorage.getItem('swish')
    } else {
        console.log('You are on the server')
    }

    const dataMainSwish = dataMain && dataMain.length > 0 ? JSON.parse(dataMain) : null

    const swishData = useSelector(state => state.HomeReducers.swishData)


    return (
        <div>
            <Container>
                <Row>
                    <Col lg={12} md={12} xs={12}>
                        <div className={css.wishHome}>
                            <AiOutlineHome/>
                            <span>/</span>
                            <p>My wish list</p>
                        </div>
                    </Col>
                    <Col lg={12} md={12} xs={12}>
                        <div className={css.wishMyList}>
                            <h1>My wish list</h1>
                        </div>
                    </Col>
                    <Col lg={12} md={12} xs={12}>

                        {dataMainSwish == undefined || dataMainSwish.length <= 0 ? <h3>My wish list is Empty</h3> :
                            <div className={css.table}>
                                <table>
                                    <thead>
                                    <tr className={css.tr}>
                                        <th className={css.tdR}>IMAGE</th>
                                        <th className={css.tdR}>NAME</th>
                                        <th className={css.tdR}>PRICE</th>
                                        <th>ACTION</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                          swishData.length > 0 && swishData !== [] ? swishData.map((item) => {
                                            return (
                                                <WhisItem key={item.id} itemDataWhis={item} />
                                            )
                                        }) : dataMainSwish && dataMainSwish.map((item) => {
                                            return (
                                                <WhisItem key={item.id} itemDataWhis={item} />
                                            )
                                          })
                                    }
                                    </tbody>
                                </table>
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

export default WishListComponents;