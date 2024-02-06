import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import {Input } from 'tamagui'
import { Ionicons } from "@expo/vector-icons";
import globalStyles from "../styles/globalStyle";

interface TextBoxProps {
  title?: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  isPassword?: boolean;
}

const TextBox: React.FC<TextBoxProps> = ({
  title,
  placeholder,
  onChangeText,
  isPassword,
}) => {
  const [text, setText] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTextChange = (newText: string) => {
    setText(newText);
    onChangeText(newText);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={globalStyles.containerTextBox}>
      {title && <Text style={globalStyles.titleTextBox}>{title}</Text>}
      <View style={globalStyles.inputContainerTextBox}>
        <Input size="$4" borderWidth={0} width="85%" backgroundColor="$gray8Light" placeholder={placeholder} color="black"  value={text} 
        onChangeText={handleTextChange}
        secureTextEntry={isPassword && !showPassword} />
        {isPassword && (
          <TouchableOpacity
            style={globalStyles.eyeIcon}
            onPress={toggleShowPassword}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TextBox;
