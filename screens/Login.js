import React, {useState} from 'react'
import {
    View,
    Image,
    StyleSheet,
    Text,
    ImageBackground,
} from 'react-native'

import MyInputs from '../components/MyInputs';
import MyButtons from '../components/MyButtons';

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase';
import { TextInput } from 'react-native-gesture-handler';

const Login = (props) => {

    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    
    const loginUser = () => {
        /*
        signInWithEmailAndPassword(auth, email, senha)
        .then( (userCredential) => {
            console.log("Usuário autenticado com sucesso!")
            goToHome()
        })
        .catch( (error) => {
            console.log("Ocorreu um erro ao atuenticar!")
            console.log("Erro: " + error.message)
        })
        */
        goToHome()
    }

    const goToHome = () => {
        props.navigation.navigate('Home')
    }

    const goToCreateAccount = () => {
        props.navigation.navigate('CreateAccount')
    }

    return(
        <ImageBackground style={styles.imagem} source={require('../images/background.jpg')} >
            
            <View style={styles.container}>

                <View style={styles.header}>
                    <Image style={styles.icon} source={require('../images/vaccine.png')} />
                    <Text style={styles.title}>MyHealth</Text>
                </View>

                <View>
                    <Text style={styles.label}>Controle as suas vacinas e fique seguro</Text>
                </View>

                <View style={styles.inputs}>
                    <MyInputs placeholder="Digite o seu email..." label="E-mail" value={email} setValue={setEmail} />
                    <MyInputs placeholder="Digite a sua senha..." label="Senha" value={senha} setValue={setSenha} secure={true} />
                </View>
                
                <View>
                    <MyButtons label="Entrar" style={styles.buttonEntrar} onPress={loginUser} />
                </View>
                <View>
                    <MyButtons label="Criar minha conta" style={styles.buttonCriarConta} onPress={goToCreateAccount} />
                </View>
                <View>
                    <MyButtons label="Esqueci minha senha" style={styles.buttonEsqueceuSenha} />
                </View>
                
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(128,128,128, 0.9)',
        height: '100%'
    },
    imagem: {
        width: 420,
        height: 660,
    },
    title: {
        color: '#419ED7',
        fontSize: 40,
        marginTop: 20,
        textDecorationLine: 'underline',
        fontFamily: 'AveriaLibre-Bold',
    },
    icon: {
        marginTop: 20,
        width: 40,
        height: 40,
        marginRight: 10
    },
    header: {
        flexDirection: 'row', 
        alignItems: 'center',
    },
    label: {
        fontSize: 34,
        fontFamily: 'AveriaLibre-Regular',
        color: '#419ED7',
        textAlign: 'center',
        paddingRight: 15,
        paddingLeft: 15,
        marginTop: 30,
    },
    inputs: {
        marginTop: 40,
    },
    buttonEntrar: {
        marginTop: 60,
        backgroundColor: '#37BD6D',
        width: 160,
        padding: 10,
        elevation: 10
    },
    buttonCriarConta: {
        marginTop: 60,
        backgroundColor: '#419ED7',
        width: 240,
        padding: 10,
        elevation: 10
    },
    buttonEsqueceuSenha: {
        marginTop: 60,
        backgroundColor: '#B0CCDE',
        width: 240,
        padding: 4,
        elevation: 10
    },
    width: {
        width: '80%'
    }
})

export default Login;