import React from 'react';

import {
    Text,
    View,
    TextInput,
    StyleSheet
} from 'react-native';

const InputLogin = (props) => {

    const {placeholder, label, secure} = props;

    return (
        <View style={styles.screen}>
            <Text style={styles.texto}>{label}</Text>
            <TextInput secureTextEntry={secure}
                        style={styles.input} 
                        placeholder={placeholder} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '90%',
        paddingTop: 8,
        paddingBottom: 8,
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
export default InputLogin;