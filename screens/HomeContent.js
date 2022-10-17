import { onLog } from 'firebase/app';
import React, {useState, useEffect} from 'react'

import {
    View,
    FlatList,
    StyleSheet,
    Dimensions,
    ScrollView,
} from 'react-native'

import CardVacina from '../components/CardVacina';
import IconSearch from '../components/IconSearch';
import MyButtons from '../components/MyButtons';
import MyInputs from '../components/MyInputs';

const listaVacinas = [
    {
        id: 1,
        vacina: 'BCG',
        data: '11/06/2022',
        dose: 'Dose única',
        urlImage: require('../images/comprovanteVacina.png'),
        proximaDose: ''
    },
    {
        id: 2,
        vacina: 'Febre amarela',
        data: '11/10/2022',
        dose: '1a. dose',
        urlImage: require('../images/comprovanteVacina.png'),
        proximaDose: '11/10/2023'
    },
    {
        id: 3,
        vacina: 'Hepatite B',
        data: '11/08/2022',
        dose: '1a. dose',
        urlImage: require('../images/comprovanteVacina.png'),
        proximaDose: '11/10/2022'
    },
    {
        id: 4,
        vacina: 'Poliomelite',
        data: '11/08/2022',
        dose: '1a. dose',
        urlImage: require('../images/comprovanteVacina.png'),
        proximaDose: '11/10/2022'
    }
  ]


const HomeContent = (props) => {

    const [isRefresh, isSetRefresh] = useState(false)

    const goToNewVaccine = () => {
        isSetRefresh(!isRefresh)
        props.navigation.navigate('NewVaccine', {item: listaVacinas});
    }
    
    const goToEditVaccine = () => {
        isSetRefresh(!false)
        props.navigation.navigate('EditVaccine', {item: listaVacinas});
    }

    useEffect(() => {
        if(props.route.params?.item && props.route.params?.screen == 1){
            isSetRefresh(!isRefresh)
            console.log('Vim da tela de criar nova vacina!')
            const vac = props.route.params.item;
            listaVacinas.push(vac);
        }
        if(props.route.params?.item && props.route.params?.screen == 2){
            isSetRefresh(!isRefresh)
            console.log('Vim da tela de editar vacina!')
            const vac = props.route.params.item;
            
            listaVacinas.forEach( v => {
                if(v.id == vac.id){
                    listaVacinas.splice((v.id - 1), 1); //Primeiro parâmetro o index segundo a quantida a remover
                }
            })
        }
    }, [props.route.params?.item, props.route.params?.screen])

    useEffect(() => {

    }, [isRefresh, listaVacinas])

    return(
        
        <ScrollView style={styles.container}>
            <View style={styles.inputContainer}>
                <IconSearch style={styles.icon}></IconSearch>
                <MyInputs styleInput={styles.input} placeholder="        PESQUISAR VACINA..." />
            </View>
            
            <FlatList data={listaVacinas} renderItem={(item) => <CardVacina item={item} 
                onPress={() => props.navigation.navigate('EditVaccine', {item: item, lista: [listaVacinas]}) } />} numColumns={2} 
            />
            
            <View style={styles.button}>
                <MyButtons label="Nova vacina" style={styles.buttonVacina} onPress={goToNewVaccine} />
            </View>
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#ADD4D0',
        height: Dimensions.get('window').height,
    },
    buttonVacina: {
        backgroundColor: '#37BD6D',
        width: 160,
        height: 40,
        justifyContent: 'center',
        padding: 0,
        elevation: 10,
    },
    button: {
        alignItems: 'center',
        paddingVertical: 25,
        height: Dimensions.get('window').height * 0.3,
        flexDirection: 'column',
        justifyContent: 'flex-end',
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