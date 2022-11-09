import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import {signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../utils/firebaseConfig"

export default function First  ({navigation}) {


 

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://mfiles.alphacoders.com/683/683110.jpg" }}
        style={[StyleSheet.absoluteFill]}
      />
      <View style={styles.btnsContainer}>
        <TouchableOpacity style={styles.registerBtn} onPress={() =>{navigation.navigate('Register')}}>
          <Image
            source={{
              uri: "https://www.freepnglogos.com/uploads/email-png/email-western-libraries-12.png",
            }}
            style={styles.registerLogo}
          />
          <Text style={styles.registerText}> Sign Up with Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.registerBtn, {backgroundColor:'rgb(248,8,8)'}]} onPress={() =>{navigation.navigate('LogIn')}} >
          <Text style={[styles.registerText, {color:'white'}]}> Login with Email</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnsContainer:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
    marginBottom:50,
  },
  registerBtn: {
    width: '80%',
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

