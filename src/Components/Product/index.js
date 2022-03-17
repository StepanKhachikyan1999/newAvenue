import React, {useEffect, useState} from 'react';
import css from './product.module.css'
import {Col, Container, Dropdown, Form, Row} from "react-bootstrap";
import {BiHomeAlt} from 'react-icons/Bi'
import {FiFilter} from 'react-icons/Fi'
import {RiFilterOffLine} from 'react-icons/Ri'
import Link from "next/link";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {filterDataGet, getProduct} from "../../Redux/Actions/productActions";
import {useCart} from "react-use-cart";

const ProductContainer = () => {

    const {addItem} = useCart();

    const [filterIcon, setFilterIcon] = useState()

    const data = useSelector(state => state.HomeReducers.productData)

    let dataFilter = useSelector(state => state.HomeReducers.filterData)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProduct())
    }, [])

    const handlerFilterIcon = () => {

    }

    const [fromM, setFromM] = useState('')
    const [toM, setToM] = useState('')
    const [arrangementM, setarrangementM] = useState('')

    let from;
    const addSelectFrom = (e) => {
        from = e.target.value
        setFromM(from)
    }

    let to;
    const addSelectTo = (e) => {
        to = e.target.value
        setToM(to)
    }

    let arrangement;
    const drop1 = (e) => {
        arrangement = e.target.value
        setarrangementM(arrangement)
    }

    const dataMain = {
        mainTo: toM,
        froMain: fromM,
        arrangementMain: arrangementM
    }

    const addFilter = () => {
        dispatch(filterDataGet(dataMain))
        setFilterIcon(!filterIcon)
    }

    const addFilter2 = () => {
        setFromM('')
        setToM('')
        setarrangementM('')
        dataFilter.length = 0
        setFilterIcon(!filterIcon)
    }

    const [sliceData, setSliceData] = useState([])


    const handlerSee = () => {
        const xData = data
        setSliceData(
            xData.slice(8).map((item) => {
                return (
                    <Col key={item.id} lg={4} md={4} xs={12}>
                        <div className={css.mainProduct}>
                            <Link href="/Product">
                                <div className={css.productDiv}>
                                    <img src={item.productImage1} alt="" height={300} width={290}/>
                                    <div className={css.productPrice}>
                                        <p>{item.price} $</p>
                                    </div>

                                </div>
                            </Link>

                            <div className={css.productText}>
                                <h2>{item.productName}</h2>
                                <h3>Medium arrangement</h3>
                            </div>
                            <div className={css.productClick}>
                                <Image src="/basket.svg" width="20" height="20"/>
                                <Image src="/love.svg" width="20" height="20" onClick={() => addItem(p)}/>
                            </div>
                        </div>


                    </Col>
                )
            })
        )
    }

    console.log(dataFilter, 'fffffffffffffffffffffff')

    return (
        <div>
            <Container>
                <Row>
                    <Col lg={12} md={12} xs={12} className='mt-2'>
                        <div className={css.productHome}>
                            <BiHomeAlt/>
                            <span>/</span>
                            <p>Flowers</p>
                        </div>
                    </Col>

                    <Col lg={7} md={7} xs={12}>
                        <div className={css.main}>
                            <div>
                                <h2>Sort by price </h2>
                                <div className={css.sort}>

                                    <div className={css.sortFlexMain}>

                                        <div>
                                            <p>From</p>
                                            <input type="text" name='From' value={fromM} placeholder='min'
                                                   onChange={addSelectFrom}/>
                                        </div>

                                        <div>
                                            <p>То</p>
                                            <input type="text" name='To' value={toM} placeholder='max'
                                                   onChange={addSelectTo}/>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2>Sort by assortment</h2>
                                <div className={css.sort}>

                                    <div className={css.sortFlexMain}>

                                        <div>
                                            <p>Assortments</p>
                                            <div className={css.drop}>
                                                <select name="cars" id="cars" value={arrangementM}
                                                        className={css.select} onChange={drop1}>
                                                    <option value="Arrangement" name="Arrangement">Arrangement</option>
                                                    <option value="Bouquet" name="Bouquet">Bouquet</option>
                                                    <option value="Single" name="Single">Single</option>
                                                </select>
                                                <div className={css.filterMain}>
                                                    {
                                                        dataFilter && dataFilter.length != 0 ?
                                                            <button onClick={addFilter2}>Clear <span>

                                                                        <RiFilterOffLine/>


                                                                           </span>
                                                            </button> :
                                                            <button onClick={addFilter}>Filter <span>
                                                                        <FiFilter/>

                                                                       </span>
                                                            </button>
                                                    }
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </Col>

                </Row>
                <Row className="justify-content-md-start mt-5">

                    {
                        dataFilter && dataFilter.length > 0 ? dataFilter.map((item) => {
                                return (
                                    <Col key={item.id} lg={4} md={4} xs={12}>
                                        <div className={css.mainProduct}>
                                            <Link href={"/Product/" + item.id}>
                                                <div className={css.productDiv}>
                                                    <img src={item.productImage1} alt="" height={300} width={290}/>
                                                    <div className={css.productPrice}>
                                                        <p>{item.price} $</p>
                                                    </div>

                                                </div>
                                            </Link>

                                            <div className={css.productText}>
                                                <h2>{item.productName}</h2>
                                                <h3>Medium arrangement</h3>
                                            </div>
                                            <div className={css.productClick}>
                                                <Image src="/basket.svg" width="20" height="20"/>
                                                <Image src="/love.svg" width="20" height="20"
                                                       onClick={() => addItem(item)}/>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                            : data.slice(0, 9).map((item) => {
                                return (
                                    <Col key={item.id} lg={4} md={4} xs={12}>
                                        <div className={css.mainProduct}>
                                            <Link href={"/Product/" + item.id}>
                                                <div className={css.productDiv}>
                                                    <img src={item.productImage1} alt="" height={300} width={290}/>
                                                    <div className={css.productPrice}>
                                                        <p>{item.price} $</p>
                                                    </div>

                                                </div>
                                            </Link>

                                            <div className={css.productText}>
                                                <h2>{item.productName}</h2>
                                                <h3>Medium arrangement</h3>
                                            </div>
                                            <div className={css.productClick}>
                                                <Image src="/basket.svg" width="20" height="20"/>
                                                <Image src="/love.svg" width="20" height="20"
                                                       onClick={() => addItem(item)}/>
                                            </div>
                                        </div>


                                    </Col>
                                )
                            })

                    }
                    {sliceData}
                    {sliceData.length <= 0 ? <p className={css.productSee} onClick={handlerSee}>See more ></p> : null}



                </Row>
            </Container>
        </div>
    );
};

export default ProductContainer;