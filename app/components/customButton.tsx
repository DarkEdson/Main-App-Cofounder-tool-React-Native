import React from "react";
import { TouchableOpacity,View, Text, StyleSheet, ViewStyle, StyleProp } from "react-native";

interface CustomButtonProps {
  text1: string;
  text2?: string;
  styles?: {
    container?: StyleProp<ViewStyle>;
  };
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text1,
  text2,
  styles: customStyles,
  onPress,
}) => {

  const paddingVertical = text2 ? 0 :10
  return (
    <TouchableOpacity
      style={[styles.button, customStyles?.container ]}
      onPress={onPress}
    >
      <View style={{marginHorizontal:10, paddingVertical:paddingVertical, alignItems:'center' }}>
      <Text style={[styles.text]}>{text1}</Text>
      {text2 && <Text style={[styles.text2]}>{text2}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 5,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 16
  },
  text2: {
    color: "white",
    fontSize: 13
  },
});

export default CustomButton;