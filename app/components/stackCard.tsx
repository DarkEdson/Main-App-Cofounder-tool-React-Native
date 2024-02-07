import React from "react";
import { Button, Text, XStack, YStack, Image, H2, H3, H4 } from "tamagui";
import { TouchableOpacity } from "react-native";
import { colores } from "../styles/colors";

interface TextBoxProps {
  tag?: string;
  title?: string;
  onPressButton?: () => void;
  author?: string;
  days?: string;
  imageUri: string;
}

export const StackCard: React.FC<TextBoxProps> = ({
  tag = "TAG",
  title = "Title",
  onPressButton,
  author = "Author",
  days = "0",
  imageUri = "https://placekitten.com/200/300",
}) => {
  let percent = ((tag.length + 1) / 2) * 10 + "%";
  const getRandomColorname = () => {
    const randomIndex = Math.floor(Math.random() * colores.length);
    return colores[randomIndex] + "7";
  };
  let colorText = "$" + getRandomColorname();
  let colorBg = colorText + "Light";
  console.log(percent, colorText, colorBg);
  return (
    <TouchableOpacity style={{ marginBottom: 15 }} onPress={onPressButton}>
      <XStack>
        <YStack width="70%">
          <Text
            color={colorText}
            backgroundColor={colorBg}
            width={percent}
            borderRadius={10}
            textAlign="center"
          >
            {tag}
          </Text>
          <H2 color="black" fontWeight={"bold"}>
            {title}
          </H2>
          <XStack space marginTop="$6">
            <Text color="black">{author}</Text>
            <Text color="black">{days} days ago</Text>
          </XStack>
        </YStack>
        <Image
          borderRadius={20}
          source={{
            uri: imageUri,
            width: 100,
            height: 175,
          }}
        />
      </XStack>
    </TouchableOpacity>
  );
};
