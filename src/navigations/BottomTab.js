import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Mypage from '../screens/Mypage';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator initialRouteName="홈">
      <Tab.Screen
        name="채팅"
        component={Home}
        options={{
          tabBarIcon: () => <FontAwesome name="wechat" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="홈"
        component={Home}
        options={{
          tabBarIcon: () => <FontAwesome name="home" size={24} color="black" />,
          headerShown: false, // 홈 화면에서 상단 타이틀 숨김
        }}
      />
      <Tab.Screen
        name="마이페이지"
        component={Mypage}
        options={{
          tabBarIcon: () => <Ionicons name="person" size={24} color="black" />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
