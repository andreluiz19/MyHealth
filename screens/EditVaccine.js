import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    Dimensions
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

import IconCalendar from '../components/IconCalendar'
import MyInputs from '../components/MyInputs'
import RadioButton from '../components/RadioButton'

const EditVaccine = () => {
    return(
        <View style={styles.container}>

            <IconCalendar style={styles.icon} />
            
            <View style={styles.inputData}>
                <MyInputs styleInput={styles.styleInput} styleText={styles.data} label="Data de vacinação" />
            </View>

            <View style={styles.inputVacina}>
                <MyInputs styleInput={styles.styleInput} styleText={styles.vacina} label="Vacina" />
            </View>

            <View style={styles.radioContainer}>
                <Text style={styles.label}>Dose</Text>
                <RadioButton style={styles.radio} styleText={styles.styleText} label="1a. dose"/>
                <RadioButton style={styles.radio} styleText={styles.styleText} label="2a. dose"/>
                <RadioButton style={styles.radio} styleText={styles.styleText} label="3a. dose"/>
            </View>

            <View style={styles.radioContainer2}>
                <RadioButton style={styles.radio} styleText={styles.styleText} label="Dose única" />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        backgroundColor: '#ADD4D0',
    },
    styleInput: {
        height: 30,
        padding: 0
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: 25
    },
    styleText: {
        fontSize: 16,
        marginLeft: 0
    },
    radioContainer2: {
        marginLeft: 155
    },
    radio: {
        height: 15,
        width: 15,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    label: {
        fontSize: 17,
        fontFamily: 'AveriaLibre-Regular',
        color: 'white',
    }, 
    data: {
        fontSize: 17,
        fontFamily: 'AveriaLibre-Regular',
        width: 150,
    },
    inputData: {
        marginTop: 20,
        marginLeft: 127,
        width: '45%',
    },
    icon: {
        marginTop: 37,
        position: 'absolute',
        zIndex: 1,
        marginLeft: 284,
    },
    vacina: {
        fontSize: 17,
        fontFamily: 'AveriaLibre-Regular',
    },
    inputVacina: {
        marginLeft: 105,
        marginTop: -20
    },
})

export default EditVaccine
