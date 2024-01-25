import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


export default function NewScreen() {
  const handleSignInPress = () => {
    console.log("Navigate to Sign In screen");

  };
  const handleRegisterPress = () => {
    console.log("Navigate to Register screen");

  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Screen Page</Text>

      <View style={[styles.box, styles.boxShadow]}>
      <Text style={styles.title}>
        Shadow 
      </Text>
      <Text style={styles.subtitle}>test</Text>
    </View>

      <TouchableOpacity style={styles.roundedButton}>
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Settings{" "}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
    color: "#BF8DFF",
    textTransform: "uppercase",
  },
  subtitle: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  box: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 200,
    height: 200,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderBottomEndRadius: 20,
    justifyContent: "center",
  },
  boxShadow: {
    shadowColor: "skyblue",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 16, // Android
  },
  headerText: {
    fontSize: 30,
    color: "darkturquoise",
    fontWeight: "bold",
    marginBottom: 10,
  },
  roundedImage: {
    width: "97%",
    height: 350,
    borderRadius: 25,
    marginTop: 40,
    marginBottom: 40,
  },
  roundedButton: {
    backgroundColor: "orchid",
    borderRadius: 10,
    width: "93%",
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 10,
    shadowColor: 'skyblue',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowOffset: {
      width: 6,
      height: 6,
    },
    elevation: 16,
  },
  buttonText: {
    alignSelf: "center",
    color: "white",
    fontSize: 16,
  },
  footerText: {
    fontSize: 18,
  },
  registerLink: {
    color: "purple",
    textDecorationLine: "underline",
  },
});
