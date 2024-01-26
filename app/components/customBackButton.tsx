import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";

export default function CustomBackButton ()  {
    const navigation = useNavigation();
  
    const handlePress = () => {
      // Personalizar el comportamiento del botón de regreso aquí
      // Puedes usar navigation.navigate para ir directamente a Screen2
      navigation.navigate('CoFoundersFind' as never);
    };
  
    return (
      <TouchableOpacity onPress={handlePress}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
    );
  };