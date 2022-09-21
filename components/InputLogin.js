import React from 'react';

import {
    Text,
    View,
    TextInput,
    StyleSheet
} from 'react-native';

const InputLogin = (props) => {

    const {placeholder, label} = props;

    return (
        <View style={styles.screen}>
            <Text style={styles.texto}>{label}</Text>
            <TextInput secureTextEntry={true} style={styles.input} placeholder={placeholder} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '90%',
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
        marginBottom: 9,
        marginTop: 9,
        width: '70%',
        height: 38,
        
    },
})
export default InputLogin;