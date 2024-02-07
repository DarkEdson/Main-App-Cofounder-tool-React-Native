import React, { useState } from 'react';
import {Text,View, H3, XStack, XGroup, YStack, Unspaced,} from 'tamagui'
import SearchBox from '../../components/searchButton';
import { ScrollView , TouchableOpacity} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import globalStyles from "../../styles/globalStyle";
import {StackCard} from '../../components/stackCard';
import { useAppDispatch } from '../../store/hooks';
import {setArticle} from '../../store/articleReducer';
import { IsArticleSelected } from '../../store/articleReducer';
export default function ResourcesHome({navigation} : any) {

    const dispatch = useAppDispatch();
    const [textSearch, settextSearch] = useState('');

    const listaObjetos: IsArticleSelected[] = [{tag :'Entertainment',
    title :'Introduction to Javascript',
    author : 'Joseph chase',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis mi id nibh congue, in ultrices enim ultricies. Quisque sollicitudin congue diam, porttitor posuere urna fringilla ut. Praesent sed tortor non ante semper tristique. Mauris tincidunt ante orci, nec vulputate nisi condimentum sed. Curabitur nibh mi, mollis ut sollicitudin aliquet, auctor et justo. Fusce magna lorem, aliquam in fermentum at, tincidunt et mi. Mauris tincidunt nunc vitae ante pulvinar, eu vehicula augue pretium. Vivamus a hendrerit velit. Proin sit amet risus mi. Proin accumsan scelerisque purus eget faucibus. Praesent ac sollicitudin arcu. Pellentesque laoreet placerat purus commodo euismod. Nulla purus purus, finibus eu nisl sed, suscipit porta turpis.',
    imageUri: 'https://placekitten.com/200/287',
    days : '10'},
    {tag :'Games',
    title :'Introduction to React',
    author : 'Joseph chase',
    imageUri: 'https://placekitten.com/200/286',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis mi id nibh congue, in ultrices enim ultricies. Quisque sollicitudin congue diam, porttitor posuere urna fringilla ut. Praesent sed tortor non ante semper tristique. Mauris tincidunt ante orci, nec vulputate nisi condimentum sed. Curabitur nibh mi, mollis ut sollicitudin aliquet, auctor et justo. Fusce magna lorem, aliquam in fermentum at, tincidunt et mi. Mauris tincidunt nunc vitae ante pulvinar, eu vehicula augue pretium. Vivamus a hendrerit velit. Proin sit amet risus mi. Proin accumsan scelerisque purus eget faucibus. Praesent ac sollicitudin arcu. Pellentesque laoreet placerat purus commodo euismod. Nulla purus purus, finibus eu nisl sed, suscipit porta turpis.',
    days : '5'},
    {tag :'Society',
    title :'Introduction to Node',
    author : 'Joseph chase',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis mi id nibh congue, in ultrices enim ultricies. Quisque sollicitudin congue diam, porttitor posuere urna fringilla ut. Praesent sed tortor non ante semper tristique. Mauris tincidunt ante orci, nec vulputate nisi condimentum sed. Curabitur nibh mi, mollis ut sollicitudin aliquet, auctor et justo. Fusce magna lorem, aliquam in fermentum at, tincidunt et mi. Mauris tincidunt nunc vitae ante pulvinar, eu vehicula augue pretium. Vivamus a hendrerit velit. Proin sit amet risus mi. Proin accumsan scelerisque purus eget faucibus. Praesent ac sollicitudin arcu. Pellentesque laoreet placerat purus commodo euismod. Nulla purus purus, finibus eu nisl sed, suscipit porta turpis.',
    imageUri: 'https://placekitten.com/200/250',
    days : '15'},
    {tag :'Internet',
    title :'Introduction to Devops',
    author : 'Joseph chase',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis mi id nibh congue, in ultrices enim ultricies. Quisque sollicitudin congue diam, porttitor posuere urna fringilla ut. Praesent sed tortor non ante semper tristique. Mauris tincidunt ante orci, nec vulputate nisi condimentum sed. Curabitur nibh mi, mollis ut sollicitudin aliquet, auctor et justo. Fusce magna lorem, aliquam in fermentum at, tincidunt et mi. Mauris tincidunt nunc vitae ante pulvinar, eu vehicula augue pretium. Vivamus a hendrerit velit. Proin sit amet risus mi. Proin accumsan scelerisque purus eget faucibus. Praesent ac sollicitudin arcu. Pellentesque laoreet placerat purus commodo euismod. Nulla purus purus, finibus eu nisl sed, suscipit porta turpis.',
    imageUri: 'https://placekitten.com/250/250',
    days : '25'},
]
const [filTerList, setfilterList] = useState(listaObjetos)

const handleNavigateArticle = (item:IsArticleSelected) => {
    dispatch(setArticle(item));
    console.log(item)
    navigation.navigate('Resource');
}

  const handleTextSearch = (newText: string) => {
    settextSearch(newText);
    const filteredList = listaObjetos.filter((item) => {
        const searchTextLower = newText.toLowerCase();
        return (
          item.title.toLowerCase().includes(searchTextLower) ||
          item.author.toLowerCase().includes(searchTextLower) ||
          item.tag.toLowerCase().includes(searchTextLower) ||
          item.description.toLowerCase().includes(searchTextLower)
        );
      });
    
       setfilterList(filteredList);
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
            onPress={()=>{console.log('Pressed')}}
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
        {filTerList.length > 0 ? (
        filTerList.map( (item,key )=>{
            return <StackCard key={key} tag={item.tag.toUpperCase()} title={item.title} author={item.author} days={item.days} imageUri={item.imageUri as string} onPressButton={()=>{handleNavigateArticle(item)}} />
        })

        ) : (
            <H3 color="black">No Results From "{textSearch}"</H3> 
          )}
      </YStack>
      </ScrollView>
     </View>
  );
}
