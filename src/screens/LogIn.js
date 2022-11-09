import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import { BlurView } from "expo-blur";
import React from "react";
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from "../utils/firebaseConfig";


const LogIn = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogInAccount = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userEmail = userCredential.user.email;
        Alert.alert("User logged In", "You have been entered successfully", [
          {
            text: "Continue",
            onPress: () => {
              navigation.navigate("TabNavigation", {email:userEmail});
            },
          },
        ]);
       
        
      })
      .catch((error) => {
        Alert.alert(error.message)
      });
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        source={{ uri: "https://mfiles.alphacoders.com/683/683110.jpg" }}
        style={[StyleSheet.absoluteFill]}
      />

      <View style={styles.contentContainer}>
        <BlurView intensity={90}>
          <View style={styles.modalContainer}>
            <Text style={styles.title}>Log in account</Text>
            <View style={{ marginTop: 40 }}>
              <Text style={{ fontSize: 18, fontWeight: "600", color: "white" }}>
                Email
              </Text>
              <TextInput
                placeholder="John@Example.com"
                style={styles.input}
                onChangeText={(text) => {
                  setEmail(text);
                }}
              ></TextInput>
              <Text style={{ fontSize: 18, fontWeight: "600", color: "white" }}>
                Password
              </Text>
              <TextInput
                secureTextEntry={true}
                placeholder="******"
                style={styles.input}
                onChangeText={(text) => {
                  setPassword(text);
                }}
              ></TextInput>
            </View>
            <TouchableOpacity
                style={{
                  marginTop: 30,
                  backgroundColor: "#f80808cc",
                  width: 250,
                  height: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                }}
                onPress={handleLogInAccount}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "600", color: "white" }}
                >
                 Log in
                </Text>
              </TouchableOpacity>
            <Text style={{color:'white', marginVertical:20,fontSize:20,}}> Or</Text>
            <TouchableOpacity style={styles.registerBtn}>
              <Image
                source={{
                  uri: "https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png",
                }}
                style={styles.registerLogo}
              />
              <Text style={styles.registerText}> Log in with Google</Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    width: 350,
    height: 500,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 35,
    fontWeight: "600",
  },
  input: {
    width: 250,
    height: 40,
    borderColor: "white",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ffffff90",
  },
  registerBtn: {
    width: 250,
    height: 38,
    backgroundColor: "white",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom:20,
  },
  registerLogo: {
    width: 20,
    height: 20,
    marginRight: 6,
  },
  registerText: {
    fontSize: 18
  },
});

export default LogIn;
