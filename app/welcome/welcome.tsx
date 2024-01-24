import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import { Link, router } from "expo-router";
import { useAppDispatch } from "../store/hooks";
import { loggedOut } from "../store/reducer";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation();

  const dispatch = useAppDispatch();
  const handleSignOutPress = () => {
    console.log("Navigate to Sign In screen");
    dispatch(loggedOut());
    navigation.navigate("WelcomeLogin" as never);
    //router.push('/signin/signin')
    // navigation.navigate('RegisterScreen');
  };
  const handleRegisterPress = () => {
    console.log("Navigate to Register screen");
    router.push("/register/register");
    // navigation.navigate('RegisterScreen');
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerContainer2}>
          <View style={{ marginHorizontal: 30 }}>
            <Text style={styles.headerText}>hello Mr. Founder!</Text>
            <Text style={styles.footerText}>Good Evening</Text>
          </View>
          <TouchableOpacity
            style={{ position: 'absolute',
            right: '7%',
            top: '25%', }}
            onPress={() => {
              console.log("change Image");
            }}
          >
            <Image
              source={{
                uri: "https://t3.ftcdn.net/jpg/02/43/51/48/240_F_243514868_XDIMJHNNJYKLRST05XnnTj0MBpC4hdT5.jpg",
              }}
              style={{ width: 50, height: 50, borderRadius: 50 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bodyContainer}>
      <View style={styles.row}>
        <Box title="CO-FOUNDER FINDING" image="imagen_1" />
        <Box title="RESOURCES" image="imagen_2" />
      </View>
      <View style={styles.row}>
        <Box title="SOCIAL MEDIA" image="imagen_3" />
        <Box title="MENTORS" image="imagen_4" />
      </View>
      <View style={styles.row}>
        <Box title="INVESTORS" image="imagen_5" />
      </View>
      </View>
    </View>
  );
}

const Box = ({ title, image }: { title: string; image: string }) => {
  return (
    <View style={styles.box}>
      <TouchableOpacity style={styles.buttomBox}>
      <Image style={styles.image} source={{ uri: "https://t3.ftcdn.net/jpg/02/43/51/48/240_F_243514868_XDIMJHNNJYKLRST05XnnTj0MBpC4hdT5.jpg" }} />
      <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#330066",
    alignItems: "center",
    padding: 20,
  },
  headerContainer: {
    position: "absolute",
    backgroundColor: "white",
    alignItems: "center",
    height: "18.5%",
    top: 0,
    left: 0,
    right: 0,

    zIndex: 1,
  },
  headerContainer2: {
    position: "absolute",
    backgroundColor: "#330066",
    alignItems: "center",
    height: "100%",
    flexDirection: "row",
    borderBottomRightRadius: 40,
    top: 0,
    left: 0,
    right: 0,
  },
  bodyContainer: {
    position: "absolute",
    backgroundColor: "white",
    width: "113%",
    height: "88%",
    padding: "5%",
    borderTopLeftRadius: 45,
    bottom: 0,
    left: 0,
    right: 0,
  },
  headerText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
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
  },
  buttonText: {
    alignSelf: "center",
    color: "white",
    fontSize: 16,
  },
  footerText: {
    fontSize: 12,
    color: "white",
  },
  registerLink: {
    color: "purple",
    textDecorationLine: "underline",
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    height: '30%',
  },
  box: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '45%',
    height: '80%',
    backgroundColor: "#fff",
    borderRadius: 20,
    justifyContent: "center",
    shadowColor: "deepskyblue",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 10, // Android
  },
  buttomBox: {
    alignItems: 'center',
  },
  image: {
    
    marginBottom: 7,
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
