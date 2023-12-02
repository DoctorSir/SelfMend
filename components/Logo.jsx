import React from 'react'
import { Image } from 'react-native'
import PropTypes from "prop-types"

import logo from '../assets/SelfMend.png'

// import image from assets folder and define the size
export default function Logo({ logoWidth, logoHeight, style }) {
    return (
        <Image source={logo}
            style={[{ width: logoWidth, height: logoHeight, objectFit: "contain" }, style]}
        />
    )
}

Logo.propTypes = {
    logoWidth: PropTypes.number.isRequired,
    logoHeight: PropTypes.number.isRequired,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Logo.defaultProps = {
    logoWidth: 100,
    logoHeight: 100,
};