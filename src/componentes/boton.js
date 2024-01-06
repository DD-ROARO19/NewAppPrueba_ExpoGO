import React from "react";
import { TouchableOpacity, Pressable, Text } from "react-native";

const Boton = ({text,btnStyle,textStyle}) => {
    return(
        <TouchableOpacity style={btnStyle}>
            <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
    );
}

export default Boton;