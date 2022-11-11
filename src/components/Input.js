import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const Input = ({props}) => {
  return (
    <View>
      <Text style={styles.label}>{props}</Text>
      <TextInput style={styles.input} placeholderTextColor="gray" placeholder={props} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 40,
    /* backgroundColor: "#2b2b2e", */
/*     borderRadius: 12, */
    paddingLeft: 10,
    color: "white",
    fontFamily: "Bebas",
    fontSize: 20,
    borderBottomWidth:3,
    borderBottomColor:'#2b2b2e'
  },
  label: {
    color: "white",
    fontFamily: "Bebas",
    fontSize: 30,
  },
});
