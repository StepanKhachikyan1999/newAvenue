import React from 'react';
import {HelmetLayout} from "../../src/Layouts";
import ContactComponents from "../../src/Components/ContactUs";

const ContactUs = () => {
    return (
        <div>
            <HelmetLayout title="details">
                <ContactComponents />
            </HelmetLayout>
        </div>
    );
};

export default ContactUs;