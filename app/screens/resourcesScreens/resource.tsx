import React ,{useState, useEffect}from 'react';
import {Text,View, H3, XStack, XGroup, YStack, Unspaced,Image, Button} from 'tamagui'
import { useAppSelector } from '../../store/hooks';
import { IsArticleSelected } from '../../store/articleReducer';
import { colores } from '../../styles/colors';
export default function Resource({navigation} : any) {
    const [itemSelected, setitemSelected] = useState<IsArticleSelected>(useAppSelector((state) => state.articles))
    const [percent, setpercent] = useState('0%')
    const getRandomColorname = ()=>{
        const randomIndex = Math.floor(Math.random()*colores.length)
        return colores[randomIndex]+'7'
    } 
    const [colorText, setcolorText] = useState('$red7')
    const [colorBg, setcolorBg] = useState('$red7Light')
    
    
    useEffect(() => {
      return () => {
        let articleSelected:IsArticleSelected = useAppSelector((state) => state.articles)
        setitemSelected(articleSelected)
        if (articleSelected && articleSelected.tag) {
            setpercent(((articleSelected.tag.length + 3) / 2) * 10 + '%');
        } else {
            setpercent('50%')
        }
        let colorSelected = '$'+getRandomColorname()
        setcolorText(colorSelected)
        setcolorBg(colorSelected+'Light')


      };
    }, [])

  return (
    <View>
      <Text color="black">{itemSelected.tag}</Text>
      <Text color="black">{itemSelected.title}</Text>
      <Text color="black">{itemSelected.author}</Text>
      <Text color="black">{itemSelected.days}</Text>
      <Text color="black">{itemSelected.description}</Text>
      <Image
      borderRadius={20}
      source={{
        uri: itemSelected.imageUri,
        width: 100,
        height: 175,
      }}
    />
    <Button onPress={()=>{navigation.navigate('ResourcesHome')}}>back</Button>
     </View>
  );
}
