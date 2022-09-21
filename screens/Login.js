import React from 'react'
import {
    View,
    Image,
    StyleSheet,
    Text,
    ImageBackground,
    ScrollView,
} from 'react-native'
import InputLogin from '../components/InputLogin';
import MyButtons from '../components/MyButtons';



const Login = () => {
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
                    <InputLogin placeholder="Digite o seu email..." label="E-mail" />
                    <InputLogin placeholder="Digite a sua senha..." label="Senha" />
                </View>
                <View style={styles.buttonEntrar}>
                    <MyButtons label="ENTRAR"/>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(128,128,128, 0.8)',
        height: '100%'
    },
    imagem: {
        width: 420,
        height: 660
    },
    title: {
        color: 'cornflowerblue',
        fontSize: 40,
        marginTop: 40,
        textDecorationLine: 'underline',
        fontFamily: 'AveriaLibre-Bold',
    },
    icon: {
        marginTop: 40,
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
        color: 'cornflowerblue',
        textAlign: 'center',
        paddingRight: 15,
        paddingLeft: 15,
        marginTop: 45,
    },
    inputs: {
        marginTop: 40,
    },
    buttonEntrar: {
        marginTop: 30,
        width: 160,
    }
})

export default Login;