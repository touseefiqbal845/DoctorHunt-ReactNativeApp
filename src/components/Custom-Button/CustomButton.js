import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";
import { customStyles } from "../../fonts/fontSetting";

const CustomButton = ({
  buttonText,
}) => {
  return (
    <TouchableOpacity style={styles.button} >
      <Text style={styles.textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: customStyles.colorPrimary,
  },
  textStyle: {
    fontSize: 14,
    color: "#FFF",
    fontFamily:""
  },

});

export default CustomButton;
