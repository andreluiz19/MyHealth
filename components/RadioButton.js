import React, {useState} from 'react'
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
} from 'react-native'

const RadioButton = (props) => {

    const {label, value, setValue, style, styleText} = props

    const checked = () => {
        if(value == 'Masculino'){
            console.log("M")
        }else{
            console.log("F")
        }
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity style={[styles.radio, style]} onPress={checked} />
            <Text style={[styles.texto, styleText]}>{label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },  
    radio: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: 'white',
        marginLeft: 5
    },
    texto: {
        fontSize: 18,
        fontFamily: 'AveriaLibre-Regular',
        color: 'white',
        marginLeft: 10
    },
    checked: {
        height: 20,
        width: 20,
        borderRadius: 15,
        backgroundColor: '#419ED7'
    }
})

export default RadioButton