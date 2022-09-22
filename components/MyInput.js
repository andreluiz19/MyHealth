import React from 'react';

import {
  Text,
  View,
  TextInput,
  StyleSheet
} from 'react-native';

const MyInput = (props) => {

    const {placeholder, label} = props;

    return (
        <View>
            <Text style={styles.texto}>{label}</Text>
            <TextInput style={styles.input}
              placeholder={placeholder}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    texto: {
      fontSize: 30,
    },
    input: {
      fontSize: 30,
      borderColor: 'black',
      marginLeft: 10,
      marginRight: 10,
      secu    
    }
})

export default MyInput;