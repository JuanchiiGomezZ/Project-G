import { useFonts } from "expo-font";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import data from "../utils/Data";
import ModalCreateRoutine from "../components/ModalCreateRoutine";



const Routines = ({ navigation }) => {

  const imageColor = (props) =>{
    if(props === "MON" || props === "LUN"){
      return("rgb(17, 173, 255)")
    }
    else if (props === "TUE" ){
      return("rgb(18, 255, 109)")
    }
    else if (props === "THU" ){
      return("rgb(253, 75, 167)")
    }
    else if (props === "WED" ){
      return("rgb(248, 255, 35)")
    }
    else if (props === "FRI" ){
      return("rgb(255, 152, 35)")
    }
    else if (props === "SAT" ){
      return("rgb(252, 27, 27)")
    }
    else if (props === "SUN" ){
      return("rgb(197, 102, 248)")
    }
  }


  const [loaded] = useFonts({
    Bebas: require("../assets/fonts/BebasNeue-Regular.ttf"),
  });

  const [showModal, setShowModal] = useState(false)

  if (loaded) {
    return (
      <View style={{ flex: 1, backgroundColor: "#1c1d1e" }}>
        <Text style={styles.title}>Routines</Text>
        <View style={styles.addExcerciseBtn}>
          <TouchableOpacity onPress={() =>{setShowModal(true)}}>
            <AntDesign name="pluscircle" size={50} color="rgb(248,8,8)" />
          </TouchableOpacity>
        </View>
        <ModalCreateRoutine showModal={{showModal, setShowModal}}/>
        <ScrollView style={styles.routinesContainer}>
          {data.map((item) => {
            
            return (
              <TouchableOpacity
                style={{ marginVertical: 5 }}
                key={item.id}
                onPress={() => {
                  navigation.navigate("RoutineDetail", { routineId: item.id });
                }}
              >
                <View style={styles.routineCard}>
                  <View
                    style={[
                      styles.imgRoutine,
                      { backgroundColor: imageColor(item.dia) },
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
          })}
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="white" />
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
    marginBottom: 20,
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
  MON: {
    backgroundColor: "red",
  },


  
});
