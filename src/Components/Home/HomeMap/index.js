import React from 'react';
import Iframe from 'react-iframe'

const HomeMap = () => {
    return (
        <div>
            <Iframe
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.1102066897333!2d44.50843491522514!3d40.18436077766303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abce2afc55fbd%3A0x7e87211bb95cee1b!2s50%20Pushkin%20St%2C%20Yerevan%200002%2C%20Armenia!5e0!3m2!1sen!2s!4v1646131100144!5m2!1sen!2s"
                width="100%"
                height="250vh"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
            />
        </div>
    );
};

export default HomeMap;