import React from 'react';
import {HelmetLayout} from "../../src/Layouts";
import ServiceComponent from "../../src/Components/Service";

const Service = () => {
    return (
        <div>
            <HelmetLayout title="details">
                <ServiceComponent />
            </HelmetLayout>
        </div>
    );
};

export default Service;