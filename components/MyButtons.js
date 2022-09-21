import React from 'react';

import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const MyButtons = (props) =>{
    
    const {label} = props;

    return(
        <View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.texto}>{label}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#37BD6D',
        padding: 10,
        textAlign: 'center'
    
    },
    texto: {
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 22,
        color: 'white',
        textAlign: 'center'
    }
})

export default MyButtons;
