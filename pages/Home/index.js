import React from 'react';
import {HelmetLayout} from "../../src/Layouts";
import HomeComponents from "../../src/Components/Home";

const Homee = () => {
    return (
        <div>
            <HelmetLayout title="details">
                <HomeComponents />
            </HelmetLayout>
        </div>
    );
};

export default Homee;