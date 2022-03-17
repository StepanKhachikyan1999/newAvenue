import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {serviceGet} from "../../Redux/Actions/serviceActions";
import css from './service.module.css';

const ServiceComponent = () => {

    const serviceData = useSelector(state => state.serviceReducers.serviceData);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(serviceGet())
    }, [])

    console.log(serviceData, '888888888888')

    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">

                    {
                        serviceData && serviceData.map((item) => {
                            return (
                                <Col key={item.id} lg={4} md={6} xs={12}>
                                    <div>
                                        <div className={css.mainOne}>
                                            <div className={css.mainTwo}>
                                                <img src={item.productImage1} alt=""/>
                                            </div>
                                        </div>
                                    </div>

                                </Col>
                            )
                        })
                    }

                </Row>
            </Container>
        </div>
    );
};

export default ServiceComponent;