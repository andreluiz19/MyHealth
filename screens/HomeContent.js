import React from 'react'

import {
    View,
    FlatList,
    StyleSheet,
    Dimensions
} from 'react-native'

import CardVacina from '../components/CardVacina';
import IconSearch from '../components/IconSearch';
import MyButtons from '../components/MyButtons';
import MyInputs from '../components/MyInputs';

const listaVacinas = [
    {
        vacina: 'BCG',
        data: '11-06-2022',
        dose: 'Dose única',
        urlImage: require('../images/comprovanteVacina.png'),
        proximaDose: 'Não há próxima dose'
    },
    {
        vacina: 'Febre amarela',
        data: '11/10/2022',
        dose: '1a. dose',
        urlImage: require('../images/comprovanteVacina.png'),
        proximaDose: 'Próxima dose em: 11/10/2023'
    },
    {
        vacina: 'Hepatite B',
        data: '11/08/2022',
        dose: '1a. dose',
        urlImage: require('../images/comprovanteVacina.png'),
        proximaDose: 'Próxima dose em: 11/10/2022'
    },
    {
        vacina: 'Poliomelite',
        data: '11/08/2022',
        dose: '1a. dose',
        urlImage: require('../images/comprovanteVacina.png'),
        proximaDose: 'Próxima dose em: 11/10/2022'
    }
  ]


const HomeContent = (props) => {

    const goToNewVaccine = () => {
        props.navigation.navigate('NewVaccine')
    }

    const goToEditVaccine = () => {
        props.navigation.navigate('EditVaccine')
    }

    return(
        
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <IconSearch style={styles.icon}></IconSearch>
                <MyInputs styleInput={styles.input} placeholder="        PESQUISAR VACINA..." />
            </View>
            
            <FlatList data={listaVacinas} renderItem={(item) => <CardVacina item={item} onPress={goToEditVaccine} />} numColumns={2} />
            
            <View style={styles.button}>
                <MyButtons label="Nova vacina" style={styles.buttonVacina} onPress={goToNewVaccine} />
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ADD4D0',
        height: Dimensions.get('window').height,
    },
    buttonVacina: {
        backgroundColor: '#37BD6D',
        width: 160,
        padding: 10,
        elevation: 10,
    },
    button: {
        alignItems: 'center',
        height: Dimensions.get('window').height * 0.23,
    },
    input: {
        width: Dimensions.get('window').width * 0.95,
        height: 30,
        padding: 0,
    },
    icon: {
        position: 'absolute',
        zIndex: 1,
    },
    inputContainer: {
       marginRight: 10
    }
})

export default HomeContent