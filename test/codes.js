/* Alguns códigos que testei

<RadioButton
    value={label}
    uncheckedColor='white'
    color='#419ED7'
    status={ checked === true ? 'checked' : 'unchecked'}
    onPress={() => setChecked(!checked)}
/>
<Text style={[styles.texto, styleText]}>{label}</Text>


<RadioButton.Group>
    <View style={styles.fundo}></View>
    <RadioButton.Item
        value='first'
        style={styles.button}
        labelStyle={styles.texto}
        label={label}
        position='leading' //Inverte o lado do texto
        color='#419ED7'
        uncheckedColor='white'
        status={ checked === true ? 'checked' : 'unchecked'}
        onPress={() => setChecked(!checked)}
    >
    </RadioButton.Item>
</RadioButton.Group>

<View style={styles.container}>
    <TouchableOpacity style={[styles.radio, style]}/>
    <Text style={[styles.texto, styleText]}>{label}</Text>
</View>

borderColor: 'black',
borderWidth: 1,

*/