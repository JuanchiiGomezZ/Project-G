import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
const Profile = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#1c1d1e", padding: 20 }}>
      <Text style={styles.title}>Profile</Text>
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <Image
          style={{ width: 250, height: 250 }}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/219/219986.png",
          }}
        />
        <Text style={[styles.name, { fontSize: 40, marginTop: 15 }]}>
          Juan Manuel Gomez
        </Text>
        <Text style={{ color: "white", fontFamily: "Bebas", fontSize: 30 }}>
          Edad: 20
        </Text>
      </View>
      <View style={{ marginTop: 35 }}>
        <Text style={[styles.name, { fontSize: 35 }]}>Weight: 62 Kg</Text>
        <Text style={[styles.name, { fontSize: 35 }]}>Height: 1.75 Mts</Text>
        <Text style={[styles.name, { fontSize: 35 }]}>IMC: 20.2</Text>
      </View>
      <TouchableOpacity style={styles.settings}>
        <MaterialIcons name="settings" size={30} color="#1c1d1e" />
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontFamily: "Bebas",
    fontSize: 90,
  },
  name: {
    color: "white",
    fontFamily: "Bebas",
  },
  settings: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "red",
    padding: 10,
    borderRadius: 30,
  },
});
