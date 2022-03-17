import React, {useEffect, useState} from 'react';
import {Button, Container, Dropdown, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import css from './header.module.css'
import Link from 'next/link'
import {RiShoppingCartLine} from "react-icons/ri";
import {AiOutlineHeart} from "react-icons/ai";
import {useCart} from "react-use-cart";
import {useDispatch, useSelector} from "react-redux";
import {filterDataGet, swishDataGet} from "../../Redux/Actions/productActions";
import NextLink from "../NextLink";
import { useRouter } from 'next/router';


const HeaderContainer = () => {

    const {totalItems} = useCart();

    const router = useRouter();

    console.log(router.pathname,'kklkljlkhskjhdsuisuidhn')


    const lengthSwish = useSelector(state => state.HomeReducers.swishData)

    const [argument, setarrangementM] = useState()
    const [local, setLocal] = useState([])
    const [active, setActive] = useState(true)

    const dispatch = useDispatch();

    const activeAdd = () => {
        setActive(true)
        console.log(active,'aaaaaaaaaaaaaaaaaa')
    }

    var swishLocal;
    if (typeof window !== 'undefined') {
        swishLocal = localStorage.getItem('swish')
        console.log(swishLocal,'11111111111111111111')
    } else {
        console.log('You are on the server')
    }

    useEffect(() => {
        setLocal(swishLocal && swishLocal.length > 0 ? JSON.parse(swishLocal) : null)
    }, [lengthSwish])

    let dataMain;
    const drop1 = (name) => {
        setarrangementM(dataMain = {arrangementMain: name})
        dispatch(filterDataGet(dataMain))
    }



    return (
        <div className={css.headerBg}>
            <Container fluid>
                <div className={css.headerMain}>
                    <Navbar expand="lg">

                        <Navbar.Brand href="#" className={css.HeaderLogo}>Navbar scroll</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll"/>
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0 headerNav"
                                style={{maxHeight: '100px'}}
                                navbarScroll
                            >
                                <NextLink  className={router.pathname == "/" ? "active" : "lika"} href="/">HOME</NextLink>
                                <NextLink className={router.pathname == "/Service" ? "active" : "lika"} href="/Service">SERVICE</NextLink>
                                <NavDropdown className={'lika'} title="FLOWERS" id="navbarScrollingDropdown">
                                    <div className={css.linkProduct}>
                                    <NextLink className={'lika'} to="/Product" onClick={() => drop1('Arrangement')}>
                                        Arrangement
                                    </NextLink>
                                    <NextLink className={'lika'} to="/Product" onClick={() => drop1('Bouquet')}>
                                        Bouquet
                                    </NextLink>
                                    <NextLink className={'lika'} to="/Product" onClick={() => drop1('Single')}>
                                        Single
                                    </NextLink>
                                    </div>
                                </NavDropdown>
                                <NextLink className={router.pathname == "/AboutUs" ? "active" : "lika"} href="/AboutUs">
                                    ABOUT US
                                </NextLink>
                                <NextLink className={router.pathname == "/ContactUs" ? "active" : "lika"} href="/ContactUs"  activeClassName="active">
                                    CONTACT US
                                </NextLink>
                            </Nav>


                            <div className={css.cont1}>
                            <div className={css.headerImages}>
                                <div className={css.basketCount}>
                                    {totalItems > 0 && totalItems&&
                                        <div><p>{totalItems}</p></div>
                                    }
                                    <Link href="/Basket">
                                        <span><RiShoppingCartLine/></span>
                                    </Link>
                                </div>
                                <div className={css.basketCount}>
                                    { lengthSwish.length > 0 ?
                                        <div><p>{lengthSwish.length}</p></div> : null
                                    }
                                    <Link href="/WishList">
                                        <span><AiOutlineHeart/></span>
                                    </Link>
                                </div>
                            </div>

                            <Dropdown>
                                <Dropdown.Toggle  className={css.btnAm}>
                                    AMD
                                </Dropdown.Toggle>

                                <Dropdown.Menu className={css.dropAm}>
                                    <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">EUR</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">RUB</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">AMD</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" className={css.btnAm}>
                                    ENG
                                </Dropdown.Toggle>

                                <Dropdown.Menu className={css.dropAm}>
                                    <Dropdown.Item href="#/action-2">ARM</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">RUS</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            {/*<Dropdown>*/}
                            {/*    <Dropdown.Toggle id="dropdown-basic" className={css.btnAm}>*/}
                            {/*        <div  className={css.dropUser}>*/}
                            {/*            <Image src="/user.svg" width="25" height="25" />*/}
                            {/*        </div>*/}
                            {/*    </Dropdown.Toggle>*/}

                            {/*    <Dropdown.Menu className={css.dropAm}>*/}
                            {/*        <Dropdown.Item href="#/action-1">View profile</Dropdown.Item>*/}
                            {/*        <Dropdown.Item href="#/action-2">Log out</Dropdown.Item>*/}
                            {/*    </Dropdown.Menu>*/}
                            {/*</Dropdown>*/}

                            <Link href="/Login">
                                <button className={css.loginBtn}>
                                    Login
                                </button>
                            </Link>
                            </div>
                        </Navbar.Collapse>

                    </Navbar>
                </div>
            </Container>
        </div>
    );
};

export default HeaderContainer;