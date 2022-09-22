import React, {useState} from 'react'
import {
    View,
    Image,
    StyleSheet,
    Text,
    ImageBackground,
    Button,
} from 'react-native'
import InputLogin from '../components/InputLogin';
import MyButtons from '../components/MyButtons';



const Login = (props) => {

    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()

    
    const goToHome = () => {
        props.navigation.push('Home')
        console.log("Está funcionando!")
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
                    <InputLogin placeholder="Digite o seu email..." label="E-mail" valor={email} setText={setEmail} />
                    <InputLogin placeholder="Digite a sua senha..." label="Senha" valor={senha} setText={setSenha} secure={true} />
                </View>
                
                <View style={styles.buttonEntrar}>
                    <MyButtons label="Entrar" cor="#37BD6D" onPress={goToHome} />
                </View>
                <View style={styles.buttonCriarConta}>
                    <MyButtons label="Criar minha conta" cor="#419ED7" />
                </View>
                <View style={styles.buttonEsqueceuSenha}>
                    <MyButtons label="Esqueci minha senha" cor="#B0CCDE" />
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
        height: 660
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
        marginTop: 70,
        width: 140,
    },
    buttonCriarConta: {
        marginTop: 50,
        width: 220,
    },
    buttonEsqueceuSenha: {
        marginTop: 50,
    },

})

export default Login;