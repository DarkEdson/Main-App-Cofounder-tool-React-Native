import React, { useState } from "react";
import {
  TouchableOpacity,
} from "react-native";
import { View, Input, XGroup } from 'tamagui'
import { Ionicons } from "@expo/vector-icons";
import globalStyles from "../styles/globalStyle";

interface TextBoxProps {
  placeholder: string;
  onChangeText: (text: string) => void;
}

const SearchBox: React.FC<TextBoxProps> = ({
  placeholder,
  onChangeText,
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
      <XGroup width="90%" borderWidth={1} backgroundColor="$gray8Light" marginHorizontal="$4" >
        <XGroup.Item>
        <Input size="$4" borderWidth={0} width="85%" backgroundColor="$gray8Light" placeholder={placeholder} color="black"  value={text} 
        onChangeText={handleTextChange} />
        </XGroup.Item>
        <XGroup.Item>
          <TouchableOpacity
            style={globalStyles.eyeIcon}
            onPress={toggleShowPassword}
          >
            <Ionicons
              name={"search-outline"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
          </XGroup.Item>
      </XGroup>
  );
};
//style={globalStyles.inputContainerTextBox}
export default SearchBox;
