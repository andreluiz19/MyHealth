import React from 'react';

import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const MyButtons = (props) =>{
    
    const {label, cor, onPress} = props;

    return(
        <View>
            <TouchableOpacity style={{backgroundColor:cor, padding: 10}} onPress={onPress}>
                <Text style={styles.texto}>{label}</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    texto: {
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 22,
        color: 'white',
        textAlign: 'center'
    },
})

export default MyButtons;
