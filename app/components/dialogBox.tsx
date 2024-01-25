import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import CustomButton from "./customButton";

interface DialogProps {
  isVisible: boolean;
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Dialog: React.FC<DialogProps> = ({
  isVisible,
  title,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onCancel}
    >
      <TouchableWithoutFeedback onPress={onCancel}>
        <View style={styles.overlay}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{title}</Text>
              <View style={styles.buttonsView}>
              <CustomButton text1="Buy Subscription" text2="Only 100 BDT Per Month" onPress={onConfirm}  styles={buttonStyle} />
              <CustomButton text1="Watch an ad" onPress={onCancel}  styles={buttonStyle} />
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const buttonStyle = StyleSheet.create({
    container: {backgroundColor:'#330066', borderColor: 'black', borderRadius: 10, borderWidth: 1, paddingHorizontal: 5, marginTop:5, borderBottomWidth:2.5, borderRightWidth:2.5}
})

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo gris translúcido
  },
  buttonsView:{
    flexDirection:'row',
    width:'100%',
    justifyContent: "space-between",
    
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "95%",
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
  },
});

export default Dialog;
