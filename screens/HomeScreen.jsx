import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeScreen = (props) => {
  console.log(props);
  return (
    <View style={styles.viewStyle}>
      <Text>HomeScreen</Text>
      <Button title="Profile" onPress={() => props.navigation.navigate("Profile", {
        name:"Kashif"
        })} />
     
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  viewStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
