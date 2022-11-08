import { useFonts } from "expo-font";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Home = (props) => {
  const [loaded] = useFonts({
    Bebas: require("../assets/fonts/BebasNeue-Regular.ttf"),
  });

  const pene = () => {
    console.log("pene");
  };
  if (loaded) {
    return (
      <View style={{ flex: 1, backgroundColor: "#1c1d1e" }}>
        <Text style={styles.title}>Routines</Text>
        <View style={styles.addExcerciseBtn}>
          <TouchableOpacity>
            <AntDesign name="pluscircle" size={45} color="rgb(248,8,8)" />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.routinesContainer}>
          <TouchableOpacity style={styles.routineCard}>
            <View
              style={[
                styles.imgRoutine,
                { backgroundColor: "rgb(17, 173, 255)" },
              ]}
            >
              <Text
                style={{ fontSize: 35, fontFamily: "Bebas", color: "#1c1d1e" }}
              >
                MON
              </Text>
            </View>
            <Text style={styles.nameRoutine}>Routine Name</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.routineCard}>
            <View
              style={[
                styles.imgRoutine,
                { backgroundColor: "rgba(18, 255, 109, 1)" },
              ]}
            >
              <Text
                style={{ fontSize: 35, fontFamily: "Bebas", color: "#1c1d1e" }}
              >
                TUE
              </Text>
            </View>
            <Text style={styles.nameRoutine}>Routine Name</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.routineCard}>
            <View
              style={[
                styles.imgRoutine,
                { backgroundColor: "rgba(248, 255, 35, 0.8)" },
              ]}
            >
              <Text
                style={{ fontSize: 35, fontFamily: "Bebas", color: "#1c1d1e" }}
              >
                THU
              </Text>
            </View>
            <Text style={styles.nameRoutine}>Routine Name</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.routineCard}>
            <View
              style={[
                styles.imgRoutine,
                { backgroundColor: "rgba(255, 152, 35, 0.8)" },
              ]}
            >
              <Text
                style={{ fontSize: 35, fontFamily: "Bebas", color: "#1c1d1e" }}
              >
                WED
              </Text>
            </View>
            <Text style={styles.nameRoutine}>Routine Name</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.routineCard}>
            <View
              style={[
                styles.imgRoutine,
                { backgroundColor: "rgba(252, 27, 27, 1)" },
              ]}
            >
              <Text
                style={{ fontSize: 35, fontFamily: "Bebas", color: "#1c1d1e" }}
              >
                FRI
              </Text>
            </View>
            <Text style={styles.nameRoutine}>Routine Name</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.routineCard}>
            <View
              style={[
                styles.imgRoutine,
                { backgroundColor: "rgba(129, 62, 255, 1)" },
              ]}
            >
              <Text
                style={{ fontSize: 35, fontFamily: "Bebas", color: "#1c1d1e" }}
              >
                SAT
              </Text>
            </View>
            <Text style={styles.nameRoutine}>Routine Name</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#f2c105" />
      </View>
    );
  }
};

export default Home;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontFamily: "Bebas",
    fontSize: 90,
    margin: 20,
  },
  addExcerciseBtn: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    /* marginVertical: 5, */
  },
  routinesContainer: {
    marginTop: 30,
  },
  routineCard: {
    flexDirection: "row",
    backgroundColor: "rgb(87, 87, 87)",
    marginVertical:5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  imgRoutine: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  nameRoutine: {
    color: "white",
    fontSize: 30,
    fontFamily: "Bebas",
    marginLeft: 20,
  },
});
