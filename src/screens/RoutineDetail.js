import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import data from "../utils/Data";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const RoutineDetail = (props) => {
  const navigation = useNavigation();
  let routineId = props.route.params.routineId;
  let routine = data.filter((item) => item.id === routineId);
  let excercises = routine[0].routine;
  let i = 0;
  return (
    <View style={{ flex: 1, backgroundColor: "#1c1d1e" }}>
      <View style={styles.header}>
        <TouchableOpacity style={{ width: 34, borderRadius: 17 }}>
          <Feather
            name="arrow-left-circle"
            size={35}
            color="white"
            onPress={() => {
              navigation.navigate("TabNavigation");
            }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{ marginTop: 10, marginLeft: 20 }}>
          <Text style={styles.title}>Routine</Text>
          {routine.map((item) => {
            return <Text style={styles.subtitle}>{item.nombre}</Text>;
          })}
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 25,
          }}
        >
          <View style={{justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
          <TouchableOpacity>
            <AntDesign name="pluscircle" size={50} color="rgb(248,8,8)" />
          </TouchableOpacity>
          <View style={{marginHorizontal:8}}/>
          <TouchableOpacity>
            <AntDesign name="play" size={50} color="rgb(248,8,8)"/>
          </TouchableOpacity>
          </View>

        </View>
        <View style={styles.excercisesContainer}>
          {excercises.map((item) => {
            i++;
            if (item.type === "Biserie") {
              return (
                <TouchableOpacity style={styles.cardsContainer}>
                  <View>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.number}>{i}</Text>
                      <Text style={styles.excerciseName}>{item.name}</Text>
                    </View>

                    <View style={styles.repsContainer}>
                      <Text style={styles.sets}>{`Sets: ${item.sets}`}</Text>
                      <Text style={styles.reps}>{`Reps: ${item.reps}`}</Text>
                    </View>
                  </View>

                  <View style={{ margin: 20 }}>
                    <Text style={[styles.excerciseName, { marginLeft: 30 }]}>
                      {item.name2}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        marginLeft: 30,
                        marginTop: 5,
                      }}
                    >
                      <Text style={styles.sets}>{`Sets: ${item.sets}`}</Text>
                      <Text style={styles.reps}>{`Reps: ${item.reps2}`}</Text>
                    </View>
                  </View>

                  <View style={styles.horizontalLine} />
                </TouchableOpacity>
              );
            } else {
              return (
                <TouchableOpacity style={styles.cardsContainer}>
                  <View>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.number}>{i}</Text>
                      <Text
                        style={{
                          color: "white",
                          fontSize: 35,
                          fontFamily: "Bebas",
                        }}
                      >
                        {item.name}
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        marginLeft: 47,
                        marginTop: 5,
                      }}
                    >
                      <Text style={styles.sets}>{`Sets: ${item.sets}`}</Text>
                      <Text style={styles.reps}>{`Reps: ${item.reps}`}</Text>
                    </View>
                  </View>

                  <View style={styles.horizontalLine} />
                </TouchableOpacity>
              );
            }
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default RoutineDetail;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#2b2b2e",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontFamily: "Bebas",
    fontSize: 90,
  },
  subtitle: {
    color: "white",
    fontFamily: "Bebas",
    fontSize: 30,
  },
  excercisesContainer: {
    marginTop: 10,
  },
  cardsContainer: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  excerciseName: {
    color: "white",
    fontSize: 35,
    fontFamily: "Bebas",
  },
  number: {
    color: "#1c1d1e",
    fontSize: 35,
    fontFamily: "Bebas",
    paddingHorizontal: 13,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: "rgb(17, 173, 255)",
  },
  repsContainer: {
    flexDirection: "row",
    marginLeft: 47,
    marginTop: 5,
  },
  sets: {
    color: "white",
    fontSize: 25,
    fontFamily: "Bebas",
    marginRight: 40,
  },
  reps: {
    color: "white",
    fontSize: 25,
    fontFamily: "Bebas",
  },
  horizontalLine: {
    height: 3,
    backgroundColor: "rgb(87, 87, 87)",
    marginHorizontal: 25,
    marginTop: 12,
  },
  font: {
    color: "white",
    fontFamily: "Bebas",
  },
});
