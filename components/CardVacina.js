import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native'




const CardVacina = (props) => {

    const {item} = props.item

    return(
        <View>

            <View style={styles.card}>
                <Text style={{fontSize: 22, color: '#3F92C5', fontFamily: 'AveriaLibre-Regular', marginTop: 5}}>{item.vacina}</Text>
                <Text style={{fontSize: 16, color: 'white', backgroundColor: '#3F92C5', paddingHorizontal: 10, marginTop: 5, fontFamily: 'AveriaLibre-Regular'}}>{item.dose}</Text>
                <Text style={{fontSize: 14, fontFamily: 'AveriaLibre-Regular', marginVertical: 5}}>{item.data}</Text>
                <Image style={styles.image} source={item.urlImage}></Image>
                <Text style={{fontSize: 14, color: '#FD7979', fontFamily: 'AveriaLibre-Regular'}}>{item.proximaDose}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 180,
        height: 90
    },
    card: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        width: Dimensions.get('window').width/2-10,
        height: Dimensions.get('window').height-495,
        borderRadius: 10,
        marginHorizontal: 5,
        marginVertical: 5,
    },
})

export default CardVacina