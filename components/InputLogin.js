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
        <View style={styles.container}>
            <Text style={styles.texto}>{label}</Text>
            <TextInput style={styles.input} placeholder={placeholder} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
       flexDirection: 'row',
       alignItems: 'center',
    },
    texto: {
        fontSize: 22,
        color: 'white',
        fontFamily: 'AveriaLibre-Regular',
    },
    input: {
        fontSize: 22,
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 10,
        color: 'cornflowerblue',
        width: 280,
        marginTop: 15,
        fontFamily: 'AveriaLibre-Regular',
    }
})
export default InputLogin;