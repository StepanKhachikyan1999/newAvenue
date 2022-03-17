import React, {useState} from 'react';
import {HelmetLayout} from "../../src/Layouts";
import {useRouter} from "next/router";
import {productData} from "../../src/Redux/Types/productTypes";
import {Col, Container, Row, Alert, Button} from "react-bootstrap";
import css from './productDetail.module.css'
import {AiOutlineMinus} from 'react-icons/Ai';
import {AiOutlinePlus} from 'react-icons/Ai'
import {AiOutlineHeart} from 'react-icons/Ai'
import Image from 'next/image'
import {useCart} from "react-use-cart";
import {useDispatch} from "react-redux";
import {swishDataGet, swishRemoveDataGet} from "../../src/Redux/Actions/productActions";


const ProductDetail = () => {

    const {addItem, items} = useCart();

    const [count, setCount] = useState(1)

    const [state, setState] = useState(false);

    const [show, setShow] = useState(false);

    const [textereaData, setTextereaData] = useState('')

    const router = useRouter()

    const prodId = router.query.id;

    const filterId = productData.filter((i) => {
        return prodId == i.id
    })

    const filterPriceNumber = filterId.map((item) => {
        return item.price
    })

    const numberPrice = Number(filterPriceNumber)

    const [filterPrice, setFilterPrice] = useState(Number(numberPrice))

    let imgMainn = filterId.map((i) => {
        return i.productImage1
    })

    const [imgMain, setImgMain] = useState(imgMainn)

    const handelrImg = (log) => {
        setImgMain(log)
    }

    const handlerCountPlus = () => {
        setFilterPrice(filterPrice + numberPrice)
        setCount(count + 1)
    }

    let itemQuant = items.map((item) => {
        return Number(item.quantity)
    })

    const handlerCountMinus = () => {
        setFilterPrice(filterPrice - numberPrice)
        setCount(count - 1)
    }

    const [timeData, setTimeData] = useState('')
    const [calendarData, setCalendarData] = useState('')


    let timeValue
    const handlertime = (e) => {
        timeValue = e.target.value
        setTimeData(timeValue)
    }

    let calendarValue
    const handlerCalendar = (e) => {
        calendarValue = e.target.value
        setCalendarData(calendarValue)
    }

    let textereaValue;
    const handlerTexterea = (e) => {
        textereaValue = e.target.value
        setTextereaData(textereaValue)
    }

    const dispatch = useDispatch()
    const ToggleState = (item, id) => () => {
        setState(!state);
        !state ? dispatch(swishDataGet(item)) : dispatch(swishRemoveDataGet(id))
    }

    const mainData = filterId.map((i) => ({
        id: i.id,
        time: timeData,
        basket: i.basket,
        count: count,
        calendar: calendarData,
        price: i.price,
        filterPrice: filterPrice,
        textereaDataMain: textereaData,
        productImage1: i.productImage1,
        productName: i.productName
    }))

    const addCart = (item, itemQuant = count) => {
        addItem(item, itemQuant = count)
        setShow(true)
    }
    let toogle
    if (typeof window !== 'undefined') {
        console.log('You are on the browser')
         toogle = localStorage.getItem('swish')
        // 👉️ can use localStorage here
    } else {
        console.log('You are on the server')
        // 👉️ can't use localStorage
    }


    return (
        <div>

            <HelmetLayout title="details">
                <div>
                    <Alert show={show} variant="success">
                        <div className={css.alert}>
                            <Alert.Heading>
                                <Image
                                src="/alert.svg"
                                alt="Picture of the author"
                                width={30}
                                height={30}
                            />
                                Success: You have added to your shopping cart!</Alert.Heading>
                            <div className="d-flex justify-content-end alertClose">
                                <Image
                                    src="/closeAlert.svg"
                                    alt="Picture of the author"
                                    width={30}
                                    height={30}
                                    onClick={() => setShow(false)}
                                />
                            </div>
                        </div>
                    </Alert>
                </div>
                <Container>
                    <Row>
                        <Col lg={12} md={12} xs={12}>
                            <div className={css.textClock}>
                                <h3>Orders made after 19:00 will be delivered the next day after 10:30</h3>
                            </div>
                        </Col>
                        <Col lg={6} md={6} xs={6} className='mt-5 mb-5'>
                            {
                                filterId && filterId.map((i) => {
                                    return (
                                        <div key={i.id}>
                                            <div className={css.detailImgMain}>
                                                {
                                                    imgMain == 0 ? <img src={i.productImage1} alt=""/> :
                                                        <img src={imgMain} alt=""/>
                                                }
                                            </div>
                                            <div className={css.detailImg}>
                                                <img onClick={() => handelrImg(i.productImage2)} src={i.productImage2}
                                                     alt=""/>
                                                <img onClick={() => handelrImg(i.productImage3)} src={i.productImage3}
                                                     alt=""/>
                                                <img onClick={() => handelrImg(i.productImage4)} src={i.productImage4}
                                                     alt=""/>
                                                <img onClick={() => handelrImg(i.productImage5)} src={i.productImage5}
                                                     alt=""/>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Col>
                        <Col lg={6} md={6} xs={6} className='mt-5 mb-5'>
                            {filterId && filterId.map((item) => {
                                return (
                                    <div key={item.id}>

                                        <div className={css.detailName}>
                                            <h2>{item.productName}</h2>
                                            <span>Availability: {item.productInStock == true ?
                                                <p>In Stock</p> : 'No'}</span>
                                            <span>Model: {item.productModel}</span>
                                            <h3>$ {filterPrice}</h3>
                                        </div>

                                        <div className={css.amount}>
                                            <p>Amount:</p>
                                            <div className={css.PlusMinus}>
                                                {
                                                    count <= 0 ? <div className={css.spanClick}
                                                        ><AiOutlineMinus/></div> :
                                                        <div className={css.spanClick}
                                                             onClick={handlerCountMinus}><AiOutlineMinus/></div>
                                                }

                                                <div className={css.count}>{count}</div>
                                                <div className={css.spanClick} onClick={handlerCountPlus}>
                                                    < AiOutlinePlus/></div>
                                            </div>
                                        </div>

                                        <div className={css.data}>
                                            <div className={css.calendarText}>
                                                <h3>Delivary date:</h3>
                                            </div>
                                            <div className={css.dateInp}>
                                                <input type="date" onChange={handlerCalendar}/>
                                            </div>
                                        </div>

                                        <div className={css.data}>
                                            <div className={css.calendarText}>
                                                <h3>Delivary time::</h3>
                                            </div>
                                            <div className={css.dateInp}>
                                                <select name="Time" id="cars" onChange={handlertime}>
                                                    <option value="10:11">10:11</option>
                                                    <option value="11:12">11:12</option>
                                                    <option value="12:13">12:13</option>
                                                    <option value="13:14">13:14</option>
                                                    <option value="14:1">14:15</option>
                                                    <option value="15:16">15:16</option>
                                                    <option value="17:18">17:18</option>
                                                    <option value="19:20">19:20</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className={css.texterea}>
                                            <h3>Card message (If text contains more than 300 characters, it will be
                                                printed)</h3>
                                            <input type="text" onChange={handlerTexterea}
                                                   placeholder='Card message (If text contains more than 300 characters, it will  be printed)'/>
                                        </div>

                                        <div className={css.addMain}>
                                            <div className={css.add}>
                                                <button className={`${toogle ? css.setLove : css.love}`}
                                                        onClick={ToggleState(item, item.id)}><AiOutlineHeart/></button>
                                                {
                                                    mainData && mainData.map((item) => {
                                                        return <button key={item.id} className={css.clickk}
                                                                       onClick={() => addCart(item, itemQuant = count)}>Add
                                                            to card</button>
                                                    })
                                                }
                                            </div>

                                            <div className={css.logo}>
                                               <span><p>Share:</p> <Image
                                                   src="/logoInsta.svg"
                                                   alt="Picture of the author"
                                                   width={25}
                                                   height={25}
                                               />
                                               <Image
                                                   src="/facebookLogo.svg"
                                                   alt="Picture of the author"
                                                   width={25}
                                                   height={25}
                                               /></span>
                                            </div>
                                        </div>


                                    </div>
                                )
                            })
                            }
                        </Col>
                    </Row>
                </Container>
                <div className={css.diteilBg}>

                </div>
            </HelmetLayout>
        </div>
    );
};

export default ProductDetail;