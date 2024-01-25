import React ,  { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import DropdownComponent from "../../components/dropDownButton";
import Dialog from "../../components/dialogBox";

export default function CoFoundersFindForm() {
    const [dialogVisible, setDialogVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState({
        value: "",
        text: "",
      });
      const [optionSArray, setoptionSArray] = useState([
        {
          value: "México",
          text: "México",
        },
        {
          value: "Estados Unidos",
          text: "Estados Unidos",
        },
        {
          value: "España",
          text: "España",
        },
      ])
      const handleConfirm = () => {
        // Lógica para confirmar
        setDialogVisible(false);
      };
    
      const handleCancel = () => {
        // Lógica para cancelar
        setDialogVisible(false);
      };
  const handleSignInPress = () => {
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
        source={require('../../../assets/people.jpg')} // Ruta relativa de la imagen
        style={styles.roundedImage}
      />
      <View style={styles.containerView}>
      <DropdownComponent
        title="What kind of partner do you want?"
        options={optionSArray}
        value={selectedOption}
        onChange={(option) => setSelectedOption(option)}
        styles={DropDownstyles}
      />
      <DropdownComponent
        title="What type of startup do you run?"
        options={optionSArray}
        value={selectedOption}
        onChange={(option) => setSelectedOption(option)}
        styles={DropDownstyles}
      />
      <DropdownComponent
        title="Preferable District?"
        options={optionSArray}
        value={selectedOption}
        onChange={(option) => setSelectedOption(option)}
        styles={DropDownstyles}
      />
      


      <TouchableOpacity style={styles.roundedButton} onPress={() => setDialogVisible(true)} >
        <Text style={styles.buttonText}>Find</Text>
      </TouchableOpacity>
      </View>
      <Dialog
        isVisible={dialogVisible}
        title="Título del Diálogo"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </View>
  );
}
const DropDownstyles = StyleSheet.create({
    container: { width: '95%', marginLeft: 30 },
            dropdown: {borderColor: 'black', borderRadius: 10, borderWidth: 1, paddingHorizontal: 5, marginTop:5, borderBottomWidth:2.5, borderRightWidth:2.5}
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
      },
  containerView: {
    position: 'absolute',
    top:0,
    flex: 1,
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center",
  },
 
  roundedImage: {
    width: "100%",
    height: 350,
    bottom: 0,
position: 'absolute'
  },
  roundedButton: {
    marginTop: 20,
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: '8%',
    backgroundColor: "#330066",
    borderRadius: 10,
    width: "35%",
    height:"27%",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderBottomWidth:4,
    borderRightWidth: 4,
    borderWidth:1
  },
  buttonText: {
    alignSelf: "center",
    color: "white",
    fontSize: 28,
  },

});
