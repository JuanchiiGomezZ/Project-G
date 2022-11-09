import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert
} from "react-native";
import { BlurView } from "expo-blur";
import React from "react";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";

const Register = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");



  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        Alert.alert("User Created", "You have been regsitered the user successfully", [
          {
            text: "Continue",
            onPress: () => {
              navigation.navigate("TabNavigation");
            },
          },
        ]);
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        Alert.alert(error.message);
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
            <Text style={styles.title}>Create Account</Text>
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
              <Text style={{ fontSize: 18, fontWeight: "600", color: "white" }}>
                Repeat Password
              </Text>
              <TextInput
                secureTextEntry={true}
                placeholder="******"
                style={styles.input}
                onChangeText={(text) => {
                  setPassword2(text);
                }}
              ></TextInput>
            </View>
            <TouchableOpacity
              onPress={() => {
                console.log("object");
              }}
            >
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
                onPress={handleCreateAccount}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "600", color: "white" }}
                >
                  Register
                </Text>
              </TouchableOpacity>
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
});

export default Register;
