import React from 'react';
import {HelmetLayout} from "../../src/Layouts";
import ProductContainer from "../../src/Components/Product";

const Product = () => {
    return (
        <div>
            <HelmetLayout title="details">
                <ProductContainer />
            </HelmetLayout>
        </div>
    );
};

export default Product;