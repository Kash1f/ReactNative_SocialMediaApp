import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const ProfileScreen = (props) => {
  console.log(props);
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Profile Screen</Text>
      <View style={{ margin: 10 }}>
        <Button title="User" onPress={() => props.navigation.navigate("User")} />
      </View>
    </View>
  );
};

export default ProfileScreen;

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


});
