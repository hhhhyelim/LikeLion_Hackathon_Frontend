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
import KioskTest4 from '../screens/KioskTest4';
import KioskTest5 from '../screens/KioskTest5';
// import KioskTest6 from '../screens/KioskTest6';
// import KioskTest7 from '../screens/KioskTest7';
// import KioskTest8 from '../screens/KioskTest8';
// import KioskTest9 from '../screens/KioskTest9';
// import KioskTest10 from '../screens/KioskTest10';


import KioskWrite from '../screens/KioskWrite';
import KioskDetail from '../screens/KioskDetail';

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
      <Stack.Screen name="Mypage" component={BottomTab} options={{ headerShown: false }} />
      <Stack.Screen name="KioskList" component={KioskList} options={{ 
        headerTitle: '',
      }} />
      <Stack.Screen name="KioskWrite" component={KioskWrite} options={{ 
        headerTitle: '',
      }} />
      <Stack.Screen name="KioskDetail" component={KioskDetail} options={{ headerTitle: '' }} />

      <Stack.Screen name="TestMain" component={TestMain}  options={{  headerShown: false }}/>
      <Stack.Screen name="KioskTest1" component={KioskTest1} options={{ headerShown: false }} />
      <Stack.Screen name="KioskTest2" component={KioskTest2} options={{ headerShown: false }} />
      <Stack.Screen name="KioskTest3" component={KioskTest3} options={{ headerShown: false }} />
      <Stack.Screen name="KioskTest4" component={KioskTest4} options={{ headerShown: false }} />
      <Stack.Screen name="KioskTest5" component={KioskTest5} options={{ headerShown: false }} />
{/* 
      <Stack.Screen name="KioskTest6" component={KioskTest6} options={{ headerShown: false }} />
      <Stack.Screen name="KioskTest7" component={KioskTest7} options={{ headerShown: false }} />
      <Stack.Screen name="KioskTest8" component={KioskTest8} options={{ headerShown: false }} />
      <Stack.Screen name="KioskTest9" component={KioskTest9} options={{ headerShown: false }} />
      <Stack.Screen name="KioskTest10" component={KioskTest10} options={{ headerShown: false }} /> */}



      <Stack.Screen name="KioskResult" component={KioskResult} options={{ headerShown: false }} />

    </Stack.Navigator>
  );
};

export default AuthStack;
