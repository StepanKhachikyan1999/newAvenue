import React from 'react';
import {HelmetLayout} from "../../src/Layouts";
import ProfileComponent from "../../src/Components/Profile";

const Profile = () => {
    return (
        <div>
            <HelmetLayout title="details">
                <ProfileComponent />
            </HelmetLayout>
        </div>
    );
};

export default Profile;