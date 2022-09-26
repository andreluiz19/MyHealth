import React, {useState} from 'react'
import {
    View,
    StyleSheet,
} from 'react-native'

import MyInputs from '../components/MyInputs';
import MyButtons from '../components/MyButtons';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase'

const CreateAccount = (props) => {

    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [repetirSenha, setRepetirSenha] = useState()
    const [nomeCompleto, setNomeCompleto] = useState()

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
    
    return(
        <View style={styles.container}>
            <View style={styles.input}>
                <MyInputs style={styles.texto} label="Nome completo" value={nomeCompleto} setValue={setNomeCompleto} />
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
        height: '100%'
    },
    buttonEntrar: {
        marginTop: 240,
        backgroundColor: '#37BD6D',
        width: 160,
        padding: 10,
        elevation: 10,
    },
    texto: {
        fontSize: 18,
    },
    center: {
        alignItems: 'center'
    },
    input: {
        alignItems: 'flex-end',
        width: '90%',
        marginLeft: 30
    }
})

export default CreateAccount