import React, {useState} from 'react';
import css from './basketItem.module.css';
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import Image from "next/image";
import {basketFilterDataGet} from "../../Redux/Actions/productActions";
import {useDispatch} from "react-redux";
import {useCart} from "react-use-cart";

const BasketItem = ({itemData, dataPrice}) => {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();


    const [price, setPrice] = useState(+dataPrice)

    const dispatch = useDispatch()

    const handlerCountPlus = (id) => {
        updateItemQuantity(id, itemData.quantity + 1)
        setPrice(price + price)
    }

    const handlerCountMinus = (id) => {
        updateItemQuantity(id, itemData.quantity - 1)
        setPrice(price - price)
    }


    const close = (id) => {
        removeItem(id)
        dispatch(basketFilterDataGet(id))
    }

    const add = (dataMain) => {
        console.log(dataMain, '[[[[[[[[[[[[[')
    }

    console.log(itemData.quantity , 'iiiiiiiiiiiiii')

    return (
        <tr key={itemData.id} className={css.tr}>
            <>
                <td className={css.tdR}><img className={css.thImg}
                                             src={itemData.productImage1} alt=""/></td>
                <td key={itemData.id} className={css.tdR}><h5>{itemData.productName}</h5></td>
                <td key={itemData.id} className={css.tdR}><h6>{itemData.price} AMD</h6></td>
                <td key={itemData.id} className={css.tdR}>
                    <div className={css.PlusMinus}>
                        {
                            itemData.quantity <= 0 ? <div className={css.spanClick}
                                ><AiOutlineMinus/></div> :
                                <div className={css.spanClick}
                                     onClick={() => handlerCountMinus(itemData.id)}>
                                    <AiOutlineMinus/></div>
                        }

                        <div className={css.count}>{itemData.quantity}</div>
                        <div className={css.spanClick}
                             onClick={() => handlerCountPlus(itemData.id)}>
                            < AiOutlinePlus/></div>
                    </div>
                </td>
                <td key={itemData.id} className={css.tdR}><h6>{itemData.itemTotal} AMD</h6></td>
                <td key={itemData.id}>
                    <div className={css.icons}>
                        <div className={css.iconsFlex}>
                            <Image className={css.iconsFlexImggg} src="/close.svg" width="35" height="35"
                                   onClick={() => close(itemData.id)}/>
                        </div>
                    </div>
                </td>


            </>

        </tr>
    );
};

export default BasketItem;