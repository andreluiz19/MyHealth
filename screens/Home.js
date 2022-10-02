import React from 'react'
import {
    View,
    FlatList,
    StyleSheet,
    Dimensions,
    ScrollView
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


const Home = () => {
    return(
        <View style={styles.container}>

            <View>
                <IconSearch style={styles.icon}></IconSearch>
                <MyInputs style={styles.input} placeholder="        PESQUISAR VACINA..." />
            </View>

            <FlatList data={listaVacinas} renderItem={(item) => <CardVacina item={item} />} numColumns={2} />

            <View style={styles.button}>
                <MyButtons label="Nova vacina" style={styles.buttonVacina} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ADD4D0',
        height: '100%',
    },
    buttonVacina: {
        backgroundColor: '#37BD6D',
        width: 160,
        padding: 10,
        elevation: 10,
    },
    button: {
        alignItems: 'center',
        marginBottom: 30,
    },
    input: {
        width: '100%',
        paddingHorizontal: 5,
    },
    teste: {
        borderColor: 'black',
        borderWidth: 2,
    },
    icon: {
        position: 'absolute',
        zIndex: 1
    }
})

export default Home