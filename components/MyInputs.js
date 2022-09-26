import React from 'react';

import {
    Text,
    View,
    TextInput,
    StyleSheet
} from 'react-native';

const MyInputs = (props) => {

    const {placeholder, label, value, setValue, secure, style} = props;

    return (
        <View style={[styles.screen, style]}>
            <Text style={[styles.texto, style]}>{label}</Text>
            <TextInput placeholder={placeholder} 
                        style={[styles.input, style]}
                        value={value} 
                        onChangeText={setValue}
                        secureTextEntry={secure}/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '90%',
        paddingTop: 10,
        paddingBottom: 10,
        height: 60,
    },
    texto: {
        fontSize: 22,
        color: 'white',
        padding: 5,
        fontFamily: 'AveriaLibre-Regular',
    },
    input: {
        fontSize: 18,
        backgroundColor: 'white',
        color: 'cornflowerblue',
        width: '80%',
        fontFamily: 'AveriaLibre-Regular',
    },
})
export default MyInputs;