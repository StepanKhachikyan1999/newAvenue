import React from 'react';
import HomeComponents from "../../src/Components/Home";
import {HelmetLayout} from "../../src/Layouts";
import ErrorComponents from "../../src/Components/Error";

const Error = () => {
    return (
        <div>
            <HelmetLayout title="details">
                <ErrorComponents />
            </HelmetLayout>
        </div>
    );
};

export default Error;