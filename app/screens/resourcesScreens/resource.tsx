import React, { useState } from "react";
import {
  Text,
  Image,
  View,
  H3,
  H4,
  XStack,
  XGroup,
  YStack,
  Unspaced,
  Button,
  ZStack,
  Paragraph,
  H2,
  Avatar,
} from "tamagui";
import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useAppSelector } from "../../store/hooks";
import { IsArticleSelected } from "../../store/articleReducer";
import { colores } from "../../styles/colors";
import { Ionicons } from "@expo/vector-icons";
export default function Resource({ navigation }: any) {
  const [itemSelected, setitemSelected] = useState<IsArticleSelected>(
    useAppSelector((state) => state.articles)
  );
  const [percent, setpercent] = useState("50%");
  const getRandomColorname = () => {
    const randomIndex = Math.floor(Math.random() * colores.length);
    return colores[randomIndex] + "7";
  };
  const [colorText, setcolorText] = useState("$" + getRandomColorname());
  const [colorBg, setcolorBg] = useState(colorText + "Light");

  return (
    <ZStack fullscreen flex={1}>
      <YStack
        width={"100%"}
        height={"60%"}
        borderRadius="$4"
        borderColor="$color"
      >
        <Image
          source={{
            uri: itemSelected.imageUri as string,
            height: 400,
          }}
        />
      </YStack>
      <YStack
        borderColor="$color"
        backgroundColor="$colorTransparent"
        alignItems="center"
        justifyContent="center"
        y={40}
        x={10}
        width={50}
        height={50}
        borderRadius="$3"
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack()
          }}
          style={styles.roundedButton}
        >
          <Ionicons name={"chevron-back-outline"} size={24} color="white" />
        </TouchableOpacity>
      </YStack>
      <YStack
        borderColor="white"
        backgroundColor="$colorTransparent"
        alignItems="center"
        justifyContent="center"
        y={40}
        x={280}
        width={50}
        height={50}
        borderWidth={0.5}
        borderRadius="$3"
      >
        <TouchableOpacity
          onPress={() => {
            console.log("Pressed");
          }}
        >
          <Ionicons name={"menu-outline"} size={24} color="white" />
        </TouchableOpacity>
      </YStack>

      <YStack
        borderColor="$color"
        backgroundColor="$color"
        paddingHorizontal="$4"
        paddingTop="$4"
        paddingBottom="$1"
        height='51%'
        y={350}
        borderTopRightRadius="$6"
        borderTopLeftRadius="$6"
      >
        <YStack
          backgroundColor="$color"
          borderRadius="$3"
          padding="$2"
          marginBottom="$2"
        >
          <H4
            color={colorText}
            backgroundColor={colorBg}
            width={percent}
            borderRadius={10}
            textAlign="center"
          >
            {itemSelected.tag}
          </H4>
          <H3 color="black" fontWeight={"bold"}>
            {itemSelected.title}
          </H3>
          <XStack marginTop='$5'>
            <Avatar circular size="$5" marginRight='$3'>
              <Avatar.Image
                accessibilityLabel="Cam"
                src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
              />
              <Avatar.Fallback backgroundColor="$blue10" />
            </Avatar>
            <YStack width={'60%'}>
              <Text color="black" fontSize={18} fontWeight="800">
                {itemSelected.author}{" "}
              </Text>
              <XStack>
                <Text color="black" fontSize={13} marginRight="$3">
                  {itemSelected.days} ago
                </Text>
                <Text color="black" fontSize={13}>
                  sample text 2{" "}
                </Text>
              </XStack>
            </YStack>
            <XStack marginTop='$3'>
            <YStack marginRight='$3'>
            <TouchableOpacity
          onPress={() => {
            console.log("Pressed");
          }}
        >
          <Ionicons name={"share-social-outline"} size={24} color="black" />
        </TouchableOpacity>

            </YStack>
            
        <TouchableOpacity
          onPress={() => {
            console.log("Pressed");
          }}
        >
          <Ionicons name={"share-outline"} size={24} color="black" />
        </TouchableOpacity>
        </XStack>
          </XStack>
        </YStack>
        <ScrollView>
          <Text color="black" fontSize={18} fontWeight="800">
            {itemSelected.title}{" "}
          </Text>
          <Paragraph color="black" fontSize={15}>
            {itemSelected.description}
          </Paragraph>
        </ScrollView>
      </YStack>
      <YStack
        borderColor="$color"
        backgroundColor="$blue7"
        padding="$4"
        y={310}
        x={260}
        width={70}
        height={70}
        borderRadius="$12"
      >
        <TouchableOpacity
          onPress={() => {
            console.log("Pressed");
          }}
        >
          <Ionicons
            name={"thumbs-up-outline"}
            size={24}
            color="white"
            style={{ marginTop: 3, marginLeft: 3 }}
          />
        </TouchableOpacity>
      </YStack>
    </ZStack>
  );
}


const styles = StyleSheet.create({
  roundedButton: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: "100%",
    height: "100%",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
});
