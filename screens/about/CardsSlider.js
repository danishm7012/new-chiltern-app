import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from "react-native";

let {height, width} = Dimensions.get("window")

const CardsSlider = ({imageUri,name}) => {
    return (
        <View style={{  height:height/3, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
                <View style={{  height:height/3,width:width/1.6 }}>
                    <Image source={imageUri}
                        style={{ flex: 1, width: width/1.6, height: height/2, resizeMode: 'stretch' }}
                    />
                </View>
                {/* <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text>{name}</Text>
                </View> */}
            </View>
    )
}

export default CardsSlider
