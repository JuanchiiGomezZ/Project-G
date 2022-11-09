import { useFonts } from "expo-font";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import data from "../utils/Data";

const Routines = ({navigation}) => {
  const [loaded] = useFonts({
    Bebas: require("../assets/fonts/BebasNeue-Regular.ttf"),
  });

  
  const colors = (props) =>{
    
    if(props === "MON"){
      return("{backgroundColor:'red'}")
    }else if (props == "TUE"){
      return("{backgroundColor:'blue'}")
    }
  }

  if (loaded) {
    return (
      <View style={{ flex: 1, backgroundColor: "#1c1d1e" }}>
        <Text style={styles.title}>Routines</Text>
        <View style={styles.addExcerciseBtn}>
          <TouchableOpacity>
            <AntDesign name="pluscircle" size={45} color="rgb(248,8,8)" />
          </TouchableOpacity>
        </View>
        <View style={styles.routinesContainer}>
          <FlatList
            data={data}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={{ marginVertical: 5 }} key={item.id} onPress={()=>{navigation.navigate("RoutineDetail", {routineId:item.id});}}>
                  <View style={styles.routineCard}>
                    <View
                      style={[
                        styles.imgRoutine,
                        {backgroundColor:'rgb(17, 173, 255)'}
                      ]}
                    >
                      <Text
                        style={{
                          fontSize: 35,
                          fontFamily: "Bebas",
                          color: "#1c1d1e",
                        }}
                      >
                        {item.dia}
                      </Text>
                    </View>
                    <Text style={styles.nameRoutine}>{item.nombre}</Text>
                  </View>
                  <View
                    style={{
                      height: 3,
                      backgroundColor: "rgb(87, 87, 87)",
                      marginHorizontal: 25,
                    }}
                  ></View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
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

export default Routines;

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
    marginTop: 20,
    marginBottom:80,
  },
  routineCard: {
    flexDirection: "row",
    /*     backgroundColor: "rgb(87, 87, 87)", */
    marginVertical: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  imgRoutine: {
    width: 60,
    height: 60,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  nameRoutine: {
    color: "white",
    fontSize: 29,
    fontFamily: "Bebas",
    marginLeft: 20,
  },
  MON:{
    backgroundColor:'red'
  }
});
