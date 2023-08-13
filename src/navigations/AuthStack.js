import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Signup, First, Home } from '../screens';
import BottomTab from './BottomTab'; // BottomTab 추가

import TestMain from '../screens/TestMain';
import KioskTest1 from '../screens/KioskTest1';
import KioskTest2 from '../screens/KioskTest2';
import KioskTest3 from '../screens/KioskTest3';
import KioskResult from '../screens/KioskResult';
import KioskList from '../screens/KioskList';
import KioskWrite from '../screens/KioskWrite';

const Stack = createStackNavigator();

const AuthStack = () => {
  const theme = useContext(ThemeContext);

  return (
    <Stack.Navigator
      initialRouteName="First"
      screenOptions={{
        headerTitleAlign: 'center',
        cardStyle: { backgroundColor: theme.backgroundColor },
        headerTintColor: theme.headerTintColor,
      }}
    >
      <Stack.Screen name="First" component={First} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{headerTitle:'' }} />
      <Stack.Screen name="Signup" component={Signup} options= {{headerTitle: ''}} />
      {/* Home 스크린은 BottomTab 내부로 이동 */}
      <Stack.Screen name="Home" component={BottomTab} options={{ headerShown: false }} />
      <Stack.Screen name="KioskList" component={KioskList} options={{ 
        headerTitle: '',
      }} />
      <Stack.Screen name="KioskWrite" component={KioskWrite} options={{ 
        headerTitle: '',
      }} />

      <Stack.Screen name="TestMain" component={TestMain}  options={{  headerShown: false }}/>
      <Stack.Screen name="KioskTest1" component={KioskTest1} options={{ headerShown: false }} />
      <Stack.Screen name="KioskTest2" component={KioskTest2} options={{ headerShown: false }} />
      <Stack.Screen name="KioskTest3" component={KioskTest3} options={{ headerShown: false }} />
      <Stack.Screen name="KioskResult" component={KioskResult} options={{ headerShown: false }} />

    </Stack.Navigator>
  );
};

export default AuthStack;
