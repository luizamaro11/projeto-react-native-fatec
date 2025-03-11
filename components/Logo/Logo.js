import React from "react";
import { Image } from "react-native";
import Styles from './style'

export function Logo() {
    return (
        <Image
            style={Styles.logo}
            source={require('../../assets/images/logo-js.jpg')}
        />
    )
}