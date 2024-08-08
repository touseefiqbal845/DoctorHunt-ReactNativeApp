import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Button,
} from "react-native";  
import CustomButton from "../Custom-Button/CustomButton";

const CustomSplash = ({
  backIcon,
  backText,
  onBackPress,
  Img,
  bigHeading,
  smallHeading,
  fontSize,
  buttonText,
  onButtonPress,
  backgroundColor,
}) => {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
            {backIcon ? (
              <Image source={backIcon} style={styles.backIcon} />
            ) : (
              ""
            )}
          </TouchableOpacity>
          {backText ? <Text style={styles.backText}>{backText}</Text> : null}
        </View>
           <View style={[styles.logoBackground,{ backgroundColor: backgroundColor || "white" }]}>
           <Image source={Img} style={styles.logo} />
         </View>
        {bigHeading ? (
          <Text style={[styles.bigText, { fontSize: fontSize || 20 }]}>
            {bigHeading}
          </Text>
        ) : null}
        {smallHeading ? (
          <Text style={styles.smallText}>{smallHeading}</Text>
        ) : null}

        {buttonText && onButtonPress ? (
          <View style={styles.customButton}>
            <CustomButton onPress={onButtonPress} buttonText={buttonText} />
         </View>
        ) : null}
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding:20
  },
  header: {
    position: "absolute",
    top: 50,
    left: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"white",
    width:30,
    height:30,
    borderRadius:5,
  },
  backText: {
    fontSize: 18,
    marginLeft: 15,
    color: "#333333",
    fontWeight: "bold",

  },
  logoBackground:{
    justifyContent: "center",
    alignItems: "center",
    width: 170,
    height: 170,
    borderRadius:100,

  },
  logo: {
    width: 100,
    height: 100,
  },
  bigText: {
    fontWeight: "bold",
    color: "#000",
    fontFamily: 'Rubik',
    marginTop:20

  },
  smallText: {
    fontSize: 14,
    color: "#677294",
    marginTop: 10,
    textAlign:"center"
  },
  customButton: {
    width:"85%",
    marginTop:25

  },
});

export default CustomSplash;
