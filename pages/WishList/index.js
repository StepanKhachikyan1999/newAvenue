import React from 'react';
import {HelmetLayout} from "../../src/Layouts";
import WishListComponents from "../../src/Components/WishList";

const WishList = () => {
    return (
        <div>
            <HelmetLayout title="details">
                <WishListComponents />
            </HelmetLayout>
        </div>
    );
};

export default WishList;