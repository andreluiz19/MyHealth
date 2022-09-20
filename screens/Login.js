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

const Login = () => {
    return(
        <View style={styles.container}>
            <ImageBackground style={styles.imagem} source={require('../images/background.jpg')} >
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Image style={styles.icon} source={require('../images/vaccine.png')} />
                        <Text style={styles.title}>MyHealth</Text>
                    </View>
                    <View style={styles.header}>
                        <Text style={styles.label}>Controle as suas vacinas e fique seguro</Text>
                    </View>
                    <View style={styles.espaco}>
                        <InputLogin placeholder="Digite o seu email..." label="E-mail" />
                        <InputLogin placeholder="Digite a sua senha..." label="Senha" />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(128,128,128, 0.8)'
    },
    imagem: {
        flex: 1,
        width: 420,
        resizeMode: 'stretch',
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
    espaco: {
        marginTop: 40
    }
})

export default Login;