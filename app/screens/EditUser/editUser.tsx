import React from 'react';
import { View, Text } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../store/hooks';


export default function editUser() {
    const sessionSave:any = useAppSelector((state) => state.sessions.value);
    const dispatch = useAppDispatch();
  return (
    <View>
      <Text></Text>
     </View>
  );
}
