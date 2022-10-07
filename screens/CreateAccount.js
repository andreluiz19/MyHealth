import React, {useState} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native'

import MyInputs from '../components/MyInputs';
import MyButtons from '../components/MyButtons';
import RadioButton from '../components/RadioButton';
import IconCalendar from '../components/IconCalendar';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase'

const CreateAccount = (props) => {

    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [repetirSenha, setRepetirSenha] = useState()
    const [nomeCompleto, setNomeCompleto] = useState()
    const [dataNasc, setDataNasc] = useState()
    const [sexoM, setSexoM] = useState('Masculino')
    const [sexoF, setSexoF] = useState('Feminino')

    const newUser = () => {
        if(senha == repetirSenha){
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
        }else{
            console.log('As senhas não conferem!')
        }
    }
    
    const onChange = () => {

    }

    return(

        <View style={styles.container}>

            <View style={styles.input}>
                <MyInputs styleText={styles.texto} label="Nome completo" value={nomeCompleto} setValue={setNomeCompleto} />
            </View>

            <View style={styles.radioContainer}>
                <Text style={styles.label}>Sexo</Text>
                <RadioButton label="Masculino" value={sexoM} setValue={setSexoM} />
                <RadioButton label="Feminino" value={sexoF} setValue={setSexoF} />
            </View>

            <IconCalendar style={styles.icon} />

            <View style={styles.input}>
                <MyInputs styleText={styles.texto} label="Data nascimento" value={dataNasc} setValue={setDataNasc} />
                <MyInputs styleText={styles.texto} label="E-mail" value={email} setValue={setEmail} />
                <MyInputs styleText={styles.texto} label="Senha" value={senha} setValue={setSenha} secure={true} />
                <MyInputs styleText={styles.texto} label="Repetir senha" value={repetirSenha} setValue={setRepetirSenha} secure={true} />
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
        marginTop: 130,
        backgroundColor: '#37BD6D',
        width: 160,
        padding: 10,
        elevation: 10,
    },
    texto: {
        fontSize: 17,
        fontFamily: 'AveriaLibre-Regular',
    },
    center: {
        alignItems: 'center'
    },
    input: {
        alignItems: 'flex-end',
        width: Dimensions.get('window').width * 0.8,
        marginLeft: 70,
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 88,
        marginVertical: 10
    },
    label: {
        fontSize: 17,
        fontFamily: 'AveriaLibre-Regular',
        color: 'white'
    },
    icon: {
        position: 'absolute',
        zIndex: 1,
    }
})

export default CreateAccount