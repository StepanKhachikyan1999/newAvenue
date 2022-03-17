import React from 'react';
import AboutUsComponents from "../../src/Components/AboutUs";
import {HelmetLayout} from "../../src/Layouts";

const AboutUs = () => {
    return (
        <div>
            <HelmetLayout title="details">
                <AboutUsComponents />
            </HelmetLayout>
        </div>
    );
};

export default AboutUs;