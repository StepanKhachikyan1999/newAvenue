import React, {useEffect, useState} from 'react';
import css from "./homeItem.module.css";
import Link from "next/link";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {Col} from "react-bootstrap";
import {basketDataGet, swishDataGet, swishRemoveDataGet} from "../../../Redux/Actions/productActions";
import {useCart} from "react-use-cart";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';

const HomeItem = ({item, wishToogle, key}) => {

    const [show, setShow] = useState(true);

    const [snackPack, setSnackPack] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [messageInfo, setMessageInfo] = React.useState(undefined);

    useEffect(() => {
        if (snackPack.length && !messageInfo) {
            // Set a new snack when we don't have an active one
            setMessageInfo({...snackPack[0]});
            setSnackPack((prev) => prev.slice(1));
            setOpen(true);
        } else if (snackPack.length && messageInfo && open) {
            // Close an active snack when a new one is added
            setOpen(false);
        }
    }, [snackPack, messageInfo, open]);

    const handleClick = (message) => () => {
        setSnackPack((prev) => [...prev, {message, key: new Date().getTime()}]);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleExited = () => {
        setMessageInfo(undefined);
    };

    const {
        addItem
    } = useCart();

    const [state, setState] = useState(false);

    const dispatch = useDispatch()
    const ToggleState = (item, id) => () => {
        setState(!state);
        !state ? dispatch(swishDataGet(item)) : dispatch(swishRemoveDataGet(id))
    }

    const setBasket = (item) => {
        addItem(item)
        dispatch(basketDataGet(item))
    }


    return (
        <Col key={item.id} lg={6} md={6} xs={12}>
            <div className={css.mainProduct}>
                <Link href={"/Product/" + item.id}>
                    <div className={css.productDiv}>
                        <img src={item.productImage1} alt="" height={330} width={330}/>
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
                    <div className={css.productClickSpan}>

                        <Button onClick={handleClick('Successfully')}>
                            <Image onClick={() => setBasket(item, 'Message B')}
                                                                          src="/basket.svg" width="20"
                                                                          height="20"/>
                        </Button>
                        <Button>
                            <Image className={`${state ? css.setImg : ''}`}
                                   onClick={ToggleState(item, item.id)}
                                   src="/love.svg" width="20"
                                   height="20"/>
                        </Button>
                    </div>
                </div>
            </div>
            <div>
                <Snackbar
                    key={messageInfo ? messageInfo.key : undefined}
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    TransitionProps={{onExited: handleExited}}
                    message={messageInfo ? messageInfo.message : undefined}
                    action={
                        <React.Fragment>
                            <Button color="secondary" size="small" onClick={handleClose}>
                                UNDO
                            </Button>
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                sx={{p: 0.5}}
                                onClick={handleClose}
                            >
                                {/*<CloseIcon />*/}
                            </IconButton>
                        </React.Fragment>
                    }
                />
            </div>
        </Col>
    );
};

export default HomeItem;