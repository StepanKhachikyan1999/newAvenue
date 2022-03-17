import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import HeaderContainer from "../../Containers/Header";
import FooterContainer from "../../Containers/Footer";

const HelmetLayout = ({ children, title, metaDescription }) => (

    <>
        <Head>
            {title && <title>{title}</title>}
            {metaDescription && <meta name="description" content={metaDescription} />}
        </Head>
        <HeaderContainer />
        {children}
        <FooterContainer />
    </>
);

HelmetLayout.defaultProps = {
    title: "",
    metaDescription: "",
};

HelmetLayout.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any.isRequired,
    metaDescription: PropTypes.string,
};

export default HelmetLayout;
