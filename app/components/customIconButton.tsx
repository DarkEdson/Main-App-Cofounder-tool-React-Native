import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity,View, Text, StyleSheet, ViewStyle, StyleProp } from "react-native";

interface CustomIconButtonProps {
  text1: string;
  iconName: any;
  styles?: {
    container?: StyleProp<ViewStyle>;
  };
  onPress: () => void;
}

const CustomIconButton: React.FC<CustomIconButtonProps> = ({
  text1,
  iconName,
  styles: customStyles,
  onPress,
}) => {

  return (
    <TouchableOpacity
      style={[styles.button, customStyles?.container ]}
      onPress={onPress}
    >
      <View style={{marginHorizontal:10,  alignItems:'center', flexDirection:'row', paddingTop:8}}>
        <View style={{marginRight:10}}>
      <Text style={[styles.text]}>{text1}</Text>  
      </View>
      <Ionicons name={iconName} size={24} color="#2fda7a" />
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

export default CustomIconButton;