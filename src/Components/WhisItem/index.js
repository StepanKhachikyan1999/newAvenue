import React, {useState} from 'react';
import css from './whisItem.module.css';
import Image from "next/image";
import {swishRemoveDataGet} from "../../Redux/Actions/productActions";
import {useDispatch} from "react-redux";

const WhisItem = ({itemDataWhis}) => {

    const dispatch = useDispatch()


    const removeItem = (id) => {
        dispatch(swishRemoveDataGet(id))
    }


    let dataMain;
    if (typeof window !== 'undefined') {
        dataMain = JSON.parse(localStorage.getItem('swish'))
    } else {
        console.log('You are on the server')
    }


    return (
        <tr key={itemDataWhis.id} className={css.tr}>
            <>
                <td className={css.tdR}><img className={css.thImg}
                                             src={itemDataWhis.productImage1} alt=""/></td>
                <td key={itemDataWhis.id} className={css.tdR}><h5>{itemDataWhis.productName}</h5>
                </td>
                <td key={itemDataWhis.id} className={css.tdR}><h6>{itemDataWhis.price} AMD</h6></td>
                <td key={itemDataWhis.id}>
                    <div className={css.icons}>
                        <div className={css.iconsFlex}>
                            <Image className={css.iconsFlexImg} src="/close.svg"
                                   width="30" height="30"
                                   onClick={() => removeItem(itemDataWhis.id)}/>
                        </div>
                    </div>
                </td>
            </>

        </tr>
    );
};

export default WhisItem;