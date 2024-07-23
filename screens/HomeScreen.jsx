import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.viewStyle}>
    <Text>HomeScreen</Text>
    <Button title='Profile' onPress={()=>navigation.navigate('Profile')}/>
      <View style={{margin:10}}>
    <Button title='User' onPress={()=>navigation.navigate('User')}/>
    </View>
  </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  viewStyle: {
    display:'flex',
    marginTop:40,
    justifyContent:'center',
    alignItems:'center',
    flex:1
  }
})