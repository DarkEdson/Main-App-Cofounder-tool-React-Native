import React, { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator, StyleSheet } from "react-native";

export default function CoFoundersFindSearch() {
  const [dialogVisible, setDialogVisible] = useState(false);

  useEffect(() => {
    // Establece el timeout
    setTimeout(handleFindResults, 10000); // 10 segundos
  }, []);

  const handleConfirm = () => {
    setDialogVisible(false);
  };

  const handleCancel = () => {
    setDialogVisible(false);
  };
  const handleFindResults = () => {
    console.log("Navigate to Sign In screen");
    //router.push("/signin/signin");
    // navigation.navigate('RegisterScreen');
  };
  const handleRegisterPress = () => {
    console.log("Navigate to Register screen");
    //router.push("/register/register");
    // navigation.navigate('RegisterScreen');
  };
  return (
    <View style={styles.container}>
        <Image
        source={require("../../../assets/people.jpg")} // Ruta relativa de la imagen
        style={styles.roundedImage}
      />
      <Image
        source={require("../../../assets/search.jpg")} // Ruta relativa de la imagen
        style={styles.roundedImage2}
      />
      <View style={styles.containerView}>
      <Text style={styles.buttonText}>Finding the best match</Text>
      <Text style={styles.buttonText}>for you.....</Text>
      <ActivityIndicator size="large" color="#330066" />
      </View>
    </View>
  );
}
const DropDownstyles = StyleSheet.create({
  container: { width: "95%", marginLeft: 30 },
  dropdown: {
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 5,
    marginTop: 5,
    borderBottomWidth: 2.5,
    borderRightWidth: 2.5,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  containerView: {
    position: "absolute",
    top: '25%',
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  roundedImage: {
    width: "100%",
    height: 350,
    bottom: 0,
    position: "absolute",
  },
  roundedImage2: {
    width: "40%",
    height: '22%',
    top: 0,
    position: "absolute",
  },
  roundedButton: {
    marginTop: 20,
    alignContent: "center",
    alignItems: "center",
    paddingTop: "8%",
    backgroundColor: "#330066",
    borderRadius: 10,
    width: "35%",
    height: "27%",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderWidth: 1,
  },
  buttonText: {
    alignSelf: "center",
    color: "gray",
    fontWeight: 'bold',
    fontSize: 25,
  },
});
