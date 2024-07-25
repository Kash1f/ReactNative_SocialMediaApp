import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserScreen = (props) => {
  console.log(props);
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>This is User Screen</Text>
    </View>
  )
}

export default UserScreen

const styles = StyleSheet.create({ 
  
  viewStyle:{
  display: 'flex',
  flex:1,
  justifyContent:'center',
  alignItems:'center'
},

textStyle: { 
  margin: 40, 
  fontSize: 30,
},
})