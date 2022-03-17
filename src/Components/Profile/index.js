import React from 'react';
import css from './profile.module.css'
import {Col, Container, Row, Tabs, Tab} from "react-bootstrap";
import {BiHomeAlt} from "react-icons/bi";
import WhisItem from "../WhisItem";
import {useSelector} from "react-redux";

const ProfileComponent = () => {

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
                    <Col lg={12} md={12} xs={12} className='mt-3 mb-5'>
                        <div className={css.productHome}>
                            <BiHomeAlt/>
                            <span>/</span>
                            <p>My profile</p>
                        </div>
                    </Col>
                    <Col lg={12} md={12} xs={12} className='mt-5'>
                        <div className={css.profileText}>
                            <h1>My profile</h1>
                        </div>
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="home" title="My purchases">
                                My profile is Empty!
                            </Tab>
                            <Tab eventKey="profile" title="Wish list">
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
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default ProfileComponent;