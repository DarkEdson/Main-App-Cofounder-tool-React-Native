import React, { useState } from 'react';
import {Text,View, H3, XStack, XGroup, YStack, Unspaced,} from 'tamagui'
import SearchBox from '../../components/searchButton';
import { ScrollView , TouchableOpacity} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import globalStyles from "../../styles/globalStyle";
import {StackCard} from '../../components/stackCard';

export default function ResourcesHome() {

    const [textSearch, settextSearch] = useState('');

    const listaObjetos = [{tag :'Entertainment',
    title :'Introduction to Javascript',
    author : 'Joseph chase',
    imageUri: 'https://placekitten.com/200/287',
    days : '10'},
    {tag :'Games',
    title :'Introduction to React',
    author : 'Joseph chase',
    imageUri: 'https://placekitten.com/200/286',
    days : '5'},
    {tag :'Society',
    title :'Introduction to Node',
    author : 'Joseph chase',
    imageUri: 'https://placekitten.com/200/250',
    days : '15'},
    {tag :'Internet',
    title :'Introduction to Devops',
    author : 'Joseph chase',
    imageUri: 'https://placekitten.com/250/250',
    days : '25'},
]

  const handleTextSearch = (newText: string) => {
    settextSearch(newText);
  };
  return (
    <View>
        <SearchBox placeholder='Search' onChangeText={handleTextSearch}  />
    
      
      <ScrollView style={{backgroundColor:'white', borderRadius: 20, marginTop: 25, marginBottom:25}}>
      <YStack
        flex={1}
        space="$2"
        borderWidth={2}
        borderColor="$color"
        borderRadius="$4"
        padding="$2"
      > 
       <XStack width="100%" backgroundColor="white" marginHorizontal="$5" flex={1} space="$2" >
        <Unspaced>
        <H3 color="black">For You</H3>
        </Unspaced>
        <YStack backgroundColor="$color" borderRadius="$3" padding="$2" />
        <YStack backgroundColor="$color" borderRadius="$3" padding="$2" />
        <YStack backgroundColor="$color" borderRadius="$3" padding="$2" />
        <YStack backgroundColor="$color" borderRadius="$3" padding="$2" />
        <YStack backgroundColor="$color" borderRadius="$3" padding="$2" />
        <YStack backgroundColor="$color" borderRadius="$3" padding="$2" />
        <YStack backgroundColor="$color" borderRadius="$3" padding="$2" />
        <XGroup >
        <XGroup.Item >
        <TouchableOpacity
            style={globalStyles.eyeIcon}
            onPress={()=>{}}
          >
            <Ionicons
              name={"grid-outline"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </XGroup.Item>
        <XGroup.Item >
        <TouchableOpacity
            style={globalStyles.eyeIcon}
            onPress={()=>{}}
          >
            <Ionicons
              name={"list-outline"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </XGroup.Item>
        </XGroup>
        
        </XStack>
        {listaObjetos.map( (item,key )=>{
            return <StackCard key={key} tag={item.tag} title={item.title} author={item.author} days={item.days} imageUri={item.imageUri} onPressButton={()=>{console.log(item.title)}} />
        })

        }
      </YStack>
      </ScrollView>
     </View>
  );
}
