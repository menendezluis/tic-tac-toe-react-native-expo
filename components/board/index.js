import React from 'react'
import {View,ImageBackground} from 'react-native'
import background from '../../assets/background.jpg'

const Board = ({children}) => {
    return (
        <View>
            <ImageBackground source={background} style={{width: '100%', height: '100%'}}>
            {children}
            </ImageBackground>
            </View>
    )
}
export default Board


