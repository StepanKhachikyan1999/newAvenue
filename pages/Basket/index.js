import React from 'react';
import {HelmetLayout} from "../../src/Layouts";
import HomeComponents from "../../src/Components/Home";
import BasketComponents from "../../src/Components/Basket";

const Basket = () => {
    return (
        <div>
            <HelmetLayout title="details">
                <BasketComponents />
            </HelmetLayout>
        </div>
    );
};

export default Basket;