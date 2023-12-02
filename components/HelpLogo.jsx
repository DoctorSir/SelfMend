import React from 'react'
import { Image } from 'react-native'
import logo from '../assets/MentalHealth.png'

// import image from assets folder and define the size
export default function Logo() {
    return (
        <Image source={logo}
            style={{ width: 300, height: 300, objectFit: "contain" }}
        />
    )
}