import React, {useState} from 'react'
import {
    View,
    StyleSheet,
    Text
} from 'react-native'

import MyInputs from '../components/MyInputs';
import MyButtons from '../components/MyButtons';
import CheckBox from '../components/CheckBox';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase'

const CreateAccount = (props) => {

    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [repetirSenha, setRepetirSenha] = useState()
    const [nomeCompleto, setNomeCompleto] = useState()
    const [sexoM, setSexoM] = useState('Masculino')
    const [sexoF, setSexoF] = useState('Feminino')

    const newUser = () => {
        createUserWithEmailAndPassword(auth, email, senha)
        .then( (userCredential) => {
            console.log("Usuário adicionado com sucesso!")
            //console.log(JSON.stringify(userCredential))
            props.navigation.pop()
        })
        .catch( (error) => {
            console.log("Ocorreu um erro ao cadastrar usuário!")
            console.log("Erro: " + error.message)
        })
    }
    
    const onChange = () => {

    }

    return(
        <View style={styles.container}>
            <View style={styles.input}>
                <MyInputs style={styles.texto} label="Nome completo" value={nomeCompleto} setValue={setNomeCompleto} />
            </View>
            <View>
            <View style={styles.checkboxContainer}>
                <Text style={styles.label}>Sexo</Text>
                <CheckBox label="Masculino" value={sexoM} setValue={setSexoM} />
                <CheckBox label="Feminino" value={sexoF} setValue={setSexoF} />
            </View>
            </View>
            <View style={styles.input}>
                <MyInputs style={styles.texto} label="E-mail" value={email} setValue={setEmail} />
                <MyInputs style={styles.texto} label="Senha" value={senha} setValue={setSenha} secure={true} />
                <MyInputs style={styles.texto} label="Repetir senha" value={repetirSenha} setValue={setRepetirSenha} secure={true} />
            </View>
            <View style={styles.center}>
                <MyButtons label="Cadastrar" style={styles.buttonEntrar} onPress={newUser} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ADD4D0',
        height: '100%',
        paddingTop: 50
    },
    buttonEntrar: {
        marginTop: 170,
        backgroundColor: '#37BD6D',
        width: 160,
        padding: 10,
        elevation: 10,
    },
    texto: {
        fontSize: 18,
        fontFamily: 'AveriaLibre-Regular',
    },
    center: {
        alignItems: 'center'
    },
    input: {
        alignItems: 'flex-end',
        width: '90%',
        marginLeft: 30,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 88,
        marginVertical: 10
    },
    label: {
        fontSize: 18,
        fontFamily: 'AveriaLibre-Regular',
        color: 'white'
    }
})

export default CreateAccount