import React from 'react'
import { Image } from 'react-native'
import temp_logo from '../assets/temp_logo.jpg'

// import image from assets folder and define the size
export default function Logo() {
    return (
        <Image source={temp_logo}
            style={{ width: 100, height: 100 }}
        />
    )
}