import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Signup, First, Home } from '../screens';
import BottomTab from './BottomTab'; // BottomTab 추가
import KioskLocation from '../screens/KioskLocation';
import TestMain from '../screens/TestMain';
import KioskTest1 from '../screens/KioskTest1';

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
      <Stack.Screen name="KioskLocation" component={KioskLocation} options={{ 
        headerTitle: '',
        headerStyle: {
          backgroundColor: '#FFDB7C'  
        },
      }} />
      <Stack.Screen name="TestMain" component={TestMain}  options={{  headerShown: false }}/>
      <Stack.Screen name="KioskTest1" component={KioskTest1} options={{ headerShown: false }} />
      
    </Stack.Navigator>
  );
};

export default AuthStack;
