import React from 'react';
import { View, Text } from 'react-native';
import { useAppSelector } from '../../store/hooks';

export default function profile() {
    const sessionSave:any = useAppSelector((state) => state.sessions.value);
  return (
    <View>
      <Text></Text>
     </View>
  );
}
