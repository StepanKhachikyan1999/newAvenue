import React from 'react';
import {HelmetLayout} from "../../src/Layouts";
import BillingComponents from "../../src/Components/Billing";

const Billing = () => {
    return (
        <div>
            <HelmetLayout title="details">
                <BillingComponents />
            </HelmetLayout>
        </div>
    );
};

export default Billing;