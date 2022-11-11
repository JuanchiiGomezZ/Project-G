import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState, useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import Input from "./Input";
import { useDataContext } from "../context/dataContext";

const ModalCreateRoutine = ({ showModal }) => {

  const { userData } = useDataContext();
  console.log(userData)

  
  return (
    <Modal
      visible={showModal.showModal}
      transparent={true}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalBody}>
          <TouchableOpacity>
            <AntDesign
              name="closecircleo"
              size={30}
              color="white"
              style={styles.closeBtn}
              onPress={() => {
                showModal.setShowModal(false);
              }}
            />
          </TouchableOpacity>
          <View style={{marginTop:20}}>
            <View style={{ alignItems: "center" }}>
              <View>
                <Text style={styles.label}>Routine Name</Text>
                <TextInput
                  style={styles.input}
                  placeholderTextColor="gray"
                  placeholder="Routine name"
                  onChangeText={(e) => setState({...state, routineName: e})}
                />
              </View>
              <View style={{marginVertical:10}}>
                <Text style={styles.label}>Day</Text>
                <TextInput
                  style={styles.input}
                  placeholderTextColor="gray"
                  placeholder="Day"
                  onChangeText={(e) => setState({...state, day: e})}
                />
              </View>
              <TouchableOpacity style={styles.sendBtn} onPress={sendBtn}>
                <Text style={{fontSize:30, fontFamily:'Bebas'}}>Send</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalCreateRoutine;


const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBody: {
    backgroundColor: "#1c1d1e",
    width: "90%",
    height: 300,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "gray",
  },
  closeBtn: {
    marginLeft: 12,
    marginTop: 8,
  },

  input: {
    width: 270,
    height: 40,
    /* backgroundColor: "#2b2b2e", */
    /*     borderRadius: 12, */
    paddingLeft: 10,
    color: "white",
    fontFamily: "Bebas",
    fontSize: 25,
    borderBottomWidth: 3,
    borderBottomColor: "#2b2b2e",
  },
  label: {
    color: "white",
    fontFamily: "Bebas",
    fontSize: 30,
  },
  sendBtn:{
    backgroundColor:'red',
    width:150,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    marginTop:15,
    borderRadius:15,
  }
});
