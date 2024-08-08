import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomInput from "../../components/Custom-Input/CustomInput";

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.signup}>
        <Text style={styles.MainHeading}>Join us to start searching</Text>
        <Text style={styles.smallHeading}>
          You can search course, apply course and find scholarship for abroad
          studies
        </Text>
        <CustomInput placeholder="Name" fontSize={16} fontColor="#A0A3B5" />
        <CustomInput placeholder="Email" fontSize={16} fontColor="#A0A3B5" />
        <CustomInput isPassword icon={"rocket"} iconPosition={"end"} placeholder="Password" fontSize={16} fontColor="#A0A3B5" />
        <View style={styles.agree}>
        <Text style={styles.MainHeading}>Join</Text>
        <Text style={styles.smallHeading}>
          You can search course
        </Text>
      </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  signup: {
    width: "100%",
    padding: 20,
    top: 130,
  },
  MainHeading: {
    fontSize: 24,
    color: "#000000",
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  smallHeading: {
    fontSize: 14,
    color: "#677294",
    marginBottom: 40,
    textAlign: "center",
  },
  customInput: {
    width: "100%",
  },
  agree: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
  },
});

export default SignUp;
