import { StyleSheet, Text, View, TextInput} from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
      value={value}
       placeholder={placeholder}
      onChangeText={setValue}
      secureTextEntry={secureTextEntry}

      
       style={styles.input}/>
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({

    container:{
backgroundColor:'white',
     width:'100%',
     borderColor: '#e8e8e8',
     borderWidth:1,
     borderRadius: 5,
     paddingHorizontal:10,
     marginVertical:5,

    },
    input:{}
})